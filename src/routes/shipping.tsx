import { createFileRoute } from "@tanstack/react-router";
import { DocView } from "@/components/doc-page";
import { legalDocs } from "@/lib/content";

export const Route = createFileRoute("/shipping")({
  component: () => <DocView page={legalDocs.shipping} />,
  head: () => ({ meta: [{ title: "Shipping & Returns — DATUM" }] }),
});
