import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { getProduct } from "@/lib/products";
import { formatInr } from "@/lib/utils";
import { useCart } from "@/store/cart";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({ meta: [{ title: "Cart — DATUM" }] }),
});

function CartPage() {
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const total = useCart((s) => s.total());

  return (
    <main>
      <PageIntro kicker="Catalogue" title="Cart" />
      <div className="mx-auto max-w-3xl px-4 pb-20 md:px-8">
        {items.length === 0 ? (
          <p className="text-muted">
            Your cart is empty.{" "}
            <Link to="/frames" className="text-primary">
              View frames
            </Link>
          </p>
        ) : (
          <ul className="space-y-6">
            {items.map((item) => {
              const p = getProduct(item.slug);
              if (!p) return null;
              return (
                <li
                  key={item.slug}
                  className="flex gap-4 border-b border-border pb-6"
                >
                  <img
                    src={p.image}
                    alt=""
                    className="size-24 object-cover"
                  />
                  <div className="flex-1">
                    <Link
                      to="/product/$slug"
                      params={{ slug: p.slug }}
                      className="font-display text-2xl"
                    >
                      {p.name}
                    </Link>
                    <p className="text-sm text-muted">{p.materialLabel}</p>
                    <p className="mt-1 tabular-nums">{formatInr(p.price)}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <label className="text-xs text-muted">
                        Qty
                        <input
                          type="number"
                          min={1}
                          value={item.qty}
                          onChange={(e) =>
                            setQty(item.slug, Number(e.target.value))
                          }
                          className="ml-2 w-16 border border-border bg-bg px-2 py-1 text-fg"
                        />
                      </label>
                      <button
                        type="button"
                        className="text-sm text-muted hover:text-primary"
                        onClick={() => remove(item.slug)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        {items.length > 0 && (
          <div className="mt-8 flex items-center justify-between">
            <p className="text-lg tabular-nums">Total {formatInr(total)}</p>
            <p className="text-sm text-muted">
              Orders are confirmed after a private request.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
