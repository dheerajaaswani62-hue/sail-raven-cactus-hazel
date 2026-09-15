import { createFileRoute, notFound } from "@tanstack/react-router";
import { DocView } from "@/components/doc-page";
import { fieldDocs } from "@/lib/content";

export const Route = createFileRoute("/field-notes/$slug")({
  component: FieldDoc,
  head: ({ params }) => ({
    meta: [{ title: `${fieldDocs[params.slug]?.title ?? "Field Notes"} — DATUM` }],
  }),
});

function FieldDoc() {
  const { slug } = Route.useParams();
  const page = fieldDocs[slug];
  if (!page) throw notFound();
  return (
    <DocView
      page={page}
      cta={
        slug === "fit"
          ? { to: "/appointments/request", label: "Request Appointment" }
          : undefined
      }
    />
  );
}
