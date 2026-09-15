import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageIntro } from "./page-intro-7osI_l0d.mjs";
import { t as Prose } from "./prose-zMmVkVQj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doc-page-DE6wcvRY.js
var import_jsx_runtime = require_jsx_runtime();
function DocView({ page, image, cta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: page.kicker,
			title: page.title,
			children: page.paragraphs.slice(0, 1).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
		}),
		image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 pb-8 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image.src,
				alt: image.alt,
				className: "max-h-[420px] w-full object-cover"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
			page.paragraphs.slice(1).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p)),
			page.lists?.map((list) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: list.heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 list-disc space-y-2 pl-5 text-muted",
				children: list.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
			})] }, list.heading)),
			cta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/appointments/$slug",
				params: { slug: "request" },
				className: "inline-flex min-h-11 items-center bg-primary px-5 text-[11px] tracking-[0.16em] text-bg uppercase",
				children: cta.label
			})
		] })
	] });
}
//#endregion
export { DocView as t };
