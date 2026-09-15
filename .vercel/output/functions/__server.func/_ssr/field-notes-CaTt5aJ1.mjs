import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageIntro } from "./page-intro-7osI_l0d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/field-notes-CaTt5aJ1.js
var import_jsx_runtime = require_jsx_runtime();
var cats = [
	[
		"/field-notes/latest",
		"Latest Notes",
		"Newest articles"
	],
	[
		"/field-notes/fit",
		"Fit & Proportion",
		"How frames should sit"
	],
	[
		"/field-notes/materials",
		"Materials Explained",
		"Titanium, acetate, metal"
	],
	[
		"/field-notes/care",
		"Care & Ownership",
		"Daily care and longevity"
	],
	[
		"/field-notes/know-how",
		"How-To / Know-How",
		"Question-based notes — coming"
	],
	[
		"/field-notes/dispatches",
		"Studio Dispatches",
		"Short studio observations"
	],
	[
		"/field-notes/archive",
		"Archive",
		"Older notes by topic"
	]
];
function FieldNotes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Editorial",
		title: "Field Notes",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Short notes on materials, fit, care, process and the work of making. Written for those who want clear information before and after ownership." })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-5xl gap-4 px-4 pb-20 md:grid-cols-2 md:px-8",
		children: cats.map(([to, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/field-notes/$slug",
			params: { slug: to.replace("/field-notes/", "") },
			className: "border border-border bg-surface p-6 hover:border-primary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: d
			})]
		}, to))
	})] });
}
//#endregion
export { FieldNotes as component };
