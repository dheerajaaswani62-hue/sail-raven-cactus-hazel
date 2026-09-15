import { b as require_jsx_runtime, z as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as Route$4, v as frameFilters } from "./_ssr/router-VTyWoWrg.mjs";
import { t as PageIntro } from "./_ssr/page-intro-7osI_l0d.mjs";
import { t as FramesGrid } from "./_ssr/frames-grid-B7M9jmcn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_filter-CZpFysJf.js
var import_jsx_runtime = require_jsx_runtime();
var copy = {
	titanium: {
		title: "Titanium",
		text: "Light, strong and precise. Titanium allows thin structures without excess weight."
	},
	acetate: {
		title: "Acetate",
		text: "Depth of colour, density and a refined edge. Colour is the material, not a coating."
	},
	metal: {
		title: "Metal",
		text: "Clean lines and structural clarity. Used where the design requires strength in thin sections."
	},
	signatures: {
		title: "Signature Series",
		text: "Permanent designs that stay in the catalogue. Each silhouette earns its place through proportion and material."
	},
	new: {
		title: "New Releases",
		text: "Latest instruments added to the catalogue."
	}
};
function FilteredFrames() {
	const { filter } = Route$4.useParams();
	if (!frameFilters.some((f) => f.slug === filter) || filter === "all") throw notFound();
	const c = copy[filter] ?? {
		title: "Frames",
		text: ""
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Catalogue",
		title: c.title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.text })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FramesGrid, { filter })] });
}
//#endregion
export { FilteredFrames as component };
