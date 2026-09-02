import Image from "next/image";
import Link from "next/link";
import {
  Accessibility, Activity, ArrowLeft, BadgeCheck, BarChart3, Bot, BrainCircuit,
  Briefcase, Building2, Bus, Calendar, CheckCircle2, Cloud, Command, Cpu,
  Database, DollarSign, Eye, FileCheck2, FileStack, Gauge, GitCompare,
  GraduationCap, HeartPulse, KeyRound, Languages, Layers3, Lock, MessageSquare,
  Network, Package, Plug, RefreshCw, Rocket, Scale, School, Server,
  ShieldCheck, Sparkles, UserCheck, Users, WalletCards, Workflow,
} from "lucide-react";

const capabilities = [
  { icon: Building2, title: "الهوية والهيكل المؤسسي", label: "المؤسسة", summary: "علامة بيضاء حقيقية وهيكل مرن من مدرسة واحدة إلى مجموعات متعددة الإدارات.", items: ["الهوية البصرية والنطاق والتطبيق باسم المدرسة", "كيانات وفروع ومناطق وإدارات ومجالس", "سياسات وصلاحيات وتفويضات قابلة للتوريث", "عزل بيانات كل مؤسسة ومدرسة بالكامل"] },
  { icon: GraduationCap, title: "القبول وشؤون الطلبة", label: "الطالب", summary: "رحلة رقمية موحدة منذ طلب الالتحاق وحتى التخرج والأرشفة.", items: ["التقديم والفرز والمقابلات والعروض", "ملف طالب 360° والوثائق والموافقات", "النقل والترقية والانسحاب والخريجون", "الإخوة وأولياء الأمور والحالات الخاصة"] },
  { icon: School, title: "التعليم والتقييم", label: "التعلّم", summary: "إدارة المنهج والخطط الصفية والواجبات والدرجات والشهادات في سياق واحد.", items: ["الخطط والمناهج ونواتج التعلّم", "الفصول والحصص والواجبات والمصادر", "بنوك الأسئلة والاختبارات والروبرك", "كشوف الدرجات والشهادات والتحليل الأكاديمي"] },
  { icon: Calendar, title: "الجداول والحضور", label: "التشغيل", summary: "جدولة ذكية تقلل التعارضات وتمنح الحضور والانصراف دقة لحظية.", items: ["جداول الفصول والمعلمين والقاعات", "التبديلات والمناوبات والاختبارات", "حضور الطلبة والموظفين والتأخر", "الغياب والمبررات والتنبيه المبكر"] },
  { icon: ShieldCheck, title: "حماية الطالب والدعم", label: "الثقة", summary: "منظومة مقيدة الصلاحيات لإدارة البلاغات والحالات وخطط التدخل بسرية.", items: ["الحماية والسلوك والتنمر والحوادث", "الإرشاد النفسي والاجتماعي", "الاحتياجات التعليمية وخطط الدعم", "مسارات تصعيد وسجل إجراءات محكم"] },
  { icon: HeartPulse, title: "الصحة والرفاه", label: "الرعاية", summary: "ملف صحي مدرسي آمن يدعم العيادة والطوارئ والأدوية والحساسية.", items: ["الزيارات والإسعافات والحوادث", "الأدوية والحساسية والتطعيمات", "خطط الطوارئ والموافقات", "رفاه الطالب ومؤشرات المتابعة"] },
  { icon: MessageSquare, title: "الأسرة والتواصل", label: "المجتمع", summary: "بوابة وتطبيق موحدان يربطان المدرسة بالأسرة مع سجل اتصال كامل.", items: ["إعلانات ورسائل وإشعارات متعددة القنوات", "مواعيد واجتماعات وموافقات رقمية", "الخطة والواجبات والنتائج والمدفوعات", "نماذج واستبيانات وتذاكر خدمة"] },
  { icon: Bus, title: "النقل والأنشطة", label: "الحياة المدرسية", summary: "تنسيق يوم الطالب خارج الصف: النقل والرحلات والأندية والفعاليات.", items: ["الخطوط والمواقف والمركبات والمشرفون", "الصعود والنزول والتنبيهات", "الرحلات والموافقات والمخاطر", "الأندية والفعاليات والمشاركة"] },
  { icon: Briefcase, title: "القوى العاملة", label: "الموظف", summary: "دورة موظف متكاملة للبشر، مع جاهزية منفصلة للعامل الرقمي الاختياري.", items: ["التوظيف والملف والعقود والوثائق", "الدوام والإجازات والمناوبات", "الأداء والتطوير والتدريب", "الهيكل والوصف الوظيفي والبدلاء"] },
  { icon: WalletCards, title: "المالية والمشتريات", label: "المال", summary: "ضبط الرسوم والتحصيل والموازنات والمصروفات والمشتريات بأثر تدقيقي.", items: ["هياكل الرسوم والخصومات والمنح", "الفواتير والتحصيل والاسترداد والتسوية", "الموازنات والحسابات ومراكز التكلفة", "الطلبات والموافقات والموردون وأوامر الشراء"] },
  { icon: Package, title: "الأصول والمرافق", label: "المكان", summary: "رؤية دقيقة للمباني والقاعات والمخزون والعهد والصيانة والسلامة.", items: ["سجل الأصول والعهد والجرد", "المخزون والمستودعات والصرف", "طلبات الصيانة والعقود الوقائية", "الحجوزات والزوار والطوارئ والسلامة"] },
  { icon: Scale, title: "القانونية والحوكمة", label: "القرار", summary: "إدارة اللجان والسياسات والعقود والقضايا والقرارات بصورة مؤسسية.", items: ["مجالس ولجان ومحاضر وقرارات", "عقود والتزامات ومواعيد انتهاء", "قضايا ومخاطر قانونية وتفويضات", "سياسات وإصدارات وإقرارات اطلاع"] },
  { icon: BadgeCheck, title: "الامتثال والجودة", label: "التميز", summary: "تحويل الاعتماد والجودة من ملفات موسمية إلى ممارسة يومية قابلة للقياس.", items: ["الأدلة والمعايير وخطط التحسين", "التدقيق والملاحظات والإجراءات التصحيحية", "المخاطر والضوابط واستمرارية الأعمال", "مؤشرات الأداء وملفات الاعتماد"] },
  { icon: BarChart3, title: "البيانات والذكاء المؤسسي", label: "الرؤية", summary: "طبقة قرار موحدة من الفصل إلى المجموعة مع تنبيهات واستشراف للمخاطر.", items: ["لوحات حسب الدور والفرع والمجموعة", "مؤشرات أكاديمية ومالية وتشغيلية", "إنذار مبكر للتعثر والغياب والتسرب", "تقارير تنفيذية ومقارنات واتجاهات"] },
  { icon: Plug, title: "التكامل والترحيل", label: "الانتقال", summary: "بوابة استيراد وتكامل تسمح بالهجرة أو التشغيل المتوازي دون تعطيل المدرسة.", items: ["CSV وExcel وواجهات API وملفات معيارية", "خرائط حقول وتنظيف وتحقق وتجربة", "تسويات وفروقات وسجل مصدر البيانات", "موصلات للمالية والتعلّم والهوية والدفع"] },
  { icon: Bot, title: "الذكاء الاصطناعي الاختياري", label: "المستقبل", summary: "حزمة مدفوعة مستقلة تضيف معلماً مسانداً وأكاديمية موظفين وعمالاً رقميين.", items: ["تقوية شخصية للطالب في المنزل", "فصول افتراضية ومعلّم AI بإشراف المدرسة", "تدريب الموظفين وإجراءات العمل", "محاسب أو إداري رقمي بحدود واعتمادات بشرية"] },
];

const roles = [
  ["القيادة والملاك", "صورة تنفيذية للمجموعة، المقارنات، المخاطر، الأداء والقرارات."],
  ["مدير المدرسة", "لوحة يومية للتعليم والحضور والموارد والمالية والامتثال."],
  ["المعلم", "صفه وخطته وحضوره وتقييمه وتواصله في مساحة عمل واحدة."],
  ["الطالب", "جدوله وتعلّمه وواجباته ونتائجه ودعمه وخدماته المدرسية."],
  ["ولي الأمر", "رؤية موحدة لأبنائه: الحضور، التعلم، التواصل، الموافقات والرسوم."],
  ["الموظف المختص", "مسارات دقيقة للمالية والموارد البشرية والقانونية والصحة والتشغيل."],
];

const migrationSteps = [
  ["01", "اكتشاف", "حصر الأنظمة والملفات والمالكين وجودة البيانات."],
  ["02", "مطابقة", "ربط الحقول والقيم والهويات والقواعد بين المصدر والمنصة."],
  ["03", "تنقية", "كشف التكرار والنقص والتعارض وتصحيح البيانات في منطقة تجهيز."],
  ["04", "تجربة", "ترحيل تجريبي قابل للإعادة مع تقارير رفض واستثناءات واضحة."],
  ["05", "تسوية", "مقارنة الأعداد والأرصدة والدرجات والفواتير وإثبات التطابق."],
  ["06", "تشغيل", "تثبيت مصدر الحقيقة والمراقبة والرجوع المنضبط عند الحاجة."],
];

const standards = [
  [Gauge, "أداء محسوس", "ميزانيات أداء، تحميل تدريجي، بحث سريع ومراقبة رحلة المستخدم."],
  [Accessibility, "وصول شامل", "WCAG 2.2 AA، لوحة مفاتيح، قارئ شاشة، تباين وحالات واضحة."],
  [Languages, "عربي أولاً", "RTL أصيل مع إنجليزية LTR، خطوط مقروءة وتواريخ وأرقام محلية."],
  [ShieldCheck, "أمن مؤسسي", "مواءمة OWASP ASVS 5.0، أقل صلاحية، تشفير، سجلات وتنبيهات."],
  [FileCheck2, "جودة هندسية", "ISO/IEC 25010، اختبارات آلية، مراجعات، توثيق وإصدارات مستقرة."],
  [UserCheck, "تجربة منضبطة", "منهج ISO 9241-210، اتساق الواجهات وتقليل الأخطاء والخطوات."],
];

const packages = [
  ["Core White Label", "الأساس", "الهوية، الهيكل، المستخدمون، الطلبة، التعليم، الحضور، التواصل والتقارير."],
  ["Operations", "تشغيل موسّع", "الموارد البشرية والمالية والمشتريات والأصول والمرافق والنقل والأنشطة."],
  ["Trust & Compliance", "ثقة وحوكمة", "الحماية والصحة والقانونية والجودة والمخاطر والاعتماد."],
  ["Group Command", "قيادة المجموعة", "لوحات عبر المدارس، سياسات مركزية، مقارنة وقرارات تنفيذية."],
  ["Enterprise Deployment", "نشر مؤسسي", "بيئة مخصصة، تكاملات وترحيل متقدم وضوابط تشغيل ودعم."],
  ["AI Learning", "إضافة مستقلة", "معلّم مساند، تقوية شخصية، فصول افتراضية وأكاديمية تطوير الموظفين."],
  ["AI Workforce", "إضافة مستقلة", "عمال رقميون للمالية والإدارة والتشغيل ضمن أدوار وحدود واعتمادات."],
];

const roadmap = [
  ["M0", "الأساس المؤسسي", "النطاق، الحوكمة، التصميم، الأمن ونموذج تعدد المؤسسات."],
  ["M1", "قلب الطالب", "الهوية والقبول وملف الطالب والأسرة والوثائق."],
  ["M2", "الحياة الأكاديمية", "المنهج والجداول والحضور والتقييم والبوابات."],
  ["M3", "التشغيل", "القوى العاملة والمالية والمشتريات والأصول والمرافق."],
  ["M4", "الثقة", "الحماية والصحة والقانونية والجودة والمخاطر."],
  ["M5", "الانتقال", "الترحيل والتكامل والتشغيل المتوازي والتسويات."],
  ["M6", "القيادة", "مستودع البيانات والمؤشرات والإنذار المبكر ومركز القيادة."],
  ["M7", "التوسع", "تجارب المجموعة، المرونة التشغيلية والتوطين الإقليمي."],
  ["M8", "النضج", "الاختبارات واسعة النطاق والتحسين والإطلاق المرحلي."],
  ["AX", "مسار AI مستقل", "يُفعّل بعد استقرار القلب، وبترخيص وبنية ومزودات يملكها العميل."],
];

function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return <div className="section-head"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{lead}</p></div>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brandmark" href="#top" aria-label="العودة إلى البداية"><span className="brand-icon"><Layers3 size={19} /></span><span>منظومة مدرسية · علامة بيضاء</span></a>
        <nav aria-label="التنقل الرئيسي"><a href="#platform">المنظومة</a><a href="#capabilities">القدرات</a><a href="#migration">الانتقال</a><a href="#ai">الذكاء الاصطناعي</a><a href="#roadmap">المستقبل</a></nav>
        <div className="top-actions"><Link className="language-link" href="/en" lang="en" dir="ltr">English</Link><a className="top-cta" href="#packages">نموذج التقديم <ArrowLeft size={15} /></a></div>
      </header>

      <section className="hero" id="top">
        <Image src="/images/hero.webp" alt="حرم مدرسي حديث يعكس منظومة رقمية مترابطة" fill priority sizes="100vw" />
        <div className="hero-shade" /><div className="hero-grid" />
        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={16} /> بنية رقمية تحمل اسم كل مدرسة</p>
            <h1>ليست منصة إدارة فقط.<br /><span>إنها نظام تشغيل المدرسة.</span></h1>
            <p className="hero-lead">من شؤون الطالب والتعليم إلى المالية والقانونية والقيادة المؤسسية—منظومة فاخرة، معيارية، قابلة للتوسع، تعمل باسم العميل وتتكيف مع واقعه.</p>
            <div className="hero-actions"><a className="button primary" href="#capabilities">استكشف المنظومة <ArrowLeft size={18} /></a><a className="button ghost" href="#architecture">شاهد طريقة العمل</a></div>
          </div>
          <aside className="hero-panel" aria-label="ملخص المنصة">
            <div className="live-line"><span /> جاهزية مؤسسية من اليوم الأول</div>
            <div className="hero-stat"><strong>360°</strong><span>رؤية موحدة للطالب والمدرسة</span></div>
            <div className="hero-stat"><strong>16</strong><span>مجالاً تشغيلياً مترابطاً</span></div>
            <div className="hero-stat"><strong>4</strong><span>مسارات للانتقال والتعايش</span></div>
            <div className="hero-stat"><strong>AI</strong><span>إضافة اختيارية مستقلة بالكامل</span></div>
          </aside>
        </div>
        <a className="scroll-cue" href="#platform" aria-label="الانتقال إلى القسم التالي"><span /> مرّر للاستكشاف</a>
      </section>

      <section className="statement" id="platform"><div className="shell statement-grid">
        <div><p className="eyebrow">01 · الفكرة المركزية</p><h2>منصة واحدة.<br />هويات لا محدودة.</h2></div>
        <div className="statement-copy"><p>لا تحمل المنصة اسماً تجارياً ثابتاً. كل مدرسة تستلم تجربة تبدو وكأنها بُنيت لها: اسمها، شعارها، ألوانها، نطاقها، تطبيقها ورسائلها.</p><p>وفي العمق، تبقى نواة مؤسسية واحدة قابلة للتهيئة؛ تخدم مدرسة منفردة أو سلسلة مدارس أو عدة مجموعات، بإدارة مركزية واحدة أو إدارات مستقلة وسياسات مشتركة أو محلية.</p><div className="tag-row"><span>Single school</span><span>Multi-school</span><span>Multi-group</span><span>Multi-brand</span></div></div>
      </div></section>

      <section className="hierarchy-section"><div className="shell">
        <SectionHead eyebrow="تصميم تعدد المؤسسات" title="مرونة تناسب واقع التعليم، لا قالباً جامداً" lead="يتغير شكل الحوكمة والصلاحيات والتقارير مع هيكل العميل دون تفريع الكود أو كسر قابلية التطوير." />
        <div className="hierarchy"><div className="hier-card major"><Command /><small>المستوى 01</small><strong>المجموعة أو المالك</strong><span>هوية عامة · سياسات · رقابة · مؤشرات</span></div><div className="connector" /><div className="hier-row"><div className="hier-card"><Network /><small>المستوى 02</small><strong>إدارة أو منطقة</strong><span>تفويض · موازنة · إشراف</span></div><div className="hier-card"><Building2 /><small>المستوى 03</small><strong>مدرسة أو فرع</strong><span>تشغيل · موارد · أداء</span></div><div className="hier-card"><Users /><small>المستوى 04</small><strong>صف أو فريق</strong><span>تعليم · خدمة · تنفيذ</span></div></div></div>
      </div></section>

      <section className="roles-section"><div className="shell">
        <SectionHead eyebrow="تجربة حسب الدور" title="كل مستخدم يرى ما يحتاجه—في اللحظة التي يحتاجه فيها" lead="واجهة واحدة في روحها، مختلفة بذكاء في أولوياتها؛ تقلل الضوضاء وتقرّب القرار من صاحبه." />
        <div className="roles-grid">{roles.map(([title, text], index) => <article className="role-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="capabilities-section" id="capabilities"><div className="shell">
        <SectionHead eyebrow="02 · خريطة القدرات" title="كل ما تحتاجه المدرسة. مترابط، قابل للقياس، وجاهز للنمو." lead="ستة عشر مجالاً تغطي رحلة الطالب، يوم المعلم، أعمال الإدارة، وثقة المؤسسة—دون جزر بيانات منفصلة." />
        <div className="capability-grid">{capabilities.map(({ icon: Icon, title, label, summary, items }, index) => <details className="capability-card" key={title} open={index < 3}><summary><span className="cap-icon"><Icon size={22} /></span><span className="cap-title"><small>{label}</small><strong>{title}</strong></span><span className="plus" aria-hidden="true">+</span></summary><p>{summary}</p><ul>{items.map((item) => <li key={item}><CheckCircle2 size={14} />{item}</li>)}</ul></details>)}</div>
        <p className="interaction-note"><Eye size={16} /> افتح أي بطاقة لاستعراض تفاصيلها</p>
      </div></section>

      <section className="command-section" id="command"><Image src="/images/command-center.webp" alt="فريق قيادة مدارس يتابع مركز القيادة المؤسسي" fill sizes="100vw" /><div className="command-shade" /><div className="shell command-content"><p className="eyebrow">03 · مركز القيادة</p><h2>من النبض اليومي إلى القرار الاستراتيجي</h2><p>تتجمع الحقيقة التشغيلية والأكاديمية والمالية في لوحات سياقية؛ تعرض الوضع، تكشف الانحراف، وتوجّه المسؤول إلى الإجراء التالي.</p><div className="command-metrics"><div><Activity /><strong>الآن</strong><span>حضور، حوادث، تغطيات وتنبيهات لحظية</span></div><div><BarChart3 /><strong>الاتجاه</strong><span>مقارنات مدارس وفصول وفترات ومؤشرات</span></div><div><BrainCircuit /><strong>الاستباق</strong><span>إشارات مبكرة للتعثر والغياب والمخاطر</span></div></div></div></section>

      <section className="migration-section" id="migration"><div className="shell">
        <SectionHead eyebrow="04 · لا بداية من الصفر" title="ينتقل إلى واقع المدرسة بهدوء—أو يعمل بجانبه" lead="التحول ليس عملية نسخ ملفات؛ إنه مسار محكوم يحافظ على سلامة البيانات واستمرار الأعمال وثقة المستخدمين." />
        <div className="modes-grid"><div className="mode-card"><RefreshCw /><h3>هجرة كاملة</h3><p>نقل معتمد ثم تثبيت المنصة كمصدر الحقيقة.</p></div><div className="mode-card"><GitCompare /><h3>تشغيل متوازٍ</h3><p>فترة مقارنة وتسوية قبل الإيقاف المنضبط للنظام السابق.</p></div><div className="mode-card"><Layers3 /><h3>استبدال مرحلي</h3><p>إطلاق نطاق بعد آخر لتقليل المخاطر وتسهيل التبنّي.</p></div><div className="mode-card"><Plug /><h3>نظام مساند</h3><p>العمل بجانب النظام القائم عبر تكاملات ومصادر حقيقة محددة.</p></div></div>
        <div className="migration-flow">{migrationSteps.map(([num, title, text]) => <div className="flow-step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        <div className="import-strip"><Database /><div><strong>بوابة استيراد مؤسسية</strong><span>طلاب · أولياء أمور · موظفون · درجات · حضور · فواتير · مدفوعات · عقود · أصول · وثائق</span></div><div className="format-list"><b>XLSX</b><b>CSV</b><b>API</b><b>SFTP</b></div></div>
      </div></section>

      <section className="ai-section" id="ai"><div className="shell ai-grid">
        <div className="ai-image-wrap"><Image src="/images/ai-tutor.webp" alt="طالب يتلقى تقوية شخصية من معلّم ذكاء اصطناعي في المنزل" fill sizes="(max-width: 900px) 100vw, 48vw" /><div className="ai-orbit"><Bot /><span>جلسة تعلم شخصية</span></div></div>
        <div className="ai-copy"><p className="eyebrow"><Sparkles size={16} /> 05 · الإضافة المستقبلية</p><h2>الذكاء الاصطناعي يدخل حين تختاره المدرسة—لا قبل ذلك.</h2><p>يبقى النظام المدرسي المتكامل هو القلب. أما الذكاء الاصطناعي فهو حزمة مدفوعة، مستقلة، غير مفعلة افتراضياً، تُضاف عندما تكون المدرسة جاهزة لها.</p><div className="ai-feature"><GraduationCap /><div><strong>معلّم مساند للطالب</strong><span>يقرأ الأداء المصرح به، يحدد الفجوات، يبني خطة تقوية، يشرح ويتدرج ويقيس التحسن—داخل سياسة المدرسة.</span></div></div><div className="ai-feature"><BrainCircuit /><div><strong>فصول افتراضية وتقوية منزلية</strong><span>جلسات منظمة للمراجعة والتأسيس والإثراء مع تسجيل الأهداف والتقدم والتنبيهات.</span></div></div><div className="ai-feature"><Briefcase /><div><strong>أكاديمية الموظفين وعمال رقميون</strong><span>تدريب إجرائي، مساعدة في التقارير، ومهام مالية أو إدارية محددة بوضوح واعتماد بشري.</span></div></div></div>
      </div><div className="shell ai-contract"><div className="contract-title"><KeyRound /><div><small>حدود المسؤولية التجارية والتقنية</small><strong>المدرسة تملك مفاتيحها واستهلاكها وبنيتها.</strong></div></div><div className="contract-grid"><div><Cloud /><span><b>على المدرسة</b>اشتراكات المزود والنماذج والـ Tokens والخوادم والتخزين وأي طرف ثالث.</span></div><div><Cpu /><span><b>على مزود النظام</b>الكود، التكامل، الحوكمة، الجودة، حدود الأدوات وتجربة الاستخدام.</span></div><div><ShieldCheck /><span><b>ضبط إلزامي</b>موافقات بشرية، أقل صلاحية، أثر تدقيقي، تصنيف مخاطر وزر إيقاف.</span></div></div></div></section>

      <section className="architecture-section" id="architecture"><div className="shell">
        <SectionHead eyebrow="06 · الهندسة التي تحمي الفخامة" title="قوة المنصة لا تظهر فقط في واجهتها" lead="الفخامة الحقيقية هي أن تبقى التجربة سريعة وآمنة ومفهومة عندما تتضاعف المدارس والبيانات والتكاملات." />
        <div className="architecture-map"><div className="arch-layer"><span>تجارب المستخدم</span><div>إدارة المجموعة</div><div>المدرسة</div><div>المعلم</div><div>الطالب والأسرة</div></div><div className="arch-layer accent"><span>طبقة الأعمال</span><div>مجالات مستقلة</div><div>محرك سياسات</div><div>مسارات عمل</div><div>تقارير وقرارات</div></div><div className="arch-layer"><span>طبقة الثقة</span><div>هوية وصلاحيات</div><div>عزل المؤسسات</div><div>تدقيق وموافقات</div><div>خصوصية واحتفاظ</div></div><div className="arch-layer"><span>طبقة الاتصال</span><div>API أولاً</div><div>أحداث وتكامل</div><div>استيراد وترحيل</div><div>مراقبة وتشغيل</div></div></div>
        <div className="architecture-notes"><article><Workflow /><h3>بداية منضبطة</h3><p>نواة معيارية قابلة للفصل، وحدود مجالات واضحة تمنع التشابك وتسرّع التسليم.</p></article><article><Lock /><h3>أمن منذ التصميم</h3><p>صلاحيات سياقية، فصل الواجبات، تشفير، تدقيق غير قابل للعبث وسياسات احتفاظ.</p></article><article><Server /><h3>خيارات نشر مرنة</h3><p>سحابة مشتركة معزولة، بيئة خاصة أو نشر مخصص وفق متطلبات العميل.</p></article><article><FileStack /><h3>استمرارية قابلة للإثبات</h3><p>نسخ احتياطي، تعافي، مراقبة، خطط فشل واختبارات دورية للاسترجاع.</p></article></div>
      </div></section>

      <section className="standards-section"><div className="shell">
        <SectionHead eyebrow="07 · مقياس الجودة" title="جمال يمكن رؤيته. جودة يمكن قياسها." lead="كل قرار في التصميم والكود يمر عبر بوابة واضحة للأداء والأمن والوصول والاتساق—وليس مجرد انطباع بصري." />
        <div className="standards-grid">{standards.map(([Icon, title, text]) => { const StandardIcon = Icon as typeof Gauge; return <article key={String(title)}><StandardIcon /><h3>{String(title)}</h3><p>{String(text)}</p></article>; })}</div>
        <div className="standards-line"><span>ISO/IEC 25010</span><span>ISO 9241-210</span><span>WCAG 2.2 AA</span><span>OWASP ASVS 5.0</span><span>ISO 27001 alignment</span></div>
      </div></section>

      <section className="roadmap-section" id="roadmap"><div className="shell">
        <SectionHead eyebrow="08 · طريق التنفيذ" title="تسلسل يبني الثقة قبل أن يبني التعقيد" lead="تتقدم المنصة من القلب التشغيلي إلى الذكاء المؤسسي والتوسع، بينما يسير AI في مسار مستقل لا يربك الأساس." />
        <div className="roadmap-grid">{roadmap.map(([code, title, text], index) => <article className={code === "AX" ? "roadmap-card ai-roadmap" : "roadmap-card"} key={code}><span>{code}</span><small>{String(index + 1).padStart(2, "0")}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="future-callout"><Rocket /><div><strong>المستقبل المرسوم</strong><span>صفوف هجينة، تعلم شخصي، تشغيل ذاتي منضبط، قيادة مجموعات على نطاق واسع، وتوطين جاهز لأسواق الخليج—مع بقاء الإنسان صاحب القرار.</span></div></div>
      </div></section>

      <section className="packages-section" id="packages"><div className="shell">
        <SectionHead eyebrow="09 · نموذج تقديم مرن" title="اشترِ ما تحتاجه اليوم. أضف ما تحتاجه غداً." lead="تراخيص معيارية واضحة تمنع تحميل المدرسة تكلفة وظائف لا تستخدمها، وتحافظ على قلب موحد قابل للتوسع." />
        <div className="package-grid">{packages.map(([name, badge, text], index) => <article className={index > 4 ? "package-card ai-package" : "package-card"} key={name}><span>{badge}</span><h3>{name}</h3><p>{text}</p><div><CheckCircle2 size={16} /> قابل للتهيئة والترقية</div></article>)}</div>
        <div className="cost-note"><DollarSign /><div><strong>فصلٌ صريح للتكاليف</strong><span>الرخصة والتطوير والتكامل مقابل النظام؛ أما الاستضافة والبنية والتخزين ومزودو AI والـ Tokens وجميع خدمات الأطراف الثالثة فتكون على حساب المدرسة وبملكيتها المباشرة.</span></div></div>
      </div></section>

      <section className="closing-section"><div className="closing-grid" /><div className="shell closing-content"><p className="eyebrow">الرؤية النهائية</p><h2>من سجل طالب…<br /><span>إلى مدرسة تعرف، تقرر، وتتطور.</span></h2><p>منظومة مؤسسية تحمل هوية كل عميل، تستوعب واقعه الحالي، ترفع جودة يومه، وتفتح له طريق المستقبل دون أن ترهنه باسم ثابت أو مزود واحد أو تكلفة خفية.</p><div className="closing-points"><span><CheckCircle2 /> شاملة دون تضخم</span><span><CheckCircle2 /> فاخرة دون تعقيد</span><span><CheckCircle2 /> مرنة دون فوضى</span><span><CheckCircle2 /> مستقبلية دون مخاطرة</span></div><a className="button primary" href="#top">أعد استعراض الرؤية <ArrowLeft size={18} /></a></div></section>

      <footer><div className="shell"><span>عرض تنفيذي لمنصة تشغيل مدرسية ذات علامة بيضاء</span><span>تعليم · تشغيل · حوكمة · مستقبل</span></div></footer>
    </main>
  );
}
