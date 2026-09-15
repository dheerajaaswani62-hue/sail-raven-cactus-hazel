import { b as require_jsx_runtime, z as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { p as craftDocs, s as Route$8 } from "./_ssr/router-VTyWoWrg.mjs";
import { t as DocView } from "./_ssr/doc-page-DE6wcvRY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-D98DAI0j.js
var import_jsx_runtime = require_jsx_runtime();
function CraftDoc() {
	const { slug } = Route$8.useParams();
	const page = craftDocs[slug];
	if (!page) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocView, {
		page,
		image: slug === "hinge" || slug === "making" ? {
			src: "/images/editorial/hinge.jpg",
			alt: "Hinge detail"
		} : void 0
	});
}
//#endregion
export { CraftDoc as component };
