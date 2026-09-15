import { b as require_jsx_runtime, z as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { h as houseDocs, i as Route$2 } from "./_ssr/router-VTyWoWrg.mjs";
import { t as PageIntro } from "./_ssr/page-intro-7osI_l0d.mjs";
import { t as Prose } from "./_ssr/prose-zMmVkVQj.mjs";
import { t as DocView } from "./_ssr/doc-page-DE6wcvRY.mjs";
import { t as ContactForm } from "./_ssr/contact-form-DCdnh-og.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-D7JwECNI.js
var import_jsx_runtime = require_jsx_runtime();
function HouseDoc() {
	const { slug } = Route$2.useParams();
	if (slug === "contact") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "House",
		title: "Contact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For questions, private appointments or studio enquiries, please use the form below." })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {}) })] });
	const page = houseDocs[slug];
	if (!page) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocView, {
		page,
		image: slug === "world" ? {
			src: "/images/editorial/world.jpg",
			alt: "Drafting instruments and a DATUM frame"
		} : void 0
	});
}
//#endregion
export { HouseDoc as component };
