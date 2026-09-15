export type Material = "titanium" | "acetate" | "metal";

export type Product = {
  slug: string;
  name: string;
  material: Material;
  materialLabel: string;
  size: string;
  lensWidth: number;
  bridge: number;
  temple: number;
  lensHeight: number;
  frameWidth: number;
  weight: number;
  price: number;
  image: string;
  signature?: boolean;
  isNew?: boolean;
  polarized?: boolean;
  summary: string;
  fitNote: string;
};

export const products: Product[] = [
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
    summary:
      "A fine titanium wire structure reduced to line. Designed for exact proportion with almost no visual mass.",
    fitNote: "Light on the face. Best for those who want presence without bulk.",
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
    summary:
      "Two-tone acetate with a clear front and a black structural edge. Colour is used as construction, not decoration.",
    fitNote: "Medium width. The bridge sits relatively high and stable.",
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
    summary:
      "Dense forest acetate cut to a square silhouette. Depth of colour is part of the material, not applied afterwards.",
    fitNote: "Designed for medium to wide faces. Temple pressure is even when correctly adjusted.",
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
    summary:
      "A round sand acetate form. Proportion is held by the circle, not by surface detail.",
    fitNote: "Slightly smaller lens width. Suits narrower to medium faces.",
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
    summary:
      "Black metal reduced to geometry. Structure is expressed as line, not mass.",
    fitNote: "Wider front. Narrower bridge. Check bridge width against a frame you already own.",
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
    summary:
      "Black acetate with polarised lenses. The silhouette is measured; the lens is functional.",
    fitNote: "Standard 52-20-145. A reliable starting measurement for many faces.",
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
    summary:
      "Tortoise acetate with polarised lenses. Pattern is inherent to the sheet, not printed.",
    fitNote: "Slightly compact front. Works well where a 52 feels wide.",
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
    summary:
      "Metal construction with polarised lenses. Line, weight and function held in one silhouette.",
    fitNote: "Medium-wide. Temple length 145 mm suits most adult heads.",
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
    summary:
      "Bone acetate with a quiet cream density. The colour is the material, finished to a measured edge.",
    fitNote: "Slightly wider bridge. Useful where a low or broader nose needs more rest.",
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
    summary:
      "Satin titanium with a restrained front. Built for daily wear without visual noise.",
    fitNote: "Light and stable. Check temple length if you prefer a longer arm.",
  },
];

export const frameFilters = [
  { slug: "all", label: "All Frames" },
  { slug: "titanium", label: "Titanium" },
  { slug: "acetate", label: "Acetate" },
  { slug: "metal", label: "Metal" },
  { slug: "signatures", label: "Signature Series" },
  { slug: "new", label: "New Releases" },
] as const;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function filterProducts(filter?: string) {
  if (!filter || filter === "all") return products;
  if (filter === "titanium" || filter === "acetate" || filter === "metal") {
    return products.filter((p) => p.material === filter);
  }
  if (filter === "signatures") return products.filter((p) => p.signature);
  if (filter === "new") return products.filter((p) => p.isNew);
  return products;
}
