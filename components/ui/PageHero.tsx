import Link from "next/link";

export default function PageHero({
  label,
  title,
  desc,
}: {
  label: string;
  title: string;
  desc?: string;
}) {
  return (
    <header className="page-hero">
      <div className="container">
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        {desc && <p>{desc}</p>}
        <div className="crumbs">
          <Link href="/">Home</Link> · {title}
        </div>
      </div>
    </header>
  );
}
