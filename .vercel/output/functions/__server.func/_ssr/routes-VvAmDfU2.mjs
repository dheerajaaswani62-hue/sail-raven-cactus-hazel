import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as products } from "./router-VTyWoWrg.mjs";
import { t as ProductCard } from "./product-card-BDS8WE9e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-VvAmDfU2.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = products.filter((p) => p.signature).slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid min-h-[78vh] lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center bg-bg px-6 py-16 md:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.24em] text-primary uppercase",
						children: "Independent eyewear house"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-5xl leading-[0.95] md:text-7xl",
						children: "Measured, not decorated."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-base leading-relaxed text-muted",
						children: "Sunglasses designed like drafting instruments for those who notice proportion, material and exact fit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/frames",
							className: "inline-flex min-h-11 items-center bg-primary px-6 text-[11px] tracking-[0.16em] text-bg uppercase",
							children: "View Frames"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/appointments",
							className: "inline-flex min-h-11 items-center border border-border px-6 text-[11px] tracking-[0.16em] uppercase hover:border-primary",
							children: "Private Appointment"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-[42vh] overflow-hidden bg-surface-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/editorial/hinge.jpg",
					alt: "Macro detail of a DATUM hinge and acetate edge",
					className: "h-full w-full object-cover"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-6 py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm tracking-[0.2em] text-muted uppercase",
					children: "DATUM"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-display text-3xl leading-snug md:text-4xl",
					children: "We treat every frame as an instrument — measured in material, proportion and finish. Nothing is added for decoration."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted italic",
					children: "I am calibrated. My judgment is exact, not decorated."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 pb-8 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl",
					children: "Current Instruments"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/frames",
					className: "text-[11px] tracking-[0.16em] text-primary uppercase",
					children: "All frames"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-3 md:px-8",
			children: [
				{
					t: "Craft",
					d: "Every frame moves through deliberate stages: material selection, shaping, finishing and inspection. The process is documented and repeatable.",
					to: "/craft"
				},
				{
					t: "Materials",
					d: "We work only with titanium, technical acetate and metal. Each material is chosen for structure, weight and long-term behaviour — not for surface effect.",
					to: "/craft/materials"
				},
				{
					t: "Fit",
					d: "Proportion is designed first. Measurements are published. Fit is treated as part of the design, not an afterthought.",
					to: "/field-notes/fit"
				}
			].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: b.to,
				className: "border border-border bg-surface p-8 transition hover:border-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.2em] text-primary uppercase",
						children: "Standard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-3xl",
						children: b.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: b.d
					})
				]
			}, b.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 pb-8 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid overflow-hidden border border-border lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/editorial/world.jpg",
					alt: "Drafting instruments and a DATUM frame on vellum",
					className: "h-full min-h-72 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-surface p-8 md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.2em] text-primary uppercase",
							children: "Field Notes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl",
							children: "Materials, fit, care and the work of making."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: "Short notes written for those who want clear information before and after ownership."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/field-notes",
							className: "mt-6 inline-flex min-h-11 items-center text-[11px] tracking-[0.16em] text-primary uppercase",
							children: "Read notes"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-6 py-24 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl",
					children: "Private appointment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "A guided session for frame selection and fit. Available by request."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/appointments/$slug",
					params: { slug: "request" },
					className: "mt-8 inline-flex min-h-11 items-center bg-primary px-6 text-[11px] tracking-[0.16em] text-bg uppercase",
					children: "Request Appointment"
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
