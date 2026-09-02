import Image from "next/image";
import Link from "next/link";
import {
  Accessibility, Activity, ArrowRight, BadgeCheck, BarChart3, Bot, BrainCircuit,
  Briefcase, Building2, Bus, Calendar, CheckCircle2, Cloud, Command, Cpu,
  Database, DollarSign, Eye, FileCheck2, FileStack, Gauge, GitCompare,
  GraduationCap, HeartPulse, KeyRound, Languages, Layers3, Lock, MessageSquare,
  Network, Package, Plug, RefreshCw, Rocket, Scale, School, Server,
  ShieldCheck, Sparkles, UserCheck, Users, WalletCards, Workflow,
} from "lucide-react";

const capabilities = [
  { icon: Building2, title: "Identity & Institutional Structure", label: "Institution", summary: "A genuine White Label foundation, flexible from one school to multi-administration groups.", items: ["School-owned brand, domain and application identity", "Groups, regions, schools, boards and departments", "Inherited policies, permissions and delegated authority", "Strict isolation for every institution and school"] },
  { icon: GraduationCap, title: "Admissions & Student Affairs", label: "Student", summary: "One governed journey from application and enrolment through graduation and archive.", items: ["Applications, screening, interviews and offers", "360° student profile, documents and consents", "Transfers, promotion, withdrawal and alumni", "Siblings, guardians and individual support needs"] },
  { icon: School, title: "Learning & Assessment", label: "Learning", summary: "Curriculum, lesson planning, assignments, grades and certificates in one academic context.", items: ["Curricula, plans and learning outcomes", "Classes, lessons, assignments and resources", "Question banks, exams and assessment rubrics", "Gradebooks, reports, certificates and analytics"] },
  { icon: Calendar, title: "Timetabling & Attendance", label: "Operations", summary: "Intelligent scheduling that reduces conflicts and gives attendance real-time accuracy.", items: ["Class, teacher, room and resource timetables", "Substitutions, duties and exam schedules", "Student and workforce attendance and lateness", "Absence reasons, alerts and early intervention"] },
  { icon: ShieldCheck, title: "Safeguarding & Student Support", label: "Trust", summary: "Restricted workflows for incidents, cases and intervention plans with strong confidentiality.", items: ["Safeguarding, behaviour, bullying and incidents", "Counselling and pastoral care", "Additional learning needs and support plans", "Escalation paths and controlled action records"] },
  { icon: HeartPulse, title: "Health & Wellbeing", label: "Care", summary: "A secure school health record for clinics, medication, allergies and emergency response.", items: ["Clinic visits, first aid and incidents", "Medication, allergies and immunisation", "Emergency plans and guardian consent", "Wellbeing monitoring and follow-up indicators"] },
  { icon: MessageSquare, title: "Family & Communications", label: "Community", summary: "A unified portal and application connecting school and family with a complete contact record.", items: ["Announcements, messages and multi-channel alerts", "Appointments, meetings and digital consent", "Learning plans, assignments, results and payments", "Forms, surveys and service tickets"] },
  { icon: Bus, title: "Transport & Activities", label: "School Life", summary: "Coordinating the student day beyond the classroom: transport, trips, clubs and events.", items: ["Routes, stops, vehicles and supervisors", "Boarding, drop-off and family notifications", "Trips, consent, risk and attendance", "Clubs, events and participation records"] },
  { icon: Briefcase, title: "Workforce Management", label: "People", summary: "A complete lifecycle for human staff, with a separate pathway for optional digital workers.", items: ["Recruitment, personnel records, contracts and documents", "Attendance, leave, duties and substitutions", "Performance, development and training", "Organisation, job descriptions and succession"] },
  { icon: WalletCards, title: "Finance & Procurement", label: "Finance", summary: "Governed fees, collection, budgets, expenses and procurement with a full audit trail.", items: ["Fee structures, discounts, scholarships and sponsorship", "Invoices, collection, refunds and reconciliation", "Budgets, accounts and cost centres", "Requests, approvals, suppliers and purchase orders"] },
  { icon: Package, title: "Assets & Facilities", label: "Campus", summary: "Accurate visibility of facilities, inventory, assigned assets, maintenance and safety.", items: ["Asset register, custody and stocktake", "Inventory, stores, issue and replenishment", "Maintenance requests and preventive contracts", "Bookings, visitors, emergencies and safety"] },
  { icon: Scale, title: "Legal & Governance", label: "Governance", summary: "Institutional management of boards, policies, contracts, cases, obligations and decisions.", items: ["Boards, committees, minutes and resolutions", "Contracts, obligations and expiry milestones", "Legal cases, risk and delegated authority", "Policies, versions and acknowledgements"] },
  { icon: BadgeCheck, title: "Compliance & Quality", label: "Excellence", summary: "Turning accreditation and quality from seasonal files into measurable daily practice.", items: ["Standards, evidence and improvement plans", "Audits, findings and corrective actions", "Risk, controls and business continuity", "KPIs and accreditation evidence packs"] },
  { icon: BarChart3, title: "Data & Institutional Intelligence", label: "Insight", summary: "A unified decision layer from classroom to group, with alerts and forward-looking indicators.", items: ["Role, school, region and group dashboards", "Academic, financial and operational indicators", "Early warning for attainment, absence and attrition", "Executive reporting, benchmarking and trends"] },
  { icon: Plug, title: "Integration & Migration", label: "Transition", summary: "An import and integration hub supporting full migration or controlled coexistence.", items: ["CSV, Excel, APIs and structured exchange files", "Field mapping, cleansing, validation and rehearsal", "Reconciliation, differences and source-of-truth records", "Connectors for finance, learning, identity and payments"] },
  { icon: Bot, title: "Optional Artificial Intelligence", label: "Future", summary: "A separately priced add-on for AI tutoring, staff academy and governed digital workers.", items: ["Personalised at-home student tutoring", "Virtual classes and supervised AI teaching", "Staff learning and procedural assistance", "Digital finance or administrative roles with human approval"] },
];

const roles = [
  ["Owners & Group Leadership", "A group-wide executive view of performance, comparisons, risk and strategic decisions."],
  ["School Principal", "A daily command view of learning, attendance, resources, finance and compliance."],
  ["Teacher", "Classes, plans, attendance, assessment and communication in one focused workspace."],
  ["Student", "A clear view of timetable, learning, assignments, progress, support and school services."],
  ["Parent & Guardian", "One place for children’s attendance, learning, messages, consents, services and fees."],
  ["Specialist Staff", "Purpose-built workflows for finance, HR, legal, health, quality and operations."],
];

const migrationSteps = [
  ["01", "Discover", "Inventory systems, files, owners, dependencies and data quality."],
  ["02", "Map", "Align fields, identities, values and rules between source and platform."],
  ["03", "Cleanse", "Detect duplicates, gaps and conflicts inside a controlled staging area."],
  ["04", "Rehearse", "Run repeatable trial migrations with clear rejection and exception reports."],
  ["05", "Reconcile", "Prove counts, balances, grades, invoices and relationships match."],
  ["06", "Operate", "Confirm the source of truth, monitor cutover and retain a controlled rollback path."],
];

const standards = [
  [Gauge, "Perceived Performance", "Performance budgets, progressive loading, rapid search and journey monitoring."],
  [Accessibility, "Inclusive Access", "WCAG 2.2 AA, keyboard operation, screen readers, contrast and clear states."],
  [Languages, "Arabic & English", "Native RTL and LTR, readable typography, localisation and regional formats."],
  [ShieldCheck, "Institutional Security", "OWASP ASVS 5.0 alignment, least privilege, encryption, audit and alerts."],
  [FileCheck2, "Engineering Quality", "ISO/IEC 25010 guidance, automation, reviews, documentation and stable releases."],
  [UserCheck, "Human-centred UX", "ISO 9241-210 principles, consistent interfaces and fewer errors and steps."],
];

const packages = [
  ["Core White Label", "Foundation", "Identity, structure, users, students, learning, attendance, communication and reporting."],
  ["Operations", "Extended Operations", "Workforce, finance, procurement, assets, facilities, transport and activities."],
  ["Trust & Compliance", "Governance", "Safeguarding, health, legal, quality, risk, continuity and accreditation."],
  ["Group Command", "Group Leadership", "Cross-school dashboards, central policy, benchmarking and executive decisions."],
  ["Enterprise Deployment", "Enterprise", "Dedicated environment, advanced migration, integrations, controls and support."],
  ["AI Learning", "Independent Add-on", "AI tutor, personalised support, virtual classes and staff learning academy."],
  ["AI Workforce", "Independent Add-on", "Governed digital workers for finance, administration and operations."],
];

const roadmap = [
  ["M0", "Institutional Foundation", "Scope, governance, design, security and the multi-organisation model."],
  ["M1", "Student Core", "Identity, admissions, student record, family and documents."],
  ["M2", "Academic Life", "Curriculum, timetables, attendance, assessment and portals."],
  ["M3", "Operations", "Workforce, finance, procurement, assets and facilities."],
  ["M4", "Trust", "Safeguarding, health, legal, quality, compliance and risk."],
  ["M5", "Transition", "Migration, integration, coexistence and reconciliation."],
  ["M6", "Leadership", "Data platform, indicators, early warning and command centre."],
  ["M7", "Scale", "School-group experience, resilience and regional localisation."],
  ["M8", "Maturity", "Scale testing, optimisation and controlled phased launch."],
  ["AX", "Independent AI Track", "Activated after core stability, with customer-owned providers and infrastructure."],
];

function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return <div className="section-head"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{lead}</p></div>;
}

export default function EnglishShowcase() {
  return (
    <main>
      <header className="topbar">
        <a className="brandmark" href="#top" aria-label="Back to the beginning"><span className="brand-icon"><Layers3 size={19} /></span><span>School Operating System · White Label</span></a>
        <nav aria-label="Main navigation"><a href="#platform">Platform</a><a href="#capabilities">Capabilities</a><a href="#migration">Transition</a><a href="#ai">Artificial Intelligence</a><a href="#roadmap">Future</a></nav>
        <div className="top-actions"><Link className="language-link" href="/" lang="ar" dir="rtl">العربية</Link><a className="top-cta" href="#packages">Delivery Model <ArrowRight size={15} /></a></div>
      </header>

      <section className="hero" id="top">
        <Image src="/images/hero.webp" alt="A modern premium school campus connected by an institutional digital platform" fill priority unoptimized sizes="100vw" />
        <div className="hero-shade" /><div className="hero-grid" />
        <div className="hero-content shell">
          <div className="hero-copy"><p className="eyebrow"><Sparkles size={16} /> A digital foundation carrying every school’s own identity</p><h1>Not another management platform.<br /><span>The school operating system.</span></h1><p className="hero-lead">From student affairs and learning to finance, legal governance and executive leadership—a premium, standards-led platform that scales under the customer’s brand.</p><div className="hero-actions"><a className="button primary" href="#capabilities">Explore the platform <ArrowRight size={18} /></a><a className="button ghost" href="#architecture">See how it works</a></div></div>
          <aside className="hero-panel" aria-label="Platform overview"><div className="live-line"><span /> Institution-ready from day one</div><div className="hero-stat"><strong>360°</strong><span>Unified student and school visibility</span></div><div className="hero-stat"><strong>16</strong><span>Connected operational domains</span></div><div className="hero-stat"><strong>4</strong><span>Migration and coexistence modes</span></div><div className="hero-stat"><strong>AI</strong><span>Independent optional add-on</span></div></aside>
        </div>
        <a className="scroll-cue" href="#platform" aria-label="Move to the next section"><span /> Scroll to explore</a>
      </section>

      <section className="statement" id="platform"><div className="shell statement-grid"><div><p className="eyebrow">01 · The central proposition</p><h2>One platform.<br />Unlimited identities.</h2></div><div className="statement-copy"><p>The platform carries no fixed product name. Every school receives an experience that looks and feels built for it: its name, logo, colours, domain, application and communications.</p><p>Below the brand sits one configurable institutional core—ready for one school, a school chain or multiple groups, with central management, independent administrations, and shared or local policy.</p><div className="tag-row"><span>Single school</span><span>Multi-school</span><span>Multi-group</span><span>Multi-brand</span></div></div></div></section>

      <section className="hierarchy-section"><div className="shell"><SectionHead eyebrow="Multi-organisation design" title="Built around educational reality—not a rigid template" lead="Governance, permissions and reporting adapt to the customer’s structure without fragmenting the codebase or limiting future growth." /><div className="hierarchy"><div className="hier-card major"><Command /><small>LEVEL 01</small><strong>Group or Owner</strong><span>Identity · Policy · Oversight · Intelligence</span></div><div className="connector" /><div className="hier-row"><div className="hier-card"><Network /><small>LEVEL 02</small><strong>Region or Administration</strong><span>Delegation · Budget · Supervision</span></div><div className="hier-card"><Building2 /><small>LEVEL 03</small><strong>School or Campus</strong><span>Operations · Resources · Performance</span></div><div className="hier-card"><Users /><small>LEVEL 04</small><strong>Class or Team</strong><span>Learning · Service · Execution</span></div></div></div></div></section>

      <section className="roles-section"><div className="shell"><SectionHead eyebrow="Experience by role" title="Every user sees what matters—when it matters" lead="One coherent experience, intelligently focused for each responsibility, reducing noise and bringing decisions closer to their owners." /><div className="roles-grid">{roles.map(([title, text], index) => <article className="role-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="capabilities-section" id="capabilities"><div className="shell"><SectionHead eyebrow="02 · Capability map" title="Everything a school needs. Connected, measurable and built to grow." lead="Sixteen domains covering the student journey, the teacher’s day, institutional operations and organisational trust—without disconnected data islands." /><div className="capability-grid">{capabilities.map(({ icon: Icon, title, label, summary, items }, index) => <details className="capability-card" key={title} open={index < 3}><summary><span className="cap-icon"><Icon size={22} /></span><span className="cap-title"><small>{label}</small><strong>{title}</strong></span><span className="plus" aria-hidden="true">+</span></summary><p>{summary}</p><ul>{items.map((item) => <li key={item}><CheckCircle2 size={14} />{item}</li>)}</ul></details>)}</div><p className="interaction-note"><Eye size={16} /> Open any card to explore its detail</p></div></section>

      <section className="command-section" id="command"><Image src="/images/command-center.webp" alt="School-group leadership team using an institutional command centre" fill unoptimized sizes="100vw" /><div className="command-shade" /><div className="shell command-content"><p className="eyebrow">03 · Command centre</p><h2>From today’s pulse to tomorrow’s decision</h2><p>Academic, operational and financial truth comes together in contextual dashboards that show the position, reveal deviation and guide the next action.</p><div className="command-metrics"><div><Activity /><strong>Now</strong><span>Attendance, incidents, cover and live alerts</span></div><div><BarChart3 /><strong>Trend</strong><span>Schools, classes, periods and benchmark comparisons</span></div><div><BrainCircuit /><strong>Anticipate</strong><span>Early signals for learning, absence and operational risk</span></div></div></div></section>

      <section className="migration-section" id="migration"><div className="shell"><SectionHead eyebrow="04 · No forced fresh start" title="Move safely—or operate beside what already works" lead="Transformation is not file copying. It is a governed path protecting data integrity, operational continuity and user confidence." /><div className="modes-grid"><div className="mode-card"><RefreshCw /><h3>Full Migration</h3><p>Validated transfer followed by a controlled platform cutover.</p></div><div className="mode-card"><GitCompare /><h3>Parallel Run</h3><p>A defined comparison and reconciliation period before retirement.</p></div><div className="mode-card"><Layers3 /><h3>Phased Replacement</h3><p>Domain-by-domain launch to reduce risk and simplify adoption.</p></div><div className="mode-card"><Plug /><h3>Sidecar Mode</h3><p>Coexistence through integrations and explicit sources of truth.</p></div></div><div className="migration-flow">{migrationSteps.map(([num, title, text]) => <div className="flow-step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><div className="import-strip"><Database /><div><strong>Institutional Import Hub</strong><span>Students · Guardians · Staff · Grades · Attendance · Invoices · Payments · Contracts · Assets · Documents</span></div><div className="format-list"><b>XLSX</b><b>CSV</b><b>API</b><b>SFTP</b></div></div></div></section>

      <section className="ai-section" id="ai"><div className="shell ai-grid"><div className="ai-image-wrap"><Image src="/images/ai-tutor.webp" alt="A student receiving personalised at-home support from an AI tutor" fill unoptimized sizes="(max-width: 900px) 100vw, 48vw" /><div className="ai-orbit"><Bot /><span>Personal learning session</span></div></div><div className="ai-copy"><p className="eyebrow"><Sparkles size={16} /> 05 · The future-ready add-on</p><h2>AI enters when the school chooses—not before.</h2><p>The integrated school system remains the core. Artificial intelligence is a separately priced, independently licensed package, disabled by default and activated only when the school is ready.</p><div className="ai-feature"><GraduationCap /><div><strong>AI support teacher</strong><span>Uses authorised performance data to identify gaps, form a support plan, explain, practise and measure improvement within school policy.</span></div></div><div className="ai-feature"><BrainCircuit /><div><strong>Virtual classes and at-home tutoring</strong><span>Structured foundation, revision and enrichment sessions with goals, progress and alerts.</span></div></div><div className="ai-feature"><Briefcase /><div><strong>Staff academy and digital workers</strong><span>Procedural training, reporting support and clearly bounded finance or administrative tasks with human approval.</span></div></div></div></div><div className="shell ai-contract"><div className="contract-title"><KeyRound /><div><small>COMMERCIAL AND TECHNICAL RESPONSIBILITY</small><strong>The school owns its keys, consumption and infrastructure.</strong></div></div><div className="contract-grid"><div><Cloud /><span><b>School responsibility</b>Provider subscriptions, models, tokens, servers, storage and every third-party service.</span></div><div><Cpu /><span><b>System provider responsibility</b>Code, integration, governance, quality, tool boundaries and user experience.</span></div><div><ShieldCheck /><span><b>Mandatory control</b>Human approval, least privilege, audit, risk classification and emergency stop.</span></div></div></div></section>

      <section className="architecture-section" id="architecture"><div className="shell"><SectionHead eyebrow="06 · Engineering behind the experience" title="The platform’s strength goes far beyond its interface" lead="True quality means staying fast, secure and understandable as schools, users, data and integrations multiply." /><div className="architecture-map"><div className="arch-layer"><span>User Experiences</span><div>Group Leadership</div><div>School</div><div>Teacher</div><div>Student & Family</div></div><div className="arch-layer accent"><span>Business Layer</span><div>Bounded Domains</div><div>Policy Engine</div><div>Workflows</div><div>Decision Intelligence</div></div><div className="arch-layer"><span>Trust Layer</span><div>Identity & Access</div><div>Tenant Isolation</div><div>Audit & Approval</div><div>Privacy & Retention</div></div><div className="arch-layer"><span>Connectivity Layer</span><div>API First</div><div>Events & Integration</div><div>Import & Migration</div><div>Observability</div></div></div><div className="architecture-notes"><article><Workflow /><h3>Disciplined Foundation</h3><p>A modular core with explicit domain boundaries that limits coupling and accelerates delivery.</p></article><article><Lock /><h3>Security by Design</h3><p>Contextual access, separation of duties, encryption, tamper-evident audit and retention policy.</p></article><article><Server /><h3>Flexible Deployment</h3><p>Isolated shared cloud, dedicated environment or customer-specific deployment.</p></article><article><FileStack /><h3>Provable Continuity</h3><p>Backup, recovery, monitoring, failure planning and regularly tested restoration.</p></article></div></div></section>

      <section className="standards-section"><div className="shell"><SectionHead eyebrow="07 · The quality standard" title="Beauty you can see. Quality you can measure." lead="Every design and engineering decision passes clear gates for performance, security, accessibility and consistency—not visual opinion alone." /><div className="standards-grid">{standards.map(([Icon, title, text]) => { const StandardIcon = Icon as typeof Gauge; return <article key={String(title)}><StandardIcon /><h3>{String(title)}</h3><p>{String(text)}</p></article>; })}</div><div className="standards-line"><span>ISO/IEC 25010</span><span>ISO 9241-210</span><span>WCAG 2.2 AA</span><span>OWASP ASVS 5.0</span><span>ISO 27001 alignment</span></div></div></section>

      <section className="roadmap-section" id="roadmap"><div className="shell"><SectionHead eyebrow="08 · Delivery roadmap" title="A sequence that builds trust before complexity" lead="The platform moves from operational core to institutional intelligence and scale, while AI follows an independent track that never destabilises the foundation." /><div className="roadmap-grid">{roadmap.map(([code, title, text], index) => <article className={code === "AX" ? "roadmap-card ai-roadmap" : "roadmap-card"} key={code}><span>{code}</span><small>{String(index + 1).padStart(2, "0")}</small><h3>{title}</h3><p>{text}</p></article>)}</div><div className="future-callout"><Rocket /><div><strong>The designed future</strong><span>Hybrid classrooms, personalised learning, governed automation, large school-group leadership and GCC-ready localisation—with people remaining accountable for every material decision.</span></div></div></div></section>

      <section className="packages-section" id="packages"><div className="shell"><SectionHead eyebrow="09 · Modular commercial model" title="Acquire what you need today. Add what you need tomorrow." lead="Clear modular licensing avoids charging schools for unused capability while preserving one upgradeable institutional core." /><div className="package-grid">{packages.map(([name, badge, text], index) => <article className={index > 4 ? "package-card ai-package" : "package-card"} key={name}><span>{badge}</span><h3>{name}</h3><p>{text}</p><div><CheckCircle2 size={16} /> Configurable and upgradeable</div></article>)}</div><div className="cost-note"><DollarSign /><div><strong>Explicit cost separation</strong><span>The licence, development quality and integration cover the platform. Hosting, infrastructure, storage, AI providers, tokens and all third-party services are purchased and owned directly by the school.</span></div></div></div></section>

      <section className="closing-section"><div className="closing-grid" /><div className="shell closing-content"><p className="eyebrow">The final vision</p><h2>From a student record…<br /><span>to a school that knows, decides and evolves.</span></h2><p>An institutional platform carrying every customer’s identity, respecting their current reality, improving each school day and opening the future without locking them into a fixed brand, provider or hidden operating cost.</p><div className="closing-points"><span><CheckCircle2 /> Complete without bloat</span><span><CheckCircle2 /> Premium without complexity</span><span><CheckCircle2 /> Flexible without chaos</span><span><CheckCircle2 /> Future-ready without recklessness</span></div><a className="button primary" href="#top">Review the vision again <ArrowRight size={18} /></a></div></section>

      <footer><div className="shell"><span>Executive showcase · White Label School Operating System</span><span>Learning · Operations · Governance · Future</span></div></footer>
    </main>
  );
}
