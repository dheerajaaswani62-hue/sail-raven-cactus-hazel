import { createFileRoute, notFound } from "@tanstack/react-router";
import { FramesGrid } from "@/components/frames-grid";
import { PageIntro } from "@/components/page-intro";
import { frameFilters } from "@/lib/products";

export const Route = createFileRoute("/frames/$filter")({
  component: FilteredFrames,
  head: ({ params }) => {
    const f = frameFilters.find((x) => x.slug === params.filter);
    return { meta: [{ title: `${f?.label ?? "Frames"} — DATUM` }] };
  },
});

const copy: Record<string, { title: string; text: string }> = {
  titanium: {
    title: "Titanium",
    text: "Light, strong and precise. Titanium allows thin structures without excess weight.",
  },
  acetate: {
    title: "Acetate",
    text: "Depth of colour, density and a refined edge. Colour is the material, not a coating.",
  },
  metal: {
    title: "Metal",
    text: "Clean lines and structural clarity. Used where the design requires strength in thin sections.",
  },
  signatures: {
    title: "Signature Series",
    text: "Permanent designs that stay in the catalogue. Each silhouette earns its place through proportion and material.",
  },
  new: {
    title: "New Releases",
    text: "Latest instruments added to the catalogue.",
  },
};

function FilteredFrames() {
  const { filter } = Route.useParams();
  if (!frameFilters.some((f) => f.slug === filter) || filter === "all") {
    throw notFound();
  }
  const c = copy[filter] ?? { title: "Frames", text: "" };
  return (
    <main>
      <PageIntro kicker="Catalogue" title={c.title}>
        <p>{c.text}</p>
      </PageIntro>
      <FramesGrid filter={filter} />
    </main>
  );
}
