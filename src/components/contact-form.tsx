import { useState } from "react";

export function ContactForm({
  appointment,
}: {
  appointment?: boolean;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="border border-border bg-surface p-6 text-sm">
        Request received. We will confirm details by email.
      </p>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <Field label="Full name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" />
      {appointment && (
        <>
          <Field label="Preferred date / time" name="when" />
          <Field label="City" name="city" />
        </>
      )}
      <div>
        <label htmlFor="message" className="text-[11px] tracking-[0.16em] text-muted uppercase">
          {appointment ? "Requirements (optional)" : "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full border border-border bg-bg px-3 py-3 text-fg outline-none"
        />
      </div>
      <button
        type="submit"
        className="min-h-11 bg-primary px-6 text-[11px] tracking-[0.16em] text-bg uppercase"
      >
        {appointment ? "Submit Request" : "Send Message"}
      </button>
      {appointment && (
        <p className="text-sm text-muted">
          This is a request form. Final confirmation will be sent by us.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] tracking-[0.16em] text-muted uppercase">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 min-h-11 w-full border border-border bg-bg px-3 text-fg outline-none"
      />
    </div>
  );
}
