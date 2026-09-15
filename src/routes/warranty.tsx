import { createFileRoute } from "@tanstack/react-router";
import { DocView } from "@/components/doc-page";
import { legalDocs } from "@/lib/content";

export const Route = createFileRoute("/warranty")({
  component: () => <DocView page={legalDocs.warranty} />,
  head: () => ({ meta: [{ title: "Warranty — DATUM" }] }),
});
