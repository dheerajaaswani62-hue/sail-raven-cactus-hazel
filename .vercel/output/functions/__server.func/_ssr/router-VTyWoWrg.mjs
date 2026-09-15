import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Search, n as TriangleAlert, o as ChevronDown, r as ShoppingBag, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-DTnlS5dl.js
var products = [
	{
		slug: "thread",
		name: "Thread",
		material: "titanium",
		materialLabel: "Titanium wire",
		size: "52-20-145",
		lensWidth: 52,
		bridge: 20,
		temple: 145,
		lensHeight: 41,
		frameWidth: 136,
		weight: 18,
		price: 36900,
		image: "/images/products/thread.jpg",
		signature: true,
		summary: "A fine titanium wire structure reduced to line. Designed for exact proportion with almost no visual mass.",
		fitNote: "Light on the face. Best for those who want presence without bulk."
	},
	{
		slug: "glyph",
		name: "Glyph",
		material: "acetate",
		materialLabel: "Clear + black acetate",
		size: "52-20-145",
		lensWidth: 52,
		bridge: 20,
		temple: 145,
		lensHeight: 40,
		frameWidth: 138,
		weight: 26,
		price: 31800,
		image: "/images/products/glyph.jpg",
		signature: true,
		summary: "Two-tone acetate with a clear front and a black structural edge. Colour is used as construction, not decoration.",
		fitNote: "Medium width. The bridge sits relatively high and stable."
	},
	{
		slug: "summit",
		name: "Summit",
		material: "acetate",
		materialLabel: "Forest acetate",
		size: "52-20-145",
		lensWidth: 52,
		bridge: 20,
		temple: 145,
		lensHeight: 43,
		frameWidth: 140,
		weight: 28,
		price: 32700,
		image: "/images/products/summit.jpg",
		signature: true,
		summary: "Dense forest acetate cut to a square silhouette. Depth of colour is part of the material, not applied afterwards.",
		fitNote: "Designed for medium to wide faces. Temple pressure is even when correctly adjusted."
	},
	{
		slug: "drift",
		name: "Drift",
		material: "acetate",
		materialLabel: "Sand acetate",
		size: "49-21-145",
		lensWidth: 49,
		bridge: 21,
		temple: 145,
		lensHeight: 44,
		frameWidth: 132,
		weight: 25,
		price: 31400,
		image: "/images/products/drift.jpg",
		summary: "A round sand acetate form. Proportion is held by the circle, not by surface detail.",
		fitNote: "Slightly smaller lens width. Suits narrower to medium faces."
	},
	{
		slug: "axis",
		name: "Axis",
		material: "metal",
		materialLabel: "Black metal",
		size: "55-18-145",
		lensWidth: 55,
		bridge: 18,
		temple: 145,
		lensHeight: 42,
		frameWidth: 142,
		weight: 22,
		price: 38200,
		image: "/images/products/axis.jpg",
		signature: true,
		summary: "Black metal reduced to geometry. Structure is expressed as line, not mass.",
		fitNote: "Wider front. Narrower bridge. Check bridge width against a frame you already own."
	},
	{
		slug: "polar-1",
		name: "Polar-1",
		material: "acetate",
		materialLabel: "Black acetate",
		size: "52-20-145",
		lensWidth: 52,
		bridge: 20,
		temple: 145,
		lensHeight: 41,
		frameWidth: 138,
		weight: 27,
		price: 35500,
		image: "/images/products/polar-1.jpg",
		isNew: true,
		polarized: true,
		summary: "Black acetate with polarised lenses. The silhouette is measured; the lens is functional.",
		fitNote: "Standard 52-20-145. A reliable starting measurement for many faces."
	},
	{
		slug: "polar-2",
		name: "Polar-2",
		material: "acetate",
		materialLabel: "Tortoise acetate",
		size: "51-20-145",
		lensWidth: 51,
		bridge: 20,
		temple: 145,
		lensHeight: 42,
		frameWidth: 136,
		weight: 27,
		price: 34900,
		image: "/images/products/polar-2.jpg",
		polarized: true,
		summary: "Tortoise acetate with polarised lenses. Pattern is inherent to the sheet, not printed.",
		fitNote: "Slightly compact front. Works well where a 52 feels wide."
	},
	{
		slug: "polar-3",
		name: "Polar-3",
		material: "metal",
		materialLabel: "Metal",
		size: "54-19-145",
		lensWidth: 54,
		bridge: 19,
		temple: 145,
		lensHeight: 42,
		frameWidth: 140,
		weight: 21,
		price: 37200,
		image: "/images/products/axis.jpg",
		polarized: true,
		isNew: true,
		summary: "Metal construction with polarised lenses. Line, weight and function held in one silhouette.",
		fitNote: "Medium-wide. Temple length 145 mm suits most adult heads."
	},
	{
		slug: "lumen",
		name: "Lumen",
		material: "acetate",
		materialLabel: "Bone acetate",
		size: "50-21-145",
		lensWidth: 50,
		bridge: 21,
		temple: 145,
		lensHeight: 41,
		frameWidth: 134,
		weight: 24,
		price: 33200,
		image: "/images/products/lumen.jpg",
		isNew: true,
		summary: "Bone acetate with a quiet cream density. The colour is the material, finished to a measured edge.",
		fitNote: "Slightly wider bridge. Useful where a low or broader nose needs more rest."
	},
	{
		slug: "orion",
		name: "Orion",
		material: "titanium",
		materialLabel: "Satin titanium",
		size: "53-19-145",
		lensWidth: 53,
		bridge: 19,
		temple: 145,
		lensHeight: 40,
		frameWidth: 137,
		weight: 19,
		price: 39800,
		image: "/images/products/thread.jpg",
		signature: true,
		summary: "Satin titanium with a restrained front. Built for daily wear without visual noise.",
		fitNote: "Light and stable. Check temple length if you prefer a longer arm."
	}
];
var frameFilters = [
	{
		slug: "all",
		label: "All Frames"
	},
	{
		slug: "titanium",
		label: "Titanium"
	},
	{
		slug: "acetate",
		label: "Acetate"
	},
	{
		slug: "metal",
		label: "Metal"
	},
	{
		slug: "signatures",
		label: "Signature Series"
	},
	{
		slug: "new",
		label: "New Releases"
	}
];
function getProduct(slug) {
	return products.find((p) => p.slug === slug);
}
function filterProducts(filter) {
	if (!filter || filter === "all") return products;
	if (filter === "titanium" || filter === "acetate" || filter === "metal") return products.filter((p) => p.material === filter);
	if (filter === "signatures") return products.filter((p) => p.signature);
	if (filter === "new") return products.filter((p) => p.isNew);
	return products;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/content-C_fGZ-FM.js
var craftDocs = {
	making: {
		slug: "making",
		kicker: "Craft",
		title: "The Making",
		paragraphs: [
			"Every DATUM frame follows a clear sequence.",
			"Material is selected for structure and behaviour. Proportion and measurements are fixed. Fronts and temples are shaped. Surfaces and edges are finished. The frame is assembled and the hinge is set. Final inspection is completed. The frame is packed for ownership.",
			"The process is deliberate so the finished frame feels inevitable."
		]
	},
	materials: {
		slug: "materials",
		kicker: "Craft",
		title: "Materials",
		paragraphs: ["We work with three primary materials. Each is chosen for structure, weight, behaviour over time, and how it accepts finish — not for surface effect."],
		lists: [
			{
				heading: "Titanium",
				items: [
					"Light, strong and highly resistant to corrosion.",
					"Allows thin, precise structures without excess weight.",
					"Brushed or satin-finished for a controlled, non-reflective appearance.",
					"Best suited for fine wire and minimal constructions."
				]
			},
			{
				heading: "Acetate",
				items: [
					"Offers depth of colour, density and the ability to take a high polish.",
					"Can be cut, shaped and finished to exact proportions.",
					"When properly selected and worked, it feels substantial without being heavy.",
					"Best suited for frames that need colour, presence and a refined edge."
				]
			},
			{
				heading: "Metal",
				items: [
					"Allows clean lines and structural clarity.",
					"Used where the design requires strength in thin sections or a precise geometric expression.",
					"Best suited for architectural silhouettes and frames that rely on line rather than mass."
				]
			}
		]
	},
	hinge: {
		slug: "hinge",
		kicker: "Craft",
		title: "Hinge & Adjustment",
		paragraphs: [
			"The hinge is a functional element, not a decorative detail. It is designed for controlled adjustment and long-term stability.",
			"Temple tension can be fine-tuned. Alignment is checked during inspection. The goal is even pressure and secure fit without excess force.",
			"Detailed torque specifications will be published with the first physical release."
		]
	},
	inspection: {
		slug: "inspection",
		kicker: "Craft",
		title: "Inspection Standards",
		paragraphs: ["Every frame is checked before it is released. Frames that do not meet the standard are not released."],
		lists: [{
			heading: "We inspect",
			items: [
				"Alignment of the front",
				"Temple symmetry and tension",
				"Surface finish",
				"Hinge function",
				"Overall measurements against specification"
			]
		}]
	},
	packaging: {
		slug: "packaging",
		kicker: "Craft",
		title: "Packaging & Ownership",
		paragraphs: ["The packaging is functional. It protects the frame and provides the basic information needed for long-term use."],
		lists: [{
			heading: "Each frame is packed with",
			items: [
				"Protective case",
				"Cleaning cloth",
				"Care notes",
				"Ownership information"
			]
		}]
	}
};
var houseDocs = {
	origin: {
		slug: "origin",
		kicker: "House",
		title: "Origin",
		paragraphs: ["DATUM began from a clear observation: most eyewear is designed to appear decorative. Very little is designed to feel exact.", "We started with the opposite approach. Every decision begins with measurement, material behaviour and long-term wear. The result is a small independent house that treats frames as instruments."]
	},
	standards: {
		slug: "standards",
		kicker: "House",
		title: "Standards",
		paragraphs: ["We accept only what can be measured and repeated. We refuse decoration for its own sake. We publish measurements. We document process. We treat fit as part of the design, not an afterthought.", "These standards guide every frame that carries the DATUM name."]
	},
	world: {
		slug: "world",
		kicker: "House",
		title: "World",
		paragraphs: ["The working reference for DATUM is the drafting office: graphite, vellum, precise lines, and instruments that are used rather than displayed.", "This is not nostalgia. It is a practical reference for clarity, restraint and exactness in design."]
	}
};
var fieldDocs = {
	latest: {
		slug: "latest",
		kicker: "Field Notes",
		title: "Latest Notes",
		paragraphs: ["The most recent Field Notes appear here. New notes are added as they are written.", "How-To articles are being prepared. Fit, materials and care notes are available now."]
	},
	fit: {
		slug: "fit",
		kicker: "Field Notes",
		title: "Fit & Proportion",
		paragraphs: [
			"Fit is part of the design. A frame that is correctly proportioned feels stable, balanced and almost invisible in daily use.",
			"Every DATUM frame is listed with three core measurements: Lens Width – Bridge – Temple Length. Example: 52 – 20 – 145.",
			"Compare the numbers to a frame you already own and like. Check bridge width first — this decides how the frame sits on your nose. Check total frame width against your face width. Temple length affects how the frame holds behind the ear.",
			"Measurements give the most reliable starting point. Shape names are secondary. If you want personal guidance, request a private appointment."
		],
		lists: [{
			heading: "What the numbers mean",
			items: [
				"Lens Width — width of one lens",
				"Bridge — distance between the lenses over the nose",
				"Temple Length — length of the arm from hinge to tip",
				"We also publish lens height, total frame width and weight"
			]
		}, {
			heading: "Common fit notes",
			items: [
				"Narrow faces usually need smaller lens width and shorter temple length.",
				"Wider faces need greater frame width and a wider bridge.",
				"A low bridge often needs a carefully shaped bridge or adjustable pads.",
				"Heavy frames or thick acetate need correct temple tension to avoid slipping."
			]
		}]
	},
	materials: {
		slug: "materials",
		kicker: "Field Notes",
		title: "Materials Explained",
		paragraphs: ["Detailed notes on titanium, acetate and metal — how each material behaves, why it is chosen, and what it means for weight, finish and longevity.", "See also the Craft materials page for the full material logic of the house."]
	},
	care: {
		slug: "care",
		kicker: "Field Notes",
		title: "Care & Ownership",
		paragraphs: ["Daily care protects the finish, alignment and longevity of the frame.", "Each frame is intended for long-term use. Proper care and occasional adjustment maintain the original measured fit."],
		lists: [{
			heading: "Basic care",
			items: [
				"Clean lenses with a proper microfibre cloth",
				"Avoid paper or clothing that can scratch",
				"Store the frame in its case when not in use",
				"Keep away from extreme heat"
			]
		}, {
			heading: "Adjustment",
			items: ["Temple tension and alignment should be checked periodically.", "If the frame feels uneven or loose, request professional adjustment."]
		}]
	},
	"know-how": {
		slug: "know-how",
		kicker: "Field Notes",
		title: "How-To / Know-How",
		paragraphs: ["Practical answers to common questions about fit, materials, care, measurements and choosing a frame.", "This section is reserved for searchable notes. Articles will be added here."]
	},
	dispatches: {
		slug: "dispatches",
		kicker: "Field Notes",
		title: "Studio Dispatches",
		paragraphs: ["Short notes from the studio — observations on process, materials and current work.", "No dispatches published yet."]
	},
	archive: {
		slug: "archive",
		kicker: "Field Notes",
		title: "Archive",
		paragraphs: ["Older Field Notes organised by topic. The archive is empty while the first notes are written."]
	}
};
var appointmentDocs = {
	fitting: {
		slug: "fitting",
		kicker: "Appointments",
		title: "Private Fitting",
		paragraphs: [
			"A focused session dedicated to finding the correct frame and fit.",
			"We examine face proportions, bridge fit, temple length and pressure, and overall balance and comfort.",
			"The goal is a frame that feels stable and exact — not merely stylish. You may try multiple frames during the session. Measurements are referenced throughout."
		]
	},
	expect: {
		slug: "expect",
		kicker: "Appointments",
		title: "What to Expect",
		paragraphs: [
			"Before the session you will receive a confirmation with time, location and any preparation notes.",
			"During the session: a brief discussion of your requirements, a review of relevant frames, measurement and fit assessment, then a recommendation and next steps.",
			"After the session you receive a clear summary of the recommended frames and how to proceed. The session is calm, technical and focused on fit and proportion. There is no pressure to purchase on the day."
		]
	}
};
var legalDocs = {
	shipping: {
		slug: "shipping",
		kicker: "Ownership",
		title: "Shipping & Returns",
		paragraphs: [
			"Orders are processed and dispatched within the stated timeframe. Tracking details are provided once the order ships.",
			"Returns are accepted within 14 days if the frame is unused and in original condition. Please contact us before returning any item.",
			"Full details are confirmed at the time of purchase."
		]
	},
	warranty: {
		slug: "warranty",
		kicker: "Ownership",
		title: "Warranty",
		paragraphs: [
			"DATUM frames are covered against manufacturing defects for 24 months from the date of purchase.",
			"Normal wear, accidental damage and improper adjustment are not covered.",
			"If you believe there is a manufacturing issue, contact us with your order details and photographs."
		]
	},
	privacy: {
		slug: "privacy",
		kicker: "Legal",
		title: "Privacy Policy",
		paragraphs: [
			"We collect only the information needed to respond to enquiries, appointments and orders: name, email, phone and message content you submit.",
			"This information is used to fulfil your request and is not sold. You may write to us to ask what we hold or to request deletion.",
			"The site may use essential cookies required for cart and form state."
		]
	},
	terms: {
		slug: "terms",
		kicker: "Legal",
		title: "Terms",
		paragraphs: [
			"This website is provided to present DATUM frames and related services. Product images are representative. Measurements are published in millimetres.",
			"Prices are shown in Indian rupees and may change. Orders and appointments are confirmed only after we reply.",
			"Use of this site is subject to Indian law."
		]
	},
	cookies: {
		slug: "cookies",
		kicker: "Legal",
		title: "Cookie Policy",
		paragraphs: ["Essential cookies store your cart locally on this device. They are required for the shopping experience.", "We do not use advertising cookies. You can clear local storage in your browser at any time."]
	}
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-VTyWoWrg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function SiteFooter() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t border-border bg-utility",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl tracking-[0.24em]",
					children: "DATUM"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-sm leading-relaxed text-muted",
					children: "I am calibrated. My judgment is exact, not decorated."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.2em] text-primary uppercase",
					children: "Navigate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						["/frames", "Frames"],
						["/craft", "Craft"],
						["/field-notes", "Field Notes"],
						["/house", "House"],
						["/appointments", "Appointments"],
						["/field-notes/fit", "Fit Guide"],
						["/craft/materials", "Materials"]
					].map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "text-fg/80 hover:text-primary",
						children: label
					}) }, to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.2em] text-primary uppercase",
					children: "Ownership"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						["/field-notes/care", "Care & Ownership"],
						["/shipping", "Shipping & Returns"],
						["/warranty", "Warranty"],
						["/appointments", "Appointments"],
						["/house/contact", "Contact"]
					].map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "text-fg/80 hover:text-primary",
						children: label
					}) }, to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.2em] text-primary uppercase",
						children: "Notes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: "Field notes from the studio"
					}),
					done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-primary",
						children: "Registered."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							if (email) setDone(true);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "sr-only",
								htmlFor: "notes-email",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "notes-email",
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "Email",
								className: "min-h-11 flex-1 border border-border bg-bg px-3 text-sm text-fg outline-none placeholder:text-muted"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "min-h-11 bg-primary px-4 text-[11px] tracking-[0.14em] text-bg uppercase",
								children: "Join"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-4 text-xs text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cookies",
								children: "Cookies"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 DATUM" })
						]
					})
				] })
			]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatInr(amount) {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0
	}).format(amount);
}
var useCart = create()(persist((set, get) => ({
	items: [],
	add: (slug) => {
		if (get().items.find((i) => i.slug === slug)) set({ items: get().items.map((i) => i.slug === slug ? {
			...i,
			qty: i.qty + 1
		} : i) });
		else set({ items: [...get().items, {
			slug,
			qty: 1
		}] });
	},
	remove: (slug) => set({ items: get().items.filter((i) => i.slug !== slug) }),
	setQty: (slug, qty) => {
		if (qty < 1) {
			set({ items: get().items.filter((i) => i.slug !== slug) });
			return;
		}
		set({ items: get().items.map((i) => i.slug === slug ? {
			...i,
			qty
		} : i) });
	},
	clear: () => set({ items: [] }),
	count: () => get().items.reduce((n, i) => n + i.qty, 0),
	total: () => get().items.reduce((n, i) => {
		const p = getProduct(i.slug);
		return n + (p ? p.price * i.qty : 0);
	}, 0)
}), { name: "datum-cart" }));
var nav = [
	{
		label: "Frames",
		to: "/frames",
		items: [
			{
				label: "All Frames",
				to: "/frames"
			},
			{
				label: "Titanium",
				to: "/frames/titanium"
			},
			{
				label: "Acetate",
				to: "/frames/acetate"
			},
			{
				label: "Metal",
				to: "/frames/metal"
			},
			{
				label: "Signature Series",
				to: "/frames/signatures"
			},
			{
				label: "New Releases",
				to: "/frames/new"
			}
		]
	},
	{
		label: "Craft",
		to: "/craft",
		items: [
			{
				label: "The Making",
				to: "/craft/making"
			},
			{
				label: "Materials",
				to: "/craft/materials"
			},
			{
				label: "Hinge & Adjustment",
				to: "/craft/hinge"
			},
			{
				label: "Inspection Standards",
				to: "/craft/inspection"
			},
			{
				label: "Packaging & Ownership",
				to: "/craft/packaging"
			}
		]
	},
	{
		label: "Field Notes",
		to: "/field-notes",
		items: [
			{
				label: "Latest Notes",
				to: "/field-notes/latest"
			},
			{
				label: "Fit & Proportion",
				to: "/field-notes/fit"
			},
			{
				label: "Materials Explained",
				to: "/field-notes/materials"
			},
			{
				label: "Care & Ownership",
				to: "/field-notes/care"
			},
			{
				label: "How-To / Know-How",
				to: "/field-notes/know-how"
			},
			{
				label: "Studio Dispatches",
				to: "/field-notes/dispatches"
			},
			{
				label: "Archive",
				to: "/field-notes/archive"
			}
		]
	}
];
var rightNav = [{
	label: "House",
	to: "/house",
	items: [
		{
			label: "Origin",
			to: "/house/origin"
		},
		{
			label: "Standards",
			to: "/house/standards"
		},
		{
			label: "World",
			to: "/house/world"
		},
		{
			label: "Contact",
			to: "/house/contact"
		}
	]
}, {
	label: "Appointments",
	to: "/appointments",
	items: [
		{
			label: "Private Fitting",
			to: "/appointments/fitting"
		},
		{
			label: "Request Appointment",
			to: "/appointments/request"
		},
		{
			label: "What to Expect",
			to: "/appointments/expect"
		}
	]
}];
function NavGroup({ item, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: item.to,
			className: "inline-flex min-h-11 items-center gap-1 px-2 text-[11px] font-medium tracking-[0.18em] uppercase text-fg/90 transition-colors hover:text-primary",
			children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3 opacity-60" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("invisible absolute top-full z-50 min-w-56 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100", align === "right" ? "right-0" : "left-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border border-border bg-surface py-2 shadow-xl",
				children: item.items.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: sub.to,
					className: "block min-h-11 px-4 py-2 text-sm text-fg/90 hover:bg-surface-2 hover:text-primary",
					children: sub.label
				}, sub.to))
			})
		})]
	});
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const count = useCart((s) => s.items.reduce((n, i) => n + i.qty, 0));
	(0, import_react.useEffect)(() => {
		setHydrated(true);
	}, []);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setSearchOpen(false);
	}, [pathname]);
	const results = q.trim() ? products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.materialLabel.toLowerCase().includes(q.toLowerCase())) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-utility px-4 py-2 text-center text-[10px] tracking-[0.22em] text-muted uppercase",
				children: "Complimentary fitting — Private appointments"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border bg-surface/95 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-3 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 lg:flex",
							"aria-label": "Primary",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavGroup, { item }, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center text-fg lg:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "justify-self-center font-display text-2xl tracking-[0.28em] text-fg",
							children: "DATUM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									className: "hidden items-center lg:flex",
									"aria-label": "House",
									children: rightNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavGroup, {
										item,
										align: "right"
									}, item.to))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "inline-flex size-11 items-center justify-center text-fg hover:text-primary",
									"aria-label": "Search frames",
									onClick: () => setSearchOpen(true),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/cart",
									className: "relative inline-flex size-11 items-center justify-center text-fg hover:text-primary",
									"aria-label": `Cart, ${count} items`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }), hydrated && count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-1.5 right-1.5 min-w-4 rounded-full bg-primary px-1 text-center text-[10px] font-medium text-bg",
										children: count
									})]
								})
							]
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[80vh] overflow-y-auto border-t border-border bg-bg lg:hidden",
					children: [...nav, ...rightNav].map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: group.to,
							className: "block py-2 text-[11px] tracking-[0.18em] text-primary uppercase",
							children: group.label
						}), group.items.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: sub.to,
							className: "block min-h-11 py-2 text-sm text-fg/90",
							children: sub.label
						}, sub.to))]
					}, group.to))
				})]
			}),
			searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-bg/80 p-4 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-16 max-w-lg border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.18em] text-muted uppercase",
								children: "Search frames"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "size-11 text-fg",
								"aria-label": "Close search",
								onClick: () => setSearchOpen(false),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mx-auto size-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoFocus: true,
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Thread, titanium, acetate…",
							className: "w-full border border-border bg-bg px-3 py-3 text-fg outline-none placeholder:text-muted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-1",
							children: [q && results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "py-4 text-sm text-muted",
								children: "No frames match that search."
							}), results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$slug",
								params: { slug: p.slug },
								className: "flex min-h-11 items-center justify-between px-1 py-2 text-sm hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: p.materialLabel
								})]
							}, p.slug))]
						})
					]
				})
			})
		]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var styles_default = "/assets/styles-CSwEmDXt.css";
var APP_NAME = "DATUM";
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-6 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.2em] text-primary uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: "Page not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "That path is not in the catalogue."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-8 inline-flex min-h-11 items-center bg-primary px-5 text-[11px] tracking-[0.16em] text-bg uppercase",
				children: "Home"
			})
		]
	});
}
var Route$19 = createRootRoute({
	notFoundComponent: NotFound,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "DATUM — sunglasses designed like drafting instruments. Measured, not decorated."
			},
			{
				name: "theme-color",
				content: "#0C1410"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$18 = () => import("./routes-VvAmDfU2.mjs");
var Route$18 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$18, "component"),
	head: () => ({ meta: [{ title: "DATUM — Measured, not decorated" }] })
});
var $$splitComponentImporter$17 = () => import("./cart-BmfZFWzp.mjs");
var Route$17 = createFileRoute("/cart")({
	component: lazyRouteComponent($$splitComponentImporter$17, "component"),
	head: () => ({ meta: [{ title: "Cart — DATUM" }] })
});
var $$splitComponentImporter$16 = () => import("./cookies-ZQTmsBni.mjs");
var Route$16 = createFileRoute("/cookies")({
	component: lazyRouteComponent($$splitComponentImporter$16, "component"),
	head: () => ({ meta: [{ title: "Cookies — DATUM" }] })
});
var $$splitComponentImporter$15 = () => import("./privacy-Dp29T-pX.mjs");
var Route$15 = createFileRoute("/privacy")({
	component: lazyRouteComponent($$splitComponentImporter$15, "component"),
	head: () => ({ meta: [{ title: "Privacy — DATUM" }] })
});
var $$splitComponentImporter$14 = () => import("./shipping-DmIikOdf.mjs");
var Route$14 = createFileRoute("/shipping")({
	component: lazyRouteComponent($$splitComponentImporter$14, "component"),
	head: () => ({ meta: [{ title: "Shipping & Returns — DATUM" }] })
});
var $$splitComponentImporter$13 = () => import("./terms-DiE9zZYL.mjs");
var Route$13 = createFileRoute("/terms")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => ({ meta: [{ title: "Terms — DATUM" }] })
});
var $$splitComponentImporter$12 = () => import("./warranty-BkbuzMug.mjs");
var Route$12 = createFileRoute("/warranty")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	head: () => ({ meta: [{ title: "Warranty — DATUM" }] })
});
var $$splitComponentImporter$11 = () => import("./appointments-BRSwUhgh.mjs");
var Route$11 = createFileRoute("/appointments/")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({ meta: [{ title: "Appointments — DATUM" }] })
});
var $$splitComponentImporter$10 = () => import("../_slug-DTJJJ7Qn.mjs");
var Route$10 = createFileRoute("/appointments/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: ({ params }) => ({ meta: [{ title: `${params.slug === "request" ? "Request Appointment" : appointmentDocs[params.slug]?.title ?? "Appointments"} — DATUM` }] })
});
var $$splitComponentImporter$9 = () => import("./craft-vVuXGVBj.mjs");
var Route$9 = createFileRoute("/craft/")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({ meta: [{ title: "Craft — DATUM" }] })
});
var $$splitComponentImporter$8 = () => import("../_slug-D98DAI0j.mjs");
var Route$8 = createFileRoute("/craft/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: ({ params }) => ({ meta: [{ title: `${craftDocs[params.slug]?.title ?? "Craft"} — DATUM` }] })
});
var $$splitComponentImporter$7 = () => import("./field-notes-CaTt5aJ1.mjs");
var Route$7 = createFileRoute("/field-notes/")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: "Field Notes — DATUM" }] })
});
var $$splitComponentImporter$6 = () => import("../_slug-CZUKJyke.mjs");
var Route$6 = createFileRoute("/field-notes/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: ({ params }) => ({ meta: [{ title: `${fieldDocs[params.slug]?.title ?? "Field Notes"} — DATUM` }] })
});
var $$splitComponentImporter$5 = () => import("./frames-DsV-Dmgy.mjs");
var Route$5 = createFileRoute("/frames/")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "Frames — DATUM" }] })
});
var $$splitComponentImporter$4 = () => import("../_filter-CZpFysJf.mjs");
var Route$4 = createFileRoute("/frames/$filter")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: ({ params }) => {
		return { meta: [{ title: `${frameFilters.find((x) => x.slug === params.filter)?.label ?? "Frames"} — DATUM` }] };
	}
});
var $$splitComponentImporter$3 = () => import("./house-C9JR71YM.mjs");
var Route$3 = createFileRoute("/house/")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "House — DATUM" }] })
});
var $$splitComponentImporter$2 = () => import("../_slug-D7JwECNI.mjs");
var Route$2 = createFileRoute("/house/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: ({ params }) => ({ meta: [{ title: `${params.slug === "contact" ? "Contact" : houseDocs[params.slug]?.title ?? "House"} — DATUM` }] })
});
var $$splitComponentImporter$1 = () => import("./legal._slug-CaLsyEx-.mjs");
var Route$1 = createFileRoute("/legal/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: ({ params }) => ({ meta: [{ title: `${legalDocs[params.slug]?.title ?? "DATUM"} — DATUM` }] })
});
var $$splitComponentImporter = () => import("./product._slug-BRy7KjIq.mjs");
var Route = createFileRoute("/product/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => {
		const p = getProduct(params.slug);
		return { meta: [{ title: p ? `${p.name} — DATUM` : "DATUM" }] };
	}
});
var IndexRoute = Route$18.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var CartRoute = Route$17.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$19
});
var CookiesRoute = Route$16.update({
	id: "/cookies",
	path: "/cookies",
	getParentRoute: () => Route$19
});
var PrivacyRoute = Route$15.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$19
});
var ShippingRoute = Route$14.update({
	id: "/shipping",
	path: "/shipping",
	getParentRoute: () => Route$19
});
var TermsRoute = Route$13.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$19
});
var WarrantyRoute = Route$12.update({
	id: "/warranty",
	path: "/warranty",
	getParentRoute: () => Route$19
});
var AppointmentsIndexRoute = Route$11.update({
	id: "/appointments/",
	path: "/appointments/",
	getParentRoute: () => Route$19
});
var AppointmentsSlugRoute = Route$10.update({
	id: "/appointments/$slug",
	path: "/appointments/$slug",
	getParentRoute: () => Route$19
});
var CraftIndexRoute = Route$9.update({
	id: "/craft/",
	path: "/craft/",
	getParentRoute: () => Route$19
});
var CraftSlugRoute = Route$8.update({
	id: "/craft/$slug",
	path: "/craft/$slug",
	getParentRoute: () => Route$19
});
var FieldNotesIndexRoute = Route$7.update({
	id: "/field-notes/",
	path: "/field-notes/",
	getParentRoute: () => Route$19
});
var FieldNotesSlugRoute = Route$6.update({
	id: "/field-notes/$slug",
	path: "/field-notes/$slug",
	getParentRoute: () => Route$19
});
var FramesIndexRoute = Route$5.update({
	id: "/frames/",
	path: "/frames/",
	getParentRoute: () => Route$19
});
var FramesFilterRoute = Route$4.update({
	id: "/frames/$filter",
	path: "/frames/$filter",
	getParentRoute: () => Route$19
});
var HouseIndexRoute = Route$3.update({
	id: "/house/",
	path: "/house/",
	getParentRoute: () => Route$19
});
var rootRouteChildren = {
	IndexRoute,
	CartRoute,
	CookiesRoute,
	PrivacyRoute,
	ShippingRoute,
	TermsRoute,
	WarrantyRoute,
	AppointmentsSlugRoute,
	CraftSlugRoute,
	FieldNotesSlugRoute,
	FramesFilterRoute,
	HouseSlugRoute: Route$2.update({
		id: "/house/$slug",
		path: "/house/$slug",
		getParentRoute: () => Route$19
	}),
	LegalSlugRoute: Route$1.update({
		id: "/legal/$slug",
		path: "/legal/$slug",
		getParentRoute: () => Route$19
	}),
	ProductSlugRoute: Route.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$19
	}),
	AppointmentsIndexRoute,
	CraftIndexRoute,
	FieldNotesIndexRoute,
	FramesIndexRoute,
	HouseIndexRoute
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { filterProducts as _, Route$4 as a, products as b, Route$10 as c, formatInr as d, appointmentDocs as f, legalDocs as g, houseDocs as h, Route$2 as i, useCart as l, fieldDocs as m, Route as n, Route$6 as o, craftDocs as p, Route$1 as r, Route$8 as s, router_exports as t, cn as u, frameFilters as v, getProduct as y };
