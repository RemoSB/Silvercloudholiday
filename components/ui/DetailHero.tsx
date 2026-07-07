import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function DetailHero({
  image,
  label,
  title,
  tagline,
  meta,
  crumbs,
}: {
  image: string;
  label: string;
  title: string;
  tagline?: string;
  meta?: { icon?: string; text: string }[];
  crumbs: Crumb[];
}) {
  return (
    <header className="detail-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="detail-hero-bg" />
      <div className="detail-hero-overlay" />
      <div className="container detail-hero-inner">
        <nav className="crumbs">
          {crumbs.map((c, i) => (
            <span key={c.label}>
              {i > 0 && " · "}
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
            </span>
          ))}
        </nav>
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        {tagline && <p className="detail-hero-tagline">{tagline}</p>}
        {meta && meta.length > 0 && (
          <div className="detail-hero-meta">
            {meta.map((m) => (
              <span key={m.text}>{m.text}</span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
