import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="mt-24 border-t border-border bg-utility">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-display text-2xl tracking-[0.24em]">DATUM</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            I am calibrated. My judgment is exact, not decorated.
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] text-primary uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/frames", "Frames"],
              ["/craft", "Craft"],
              ["/field-notes", "Field Notes"],
              ["/house", "House"],
              ["/appointments", "Appointments"],
              ["/field-notes/fit", "Fit Guide"],
              ["/craft/materials", "Materials"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to as never} className="text-fg/80 hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] text-primary uppercase">
            Ownership
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/field-notes/care", "Care & Ownership"],
              ["/shipping", "Shipping & Returns"],
              ["/warranty", "Warranty"],
              ["/appointments", "Appointments"],
              ["/house/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to as never} className="text-fg/80 hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] text-primary uppercase">
            Notes
          </p>
          <p className="mt-4 text-sm text-muted">Field notes from the studio</p>
          {done ? (
            <p className="mt-3 text-sm text-primary">Registered.</p>
          ) : (
            <form
              className="mt-3 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setDone(true);
              }}
            >
              <label className="sr-only" htmlFor="notes-email">
                Email
              </label>
              <input
                id="notes-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="min-h-11 flex-1 border border-border bg-bg px-3 text-sm text-fg outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                className="min-h-11 bg-primary px-4 text-[11px] tracking-[0.14em] text-bg uppercase"
              >
                Join
              </button>
            </form>
          )}
          <div className="mt-8 flex flex-wrap gap-4 text-xs text-muted">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cookies">Cookies</Link>
            <span>© 2026 DATUM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
