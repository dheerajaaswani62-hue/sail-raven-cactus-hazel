import { createFileRoute } from "@tanstack/react-router";
import { DocView } from "@/components/doc-page";
import { legalDocs } from "@/lib/content";

export const Route = createFileRoute("/cookies")({
  component: () => <DocView page={legalDocs.cookies} />,
  head: () => ({ meta: [{ title: "Cookies — DATUM" }] }),
});
