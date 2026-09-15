import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "DATUM — Measured, not decorated" }],
  }),
});

function Home() {
  const featured = products.filter((p) => p.signature).slice(0, 6);

  return (
    <main>
      <section className="grid min-h-[78vh] lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-bg px-6 py-16 md:px-12">
          <p className="text-[11px] tracking-[0.24em] text-primary uppercase">
            Independent eyewear house
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">
            Measured, not decorated.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Sunglasses designed like drafting instruments for those who notice
            proportion, material and exact fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/frames"
              className="inline-flex min-h-11 items-center bg-primary px-6 text-[11px] tracking-[0.16em] text-bg uppercase"
            >
              View Frames
            </Link>
            <Link
              to="/appointments"
              className="inline-flex min-h-11 items-center border border-border px-6 text-[11px] tracking-[0.16em] uppercase hover:border-primary"
            >
              Private Appointment
            </Link>
          </div>
        </div>
        <div className="min-h-[42vh] overflow-hidden bg-surface-2">
          <img
            src="/images/editorial/hinge.jpg"
            alt="Macro detail of a DATUM hinge and acetate edge"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm tracking-[0.2em] text-muted uppercase">DATUM</p>
        <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">
          We treat every frame as an instrument — measured in material,
          proportion and finish. Nothing is added for decoration.
        </p>
        <p className="mt-6 text-muted italic">
          I am calibrated. My judgment is exact, not decorated.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-4xl">Current Instruments</h2>
          <Link to="/frames" className="text-[11px] tracking-[0.16em] text-primary uppercase">
            All frames
          </Link>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-3 md:px-8">
        {[
          {
            t: "Craft",
            d: "Every frame moves through deliberate stages: material selection, shaping, finishing and inspection. The process is documented and repeatable.",
            to: "/craft",
          },
          {
            t: "Materials",
            d: "We work only with titanium, technical acetate and metal. Each material is chosen for structure, weight and long-term behaviour — not for surface effect.",
            to: "/craft/materials",
          },
          {
            t: "Fit",
            d: "Proportion is designed first. Measurements are published. Fit is treated as part of the design, not an afterthought.",
            to: "/field-notes/fit",
          },
        ].map((b) => (
          <Link
            key={b.t}
            to={b.to as never}
            className="border border-border bg-surface p-8 transition hover:border-primary"
          >
            <p className="text-[11px] tracking-[0.2em] text-primary uppercase">
              Standard
            </p>
            <h3 className="mt-3 font-display text-3xl">{b.t}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{b.d}</p>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-8">
        <div className="grid overflow-hidden border border-border lg:grid-cols-2">
          <img
            src="/images/editorial/world.jpg"
            alt="Drafting instruments and a DATUM frame on vellum"
            className="h-full min-h-72 w-full object-cover"
          />
          <div className="bg-surface p-8 md:p-12">
            <p className="text-[11px] tracking-[0.2em] text-primary uppercase">
              Field Notes
            </p>
            <h2 className="mt-3 font-display text-4xl">
              Materials, fit, care and the work of making.
            </h2>
            <p className="mt-4 text-muted">
              Short notes written for those who want clear information before
              and after ownership.
            </p>
            <Link
              to="/field-notes"
              className="mt-6 inline-flex min-h-11 items-center text-[11px] tracking-[0.16em] text-primary uppercase"
            >
              Read notes
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl">Private appointment</h2>
        <p className="mt-4 text-muted">
          A guided session for frame selection and fit. Available by request.
        </p>
        <Link
          to="/appointments/$slug"
          params={{ slug: "request" }}
          className="mt-8 inline-flex min-h-11 items-center bg-primary px-6 text-[11px] tracking-[0.16em] text-bg uppercase"
        >
          Request Appointment
        </Link>
      </section>
    </main>
  );
}
