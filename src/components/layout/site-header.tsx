import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";
import { useCart } from "@/store/cart";

const nav = [
  {
    label: "Frames",
    to: "/frames",
    items: [
      { label: "All Frames", to: "/frames" },
      { label: "Titanium", to: "/frames/titanium" },
      { label: "Acetate", to: "/frames/acetate" },
      { label: "Metal", to: "/frames/metal" },
      { label: "Signature Series", to: "/frames/signatures" },
      { label: "New Releases", to: "/frames/new" },
    ],
  },
  {
    label: "Craft",
    to: "/craft",
    items: [
      { label: "The Making", to: "/craft/making" },
      { label: "Materials", to: "/craft/materials" },
      { label: "Hinge & Adjustment", to: "/craft/hinge" },
      { label: "Inspection Standards", to: "/craft/inspection" },
      { label: "Packaging & Ownership", to: "/craft/packaging" },
    ],
  },
  {
    label: "Field Notes",
    to: "/field-notes",
    items: [
      { label: "Latest Notes", to: "/field-notes/latest" },
      { label: "Fit & Proportion", to: "/field-notes/fit" },
      { label: "Materials Explained", to: "/field-notes/materials" },
      { label: "Care & Ownership", to: "/field-notes/care" },
      { label: "How-To / Know-How", to: "/field-notes/know-how" },
      { label: "Studio Dispatches", to: "/field-notes/dispatches" },
      { label: "Archive", to: "/field-notes/archive" },
    ],
  },
];

const rightNav = [
  {
    label: "House",
    to: "/house",
    items: [
      { label: "Origin", to: "/house/origin" },
      { label: "Standards", to: "/house/standards" },
      { label: "World", to: "/house/world" },
      { label: "Contact", to: "/house/contact" },
    ],
  },
  {
    label: "Appointments",
    to: "/appointments",
    items: [
      { label: "Private Fitting", to: "/appointments/fitting" },
      { label: "Request Appointment", to: "/appointments/request" },
      { label: "What to Expect", to: "/appointments/expect" },
    ],
  },
];

function NavGroup({
  item,
  align = "left",
}: {
  item: (typeof nav)[number];
  align?: "left" | "right";
}) {
  return (
    <div className="group relative">
        <Link
          to={item.to as never}
        className="inline-flex min-h-11 items-center gap-1 px-2 text-[11px] font-medium tracking-[0.18em] uppercase text-fg/90 transition-colors hover:text-primary"
      >
        {item.label}
        <ChevronDown className="size-3 opacity-60" />
      </Link>
      <div
        className={cn(
          "invisible absolute top-full z-50 min-w-56 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
          align === "right" ? "right-0" : "left-0",
        )}
      >
        <div className="border border-border bg-surface py-2 shadow-xl">
          {item.items.map((sub) => (
            <Link
              key={sub.to}
              to={sub.to as never}
              className="block min-h-11 px-4 py-2 text-sm text-fg/90 hover:bg-surface-2 hover:text-primary"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [hydrated, setHydrated] = useState(false);
  const count = useCart((s) => s.items.reduce((n, i) => n + i.qty, 0));

  useEffect(() => {
    setHydrated(true);
  }, []);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const results = q.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q.toLowerCase()) ||
          p.materialLabel.toLowerCase().includes(q.toLowerCase()),
      )
    : [];

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-utility px-4 py-2 text-center text-[10px] tracking-[0.22em] text-muted uppercase">
        Complimentary fitting — Private appointments
      </div>
      <div className="border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-3 md:px-8">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <NavGroup key={item.to} item={item} />
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-fg lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <Link
            to="/"
            className="justify-self-center font-display text-2xl tracking-[0.28em] text-fg"
          >
            DATUM
          </Link>

          <div className="flex items-center justify-end gap-1">
            <nav className="hidden items-center lg:flex" aria-label="House">
              {rightNav.map((item) => (
                <NavGroup key={item.to} item={item} align="right" />
              ))}
            </nav>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center text-fg hover:text-primary"
              aria-label="Search frames"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="size-4" />
            </button>
            <Link
              to="/cart"
              className="relative inline-flex size-11 items-center justify-center text-fg hover:text-primary"
              aria-label={`Cart, ${count} items`}
            >
              <ShoppingBag className="size-4" />
              {hydrated && count > 0 && (
                <span className="absolute top-1.5 right-1.5 min-w-4 rounded-full bg-primary px-1 text-center text-[10px] font-medium text-bg">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>

        {open && (
          <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-bg lg:hidden">
            {[...nav, ...rightNav].map((group) => (
              <div key={group.to} className="border-b border-border px-4 py-3">
                <Link
                  to={group.to as never}
                  className="block py-2 text-[11px] tracking-[0.18em] text-primary uppercase"
                >
                  {group.label}
                </Link>
                {group.items.map((sub) => (
                  <Link
                    key={sub.to}
                    to={sub.to as never}
                    className="block min-h-11 py-2 text-sm text-fg/90"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-bg/80 p-4 backdrop-blur-sm">
          <div className="mx-auto mt-16 max-w-lg border border-border bg-surface p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
                Search frames
              </p>
              <button
                type="button"
                className="size-11 text-fg"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
              >
                <X className="mx-auto size-4" />
              </button>
            </div>
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Thread, titanium, acetate…"
              className="w-full border border-border bg-bg px-3 py-3 text-fg outline-none placeholder:text-muted"
            />
            <div className="mt-3 space-y-1">
              {q && results.length === 0 && (
                <p className="py-4 text-sm text-muted">No frames match that search.</p>
              )}
              {results.map((p) => (
                <Link
                  key={p.slug}
                  to="/product/$slug"
                  params={{ slug: p.slug }}
                  className="flex min-h-11 items-center justify-between px-1 py-2 text-sm hover:text-primary"
                >
                  <span>{p.name}</span>
                  <span className="text-muted">{p.materialLabel}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
