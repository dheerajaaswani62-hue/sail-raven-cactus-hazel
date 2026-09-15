import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageIntro } from "./page-intro-7osI_l0d.mjs";
import { t as FramesGrid } from "./frames-grid-B7M9jmcn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/frames-DsV-Dmgy.js
var import_jsx_runtime = require_jsx_runtime();
function FramesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Catalogue",
		title: "Frames",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A considered selection of frames. Each one is designed as an instrument — measured in material, proportion and finish." })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FramesGrid, { filter: "all" })] });
}
//#endregion
export { FramesPage as component };
