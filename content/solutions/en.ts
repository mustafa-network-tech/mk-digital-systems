import type { SolutionsCopy } from ".";

/** English solutions copy: same rules as Turkish; pricing is a project-based quotation. */
const en: SolutionsCopy = {
  hub: {
    label: "SOLUTIONS",
    title: "Web and software solutions\nbuilt around your work.",
    description:
      "From websites to custom software, from business management systems to mobile apps. Every solution starts with a need and meets it in real work.",
    axesTitle: "Four solution areas",
    explore: "Explore the solution",
    example: "A real example",
    support: {
      title: "Support for your existing site",
      text: "You don’t always need a new project. We can update the design, content or behaviour of your existing WordPress site, and improve its technical setup and content so it is easier to find in search.",
    },
  },
  page: {
    label: "SOLUTION",
    price: "Pricing",
    support: "Support for your existing site",
    others: "Other solutions",
    ctaPrimary: "Describe your need",
    ctaSecondary: "Message us on WhatsApp",
    inquiry: "Hello, I’d like to learn more about {solution}.",
  },
  items: {
    web: {
      meta: {
        title: "Web design: business and custom websites | MK Digital Systems",
        description:
          "Websites that explain your business clearly, are easy to find and make it easy to reach you: landing pages, business sites, custom design and WordPress support.",
      },
      name: "Web design",
      title: "Web design: a website that tells your story right",
      lead:
        "Visitors should understand what you do within seconds, find what they need and want to get in touch. We design and build your website starting from how your business should be explained.",
      need: "Our work is good, but we can’t show it online.",
      approach:
        "We first clarify what to tell and to whom, then turn it into a clear site that is just as easy to use on a phone.",
      needs: {
        heading: "Which needs bring people here?",
        items: [
          "You don’t have a website, or it no longer reflects your business",
          "Visitors can’t find what they’re looking for and don’t get in touch",
          "A service or campaign needs one clear, focused page",
          "You want an experience of your own, not another template",
          "Your WordPress site needs editing or better visibility in search",
        ],
      },
      method: {
        heading: "How do we approach it?",
        text:
          "We start design from the site’s job, not from colours: who is the visitor, what are they looking for and what should they do in the end? Page structure, copy and images follow the answers.",
        points: [
          "Content and page structure first, visual design second",
          "A layout that works just as well on a phone",
          "A basic SEO setup with meaningful titles and descriptions",
          "Clear calls to action: form, phone, WhatsApp",
        ],
      },
      builds: {
        heading: "What can we build?",
        items: [
          { title: "Landing page", text: "One focused page for a service, product or campaign." },
          { title: "Business website", text: "Service pages, an introduction and contact sections that present your business with confidence." },
          { title: "Premium website", text: "Custom design, strong content and controlled motion for a digital experience of your own." },
          { title: "Creative web experiences", text: "Story-driven, visual sites for artists, photography and content projects." },
        ],
      },
      work: {
        heading: "Real work",
        text: "Sample sites we built for different sectors and creative web projects that are live today.",
      },
      faq: {
        heading: "Frequently asked questions",
        items: [
          {
            question: "Can I have my current site edited instead of rebuilt?",
            answer:
              "Yes. Design, content or behaviour changes on WordPress sites are a separate support service. We’ll look together at whether you really need a new site.",
          },
          {
            question: "Will the site show up in search engines?",
            answer:
              "Sites are built with a basic SEO setup: meaningful titles, descriptions and a clean page structure. Deeper SEO work is a separate support service. Nobody can promise specific rankings, and neither do we.",
          },
          {
            question: "How is the price of a website set?",
            answer:
              "The number of pages, how custom the design is, the content and any extra features set the scope. Pricing is project-based: once the scope is clear, we prepare a quotation.",
          },
        ],
      },
      cta: {
        title: "What kind of site do you have in mind?",
        text: "Tell us in a few sentences about your business and who the site is for; we’ll define the right scope together.",
      },
    },
    custom: {
      meta: {
        title: "Custom software development built around your work | MK Digital Systems",
        description:
          "Where off-the-shelf tools fall short: custom software designed around how your work really runs, from web applications to digital products and multi-user systems.",
      },
      name: "Custom software",
      title: "Custom software: a system that fits your work",
      lead:
        "Instead of bending your work to fit a ready-made program, we build software around how your work really runs. From one company’s internal tool to a product many companies use.",
      need: "Off-the-shelf programs don’t fit the way we work.",
      approach:
        "We map how the work flows before drawing any screens, design the software around that flow and build it step by step.",
      needs: {
        heading: "Which needs bring people here?",
        items: [
          "Ready-made software doesn’t fit your process; the team works around it",
          "Work is scattered across Excel files, messages and paper forms",
          "You have a product idea and want to see a first usable version",
          "You need a system that several companies or teams use in separate spaces",
        ],
      },
      method: {
        heading: "How do we approach it?",
        text:
          "We start with the work, not the code: who enters what, who approves what, who needs to see what? Once that flow is clear, we design the screens and then build.",
        points: [
          "Thinking in roles: everyone sees what is useful to them",
          "An interface that works on the phone in the field and on the desktop in the office",
          "The core flow first, extra modules after",
          "Links to existing habits such as Excel and PDF where needed",
        ],
      },
      builds: {
        heading: "What can we build?",
        items: [
          { title: "Tailored web applications", text: "Panels and applications built around one company’s way of working." },
          { title: "Digital products and first versions", text: "Turning the useful core of an idea into a first version people can use." },
          { title: "Multi-user / SaaS systems", text: "Systems ready to grow, with role permissions and a separate space for each company." },
          { title: "Data import and reporting", text: "Record imports from Excel with an approved preview; Excel and PDF reports." },
        ],
      },
      work: {
        heading: "Real work",
        text: "From systems built around one company’s own flow to products used by many companies.",
      },
      faq: {
        heading: "Frequently asked questions",
        items: [
          {
            question: "Custom software or a ready-made program?",
            answer:
              "If a ready-made program covers your work, it is often enough. Custom software makes sense when your process is your own, when the team has to work around the program, or when your product idea doesn’t exist elsewhere. We look at this together in the first conversation.",
          },
          {
            question: "Do I need to prepare a technical specification?",
            answer:
              "No. Tell us how the work runs today and what you’d like to change; we’ll ask the questions that matter.",
          },
          {
            question: "How is the price of custom software set?",
            answer:
              "User roles, the number of screens and modules, the systems it connects to and the reports set the scope. Pricing is project-based: once the scope is clear, we prepare a quotation.",
          },
        ],
      },
      cta: {
        title: "Which work should run more easily?",
        text: "Tell us how things run today and what tires you most; we’ll suggest an approach from there.",
      },
    },
    business: {
      meta: {
        title: "Business management systems and admin panels | MK Digital Systems",
        description:
          "Business management systems that bring orders, bookings, records, teams and reports into one place for restaurants, hotels, clinics, farms and field teams.",
      },
      name: "Business management systems",
      title: "Business management systems: daily work in one place",
      lead:
        "When orders, bookings, records and teams live in different places, the day gets longer. We build management systems where different roles work from the same record.",
      need: "Orders, records and team tracking are scattered.",
      approach:
        "We build a simple screen for each role and connect every role to the same record, so information is entered once and reaches everyone.",
      needs: {
        heading: "Which needs bring people here?",
        items: [
          "Orders, bookings or appointments live on paper or in messages",
          "Service, kitchen, till, front desk or field keep the same information separately",
          "You merge spreadsheets by hand to see what happened at the end of the day",
          "Stock, assigned equipment, vehicles or timesheets are hard to follow",
        ],
      },
      method: {
        heading: "How do we approach it?",
        text:
          "We build the system around your business day: who enters the first piece of information, who uses it, what should the manager see? Each role sees its own screen; all of them work from the same record.",
        points: [
          "Screens by role: service, kitchen, till, front desk, field, management",
          "Clear states that show which stage a job is in",
          "Layouts that fit phones, tablets and desktops",
          "Management screens and exportable reports",
        ],
      },
      builds: {
        heading: "What can we build?",
        items: [
          { title: "Operations and team coordination", text: "Systems that follow tasks, teams, stock and field records from one centre." },
          { title: "Orders and tabs", text: "Systems that carry an order from the table to the kitchen and the till in one flow." },
          { title: "Booking and request systems", text: "Setups that collect bookings, appointments and service requests digitally." },
          { title: "Admin panels and reports", text: "Panels that bring customer, staff and work records together on one screen made for your business." },
        ],
      },
      work: {
        heading: "Real work",
        text: "Systems we built for restaurants, hospitality, veterinary clinics and work tracking.",
      },
      faq: {
        heading: "Frequently asked questions",
        items: [
          {
            question: "Do you only work with certain sectors?",
            answer:
              "Our examples come from restaurants, hotels, veterinary clinics, farms and field operations. But the approach rests on how the work flows, not on the sector; in a different sector we start by asking the same questions.",
          },
          {
            question: "What happens to the records we keep in Excel?",
            answer:
              "Importing records from Excel can be designed as a flow where you preview and approve the changes. How to proceed depends on the structure of your data.",
          },
          {
            question: "How is the price of a management system set?",
            answer:
              "Roles, screens, modules and reports set the scope. Pricing is project-based: once the scope is clear, we prepare a quotation.",
          },
        ],
      },
      cta: {
        title: "What is most scattered in your business?",
        text: "Tell us how your day flows and where it gets stuck; we’ll decide together where the system should start.",
      },
    },
    mobile: {
      meta: {
        title: "Mobile app development | MK Digital Systems",
        description:
          "Mobile apps that are easy to use on the phone, for your business or your idea: from taking orders on the move to personal journaling, designed from a real need.",
      },
      name: "Mobile apps",
      title: "Mobile apps: a solution for work on the move",
      lead:
        "Some work isn’t done at a desk but on the move. We design and build mobile apps for your business or your idea that are comfortable to use on a phone.",
      need: "Our team and our customers are always on the move.",
      approach:
        "We design knowing the screen is small and the user is in a hurry, and make the most frequent task the shortest path.",
      needs: {
        heading: "Which needs bring people here?",
        items: [
          "Your team is in the field, on the floor or on the road and needs to work from the phone",
          "You want to offer customers an experience on their own phones",
          "You have an idea you picture as an app",
          "Your existing web system needs a part that is used on mobile",
        ],
      },
      method: {
        heading: "How do we approach it?",
        text:
          "On mobile, every tap counts. We put the most frequent action at the centre, remove unnecessary steps and try the app out in real usage scenarios.",
        points: [
          "Bringing the most frequent task down to a few taps",
          "Layouts suited to one-handed use",
          "Mobile surfaces planned together with the web system where needed",
          "Trying the app in real use through closed testing before launch",
        ],
      },
      builds: {
        heading: "What can we build?",
        items: [
          { title: "Business apps", text: "Apps for taking orders, keeping records or doing field work from the phone." },
          { title: "Customer-facing apps", text: "Experiences your customers use on their own phones." },
          { title: "Personal and lifestyle apps", text: "Simple apps for journaling, tracking and personal use." },
        ],
      },
      work: {
        heading: "Real work",
        text: "The MK Adisyon mobile app in closed testing and the Aura journaling app.",
      },
      faq: {
        heading: "Frequently asked questions",
        items: [
          {
            question: "A mobile app, or a web system that works well on mobile?",
            answer:
              "Not every need calls for an app; a web system that works well on mobile is often enough. We look together at where an app would really make a difference in the first conversation.",
          },
          {
            question: "Can the app be tried before it is released?",
            answer:
              "Yes. The app can be tried in closed testing with a limited group of users before release; the MK Adisyon mobile app is at this stage today.",
          },
          {
            question: "How is the price of a mobile app set?",
            answer:
              "The number of screens, user roles and the systems the app connects to set the scope. Pricing is project-based: once the scope is clear, we prepare a quotation.",
          },
        ],
      },
      cta: {
        title: "What should your app make easier?",
        text: "Tell us who will use it, where and for what; we’ll also talk openly about whether an app is really needed.",
      },
    },
  },
};
export default en;
