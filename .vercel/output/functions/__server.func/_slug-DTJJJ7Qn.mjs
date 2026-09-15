import { b as require_jsx_runtime, z as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { c as Route$10, f as appointmentDocs } from "./_ssr/router-VTyWoWrg.mjs";
import { t as PageIntro } from "./_ssr/page-intro-7osI_l0d.mjs";
import { t as Prose } from "./_ssr/prose-zMmVkVQj.mjs";
import { t as DocView } from "./_ssr/doc-page-DE6wcvRY.mjs";
import { t as ContactForm } from "./_ssr/contact-form-DCdnh-og.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DTJJJ7Qn.js
var import_jsx_runtime = require_jsx_runtime();
function AppointmentDoc() {
	const { slug } = Route$10.useParams();
	if (slug === "request") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Appointments",
		title: "Request Appointment",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Please provide your details and preferred timing. We will respond to confirm the appointment." })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { appointment: true }) })] });
	const page = appointmentDocs[slug];
	if (!page) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocView, {
		page,
		cta: {
			to: "/appointments/request",
			label: "Request Appointment"
		}
	});
}
//#endregion
export { AppointmentDoc as component };
