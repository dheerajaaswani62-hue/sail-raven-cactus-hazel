import { createFileRoute } from "@tanstack/react-router";
import { FramesGrid } from "@/components/frames-grid";
import { PageIntro } from "@/components/page-intro";

export const Route = createFileRoute("/frames/")({
  component: FramesPage,
  head: () => ({ meta: [{ title: "Frames — DATUM" }] }),
});

function FramesPage() {
  return (
    <main>
      <PageIntro kicker="Catalogue" title="Frames">
        <p>
          A considered selection of frames. Each one is designed as an
          instrument — measured in material, proportion and finish.
        </p>
      </PageIntro>
      <FramesGrid filter="all" />
    </main>
  );
}
