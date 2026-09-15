import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Prose } from "@/components/prose";

export const Route = createFileRoute("/house/")({
  component: HousePage,
  head: () => ({ meta: [{ title: "House — DATUM" }] }),
});

function HousePage() {
  return (
    <main>
      <PageIntro kicker="House" title="DATUM">
        <p>
          DATUM is an independent eyewear house. We design and make frames as
          instruments — measured in material, proportion and finish.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-7xl px-4 pb-8 md:px-8">
        <img
          src="/images/editorial/world.jpg"
          alt="Drafting office still life with a DATUM frame"
          className="max-h-[440px] w-full object-cover"
        />
      </div>
      <Prose>
        <h2 className="font-display text-3xl">Origin</h2>
        <p>
          DATUM began from a simple observation: most eyewear is designed to
          look decorative. Very little is designed to feel exact. We started
          with the opposite approach.
        </p>
        <h2 className="font-display text-3xl">Standards</h2>
        <p>
          We accept only what can be measured and repeated. We refuse decoration
          for its own sake. We publish measurements. We document process. We
          treat fit as part of the design.
        </p>
        <h2 className="font-display text-3xl">World</h2>
        <p>
          The visual and conceptual world of DATUM is the drafting office:
          graphite, vellum, precise lines, instruments that are used rather than
          displayed.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/house/$slug" params={{ slug: "origin" }} className="text-primary">
            Origin
          </Link>
          <Link to="/house/$slug" params={{ slug: "standards" }} className="text-primary">
            Standards
          </Link>
          <Link to="/house/$slug" params={{ slug: "world" }} className="text-primary">
            World
          </Link>
          <Link to="/house/$slug" params={{ slug: "contact" }} className="text-primary">
            Contact
          </Link>
        </div>
      </Prose>
    </main>
  );
}
