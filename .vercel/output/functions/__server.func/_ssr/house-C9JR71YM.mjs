import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageIntro } from "./page-intro-7osI_l0d.mjs";
import { t as Prose } from "./prose-zMmVkVQj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/house-C9JR71YM.js
var import_jsx_runtime = require_jsx_runtime();
function HousePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "House",
			title: "DATUM",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "DATUM is an independent eyewear house. We design and make frames as instruments — measured in material, proportion and finish." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 pb-8 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/editorial/world.jpg",
				alt: "Drafting office still life with a DATUM frame",
				className: "max-h-[440px] w-full object-cover"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Origin"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "DATUM began from a simple observation: most eyewear is designed to look decorative. Very little is designed to feel exact. We started with the opposite approach." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Standards"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We accept only what can be measured and repeated. We refuse decoration for its own sake. We publish measurements. We document process. We treat fit as part of the design." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "World"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The visual and conceptual world of DATUM is the drafting office: graphite, vellum, precise lines, instruments that are used rather than displayed." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/house/$slug",
						params: { slug: "origin" },
						className: "text-primary",
						children: "Origin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/house/$slug",
						params: { slug: "standards" },
						className: "text-primary",
						children: "Standards"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/house/$slug",
						params: { slug: "world" },
						className: "text-primary",
						children: "World"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/house/$slug",
						params: { slug: "contact" },
						className: "text-primary",
						children: "Contact"
					})
				]
			})
		] })
	] });
}
//#endregion
export { HousePage as component };
