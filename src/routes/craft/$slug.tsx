import { createFileRoute, notFound } from "@tanstack/react-router";
import { DocView } from "@/components/doc-page";
import { craftDocs } from "@/lib/content";

export const Route = createFileRoute("/craft/$slug")({
  component: CraftDoc,
  head: ({ params }) => ({
    meta: [{ title: `${craftDocs[params.slug]?.title ?? "Craft"} — DATUM` }],
  }),
});

function CraftDoc() {
  const { slug } = Route.useParams();
  const page = craftDocs[slug];
  if (!page) throw notFound();
  return (
    <DocView
      page={page}
      image={
        slug === "hinge" || slug === "making"
          ? { src: "/images/editorial/hinge.jpg", alt: "Hinge detail" }
          : undefined
      }
    />
  );
}
