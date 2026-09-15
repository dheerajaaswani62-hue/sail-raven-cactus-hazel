import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageIntro } from "./page-intro-7osI_l0d.mjs";
import { t as Prose } from "./prose-zMmVkVQj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/craft-vVuXGVBj.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	["Material selection", "Titanium, technical acetate or metal is chosen for structure, weight and long-term behaviour."],
	["Design & drawing", "Proportion is established first. Measurements and silhouette are fixed before production begins."],
	["Shaping", "Fronts and temples are cut and formed to precise tolerances."],
	["Finishing", "Edges, surfaces and details are refined by hand and machine."],
	["Assembly & hinge", "The frame is assembled. The adjustment hinge is set and checked."],
	["Inspection", "Every frame passes measured checks for alignment, finish and function before it is released."],
	["Packaging & ownership", "The finished frame is packed with its care notes and ownership information."]
];
function CraftPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Process",
			title: "Craft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every DATUM frame is treated as an instrument. The process is deliberate, repeatable and documented." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 pb-10 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/editorial/hinge.jpg",
				alt: "Hinge and finishing detail",
				className: "max-h-[420px] w-full object-cover"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-8",
				children: steps.map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] tracking-[0.18em] text-primary uppercase",
						children: ["0", i + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl",
						children: t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: d
					})
				] }, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pt-4",
				children: "The process exists so the finished frame feels inevitable — measured, not decorated."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-4 pt-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/craft/$slug",
						params: { slug: "materials" },
						className: "text-primary",
						children: "Materials"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/craft/$slug",
						params: { slug: "hinge" },
						className: "text-primary",
						children: "Hinge & Adjustment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/craft/$slug",
						params: { slug: "inspection" },
						className: "text-primary",
						children: "Inspection Standards"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/craft/$slug",
						params: { slug: "packaging" },
						className: "text-primary",
						children: "Packaging & Ownership"
					})
				]
			})
		] })
	] });
}
//#endregion
export { CraftPage as component };
