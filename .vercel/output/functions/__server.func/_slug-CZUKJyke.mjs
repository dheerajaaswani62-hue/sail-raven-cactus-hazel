import { b as require_jsx_runtime, z as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { m as fieldDocs, o as Route$6 } from "./_ssr/router-VTyWoWrg.mjs";
import { t as DocView } from "./_ssr/doc-page-DE6wcvRY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CZUKJyke.js
var import_jsx_runtime = require_jsx_runtime();
function FieldDoc() {
	const { slug } = Route$6.useParams();
	const page = fieldDocs[slug];
	if (!page) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocView, {
		page,
		cta: slug === "fit" ? {
			to: "/appointments/request",
			label: "Request Appointment"
		} : void 0
	});
}
//#endregion
export { FieldDoc as component };
