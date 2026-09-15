import { createFileRoute, notFound } from "@tanstack/react-router";
import { DocView } from "@/components/doc-page";
import { legalDocs } from "@/lib/content";

export const Route = createFileRoute("/legal/$slug")({
  component: LegalDoc,
  head: ({ params }) => ({
    meta: [{ title: `${legalDocs[params.slug]?.title ?? "DATUM"} — DATUM` }],
  }),
});

function LegalDoc() {
  const { slug } = Route.useParams();
  const page = legalDocs[slug];
  if (!page) throw notFound();
  return <DocView page={page} />;
}
