export default function SectionHeader({ title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`mb-10 ${alignment}`}>
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
