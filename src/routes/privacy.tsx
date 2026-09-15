import { createFileRoute } from "@tanstack/react-router";
import { DocView } from "@/components/doc-page";
import { legalDocs } from "@/lib/content";

export const Route = createFileRoute("/privacy")({
  component: () => <DocView page={legalDocs.privacy} />,
  head: () => ({ meta: [{ title: "Privacy — DATUM" }] }),
});
