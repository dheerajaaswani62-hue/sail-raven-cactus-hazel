import { b as require_jsx_runtime, v as Link, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as formatInr, l as useCart, n as Route, y as getProduct } from "./router-VTyWoWrg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-BRy7KjIq.js
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const product = getProduct(slug);
	const add = useCart((s) => s.add);
	if (!product) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-surface-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: `${product.name} sunglasses, ${product.materialLabel}`,
				className: "w-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.2em] text-primary uppercase",
				children: product.materialLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: product.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: product.size
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xl tabular-nums",
				children: formatInr(product.price)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-lg leading-relaxed text-fg/90",
				children: product.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-8 grid grid-cols-2 gap-4 border-y border-border py-6 text-sm",
				children: [
					["Lens width", `${product.lensWidth} mm`],
					["Bridge", `${product.bridge} mm`],
					["Temple length", `${product.temple} mm`],
					["Lens height", `${product.lensHeight} mm`],
					["Frame width", `${product.frameWidth} mm`],
					["Weight", `${product.weight} g`]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 tabular-nums",
					children: v
				})] }, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: product.fitNote
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => add(product.slug),
					className: "min-h-11 bg-primary px-6 text-[11px] tracking-[0.16em] text-bg uppercase",
					children: "Add to cart"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/appointments/$slug",
					params: { slug: "request" },
					className: "inline-flex min-h-11 items-center border border-border px-6 text-[11px] tracking-[0.16em] uppercase hover:border-primary",
					children: "Request fitting"
				})]
			})
		] })]
	});
}
//#endregion
export { ProductPage as component };
