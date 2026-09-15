import { b as require_jsx_runtime, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as legalDocs, r as Route$1 } from "./router-VTyWoWrg.mjs";
import { t as DocView } from "./doc-page-DE6wcvRY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal._slug-CaLsyEx-.js
var import_jsx_runtime = require_jsx_runtime();
function LegalDoc() {
	const { slug } = Route$1.useParams();
	const page = legalDocs[slug];
	if (!page) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocView, { page });
}
//#endregion
export { LegalDoc as component };
