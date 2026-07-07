import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import type { Vehicle } from "@/lib/data";

export default function RecommendedVehicles({
  vehicles,
  heading = "Recommended Vehicles",
  label = "Travel in Comfort",
}: {
  vehicles: Vehicle[];
  heading?: string;
  label?: string;
}) {
  if (!vehicles?.length) return null;
  return (
    <section className="rec-vehicles">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{heading}</h2>
        </div>
        <div className="rec-vehicle-grid">
          {vehicles.map((v, i) => (
            <Reveal as="div" className="rec-vehicle-card" key={v.name} delay={i * 0.05}>
              <Link href={v.slug ? `/fleet/${v.slug}` : "/fleet"} className="rec-vehicle-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.image} alt={v.alt} loading="lazy" />
              </Link>
              <div className="rec-vehicle-body">
                <h3>
                  <Link href={v.slug ? `/fleet/${v.slug}` : "/fleet"}>{v.name}</Link>
                </h3>
                <div className="rec-vehicle-meta">
                  {v.meta.slice(0, 3).map((m) => (
                    <span key={m.label}>
                      <Icon name={m.icon} sm /> {m.label}
                    </span>
                  ))}
                </div>
                <div className="rec-vehicle-foot">
                  <strong>{v.price}</strong>
                  <Link className="pkg-btn pkg-book" href={v.slug ? `/fleet/${v.slug}` : "/fleet"}>
                    View
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
