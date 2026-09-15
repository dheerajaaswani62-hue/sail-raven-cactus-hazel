export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="mx-auto max-w-3xl px-4 pt-16 pb-10 md:px-8">
      {kicker && (
        <p className="text-[11px] tracking-[0.22em] text-primary uppercase">
          {kicker}
        </p>
      )}
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{title}</h1>
      {children && (
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
          {children}
        </div>
      )}
    </header>
  );
}
