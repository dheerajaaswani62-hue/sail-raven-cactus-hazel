import { createFileRoute } from "@tanstack/react-router";
import { DocView } from "@/components/doc-page";
import { legalDocs } from "@/lib/content";

export const Route = createFileRoute("/terms")({
  component: () => <DocView page={legalDocs.terms} />,
  head: () => ({ meta: [{ title: "Terms — DATUM" }] }),
});
