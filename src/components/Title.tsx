export function Title({
  title,
  subtitle,
  isImportant,
}: {
  title: string;
  subtitle?: string;
  isImportant?: boolean;
}) {
  return (
    <div>
      <h1 style={{ color: isImportant ? "red" : "green" }}>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
}
