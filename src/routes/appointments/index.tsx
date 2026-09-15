import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Prose } from "@/components/prose";

export const Route = createFileRoute("/appointments/")({
  component: Appointments,
  head: () => ({ meta: [{ title: "Appointments — DATUM" }] }),
});

function Appointments() {
  return (
    <main>
      <PageIntro kicker="Studio" title="Appointments">
        <p>A private session for frame selection and fit. Available by request.</p>
      </PageIntro>
      <Prose>
        <h2 className="font-display text-3xl">What the session includes</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>Guided review of available frames</li>
          <li>Proportion and measurement discussion</li>
          <li>Fit assessment</li>
          <li>Clear recommendation based on your requirements</li>
        </ul>
        <p>Duration: approximately 45–60 minutes (confirmed when scheduled).</p>
        <ol className="list-decimal space-y-2 pl-5 text-muted">
          <li>Submit a request using the form</li>
          <li>We confirm availability and details</li>
          <li>The session takes place (in-person or as arranged)</li>
        </ol>
        <Link
          to="/appointments/$slug"
          params={{ slug: "request" }}
          className="inline-flex min-h-11 items-center bg-primary px-5 text-[11px] tracking-[0.16em] text-bg uppercase"
        >
          Request Appointment
        </Link>
      </Prose>
    </main>
  );
}
