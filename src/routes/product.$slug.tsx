import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct } from "@/lib/products";
import { formatInr } from "@/lib/utils";
import { useCart } from "@/store/cart";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
  head: ({ params }) => {
    const p = getProduct(params.slug);
    return { meta: [{ title: p ? `${p.name} — DATUM` : "DATUM" }] };
  },
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  const add = useCart((s) => s.add);
  if (!product) throw notFound();

  return (
    <main className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2 md:px-8">
      <div className="bg-surface-2">
        <img
          src={product.image}
          alt={`${product.name} sunglasses, ${product.materialLabel}`}
          className="w-full object-cover"
        />
      </div>
      <div>
        <p className="text-[11px] tracking-[0.2em] text-primary uppercase">
          {product.materialLabel}
        </p>
        <h1 className="mt-2 font-display text-5xl">{product.name}</h1>
        <p className="mt-3 text-muted">{product.size}</p>
        <p className="mt-4 text-xl tabular-nums">{formatInr(product.price)}</p>
        <p className="mt-6 max-w-lg leading-relaxed text-fg/90">
          {product.summary}
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-6 text-sm">
          {[
            ["Lens width", `${product.lensWidth} mm`],
            ["Bridge", `${product.bridge} mm`],
            ["Temple length", `${product.temple} mm`],
            ["Lens height", `${product.lensHeight} mm`],
            ["Frame width", `${product.frameWidth} mm`],
            ["Weight", `${product.weight} g`],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-muted">{k}</dt>
              <dd className="mt-1 tabular-nums">{v}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-sm text-muted">{product.fitNote}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => add(product.slug)}
            className="min-h-11 bg-primary px-6 text-[11px] tracking-[0.16em] text-bg uppercase"
          >
            Add to cart
          </button>
          <Link
            to="/appointments/$slug"
            params={{ slug: "request" }}
            className="inline-flex min-h-11 items-center border border-border px-6 text-[11px] tracking-[0.16em] uppercase hover:border-primary"
          >
            Request fitting
          </Link>
        </div>
      </div>
    </main>
  );
}
