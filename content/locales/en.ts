import type { SiteContent } from "../site";
const en: SiteContent = {
  nav: {
    home: "Home",
    solutions: "Solutions",
    work: "Work",
    contact: "Contact",
    start: "Message on WhatsApp",
    language: "Choose language",
    open: "Open menu",
    close: "Close menu",
    skip: "Skip to content",
  },
  hero: {
    label: "INDEPENDENT DIGITAL AGENCY & SOFTWARE STUDIO",
    title: "Your business.",
    accent: "Better connected.",
    description:
      "Thoughtful websites. Useful software. Digital systems designed around the way you work.",
    primary: "Message on WhatsApp",
    secondary: "Explore our work",
    note: "From the first idea to the everyday details.",
    visual: "A selection of our actual digital projects",
    caption: "IDEAS, MADE USEFUL.",
    detail: "Design and development, working together.",
  },
  needs: {
    label: "A GOOD PLACE TO START",
    title: "What would make\nyour business better?",
    description:
      "You don't need a technical brief. Just a clear idea of what you want to change.",
    explore: "Explore this solution",
    items: [
      {
        title: "Make a stronger first impression.",
        subtitle: "Websites & digital experiences",
        description:
          "A digital presence that expresses who you are, helps people find what they need, and makes the next step easy.",
        steps: ["Discover", "Explore", "Connect"],
        family: "web",
      },
      {
        title: "Make the everyday work easier.",
        subtitle: "Custom software & business systems",
        description:
          "Bring scattered tasks, records and teams together. Build around your workflow, instead of changing your business to fit a tool.",
        steps: ["Organize", "Coordinate", "See clearly"],
        family: "business",
      },
      {
        title: "Turn an idea into something real.",
        subtitle: "Custom digital products",
        description:
          "Explore the useful core of your idea, design the experience, and build a first version you can put in people's hands.",
        steps: ["Shape", "Build", "Evolve"],
        family: "custom",
      },
    ],
  },
  work: {
    label: "SELECTED WORK",
    title: "Different businesses.\nOne thoughtful approach.",
    description:
      "Working products and demonstration projects that turn real business needs into clear digital experiences.",
    all: "Explore all work",
    explore: "Explore the work",
    discuss: "Ask us on WhatsApp",
    live: "Explore the live system",
    inquiry:
      "Hello, I would like information about a solution similar to {project}.",
    problem: "The need",
    solution: "Our approach",
    experience: "What it brings together",
    demo: "Demonstration project",
    project: "Independent project",
    diagram: "WORKFLOW OVERVIEW",
    stories: {
      "mk-ops": {
        industry: "FIELD OPERATIONS",
        headline: "Keep the field and the office on the same page.",
        problem:
          "Jobs, teams and inventory need a shared view, beyond disconnected messages and spreadsheets.",
        solution:
          "A central workspace for work tracking, projects, inventory and role-based access.",
        features: [
          "Work tracking",
          "Team coordination",
          "Inventory visibility",
        ],
        alt: "Existing MK Ops website showing its field operations product",
      },
      "mavi-resepsiyon": {
        industry: "HOSPITALITY",
        headline: "A calmer day at reception.",
        problem:
          "Reservations, room status and payments are all part of the same guest experience.",
        solution:
          "A hotel operations demo connecting room planning, check-in, collections and management views.",
        features: ["Room planning", "Guest arrivals", "Payments & records"],
        alt: "Workflow connecting room planning, guest arrivals and payments",
      },
      "mk-farm": {
        industry: "AGRICULTURE",
        headline: "Every animal. A clearer picture.",
        problem:
          "Individual animal records need to stay connected to everyday farm work.",
        solution:
          "A farm management application bringing QR identity, weighing and health history together.",
        features: ["QR identity", "Weight history", "Health records"],
        alt: "Actual MK Farm overview",
      },
      "mavi-adisyon": {
        industry: "RESTAURANTS",
        headline: "From the first order to the final bill.",
        problem:
          "Waiters, kitchen staff and cashiers need to follow the same order journey.",
        solution:
          "A restaurant demo with coordinated waiter, kitchen, cashier and management views.",
        features: ["Waiter", "Kitchen", "Cashier", "Management"],
        alt: "Restaurant workflow from waiter to kitchen, cashier and management",
      },
      "mavi-kadraj": {
        industry: "PHOTOGRAPHY & CONTENT",
        headline: "Give visual stories room to breathe.",
        problem:
          "Photography needs an organized home that makes images and stories easy to discover.",
        solution:
          "A photography platform combining galleries, travel writing and manageable content.",
        features: [
          "Photo galleries",
          "Visual storytelling",
          "Content publishing",
        ],
        alt: "Existing Mavi Kadraj photography website with its actual photographs",
      },
      namehub: {
        industry: "DIGITAL PRESENCE",
        headline: "A clear digital introduction.",
        problem:
          "A business website needs to bring its identity and offering into one accessible experience.",
        solution:
          "A website project with a clear content structure and a responsive digital presence.",
        features: ["Brand expression", "Clear navigation", "Mobile experience"],
        alt: "Existing Namehub.tr website capture",
      },
      santiye: {
        industry: "CONSTRUCTION & FIELD WORK",
        headline: "See what is moving. Know what is waiting.",
        problem:
          "Project stages, locations and pending work are difficult to track in separate records.",
        solution:
          "A construction tracking system organizing project stages, status and searchable records.",
        features: ["Project stages", "Status tracking", "Searchable records"],
        alt: "Actual construction-management dashboard",
      },
      "mk-skor": {
        industry: "ASSESSMENT & ANALYSIS",
        headline: "Make performance easier to understand.",
        problem:
          "Tests and measurements need context across time, beyond a single result.",
        solution:
          "An assessment product combining tests, time-based evaluation and statistical reporting.",
        features: ["Assessments", "Progress tracking", "Statistical reports"],
        alt: "Assessment workflow connecting tests, progress and reports",
      },
    },
  },
  solutions: {
    label: "SOLUTIONS",
    title: "Built for what\nyour business needs.",
    description:
      "A better experience for your customers. A clearer day for your team. A new idea brought to life.",
    audience: "Who it's for",
    builds: "What we can build",
    example: "See it in practice",
    cta: "Tell us what you need",
    items: [
      {
        id: "web",
        title: "Web & digital experiences",
        description:
          "Make your business easier to find, understand and choose. We connect your story with an experience people enjoy using.",
        for: "Businesses, independent brands and professionals ready for a stronger digital presence.",
        features: [
          "Brand and business websites",
          "Content & discovery platforms",
          "Customer inquiry journeys",
        ],
        project: "mavi-kadraj-otel",
      },
      {
        id: "custom",
        title: "Custom software",
        description:
          "When off-the-shelf tools don't fit, start with how your business actually works. Design useful software around the tasks that matter.",
        for: "Teams with a specific workflow, a product idea, or a process that standard tools cannot support.",
        features: [
          "Purpose-built web applications",
          "Digital products & first versions",
          "Connected tools & automations",
        ],
        project: "mk-traceops",
      },
      {
        id: "business",
        title: "Business management systems",
        description:
          "Bring people, records and everyday decisions into one place. Make the next action clearer for everyone involved.",
        for: "Hospitality, restaurants, farms and field teams working across multiple roles.",
        features: [
          "Operations & team coordination",
          "Reservations, orders & records",
          "Management views & reporting",
        ],
        project: "mavi-resepsiyon",
      },
      {
        id: "smart",
        title: "Smart & voice experiences",
        description:
          "Explore simpler ways for people to ask, find and act. We shape voice and assisted experiences around a clear, useful purpose.",
        for: "Businesses exploring more accessible customer interactions or guided internal workflows.",
        features: [
          "Voice-led interaction concepts",
          "Assisted customer journeys",
          "Practical automation prototypes",
        ],
        project: "",
      },
    ],
  },
  process: {
    label: "HOW WE WORK",
    title: "First, we listen.\nThen, we make it work.",
    description:
      "A shared direction, clear decisions and something useful at every stage.",
    steps: [
      {
        title: "Understand",
        description: "Your people, your workflow, and what needs to change.",
      },
      {
        title: "Design",
        description: "Make the journey clear before building the details.",
      },
      {
        title: "Build",
        description: "Turn the agreed direction into a working experience.",
      },
      {
        title: "Launch",
        description: "Check the details and bring your system into use.",
      },
      {
        title: "Improve",
        description: "Learn from daily use and shape what comes next.",
      },
    ],
  },
  industries: {
    label: "EXPERIENCE THROUGH ACTUAL WORK",
    title: "Different worlds.\nReal everyday needs.",
    description:
      "Our independent and demo projects explore how digital experiences can fit different ways of working.",
    items: [
      "Hospitality",
      "Restaurants",
      "Agriculture",
      "Field operations",
      "Manufacturing",
      "Real estate",
    ],
  },
  contact: {
    label: "START A PROJECT",
    title: "Good things start\nwith a conversation.",
    description:
      "Tell us what you have in mind. A challenge, an idea, or a process that could work better.",
    intro: "A few details are enough to get started.",
    direct: "Choose how to reach us.",
    call: "Call us",
    emailUs: "Send an email",
    whatsapp: "Message on WhatsApp",
    next: "What happens next?",
    nextText:
      "We review your brief, ask the useful questions, and discuss an approach before defining the scope together.",
    required: "Required",
    optional: "Optional",
    name: "Your name",
    company: "Company",
    email: "Email address",
    phone: "Phone / WhatsApp",
    country: "Country",
    type: "What are you thinking of?",
    message: "Tell us a little about it",
    placeholder: "What would you like to build or make easier?",
    more: "Add company or contact details",
    consent:
      "I agree to my details being used to respond to this inquiry, as described in the",
    privacy: "privacy notice",
    submit: "Send your project brief",
    sending: "Sending your brief…",
    success: "Your brief is on its way.",
    successText:
      "Thank you for sharing your idea. We will reply using the contact details you provided.",
    error:
      "We couldn't send your brief. Your details are still here. Please try again or contact us directly.",
    invalid:
      "Please complete the required fields and accept the privacy notice.",
    retry: "Send another brief",
    types: [
      "Website",
      "Custom software",
      "Business system",
      "Digital product",
      "Smart / voice experience",
      "Not sure yet",
    ],
  },
  footer: {
    label: "YOUR NEXT CHAPTER",
    title: "Let's make\nsomething useful.",
    cta: "Message on WhatsApp",
    description:
      "Digital experiences and business software. Thoughtfully designed. Built around you.",
    privacy: "Privacy",
    terms: "Terms",
    copyright: "All rights reserved.",
    top: "Back to top",
    socialLabel: "Social media",
    socialProfile: "MK Digital Systems on {platform} — opens in a new tab",
    signature: "Digital products and custom software developed by Mustafa Öner",
  },
  legal: {
    privacyTitle: "Privacy notice",
    privacyIntro:
      "This notice explains how MK Digital Systems handles details you share through this website.",
    privacySections: [
      {
        title: "What you share",
        body: "The project brief asks for your name, email, project type, message and consent. Company, phone and country are optional. Only share information needed for your inquiry.",
      },
      {
        title: "How we use it",
        body: "We use these details to respond to your inquiry, understand your request and discuss a possible project. We do not sell your personal information.",
      },
      {
        title: "Delivery and hosting",
        body: "Inquiries may be delivered through Formspree or our configured email provider. These providers and our hosting provider process information needed to deliver and operate the service. Direct email and WhatsApp links use their respective providers.",
      },
      {
        title: "Your questions",
        body: "Contact us using the email on this site to ask about access, correction or deletion of your inquiry details. Retention and any project-specific data handling should be agreed before a project begins.",
      },
    ],
    termsTitle: "Website terms",
    termsIntro:
      "These terms describe use of the MK Digital Systems website. A project requires a separate agreement.",
    termsSections: [
      {
        title: "Project information",
        body: "Work shown includes independent products and demonstration projects. Demo projects are identified and are not presented as paid client engagements. Descriptions do not guarantee a particular business result.",
      },
      {
        title: "Using the website",
        body: "Use this website lawfully. Do not attempt unauthorized access, interfere with its operation or submit abusive requests. You are responsible for the information you submit.",
      },
      {
        title: "Scope and third-party links",
        body: "Submitting a brief does not create a service contract. Scope, timing, fees and support are agreed separately. External projects and contact platforms have their own terms and privacy practices.",
      },
    ],
    updated: "Updated September 2026",
  },
  meta: {
    home: {
      title: "MK Digital Systems | Websites & custom business software",
      description:
        "Digital experiences and useful business software built around the way you work. Explore MK Digital Systems projects and get in touch about your needs.",
    },
    solutions: {
      title: "Solutions | MK Digital Systems",
      description:
        "Websites, custom software, business management systems and smart experiences designed around your customers and everyday operations.",
    },
    work: {
      title: "Selected work | MK Digital Systems",
      description:
        "Explore independent products and demos for field operations, hospitality, agriculture, restaurants and digital experiences.",
    },
    contact: {
      title: "Contact | MK Digital Systems",
      description:
        "Share your idea or business challenge with MK Digital Systems. Send a short project brief or contact us by email and WhatsApp.",
    },
    privacy: {
      title: "Privacy notice | MK Digital Systems",
      description:
        "How MK Digital Systems uses and delivers information shared through the project inquiry form.",
    },
    terms: {
      title: "Website terms | MK Digital Systems",
      description:
        "Information about using this website, demonstration projects, external links and project inquiries.",
    },
  },
  notFound: {
    title: "This page has moved.",
    description: "Let's get you back to a useful starting point.",
    back: "Back to home",
  },
};
export default en;
