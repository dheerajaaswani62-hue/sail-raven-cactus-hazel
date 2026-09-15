import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageIntro } from "./page-intro-7osI_l0d.mjs";
import { t as Prose } from "./prose-zMmVkVQj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/appointments-BRSwUhgh.js
var import_jsx_runtime = require_jsx_runtime();
function Appointments() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Studio",
		title: "Appointments",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A private session for frame selection and fit. Available by request." })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl",
			children: "What the session includes"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "list-disc space-y-2 pl-5 text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Guided review of available frames" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Proportion and measurement discussion" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fit assessment" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Clear recommendation based on your requirements" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Duration: approximately 45–60 minutes (confirmed when scheduled)." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "list-decimal space-y-2 pl-5 text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Submit a request using the form" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "We confirm availability and details" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The session takes place (in-person or as arranged)" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/appointments/$slug",
			params: { slug: "request" },
			className: "inline-flex min-h-11 items-center bg-primary px-5 text-[11px] tracking-[0.16em] text-bg uppercase",
			children: "Request Appointment"
		})
	] })] });
}
//#endregion
export { Appointments as component };
