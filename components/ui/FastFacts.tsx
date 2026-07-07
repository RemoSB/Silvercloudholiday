import Icon from "@/components/ui/Icon";
import type { Fact } from "@/lib/data";

export default function FastFacts({
  facts,
  title = "Trip Snapshot",
}: {
  facts: Fact[];
  title?: string;
}) {
  if (!facts?.length) return null;
  return (
    <div className="fast-facts">
      <h3>
        <Icon name="check" sm /> {title}
      </h3>
      <dl>
        {facts.map((f) => (
          <div className="fact-row" key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
