import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { formatInr } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="aspect-square overflow-hidden bg-surface-2">
        <img
          src={product.image}
          alt={`${product.name} sunglasses, ${product.materialLabel}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-display text-2xl">{product.name}</h3>
        <p className="text-sm text-muted">
          {product.materialLabel} · {product.size}
        </p>
        <p className="text-sm tabular-nums">{formatInr(product.price)}</p>
        <span className="inline-block pt-1 text-[11px] tracking-[0.16em] text-primary uppercase">
          View frame
        </span>
      </div>
    </Link>
  );
}
