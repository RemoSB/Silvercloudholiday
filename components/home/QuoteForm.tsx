"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import {
  buildSummary,
  ctaLabels,
  genRef,
  requiredFields,
  saveInquiry,
  tabTitle,
  waLink,
  type InquiryData,
  type SummaryRow,
} from "@/lib/inquiry";

const TABS: { id: string; icon: string; label: string }[] = [
  { id: "oneway", icon: "arrow-right", label: "One Way" },
  { id: "roundtrip", icon: "loop", label: "Round Trip" },
  { id: "local", icon: "pin-city", label: "Local" },
  { id: "airport", icon: "plane", label: "Airport" },
  { id: "tours", icon: "camera", label: "Tours" },
];

const VEHICLE_OPTS = [
  "Swift Dzire (Sedan)",
  "Honda Amaze",
  "Ertiga",
  "Innova Crysta (SUV)",
  "Tempo Traveller",
];

type ModalState = { ref: string; rows: SummaryRow[]; wa: string } | null;

export default function QuoteForm({
  phoneTel = "+919876543210",
  phone = "+91 98765 43210",
  whatsappNumber = "919876543210",
}: {
  phoneTel?: string;
  phone?: string;
  whatsappNumber?: string;
}) {
  const [activeTab, setActiveTab] = useState("oneway");
  const [submitLabel, setSubmitLabel] = useState("Check Availability & Price");
  const [modal, setModal] = useState<ModalState>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Set min date = today on all date inputs
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const today = new Date().toISOString().split("T")[0];
    form
      .querySelectorAll<HTMLInputElement>('input[type="date"]')
      .forEach((d) => d.setAttribute("min", today));
  }, []);

  const clearError = (el: Element | null) => {
    const grp = el?.closest(".form-group");
    grp?.classList.remove("error");
  };

  const setError = (group: Element | null, message: string) => {
    if (!group) return;
    group.classList.add("error");
    let msg = group.querySelector(".err-msg");
    if (!msg) {
      msg = document.createElement("span");
      msg.className = "err-msg";
      group.appendChild(msg);
    }
    msg.textContent = message;
  };

  const showToast = (message: string) => {
    const t = toastRef.current;
    if (!t) return;
    t.innerHTML = '<svg class="icon"><use href="#i-shield"/></svg> ' + message;
    t.classList.add("show");
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => t.classList.remove("show"), 3200);
  };

  const onFormInput = (e: React.FormEvent) => {
    const el = e.target as HTMLInputElement;
    if (el.type === "tel") {
      el.value = el.value.replace(/[^\d+\s]/g, "").slice(0, 15);
    }
    clearError(el);
  };

  const selectTab = (id: string) => {
    setActiveTab(id);
    setSubmitLabel(ctaLabels[id] || "Check Availability & Price");
  };

  const collectData = (): InquiryData => {
    const form = formRef.current!;
    const nameInput = form.querySelector<HTMLInputElement>('input[name="name"]');
    const data: InquiryData = {
      tab: activeTab,
      tabLabel: tabTitle[activeTab],
      name: nameInput?.value.trim() || "",
    };
    const pane = form.querySelector(".form-pane.active");
    if (!pane) return data;
    pane.querySelectorAll<HTMLInputElement | HTMLSelectElement>("input, select").forEach((el) => {
      const label = el.closest(".form-group")?.querySelector("label");
      const key = (label ? label.textContent : el.getAttribute("name") || "")?.trim() || "";
      if ((el as HTMLInputElement).type === "radio") {
        const input = el as HTMLInputElement;
        if (!input.checked) return;
        const sib = input.nextElementSibling;
        data["Trip Direction"] = sib?.textContent?.trim() || input.id;
        return;
      }
      if (key) data[key] = el.value;
    });
    return data;
  };

  const validate = (data: InquiryData): HTMLElement | null => {
    const form = formRef.current!;
    const pane = form.querySelector(".form-pane.active")!;
    const nameInput = form.querySelector<HTMLInputElement>('input[name="name"]');
    let firstErr: HTMLElement | null = null;

    if (!data.name || data.name.length < 2) {
      setError(nameInput?.closest(".form-group") ?? null, "Please enter your full name");
      firstErr = firstErr || nameInput;
    }

    const phone = pane.querySelector<HTMLInputElement>('input[type="tel"]');
    const digits = phone ? (phone.value.match(/\d/g) || []).join("") : "";
    if (!phone || digits.length < 10) {
      if (phone) {
        setError(phone.closest(".form-group"), "Enter a valid 10-digit number");
        firstErr = firstErr || phone;
      }
    }

    (requiredFields[activeTab] || []).forEach(([labelText]) => {
      const groups = pane.querySelectorAll(".form-group");
      for (const g of groups) {
        const lbl = g.querySelector("label");
        if (lbl && lbl.textContent?.trim().startsWith(labelText)) {
          const ctrl = g.querySelector<HTMLInputElement | HTMLSelectElement>("input, select");
          if (ctrl && !String(ctrl.value).trim()) {
            setError(g, "Required");
            firstErr = firstErr || ctrl;
          }
          break;
        }
      }
    });

    if (activeTab === "roundtrip") {
      const dep = data["Departure"];
      const ret = data["Return"];
      if (dep && ret && ret < dep) {
        const grp = Array.from(pane.querySelectorAll(".form-group")).find((g) =>
          g.querySelector("label")?.textContent?.trim().startsWith("Return")
        );
        if (grp) {
          setError(grp, "Return must be on/after departure");
          firstErr = firstErr || grp.querySelector("input");
        }
      }
    }

    return firstErr;
  };

  const handleSubmit = () => {
    const form = formRef.current!;
    form.querySelectorAll(".form-group.error").forEach((g) => g.classList.remove("error"));

    const data = collectData();
    const firstErr = validate(data);
    if (firstErr) {
      showToast("Please fix the highlighted fields");
      firstErr.focus({ preventScroll: false });
      firstErr.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const btn = btnRef.current;
    btn?.classList.add("loading");
    const original = btn?.innerHTML;
    if (btn) btn.textContent = "Sending Inquiry...";

    setTimeout(() => {
      const ref = genRef();
      saveInquiry(data, ref);
      // Fire-and-forget email (non-blocking, non-fatal)
      fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ref, data }),
      }).catch(() => {});
      setModal({ ref, rows: buildSummary(data), wa: waLink(data, ref, whatsappNumber) });
      if (btn) {
        btn.classList.remove("loading");
        if (original) btn.innerHTML = original;
      }
      form.reset();
      const today = new Date().toISOString().split("T")[0];
      form
        .querySelectorAll<HTMLInputElement>('input[type="date"]')
        .forEach((d) => d.setAttribute("min", today));
    }, 850);
  };

  const paneCls = (id: string) => `form-pane${activeTab === id ? " active" : ""}`;

  return (
    <div className="booking-card">
      <h3>
        <Icon name="tag" />
        Get a <span>Free Quote</span>
      </h3>

      <div className="booking-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`booking-tab${activeTab === t.id ? " active" : ""}`}
            type="button"
            role="tab"
            aria-selected={activeTab === t.id}
            onClick={() => selectTab(t.id)}
          >
            <Icon name={t.icon} /> <span className="tab-label">{t.label}</span>
          </button>
        ))}
      </div>

      <form
        ref={formRef}
        onSubmit={(e) => e.preventDefault()}
        onInput={onFormInput}
        onChange={onFormInput}
        noValidate
      >
        <div className="form-row">
          <div className="form-group" data-field="name">
            <label>
              <Icon name="users" /> Full Name
            </label>
            <input type="text" name="name" placeholder="As per ID" autoComplete="name" />
          </div>
        </div>

        {/* ONE WAY */}
        <div className={paneCls("oneway")} data-pane="oneway">
          <div className="form-row two">
            <div className="form-group">
              <label>
                <Icon name="search" /> From
              </label>
              <input type="text" placeholder="Pickup city" />
            </div>
            <div className="form-group">
              <label>
                <Icon name="mappin" /> To
              </label>
              <input type="text" placeholder="Drop city" />
            </div>
          </div>
          <div className="form-row two">
            <div className="form-group">
              <label>
                <Icon name="calendar" /> Pickup Date
              </label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>
                <Icon name="clock" /> Pickup Time
              </label>
              <input type="time" />
            </div>
          </div>
          <div className="form-row two">
            <div className="form-group">
              <label>
                <Icon name="car" /> Vehicle Type
              </label>
              <select>
                <option value="">Select vehicle</option>
                {VEHICLE_OPTS.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>
                <Icon name="phone" /> Phone
              </label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>
        </div>

        {/* ROUND TRIP */}
        <div className={paneCls("roundtrip")} data-pane="roundtrip">
          <div className="form-row two">
            <div className="form-group">
              <label>
                <Icon name="search" /> From
              </label>
              <input type="text" placeholder="Pickup city" />
            </div>
            <div className="form-group">
              <label>
                <Icon name="mappin" /> To
              </label>
              <input type="text" placeholder="Destination(s)" />
            </div>
          </div>
          <div className="form-row three">
            <div className="form-group">
              <label>
                <Icon name="calendar" /> Departure
              </label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>
                <Icon name="calendar" /> Return
              </label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>
                <Icon name="clock" /> Pickup Time
              </label>
              <input type="time" />
            </div>
          </div>
          <div className="form-row two">
            <div className="form-group">
              <label>
                <Icon name="car" /> Vehicle Type
              </label>
              <select>
                <option value="">Select vehicle</option>
                {VEHICLE_OPTS.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>
                <Icon name="phone" /> Phone
              </label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>
        </div>

        {/* LOCAL */}
        <div className={paneCls("local")} data-pane="local">
          <div className="form-row">
            <div className="form-group">
              <label>
                <Icon name="pin-city" /> City
              </label>
              <select>
                <option value="">Select city</option>
                <option>Delhi NCR</option>
                <option>Mumbai</option>
                <option>Bengaluru</option>
                <option>Jaipur</option>
                <option>Chandigarh</option>
                <option>Ahmedabad</option>
                <option>Goa</option>
              </select>
            </div>
          </div>
          <div className="form-row two">
            <div className="form-group">
              <label>
                <Icon name="clock" /> Package
              </label>
              <select>
                <option>4 Hrs / 40 Km</option>
                <option>8 Hrs / 80 Km</option>
                <option>12 Hrs / 120 Km</option>
                <option>Full Day (24 Hrs)</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                <Icon name="car" /> Vehicle Type
              </label>
              <select>
                {VEHICLE_OPTS.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row two">
            <div className="form-group">
              <label>
                <Icon name="calendar" /> Pickup Date
              </label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>
                <Icon name="clock" /> Pickup Time
              </label>
              <input type="time" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>
                <Icon name="phone" /> Phone
              </label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>
        </div>

        {/* AIRPORT */}
        <div className={paneCls("airport")} data-pane="airport">
          <div className="seg-switch">
            <input type="radio" name="airport-trip" id="apt-pickup" defaultChecked />
            <label htmlFor="apt-pickup">
              <Icon name="plane" /> Pickup from Airport
            </label>
            <input type="radio" name="airport-trip" id="apt-drop" />
            <label htmlFor="apt-drop">
              <Icon name="plane" /> Drop to Airport
            </label>
          </div>
          <div className="form-row two">
            <div className="form-group">
              <label>
                <Icon name="plane" /> Airport
              </label>
              <select>
                <option>Delhi (DEL) — IGI</option>
                <option>Mumbai (BOM) — CSMI</option>
                <option>Bengaluru (BLR) — Kempegowda</option>
                <option>Jaipur (JAI)</option>
                <option>Goa (GOI / GOX)</option>
                <option>Kochi (COK)</option>
                <option>Srinagar (SXR)</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                <Icon name="mappin" /> Drop / Pickup Address
              </label>
              <input type="text" placeholder="Hotel, locality or address" />
            </div>
          </div>
          <div className="form-row two">
            <div className="form-group">
              <label>
                <Icon name="calendar" /> Date
              </label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>
                <Icon name="clock" /> Time
              </label>
              <input type="time" />
            </div>
          </div>
          <div className="form-row two">
            <div className="form-group">
              <label>
                <Icon name="car" /> Vehicle Type
              </label>
              <select>
                {VEHICLE_OPTS.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>
                <Icon name="phone" /> Phone
              </label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>
        </div>

        {/* TOURS */}
        <div className={paneCls("tours")} data-pane="tours">
          <div className="form-row">
            <div className="form-group">
              <label>
                <Icon name="mountain" /> Destination
              </label>
              <select>
                <option value="">Where do you want to go?</option>
                <option>Himachal Pradesh</option>
                <option>Uttarakhand</option>
                <option>Rajasthan</option>
                <option>Kashmir</option>
                <option>Kerala</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Mumbai &amp; Maharashtra</option>
              </select>
            </div>
          </div>
          <div className="form-row two">
            <div className="form-group">
              <label>
                <Icon name="camera" /> Tour Type
              </label>
              <select>
                <option>Sightseeing &amp; City Tour</option>
                <option>Hill &amp; Adventure</option>
                <option>Heritage &amp; Cultural</option>
                <option>Beach &amp; Leisure</option>
                <option>Pilgrimage</option>
                <option>Honeymoon Special</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                <Icon name="users" /> Travellers
              </label>
              <select>
                <option>1–2 People</option>
                <option>3–4 People</option>
                <option>5–8 People</option>
                <option>9–15 People</option>
                <option>15+ Group</option>
              </select>
            </div>
          </div>
          <div className="form-row two">
            <div className="form-group">
              <label>
                <Icon name="calendar" /> Travel Date
              </label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>
                <Icon name="calendar" /> Duration
              </label>
              <select>
                <option>1–2 Days</option>
                <option>3–5 Days</option>
                <option>6–8 Days</option>
                <option>9–12 Days</option>
                <option>Custom Itinerary</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>
                <Icon name="phone" /> Phone
              </label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>
        </div>

        <button
          ref={btnRef}
          className="btn-primary"
          type="button"
          id="quote-submit"
          onClick={handleSubmit}
        >
          <Icon name="car" sm />
          {submitLabel}
        </button>
      </form>

      <div className="form-note">
        <span>
          <Icon name="check" /> No booking fee
        </span>
        <span>
          <Icon name="check" /> Free cancellation
        </span>
        <span>
          <Icon name="check" /> Instant confirmation
        </span>
      </div>

      {/* Toast */}
      <div ref={toastRef} className="toast" role="status" aria-live="polite" />

      {/* Success Modal */}
      <div
        className={`modal-overlay${modal ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) setModal(null);
        }}
      >
        <div className="modal-card">
          <div className="modal-head">
            <button
              className="modal-close"
              type="button"
              aria-label="Close"
              onClick={() => setModal(null)}
            >
              &times;
            </button>
            <div className="success-icon">
              <Icon name="check" />
            </div>
            <h3 id="modal-title">Inquiry Received!</h3>
            <p>Our travel desk will reach out within 15 minutes.</p>
            <div className="modal-ref">
              Reference: <strong>{modal?.ref ?? "—"}</strong>
            </div>
          </div>
          <div className="modal-body">
            <h4>Booking Summary</h4>
            <ul className="summary-list">
              {modal?.rows.map(([k, v]) => (
                <li key={k}>
                  <span className="lbl">{k}</span>
                  <span className="val">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-foot">
            <a
              className="btn btn-wa"
              href={modal?.wa ?? "#"}
              target="_blank"
              rel="noopener"
            >
              <Icon name="whatsapp" /> Send via WhatsApp
            </a>
            <a className="btn btn-call" href={`tel:${phoneTel}`}>
              <Icon name="phone" /> Call {phone}
            </a>
            <p className="modal-note">
              Save reference ID for follow-ups · Free cancellation up to 1 hr
              before pickup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
