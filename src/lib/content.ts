export type DocPage = {
  slug: string;
  kicker: string;
  title: string;
  paragraphs: string[];
  lists?: { heading: string; items: string[] }[];
};

export const craftDocs: Record<string, DocPage> = {
  making: {
    slug: "making",
    kicker: "Craft",
    title: "The Making",
    paragraphs: [
      "Every DATUM frame follows a clear sequence.",
      "Material is selected for structure and behaviour. Proportion and measurements are fixed. Fronts and temples are shaped. Surfaces and edges are finished. The frame is assembled and the hinge is set. Final inspection is completed. The frame is packed for ownership.",
      "The process is deliberate so the finished frame feels inevitable.",
    ],
  },
  materials: {
    slug: "materials",
    kicker: "Craft",
    title: "Materials",
    paragraphs: [
      "We work with three primary materials. Each is chosen for structure, weight, behaviour over time, and how it accepts finish — not for surface effect.",
    ],
    lists: [
      {
        heading: "Titanium",
        items: [
          "Light, strong and highly resistant to corrosion.",
          "Allows thin, precise structures without excess weight.",
          "Brushed or satin-finished for a controlled, non-reflective appearance.",
          "Best suited for fine wire and minimal constructions.",
        ],
      },
      {
        heading: "Acetate",
        items: [
          "Offers depth of colour, density and the ability to take a high polish.",
          "Can be cut, shaped and finished to exact proportions.",
          "When properly selected and worked, it feels substantial without being heavy.",
          "Best suited for frames that need colour, presence and a refined edge.",
        ],
      },
      {
        heading: "Metal",
        items: [
          "Allows clean lines and structural clarity.",
          "Used where the design requires strength in thin sections or a precise geometric expression.",
          "Best suited for architectural silhouettes and frames that rely on line rather than mass.",
        ],
      },
    ],
  },
  hinge: {
    slug: "hinge",
    kicker: "Craft",
    title: "Hinge & Adjustment",
    paragraphs: [
      "The hinge is a functional element, not a decorative detail. It is designed for controlled adjustment and long-term stability.",
      "Temple tension can be fine-tuned. Alignment is checked during inspection. The goal is even pressure and secure fit without excess force.",
      "Detailed torque specifications will be published with the first physical release.",
    ],
  },
  inspection: {
    slug: "inspection",
    kicker: "Craft",
    title: "Inspection Standards",
    paragraphs: ["Every frame is checked before it is released. Frames that do not meet the standard are not released."],
    lists: [
      {
        heading: "We inspect",
        items: [
          "Alignment of the front",
          "Temple symmetry and tension",
          "Surface finish",
          "Hinge function",
          "Overall measurements against specification",
        ],
      },
    ],
  },
  packaging: {
    slug: "packaging",
    kicker: "Craft",
    title: "Packaging & Ownership",
    paragraphs: [
      "The packaging is functional. It protects the frame and provides the basic information needed for long-term use.",
    ],
    lists: [
      {
        heading: "Each frame is packed with",
        items: [
          "Protective case",
          "Cleaning cloth",
          "Care notes",
          "Ownership information",
        ],
      },
    ],
  },
};

export const houseDocs: Record<string, DocPage> = {
  origin: {
    slug: "origin",
    kicker: "House",
    title: "Origin",
    paragraphs: [
      "DATUM began from a clear observation: most eyewear is designed to appear decorative. Very little is designed to feel exact.",
      "We started with the opposite approach. Every decision begins with measurement, material behaviour and long-term wear. The result is a small independent house that treats frames as instruments.",
    ],
  },
  standards: {
    slug: "standards",
    kicker: "House",
    title: "Standards",
    paragraphs: [
      "We accept only what can be measured and repeated. We refuse decoration for its own sake. We publish measurements. We document process. We treat fit as part of the design, not an afterthought.",
      "These standards guide every frame that carries the DATUM name.",
    ],
  },
  world: {
    slug: "world",
    kicker: "House",
    title: "World",
    paragraphs: [
      "The working reference for DATUM is the drafting office: graphite, vellum, precise lines, and instruments that are used rather than displayed.",
      "This is not nostalgia. It is a practical reference for clarity, restraint and exactness in design.",
    ],
  },
};

export const fieldDocs: Record<string, DocPage> = {
  latest: {
    slug: "latest",
    kicker: "Field Notes",
    title: "Latest Notes",
    paragraphs: [
      "The most recent Field Notes appear here. New notes are added as they are written.",
      "How-To articles are being prepared. Fit, materials and care notes are available now.",
    ],
  },
  fit: {
    slug: "fit",
    kicker: "Field Notes",
    title: "Fit & Proportion",
    paragraphs: [
      "Fit is part of the design. A frame that is correctly proportioned feels stable, balanced and almost invisible in daily use.",
      "Every DATUM frame is listed with three core measurements: Lens Width – Bridge – Temple Length. Example: 52 – 20 – 145.",
      "Compare the numbers to a frame you already own and like. Check bridge width first — this decides how the frame sits on your nose. Check total frame width against your face width. Temple length affects how the frame holds behind the ear.",
      "Measurements give the most reliable starting point. Shape names are secondary. If you want personal guidance, request a private appointment.",
    ],
    lists: [
      {
        heading: "What the numbers mean",
        items: [
          "Lens Width — width of one lens",
          "Bridge — distance between the lenses over the nose",
          "Temple Length — length of the arm from hinge to tip",
          "We also publish lens height, total frame width and weight",
        ],
      },
      {
        heading: "Common fit notes",
        items: [
          "Narrow faces usually need smaller lens width and shorter temple length.",
          "Wider faces need greater frame width and a wider bridge.",
          "A low bridge often needs a carefully shaped bridge or adjustable pads.",
          "Heavy frames or thick acetate need correct temple tension to avoid slipping.",
        ],
      },
    ],
  },
  materials: {
    slug: "materials",
    kicker: "Field Notes",
    title: "Materials Explained",
    paragraphs: [
      "Detailed notes on titanium, acetate and metal — how each material behaves, why it is chosen, and what it means for weight, finish and longevity.",
      "See also the Craft materials page for the full material logic of the house.",
    ],
  },
  care: {
    slug: "care",
    kicker: "Field Notes",
    title: "Care & Ownership",
    paragraphs: [
      "Daily care protects the finish, alignment and longevity of the frame.",
      "Each frame is intended for long-term use. Proper care and occasional adjustment maintain the original measured fit.",
    ],
    lists: [
      {
        heading: "Basic care",
        items: [
          "Clean lenses with a proper microfibre cloth",
          "Avoid paper or clothing that can scratch",
          "Store the frame in its case when not in use",
          "Keep away from extreme heat",
        ],
      },
      {
        heading: "Adjustment",
        items: [
          "Temple tension and alignment should be checked periodically.",
          "If the frame feels uneven or loose, request professional adjustment.",
        ],
      },
    ],
  },
  "know-how": {
    slug: "know-how",
    kicker: "Field Notes",
    title: "How-To / Know-How",
    paragraphs: [
      "Practical answers to common questions about fit, materials, care, measurements and choosing a frame.",
      "This section is reserved for searchable notes. Articles will be added here.",
    ],
  },
  dispatches: {
    slug: "dispatches",
    kicker: "Field Notes",
    title: "Studio Dispatches",
    paragraphs: [
      "Short notes from the studio — observations on process, materials and current work.",
      "No dispatches published yet.",
    ],
  },
  archive: {
    slug: "archive",
    kicker: "Field Notes",
    title: "Archive",
    paragraphs: ["Older Field Notes organised by topic. The archive is empty while the first notes are written."],
  },
};

export const appointmentDocs: Record<string, DocPage> = {
  fitting: {
    slug: "fitting",
    kicker: "Appointments",
    title: "Private Fitting",
    paragraphs: [
      "A focused session dedicated to finding the correct frame and fit.",
      "We examine face proportions, bridge fit, temple length and pressure, and overall balance and comfort.",
      "The goal is a frame that feels stable and exact — not merely stylish. You may try multiple frames during the session. Measurements are referenced throughout.",
    ],
  },
  expect: {
    slug: "expect",
    kicker: "Appointments",
    title: "What to Expect",
    paragraphs: [
      "Before the session you will receive a confirmation with time, location and any preparation notes.",
      "During the session: a brief discussion of your requirements, a review of relevant frames, measurement and fit assessment, then a recommendation and next steps.",
      "After the session you receive a clear summary of the recommended frames and how to proceed. The session is calm, technical and focused on fit and proportion. There is no pressure to purchase on the day.",
    ],
  },
};

export const legalDocs: Record<string, DocPage> = {
  shipping: {
    slug: "shipping",
    kicker: "Ownership",
    title: "Shipping & Returns",
    paragraphs: [
      "Orders are processed and dispatched within the stated timeframe. Tracking details are provided once the order ships.",
      "Returns are accepted within 14 days if the frame is unused and in original condition. Please contact us before returning any item.",
      "Full details are confirmed at the time of purchase.",
    ],
  },
  warranty: {
    slug: "warranty",
    kicker: "Ownership",
    title: "Warranty",
    paragraphs: [
      "DATUM frames are covered against manufacturing defects for 24 months from the date of purchase.",
      "Normal wear, accidental damage and improper adjustment are not covered.",
      "If you believe there is a manufacturing issue, contact us with your order details and photographs.",
    ],
  },
  privacy: {
    slug: "privacy",
    kicker: "Legal",
    title: "Privacy Policy",
    paragraphs: [
      "We collect only the information needed to respond to enquiries, appointments and orders: name, email, phone and message content you submit.",
      "This information is used to fulfil your request and is not sold. You may write to us to ask what we hold or to request deletion.",
      "The site may use essential cookies required for cart and form state.",
    ],
  },
  terms: {
    slug: "terms",
    kicker: "Legal",
    title: "Terms",
    paragraphs: [
      "This website is provided to present DATUM frames and related services. Product images are representative. Measurements are published in millimetres.",
      "Prices are shown in Indian rupees and may change. Orders and appointments are confirmed only after we reply.",
      "Use of this site is subject to Indian law.",
    ],
  },
  cookies: {
    slug: "cookies",
    kicker: "Legal",
    title: "Cookie Policy",
    paragraphs: [
      "Essential cookies store your cart locally on this device. They are required for the shopping experience.",
      "We do not use advertising cookies. You can clear local storage in your browser at any time.",
    ],
  },
};
