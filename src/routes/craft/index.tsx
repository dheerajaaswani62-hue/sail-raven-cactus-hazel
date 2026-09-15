import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Prose } from "@/components/prose";

export const Route = createFileRoute("/craft/")({
  component: CraftPage,
  head: () => ({ meta: [{ title: "Craft — DATUM" }] }),
});

const steps = [
  ["Material selection", "Titanium, technical acetate or metal is chosen for structure, weight and long-term behaviour."],
  ["Design & drawing", "Proportion is established first. Measurements and silhouette are fixed before production begins."],
  ["Shaping", "Fronts and temples are cut and formed to precise tolerances."],
  ["Finishing", "Edges, surfaces and details are refined by hand and machine."],
  ["Assembly & hinge", "The frame is assembled. The adjustment hinge is set and checked."],
  ["Inspection", "Every frame passes measured checks for alignment, finish and function before it is released."],
  ["Packaging & ownership", "The finished frame is packed with its care notes and ownership information."],
];

function CraftPage() {
  return (
    <main>
      <PageIntro kicker="Process" title="Craft">
        <p>
          Every DATUM frame is treated as an instrument. The process is
          deliberate, repeatable and documented.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
        <img
          src="/images/editorial/hinge.jpg"
          alt="Hinge and finishing detail"
          className="max-h-[420px] w-full object-cover"
        />
      </div>
      <Prose>
        <ol className="space-y-8">
          {steps.map(([t, d], i) => (
            <li key={t}>
              <p className="text-[11px] tracking-[0.18em] text-primary uppercase">
                0{i + 1}
              </p>
              <h2 className="mt-1 font-display text-3xl">{t}</h2>
              <p className="mt-2 text-muted">{d}</p>
            </li>
          ))}
        </ol>
        <p className="pt-4">
          The process exists so the finished frame feels inevitable — measured,
          not decorated.
        </p>
        <div className="flex flex-wrap gap-4 pt-4 text-sm">
          <Link to="/craft/$slug" params={{ slug: "materials" }} className="text-primary">
            Materials
          </Link>
          <Link to="/craft/$slug" params={{ slug: "hinge" }} className="text-primary">
            Hinge & Adjustment
          </Link>
          <Link to="/craft/$slug" params={{ slug: "inspection" }} className="text-primary">
            Inspection Standards
          </Link>
          <Link to="/craft/$slug" params={{ slug: "packaging" }} className="text-primary">
            Packaging & Ownership
          </Link>
        </div>
      </Prose>
    </main>
  );
}
