import type { ProjectCopyBook } from ".";

const en: ProjectCopyBook = {
  "saha-santiye": {
    name: "Field & Site Operations",
    industry: "TELECOM & FIELD OPERATIONS",
    summary:
      "Operations systems for telecom and fibre field companies, built with two different approaches to the same problem.",
    headline: "Field work, visible in the office as it happens.",
    problem:
      "Daily jobs, crews, material movements, field records and progress payments end up scattered across messages and separate spreadsheets, so what is done and what is waiting shows up late.",
    solution:
      "A SaaS approach that several companies can use in their own workspace (MK OPS) and a management system set up around one company's operations (Şantiye Yönetim).",
    modules: [
      "Daily job entry and approvals",
      "Crew and project management",
      "Material and stock tracking",
      "Payment periods and reports",
    ],
    alt: "Jobs awaiting approval in the MK OPS demo, with sample data",
    parts: {
      "mk-ops": {
        name: "MK OPS",
        description: "A SaaS approach where several companies work in their own role-based workspace.",
      },
      "santiye-yonetim": {
        name: "Şantiye Yönetim",
        description: "A panel set up around one company's operations, with secure session handling.",
      },
    },
  },
  "mk-adisyon": {
    industry: "RESTAURANTS & CAFÉS",
    summary: "An ordering and bill flow for restaurants and cafés, on the web and on mobile.",
    headline: "From the first order to closing the bill.",
    problem:
      "Waiters, kitchen and cashier need to see which stage the same order has reached.",
    solution:
      "A web app that brings waiter, kitchen, cashier and management screens into one flow, plus a mobile app for taking orders on the phone.",
    modules: ["Waiter", "Kitchen", "Cashier", "Management", "Mobile ordering"],
    alt: "Restaurant workflow across waiter, kitchen, cashier and management",
    parts: {
      web: { name: "Web app", description: "Waiter, kitchen, cashier and management screens." },
      mobile: { name: "Mobile app", description: "Android app, currently in closed testing on Google Play." },
    },
  },
  "mk-farm": {
    industry: "AGRICULTURE & LIVESTOCK",
    summary: "A management app that connects individual animal records with the farm's daily work.",
    headline: "A clearer record for every animal.",
    problem:
      "Individual animal records must be tracked alongside the farm's daily operations.",
    solution:
      "A farm management app that brings together QR identity, weighing and health history.",
    modules: ["QR identity", "Weight history", "Health records"],
    alt: "Real overview screen of the MK Farm app",
  },
  "mk-resepsiyon": {
    industry: "HOSPITALITY",
    summary:
      "An operations system for hotels and guesthouses connecting the room plan, check-in and payments.",
    headline: "A calmer day at reception.",
    problem: "Reservations, room status and payments are parts of the same guest experience.",
    solution:
      "A hotel operations system connecting the room plan, check-in, payments and management screens.",
    modules: ["Room plan", "Guest check-in", "Payments & records"],
    alt: "Workflow connecting the room plan, guest check-in and payments",
  },
  "mk-pati": {
    industry: "VETERINARY CLINICS",
    summary:
      "Patient, examination, vaccination and appointment management for veterinary clinics, with an AI clinic assistant.",
    headline: "Patient history on one screen.",
    problem:
      "When patient cards, vaccination schedules and appointments live in different places, follow-up slips.",
    solution:
      "A clinic management system that combines patient, examination, vaccination and appointment records, supported by an AI clinic assistant.",
    modules: ["Patient records", "Examinations & vaccinations", "Appointments", "AI clinic assistant"],
    alt: "Clinic workflow connecting patients, examinations, vaccinations and appointments",
  },
  "mk-kargo": {
    industry: "CARGO & LOGISTICS",
    summary:
      "A customer site that calculates prices for bus cargo companies and an operations panel that manages orders.",
    headline: "One flow from request to delivery.",
    problem: "Price questions, shipment requests and order statuses get scattered across calls and messages.",
    solution:
      "A customer site that calculates prices instantly by size and route, and an operations panel for requests, orders, vehicles and document exports.",
    modules: ["Instant price calculation", "Shipment requests", "Order and vehicle management", "PDF and Excel exports"],
    alt: "Cargo workflow connecting price calculation, requests and order management",
  },
  namehub: {
    industry: "DIGITAL PRODUCT",
    summary: "A naming platform with suggestions for babies, pets, brands and usernames.",
    alt: "NameHub home page",
  },
  aria: {
    industry: "SOCIAL PLATFORM",
    summary:
      "A social platform interface for a photography and nature community: feed, profiles, follows, messaging and uploads.",
    alt: "Explore feed of the ARIA social platform",
  },
  "mavi-kadraj-arsiv": {
    industry: "PHOTO ARCHIVE",
    summary: "A photo archive that can be searched and filtered by topic and city.",
    alt: "Home page of the Mavi Kadraj photo archive",
  },
  "kadraj-rotam": {
    industry: "PHOTO ROUTES",
    summary: "A platform for local and global photography routes, field notes and discovery guides.",
    alt: "Kadraj Rotam home page",
  },
  aura: {
    industry: "MOBILE APP",
    summary: "A simple app for daily journaling and mood tracking.",
    alt: "Opening screen of the Aura app",
  },
  "is-takip": {
    name: "Job Tracker",
    industry: "JOB TRACKING",
    summary: "A job tracking app for following the status and owner of daily work in one place.",
    alt: "Screen of the job tracking app",
  },
  "gunluk-imalat": {
    name: "Daily Production Card",
    industry: "MANUFACTURING",
    summary: "An app that turns daily production records on the shop floor into a digital card.",
    alt: "Screen of the Daily Production Card app",
  },
  "mavi-sarkilar": {
    industry: "MUSIC & ARTIST",
    summary:
      "A web experience for a musician: Spotify showcase, music videos, concert dates and a newsletter area.",
    alt: "Opening screen of the Mavi Şarkılar artist site",
  },
  musty: {
    industry: "CINEMATIC PORTFOLIO",
    summary:
      "A cinematic, bilingual portfolio experience for a visual artist: gallery, video and frames.",
    alt: "Opening screen of the Musty portfolio site",
  },
  "mavi-kadraj-otel": {
    industry: "HOTEL WEBSITE",
    summary:
      "A sample hotel and guesthouse website with room pages, a gallery and a step-by-step booking flow.",
    alt: "Opening screen of the Mavi Kadraj Otel sample website",
  },
  "mavi-kafe": {
    industry: "CAFÉ & RESTAURANT WEBSITE",
    summary: "A sample café and restaurant website with a digital menu, gallery and booking flow.",
    alt: "Opening screen of the Mavi Kafe sample website",
  },
  "mavi-guzellik": {
    industry: "BEAUTY SALON WEBSITE",
    summary:
      "A sample beauty salon website with services, team introductions and a WhatsApp booking flow.",
    alt: "Opening screen of the Mavi Güzellik sample website",
  },
  "mavi-danismanlik": {
    industry: "CONSULTING WEBSITE",
    summary: "A sample consulting website with service pages, appointment requests and a contact flow.",
    alt: "Opening screen of the Mavi Danışmanlık sample website",
  },
  "mavi-yapi": {
    industry: "B2B SUPPLY WEBSITE",
    summary:
      "A sample bilingual B2B supply website with a product catalogue, category pages and a quote form.",
    alt: "Opening screen of the Mavi Yapı sample website",
  },
  "mavi-iletisim": {
    industry: "TECH STORE WEBSITE",
    summary: "A sample technology store website with a product catalogue, cart and repair requests.",
    alt: "Opening screen of the Mavi İletişim sample website",
  },
};

export default en;
