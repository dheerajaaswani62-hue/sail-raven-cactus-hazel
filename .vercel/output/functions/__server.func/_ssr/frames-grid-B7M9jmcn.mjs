import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as filterProducts, u as cn, v as frameFilters } from "./router-VTyWoWrg.mjs";
import { t as ProductCard } from "./product-card-BDS8WE9e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/frames-grid-B7M9jmcn.js
var import_jsx_runtime = require_jsx_runtime();
function FramesGrid({ filter }) {
	const active = filter ?? "all";
	const list = filterProducts(active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 pb-20 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 border-y border-border py-3",
				children: frameFilters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: f.slug === "all" ? "/frames" : "/frames/$filter",
					params: f.slug === "all" ? void 0 : { filter: f.slug },
					className: cn("min-h-11 px-3 py-2 text-[11px] tracking-[0.16em] uppercase", active === f.slug ? "bg-primary text-bg" : "text-muted hover:text-fg"),
					children: f.label
				}, f.slug))
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-16 text-muted",
				children: "No frames in this category at the moment."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20 border-t border-border pt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "How to choose"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-muted",
						children: "Start with material. Then check proportion and measurements. If you prefer guidance, request a private appointment."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/appointments/$slug",
						params: { slug: "request" },
						className: "mt-6 inline-flex min-h-11 items-center bg-primary px-5 text-[11px] tracking-[0.16em] text-bg uppercase",
						children: "Private Appointment"
					})
				]
			})
		]
	});
}
//#endregion
export { FramesGrid as t };
