import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-form-DCdnh-og.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactForm({ appointment }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "border border-border bg-surface p-6 text-sm",
		children: "Request received. We will confirm details by email."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		onSubmit: (e) => {
			e.preventDefault();
			setSent(true);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Full name",
				name: "name",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email",
				name: "email",
				type: "email",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Phone",
				name: "phone",
				type: "tel"
			}),
			appointment && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Preferred date / time",
				name: "when"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "City",
				name: "city"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "message",
				className: "text-[11px] tracking-[0.16em] text-muted uppercase",
				children: appointment ? "Requirements (optional)" : "Message"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: "message",
				name: "message",
				rows: 5,
				className: "mt-2 w-full border border-border bg-bg px-3 py-3 text-fg outline-none"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "min-h-11 bg-primary px-6 text-[11px] tracking-[0.16em] text-bg uppercase",
				children: appointment ? "Submit Request" : "Send Message"
			}),
			appointment && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "This is a request form. Final confirmation will be sent by us."
			})
		]
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: name,
		className: "text-[11px] tracking-[0.16em] text-muted uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: name,
		name,
		type,
		required,
		className: "mt-2 min-h-11 w-full border border-border bg-bg px-3 text-fg outline-none"
	})] });
}
//#endregion
export { ContactForm as t };
