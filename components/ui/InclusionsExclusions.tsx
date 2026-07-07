import Icon from "@/components/ui/Icon";

export default function InclusionsExclusions({
  inclusions,
  exclusions,
}: {
  inclusions: string[];
  exclusions: string[];
}) {
  return (
    <section className="inc-exc-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What&apos;s Covered</span>
          <h2 className="section-title">Inclusions &amp; Exclusions</h2>
        </div>
        <div className="inc-exc-grid">
          <div className="inc-card">
            <h3>Included</h3>
            <ul>
              {inclusions.map((x) => (
                <li key={x} className="inc">
                  <Icon name="check" sm /> {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="exc-card">
            <h3>Not Included</h3>
            <ul>
              {exclusions.map((x) => (
                <li key={x} className="exc">
                  <span className="exc-mark">×</span> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
