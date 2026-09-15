import { createFileRoute, notFound } from "@tanstack/react-router";
import { DocView } from "@/components/doc-page";
import { houseDocs } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { Prose } from "@/components/prose";

export const Route = createFileRoute("/house/$slug")({
  component: HouseDoc,
  head: ({ params }) => ({
    meta: [
      {
        title: `${params.slug === "contact" ? "Contact" : houseDocs[params.slug]?.title ?? "House"} — DATUM`,
      },
    ],
  }),
});

function HouseDoc() {
  const { slug } = Route.useParams();
  if (slug === "contact") {
    return (
      <main>
        <PageIntro kicker="House" title="Contact">
          <p>
            For questions, private appointments or studio enquiries, please use
            the form below.
          </p>
        </PageIntro>
        <Prose>
          <ContactForm />
        </Prose>
      </main>
    );
  }
  const page = houseDocs[slug];
  if (!page) throw notFound();
  return (
    <DocView
      page={page}
      image={
        slug === "world"
          ? {
              src: "/images/editorial/world.jpg",
              alt: "Drafting instruments and a DATUM frame",
            }
          : undefined
      }
    />
  );
}
