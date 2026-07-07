"use client";

import { useEffect, useState } from "react";

// Ported from legacy: per-session increment persisted in localStorage,
// animated count-up on mount.
export default function VisitorCount() {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const KEY = "iw_visitor_count_v2";
    const SESSION = "iw_visitor_session_v2";
    let count = parseInt(localStorage.getItem(KEY) || "", 10);
    if (isNaN(count) || count < 0) count = 0;
    if (!sessionStorage.getItem(SESSION)) {
      count += 1;
      sessionStorage.setItem(SESSION, "1");
    }
    localStorage.setItem(KEY, String(count));

    const target = count;
    const duration = 1400;
    const start = performance.now();
    const fmt = (n: number) => n.toLocaleString("en-IN");
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(fmt(Math.floor(target * eased)));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(fmt(target));
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <span className="vc-count">{display}</span>;
}
