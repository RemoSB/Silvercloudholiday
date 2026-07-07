import Icon from "@/components/ui/Icon";

export default function WhatsAppFloat({
  number = "919876543210",
}: {
  number?: string;
}) {
  return (
    <a
      id="wa-float"
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener"
      title="Chat on WhatsApp"
    >
      <Icon name="whatsapp" />
    </a>
  );
}
