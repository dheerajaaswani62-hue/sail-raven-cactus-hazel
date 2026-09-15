import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";

export const Route = createFileRoute("/field-notes/")({
  component: FieldNotes,
  head: () => ({ meta: [{ title: "Field Notes — DATUM" }] }),
});

const cats = [
  ["/field-notes/latest", "Latest Notes", "Newest articles"],
  ["/field-notes/fit", "Fit & Proportion", "How frames should sit"],
  ["/field-notes/materials", "Materials Explained", "Titanium, acetate, metal"],
  ["/field-notes/care", "Care & Ownership", "Daily care and longevity"],
  ["/field-notes/know-how", "How-To / Know-How", "Question-based notes — coming"],
  ["/field-notes/dispatches", "Studio Dispatches", "Short studio observations"],
  ["/field-notes/archive", "Archive", "Older notes by topic"],
];

function FieldNotes() {
  return (
    <main>
      <PageIntro kicker="Editorial" title="Field Notes">
        <p>
          Short notes on materials, fit, care, process and the work of making.
          Written for those who want clear information before and after
          ownership.
        </p>
      </PageIntro>
      <div className="mx-auto grid max-w-5xl gap-4 px-4 pb-20 md:grid-cols-2 md:px-8">
        {cats.map(([to, t, d]) => (
          <Link
            key={to}
            to={("/field-notes/$slug" as const)}
            params={{ slug: to.replace("/field-notes/", "") }}
            className="border border-border bg-surface p-6 hover:border-primary"
          >
            <h2 className="font-display text-3xl">{t}</h2>
            <p className="mt-2 text-sm text-muted">{d}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
