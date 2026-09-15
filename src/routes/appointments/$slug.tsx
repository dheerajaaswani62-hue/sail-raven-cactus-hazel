import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { DocView } from "@/components/doc-page";
import { PageIntro } from "@/components/page-intro";
import { Prose } from "@/components/prose";
import { appointmentDocs } from "@/lib/content";

export const Route = createFileRoute("/appointments/$slug")({
  component: AppointmentDoc,
  head: ({ params }) => ({
    meta: [
      {
        title: `${params.slug === "request" ? "Request Appointment" : appointmentDocs[params.slug]?.title ?? "Appointments"} — DATUM`,
      },
    ],
  }),
});

function AppointmentDoc() {
  const { slug } = Route.useParams();
  if (slug === "request") {
    return (
      <main>
        <PageIntro kicker="Appointments" title="Request Appointment">
          <p>
            Please provide your details and preferred timing. We will respond to
            confirm the appointment.
          </p>
        </PageIntro>
        <Prose>
          <ContactForm appointment />
        </Prose>
      </main>
    );
  }
  const page = appointmentDocs[slug];
  if (!page) throw notFound();
  return (
    <DocView
      page={page}
      cta={{ to: "/appointments/request", label: "Request Appointment" }}
    />
  );
}
