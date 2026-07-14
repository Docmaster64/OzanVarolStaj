interface CtaButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}

interface CtaSectionProps {
  title: string;
  text: string;
  buttons: CtaButton[];
}

export default function CtaSection({ title, text, buttons }: CtaSectionProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-text">{text}</p>
        <div className="cta-buttons">
          {buttons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              className={`btn-${button.variant ?? "primary"} btn-large`}
              target={button.external ? "_blank" : undefined}
              rel={button.external ? "noopener noreferrer" : undefined}
            >
              {button.label} &rarr;
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}