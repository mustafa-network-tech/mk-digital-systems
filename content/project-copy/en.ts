import type { ProjectCopyBook } from ".";

const en: ProjectCopyBook = {
  "saha-santiye": {
    industry: "TELECOM & FIELD OPERATIONS",
    summary:
      "A multi-company operations system for telecom and fibre field companies, where each company runs its crews, field jobs and approvals in its own workspace.",
    headline: "Field work, visible in the office as it happens.",
    problem:
      "Daily jobs, crews, material movements, field records and progress payments end up scattered across messages and separate spreadsheets, so what is done and what is waiting shows up late.",
    solution:
      "A multi-tenant SaaS used by each company in its own isolated workspace: daily job entry and approvals, crews, materials and payment periods in one system.",
    modules: [
      "Daily job entry and approvals",
      "Crew, vehicle and project management",
      "Material delivery notes and stock",
      "Payment periods and reports",
    ],
    alt: "Jobs awaiting approval in the MK OPS demo, with sample data",
  },
  "santiye-yonetim": {
    industry: "SITE & FIBRE PROJECTS",
    summary:
      "A management system built around one company's site operations, tracking projects, daily crew plans, completed work and timesheets.",
    headline: "Plan the site's day on one screen.",
    problem:
      "When project stages, daily crew plans, completed work, materials and vehicles live in separate lists, a project's real status only appears once someone merges them by hand.",
    solution:
      "A panel built around the company's own way of working: project stages, daily work plans, work records, timesheets, stock, assigned equipment and vehicles in one place, with approved sign-up and secure sessions.",
    modules: [
      "Project and stage tracking",
      "Daily work plans and crew templates",
      "Work records and report",
      "Timesheets and payment summary",
      "Materials, stock and assigned equipment",
      "Vehicle and document reminders",
    ],
    alt: "Şantiye Yönetim dashboard with sample data: project status, critical stock and vehicle reminders",
  },
  "mk-adisyon": {
    industry: "RESTAURANTS & CAFÉS",
    summary: "An ordering and bill product for restaurants and cafés, with a working web system and a mobile app in closed testing.",
    headline: "From the first order to closing the bill.",
    problem:
      "Waiters, kitchen and cashier need to see which stage the same order has reached.",
    solution:
      "A working web system that brings waiter, kitchen, cashier and management screens into one flow, plus a separate developed mobile app in closed testing.",
    modules: ["Waiter", "Kitchen", "Cashier", "Management", "Mobile app · closed testing"],
    alt: "MK Adisyon demo with sample data: the cashier panel with open tables and payments",
    parts: {
      web: { name: "Web app", description: "Waiter, kitchen, cashier and management screens." },
      mobile: { name: "Mobile app", description: "Developed mobile app, currently in closed testing." },
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
    alt: "MK Resepsiyon demo with sample data: the front desk overview",
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
    alt: "Opening screen of the MK Pati product website",
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
    alt: "Opening screen of the MK Kargo sample website",
  },
  "proje-asama-takip": {
    name: "Project Stage Tracking",
    industry: "INFRASTRUCTURE & SITE PROJECTS",
    summary:
      "A site tracking system that follows infrastructure project stages, field staff, vehicles and timesheets in one place.",
    headline: "Know which stage every project is in.",
    problem:
      "With many infrastructure projects running at once, what is waiting, what is late, who works where with which vehicle and where the timesheets stand end up in different lists.",
    solution:
      "A sign-in protected web application that tracks projects through clear states such as waiting, in progress, awaiting permit, delayed and completed, and keeps staff, vehicle and timesheet records in the same system. Completed projects move to the archive on their own.",
    modules: [
      "Project and stage status",
      "Staff tracking",
      "Vehicle tracking",
      "Timesheets",
      "Search, filters and archive",
    ],
  },
  "onayli-proje-takip": {
    name: "Approved Project Tracking",
    industry: "INFRASTRUCTURE PROJECT TRACKING",
    summary:
      "An operations panel that turns project and building lists from Excel into lasting records and follows work progress, notes and change history.",
    headline: "A traceable project record, not an Excel list.",
    problem:
      "Project and building lists arrive as Excel files, and each new file replaces the last. How much work is done in which building, who changed what and which record is current gets lost.",
    solution:
      "Before a new Excel file is applied, its changes are previewed and, once approved, saved in one step. The import only updates the fields that come from the file; progress and notes from the field are kept. Every progress and note change is written to the history with its user and date.",
    modules: [
      "Excel import with approved preview",
      "Project and building records",
      "Work progress",
      "Notes",
      "Change history",
    ],
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
    alt: "Aura app with sample data: Today, mood picker and calendar screens",
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
  "gonul-pusulasi": {
    industry: "CREATIVE WEB & DIGITAL CONTENT",
    summary:
      "A creative content site that brings letters, short lines and photographs together, published as web pages and 9:16 stories.",
    alt: "Gönül Pusulası home page",
  },
  "siir-dunyasi": {
    industry: "POETRY & LITERARY WEB",
    summary: "A literary website that presents poems of love, longing and parting as a calm reading experience.",
    alt: "Şiir Dünyası home page: a sunset over the sea and the line “Words walk within the silence.”",
  },
  "mk-firsat": {
    industry: "DEALS & SHOPPING DISCOVERY PLATFORM",
    summary:
      "A modern digital platform that aims to bring deal discovery and shopping options together in one experience.",
    description:
      "MK Fırsat is a modern shopping and discovery experience designed to help people discover deals more easily, compare their options and quickly reach the offers that interest them. Designed with web and mobile in mind from the start, it will later launch as one of the independent digital products in the MK Digital Systems family.",
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
  "mavi-gayrimenkul": {
    industry: "REAL ESTATE AGENCY WEBSITE",
    summary: "A sample real estate agency website with sale and rental listing search, a neighbourhood guide and valuation requests.",
    alt: "Opening screen of the Mavi Gayrimenkul sample website: listing search",
  },
  "adalet-hukuk": {
    industry: "LAW FIRM WEBSITE",
    summary: "A sample law firm website with practice areas, lawyer profiles and informative articles.",
    alt: "Opening screen of the Adalet Hukuk sample website",
  },
};

export default en;
