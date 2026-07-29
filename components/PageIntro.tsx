type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function PageIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: PageIntroProps) {
  return (
    <div className={`page-intro ${align === "center" ? "centered" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </div>
  );
}

