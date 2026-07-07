import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { WHATSAPP_NUMBER } from "@/lib/site";
import type { Tour } from "@/lib/data";

export default function TourCard({ tour, delay = 0 }: { tour: Tour; delay?: number }) {
  const href = tour.slug ? `/tours/${tour.slug}` : "#cta";
  return (
    <Reveal as="div" className="pkg-card" delay={delay}>
      <Link href={href} className="pkg-media" aria-label={tour.name}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={tour.image} alt={`${tour.name} tour`} loading="lazy" />
        <span className="pkg-tag">{tour.tag}</span>
        {tour.duration && (
          <span className="pkg-dur">
            <Icon name="clock" sm /> {tour.duration}
          </span>
        )}
      </Link>
      <div className="pkg-body">
        <h3>
          <Link href={href}>{tour.name}</Link>
        </h3>
        <div className="pkg-route">
          <Icon name="mappin" /> {tour.route}
        </div>
        <ul className="pkg-feats">
          {tour.feats.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="pkg-foot">
          <div className="pkg-price">
            <small>Onwards</small>
            <strong>{tour.price}</strong>
          </div>
        </div>
        <div className="pkg-actions">
          <Link className="pkg-btn pkg-book" href={href}>
            View Details
          </Link>
          <Link className="pkg-btn pkg-enq" href="/contact">
            Enquire
          </Link>
          <a
            className="pkg-btn pkg-wa"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hi, I'm interested in the ${tour.name} package.`
            )}`}
            target="_blank"
            rel="noopener"
            aria-label="Enquire on WhatsApp"
          >
            <Icon name="whatsapp" filled />
          </a>
        </div>
      </div>
    </Reveal>
  );
}
