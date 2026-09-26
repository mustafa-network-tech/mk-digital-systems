import type { ProjectId } from "@/content/projects";
import type { CaseStudyCopy } from ".";

const en: Partial<Record<ProjectId, CaseStudyCopy>> = {
  "saha-santiye": {
    meta: {
      title: "Field & site operations management for telecom and fiber | MK Digital Systems",
      description:
        "Two approaches that bring daily work, crews, materials and production for telecom and fiber field teams into one place: MK OPS and Şantiye Yönetim.",
    },
    title: "Bringing field and site operations into one place",
    lead:
      "Work done in the field, visible in the office at the same time. Two approaches we built to bring telecom and fiber field operations, from daily work entries and crew plans to materials and production, into a single system.",
    audience: {
      heading: "Whose problem?",
      text:
        "Companies that run many crews, projects and materials at once on telecom and fiber infrastructure work. From crew leaders in the field to operations and accounting in the office, different people see different parts of the job.",
      points: [
        "Field crews and crew leaders working on different projects on the same day",
        "Project and company managers who plan, check and approve the work",
        "The warehouse side tracking materials, vehicles and equipment",
        "The office preparing timesheets, progress payments and reports",
      ],
    },
    problem: {
      heading: "What was the problem?",
      text:
        "In the field, work moves fast; information ends up scattered across messages, photos and separate spreadsheets. Which crew is doing what and where, which job is waiting for approval, where a material went: often visible only at the end of the day, pieced together by hand.",
      points: [
        "Daily work stays in messages and paper forms",
        "Crew, vehicle and staff plans are rebuilt every morning",
        "Project progress (sheets, cabinets, cable, excavation) can't be followed in one place",
        "Material issues and custody records don't match the stock",
        "Production, timesheets and progress payments are collected by hand at period end",
      ],
    },
    approach: {
      heading: "How did we approach it?",
      text:
        "We started from the flow of a day in the field rather than from screens: crew plan in the morning, work entries during the day, review and approval in the evening, reports at period end. The aim: whoever sees a piece of information first can enter it directly, and everyone sees only what is useful to them.",
      points: [
        "Thinking in roles: crew leaders, project managers and company managers see different things",
        "Quick entry on the phone in the field, bulk review on the desktop in the office",
        "A clear approval flow: draft, submitted, approved or rejected",
        "Collecting records around progress payment periods",
      ],
    },
    solution: {
      heading: "Two approaches to the same problem",
      text:
        "We solved the problem for two different ways of working: a SaaS that several companies can use in their own space, and a management system set up around one company's way of working. These are not two packages to choose from; they are two architectural choices for the same problem.",
      parts: {
        "mk-ops": {
          summary:
            "A multi-tenant SaaS approach: each company manages its crews, projects, field work and approvals in its own isolated workspace.",
          highlights: [
            "Per-company data isolation and role-based permissions",
            "Daily field work entry and approval flow",
            "Material delivery notes and stock tracking",
            "Crew earnings, company share and progress payment periods",
            "Audit log, Excel and PDF reports",
            "Interface in Turkish, English, German, French and Spanish",
          ],
        },
        "santiye-yonetim": {
          summary:
            "A panel set up around one company's operations: from the stages of fiber projects to the daily crew plan, it follows the company's own way of working.",
          highlights: [
            "Project tracking: type, status, progress, OBK, splice, cable and excavation stages",
            "Daily work plan and crew templates",
            "Production entries and date-range production reports",
            "Timesheets and progress payment summary",
            "Materials, stock, custody and vehicle records",
            "Approved user registration and secure session management",
          ],
        },
      },
    },
    screens: {
      "ops-approvals": {
        caption: "MK OPS · Approvals: daily work submitted by crew leaders is approved or rejected from one list.",
        alt: "MK OPS approvals screen with sample daily work awaiting approval",
      },
      "ops-mobile": {
        caption: "MK OPS · Mobile: the same approval list on a phone in the field.",
        alt: "MK OPS mobile approvals screen with sample data",
      },
      "ops-management": {
        caption: "MK OPS · Management: crews, vehicles, material stock, equipment and work items.",
        alt: "MK OPS management panel with a sample list of crews",
      },
      "santiye-projects": {
        caption: "Şantiye Yönetim · Projects: a project list filtered by type, status, progress and field stages.",
        alt: "Şantiye Yönetim projects screen with sample fiber projects",
      },
      "santiye-mobile": {
        caption: "Şantiye Yönetim · Mobile: the project list and filters on a phone.",
        alt: "Şantiye Yönetim mobile projects screen with sample data",
      },
      "santiye-dashboard": {
        caption: "Şantiye Yönetim · Dashboard: project status by category, critical stock and vehicle alerts.",
        alt: "Şantiye Yönetim dashboard with sample data",
      },
    },
    ctaText: "If you want to bring field work and office tracking together, tell us how your day runs today and we’ll shape the right approach together.",
    screensNote: "All records on these screens are sample data; they contain no real people, companies or projects.",
    modules: {
      heading: "Core modules",
      items: [
        { title: "Daily work entry and approval", text: "Work done in the field is recorded the same day; a manager approves it or asks for a correction from one list." },
        { title: "Crews and daily work plan", text: "Which crew goes to which project with which vehicle is planned every morning in a few steps." },
        { title: "Project and progress tracking", text: "Sheet, cabinet, cable and excavation stages of fiber projects are followed with a progress percentage." },
        { title: "Production records", text: "Crews' daily production is entered per work item and reported by date range." },
        { title: "Materials, stock and custody", text: "Material issues, delivery notes and staff custody are kept together with the stock." },
        { title: "Vehicles and equipment", text: "Vehicles, equipment and document dates in one place, with alerts for upcoming inspections and insurance." },
        { title: "Timesheets and progress payments", text: "Attendance, advances and period payments are calculated from the same records." },
        { title: "Roles and reports", text: "Each role sees its own screens; reports export to Excel, PDF or Word." },
      ],
    },
  },
};

export default en;
