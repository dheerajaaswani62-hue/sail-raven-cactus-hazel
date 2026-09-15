import { Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Prose } from "@/components/prose";
import type { DocPage } from "@/lib/content";

export function DocView({
  page,
  image,
  cta,
}: {
  page: DocPage;
  image?: { src: string; alt: string };
  cta?: { to: string; label: string };
}) {
  return (
    <main>
      <PageIntro kicker={page.kicker} title={page.title}>
        {page.paragraphs.slice(0, 1).map((p) => (
          <p key={p}>{p}</p>
        ))}
      </PageIntro>
      {image && (
        <div className="mx-auto max-w-7xl px-4 pb-8 md:px-8">
          <img src={image.src} alt={image.alt} className="max-h-[420px] w-full object-cover" />
        </div>
      )}
      <Prose>
        {page.paragraphs.slice(1).map((p) => (
          <p key={p}>{p}</p>
        ))}
        {page.lists?.map((list) => (
          <div key={list.heading}>
            <h2 className="font-display text-3xl">{list.heading}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              {list.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        {cta && (
          <Link
            to="/appointments/$slug"
            params={{ slug: "request" }}
            className="inline-flex min-h-11 items-center bg-primary px-5 text-[11px] tracking-[0.16em] text-bg uppercase"
          >
            {cta.label}
          </Link>
        )}
      </Prose>
    </main>
  );
}
