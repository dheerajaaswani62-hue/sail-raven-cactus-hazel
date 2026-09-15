import { cn } from "@/lib/utils";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl space-y-5 px-4 pb-16 text-base leading-relaxed text-fg/90 md:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
