import { Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { filterProducts, frameFilters } from "@/lib/products";
import { cn } from "@/lib/utils";

export function FramesGrid({ filter }: { filter?: string }) {
  const active = filter ?? "all";
  const list = filterProducts(active);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
      <div className="flex flex-wrap gap-2 border-y border-border py-3">
        {frameFilters.map((f) => (
          <Link
            key={f.slug}
            to={f.slug === "all" ? "/frames" : "/frames/$filter"}
            params={f.slug === "all" ? undefined : { filter: f.slug }}
            className={cn(
              "min-h-11 px-3 py-2 text-[11px] tracking-[0.16em] uppercase",
              active === f.slug
                ? "bg-primary text-bg"
                : "text-muted hover:text-fg",
            )}
          >
            {f.label}
          </Link>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="py-16 text-muted">No frames in this category at the moment.</p>
      ) : (
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}

      <section className="mt-20 border-t border-border pt-12">
        <h2 className="font-display text-3xl">How to choose</h2>
        <p className="mt-3 max-w-xl text-muted">
          Start with material. Then check proportion and measurements. If you
          prefer guidance, request a private appointment.
        </p>
        <Link
          to="/appointments/$slug"
          params={{ slug: "request" }}
          className="mt-6 inline-flex min-h-11 items-center bg-primary px-5 text-[11px] tracking-[0.16em] text-bg uppercase"
        >
          Private Appointment
        </Link>
      </section>
    </div>
  );
}
