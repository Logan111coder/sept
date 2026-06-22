"use client";

export default function Button({
  children,
  href = "#quote",
  variant = "solid",
  className = "",
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-medium tracking-tight transition-all duration-500 ease-luxe";

  const styles =
    variant === "solid"
      ? "bg-paper text-ink hover:bg-white hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.35)]"
      : variant === "ghost"
      ? "border border-paper/25 text-paper hover:border-paper/60 hover:bg-paper/[0.04]"
      : "border border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/[0.03]";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <span className="inline-block transition-transform duration-500 ease-luxe group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
