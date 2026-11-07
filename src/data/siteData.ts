export type Language = 'en' | 'ar';

export interface ProductItem {
  id: string;
  title: { en: string; ar: string };
  category: { en: string; ar: string };
  catKey: 'services' | 'consulting' | 'digital';
  price: number;
  originalPrice: number;
  rating: string;
  badge?: { en: string; ar: string };
  delivery: { en: string; ar: string };
  desc: { en: string; ar: string };
  deliverables: { en: string[]; ar: string[] };
  iconName: string;
  accentColor: string;
}

export interface ArticleItem {
  id: string;
  title: { en: string; ar: string };
  category: { en: string; ar: string };
  date: { en: string; ar: string };
  readTime: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  body: { en: string; ar: string };
  takeaways: { en: string[]; ar: string[] };
}

export interface ExperienceItem {
  period: { en: string; ar: string };
  role: { en: string; ar: string };
  company: { en: string; ar: string };
  location: { en: string; ar: string };
  contact?: string;
  summary: { en: string; ar: string };
  highlights: { en: string[]; ar: string[] };
}

export const PROFILE = {
  name: { en: 'Ammar Alsheikh', ar: 'عمار الشيخ' },
  title: { en: 'Sales Executive • B2B Commercial & IT Operations', ar: 'مسؤول مبيعات • مبيعات B2B والعمليات التقنية' },
  company: { en: 'Ultra-Medica for Pharmaceutical & Cosmetic Industry', ar: 'شركة ألترا ميديكا للصناعات الدوائية والتجميلية' },
  nationality: { en: 'Syrian (Damascus 1994)', ar: 'سوري (دمشق 1994)' },
  location: { en: 'Damascus, Syria', ar: 'دمشق، الجمهورية العربية السورية' },
  email: 'ammar_268009@svuonline.org',
  phone: '+963 981092422',
  whatsapp: '963981092422',
  education: {
    en: 'Technology Information Computer Institute - Syrian Virtual University (2026, Grade A-)',
    ar: 'المعهد التقاني للحاسوب - الجامعة الافتراضية السورية (2026، معدل ممتاز A-)'
  },
  headline: {
    en: 'Sales Executive at Ultra-Medica for Pharmaceutical & Cosmetic Industry, Syrian Virtual University Graduate (A- average), and former Production Supervisor at Lu Mario. Combining commercial B2B sales execution, manufacturing workflow leadership, and computer information systems.',
    ar: 'مسؤول مبيعات (Sales Executive) لدى شركة ألترا ميديكا للصناعات الدوائية والتجميلية، خريج المعهد التقاني للحاسوب بالجامعة الافتراضية السورية (معدل ممتاز A-)، ومشرف إنتاج سابق لدى لو ماريو. يجمع بين مهارات التفاوض التجاري B2B، القيادة التشغيلية للمصانع، والخبرة التقنية الحاسوبية.'
  }
};

export const TRANSLATIONS = {
  en: {
    brand_title: 'Ammar Alsheikh',
    brand_subtitle: 'Sales Executive • Ultra-Medica',
    home: 'Home',
    about: 'About & CV',
    shop: 'Services & Store',
    blog: 'Articles',
    contact: 'Contact',
    cart: 'Cart',
    lang_switch_label: 'العربية',
    available_badge: 'Sales Executive at Ultra-Medica • Open to B2B Deals & Advisory',
    hero_title: 'Commercial Growth, Strategic B2B Sales & Precision Operations.',
    hero_lead: "Hi, I'm Ammar Alsheikh — Sales Executive at Ultra-Medica for Pharmaceutical & Cosmetic Industry, Syrian Virtual University Graduate (A- average), and former Production Supervisor at Lu Mario. I combine commercial B2B sales execution, manufacturing workflow leadership, and deep technical IT knowledge.",
    browse_store: 'Explore Services & Store',
    view_cv: 'View Resume & Track Record',
    direct_whatsapp: 'Direct WhatsApp',
    years_exp: 'Years Experience',
    academic_grade: 'Academic Standing',
    hardware_repairs: 'Operations & Deals',
    languages_count: 'Languages Mastered',
    featured_services: 'Featured Sales & Tech Consultations',
    featured_services_sub: 'Strategic B2B pipelines, CRM automation systems, and enterprise data security audits by Ammar Alsheikh.',
    latest_articles: 'Marketing, Sales & Tech Consulting Articles',
    latest_articles_sub: 'Field notes on closing high-value accounts, CRM deal velocity, and manufacturing-sales alignment.',
    view_all_shop: 'View All Offerings',
    explore_blog: 'Explore All Articles',
    add_to_cart: 'Add to Cart',
    added_to_cart: 'Item added to your cart!',
    view_details: 'View Details',
    close: 'Close',
    includes_label: 'Key Deliverables:',
    order_whatsapp: 'Order via WhatsApp',
    turnaround: 'Turnaround:',
    empty_cart: 'Your cart is empty',
    empty_cart_sub: 'Browse our specialized B2B sales pipelines, CRM automation consultations, and financial models to get started.',
    subtotal: 'Subtotal',
    setup_fee: 'Setup & Onboarding',
    free: 'Free ($0.00)',
    total_due: 'Total Due',
    clear_all: 'Clear All',
    confirm_whatsapp: 'Confirm & Dispatch via WhatsApp',
    order_email: 'Submit Order via Email',
    continue_shopping: 'Continue Shopping',
    quick_nav: 'Quick Navigation',
    specialties: 'Core Specialties',
    all_rights: 'All rights reserved. Damascus, Syria.',
    all_offerings: 'All Offerings',
    it_services: 'B2B Sales & Marketing',
    consulting: 'Tech Consulting & CRM',
    digital_guides: 'Digital Toolkits & Models',
    send_message: 'Send Message',
    message_sent: 'Message sent successfully! Ammar will respond shortly.',
    your_name: 'Your Full Name',
    your_email: 'Your Email Address',
    inquiry_topic: 'Service / Inquiry Area',
    your_msg: 'Project Details & Requirements',
    export_html_btn: 'Export Pure HTML/CSS',
    export_html_desc: 'Get clean, production-ready static HTML & CSS files ready to upload to any static hosting provider.',
    download_files: 'Download All Static Files',
    copy_html: 'Copy HTML'
  },
  ar: {
    brand_title: 'عمار الشيخ',
    brand_subtitle: 'مسؤول مبيعات • ألترا ميديكا',
    home: 'الرئيسية',
    about: 'السيرة الذاتية',
    shop: 'الخدمات والمتجر',
    blog: 'المقالات والأبحاث',
    contact: 'اتصل بي',
    cart: 'السلة',
    lang_switch_label: 'English',
    available_badge: 'مسؤول مبيعات في ألترا ميديكا • متاح للتعاقدات التجارية والاستشارات',
    hero_title: 'نمو تجاري متسارع، مبيعات B2B استراتيجية وإشراف تشغيلي دقيق.',
    hero_lead: 'مرحباً، أنا عمار الشيخ — مسؤول مبيعات (Sales Executive) لدى شركة ألترا ميديكا للصناعات الدوائية والتجميلية، خريج المعهد التقاني للحاسوب بالجامعة الافتراضية السورية (معدل ممتاز A-)، ومشرف إنتاج سابق لدى لو ماريو. أجمع بين التفاوض التجاري B2B، القيادة التشغيلية للمصانع، والخبرة التقنية الحاسوبية.',
    browse_store: 'تصفح الخدمات والمتجر',
    view_cv: 'عرض السيرة الذاتية والخبرات',
    direct_whatsapp: 'تواصل عبر واتساب',
    years_exp: 'سنوات خبرة عملية',
    academic_grade: 'الترتيب الأكاديمي',
    hardware_repairs: 'مشاريع وصفقات ناجحة',
    languages_count: 'لغات متقنة',
    featured_services: 'أبرز خدمات المبيعات والاستشارات التقنية',
    featured_services_sub: 'تطوير مسارات مبيعات الشركات B2B، أتمتة نظم الـ CRM، وتدقيق البنية التحتية وحماية بيانات الصفقات.',
    latest_articles: 'مقالات التسويق والمبيعات والاستشارات التقنية',
    latest_articles_sub: 'خلاصة التجارب الميدانية في إغلاق صفقات الأدوية والتجميل، تسريع وتيرة المبيعات، ومواءمة الإنتاج التجاري.',
    view_all_shop: 'عرض جميع الخدمات والمنتجات',
    explore_blog: 'تصفح جميع المقالات',
    add_to_cart: 'أضف للسلة',
    added_to_cart: 'تمت إضافة العنصر إلى السلة بنجاح!',
    view_details: 'عرض التفاصيل',
    close: 'إغلاق',
    includes_label: 'تشمل المخرجات:',
    order_whatsapp: 'اطلب مباشرة عبر واتساب',
    turnaround: 'مدة الإنجاز:',
    empty_cart: 'سلة المشتريات فارغة حالياً',
    empty_cart_sub: 'تصفح خدماتنا واستشاراتنا التجارية والتقنية لاختيار ما يناسب أهداف عملك.',
    subtotal: 'المجموع الفرعي',
    setup_fee: 'رسوم المعالجة والتجهيز',
    free: 'مجاناً ($0.00)',
    total_due: 'المجموع الإجمالي',
    clear_all: 'إفراغ السلة',
    confirm_whatsapp: 'تأكيد وإرسال الطلب عبر واتساب',
    order_email: 'إرسال الطلب عبر البريد الإلكتروني',
    continue_shopping: 'متابعة التصفح والتسوق',
    quick_nav: 'روابط سريعة',
    specialties: 'أبرز التخصصات',
    all_rights: 'جميع الحقوق محفوظة. دمشق، سوريا.',
    all_offerings: 'جميع المعروضات',
    it_services: 'مبيعات B2B والتسويق',
    consulting: 'استشارات تقنية وCRM',
    digital_guides: 'حقائب ونماذج المبيعات الرقمية',
    send_message: 'إرسال الرسالة',
    message_sent: 'تم إرسال رسالتك بنجاح! سيتم التواصل معك في أقرب وقت.',
    your_name: 'الاسم الكامل',
    your_email: 'عنوان البريد الإلكتروني',
    inquiry_topic: 'مجال الاستشارة أو الخدمة',
    your_msg: 'تفاصيل الرسالة أو متطلبات العمل',
    export_html_btn: 'تصدير صفحات HTML و CSS',
    export_html_desc: 'احصل على ملفات HTML و CSS استاتيكية نقية جاهزة للنشر الفوري على أي استضافة استاتيكية.',
    download_files: 'تحميل ملفات HTML الاستاتيكية',
    copy_html: 'نسخ الكود'
  }
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-b2b-sales-strategy',
    title: {
      en: 'B2B Sales Pipeline & Territory Expansion Strategy',
      ar: 'استراتيجية وتطوير مسارات مبيعات الشركات (B2B Pipeline)'
    },
    category: { en: 'B2B Sales', ar: 'مبيعات B2B' },
    catKey: 'services',
    price: 130,
    originalPrice: 180,
    rating: '4.9/5',
    badge: { en: 'Flagship Strategy', ar: 'الأكثر طلباً' },
    delivery: { en: '2-3 Business Days', ar: '2-3 أيام عمل' },
    iconName: 'TrendingUp',
    accentColor: 'sky',
    desc: {
      en: 'End-to-end commercial sales architecture for healthcare, pharma, and retail brands. Prospecting frameworks, objection handling, and territory closing.',
      ar: 'بناء وتطوير منظومة مبيعات الشركات B2B للقطاعات الدوائية والتجميلية والتجارية، استراتيجيات التفاوض، وتوسيع الرقعة الجغرافية للموزعين.'
    },
    deliverables: {
      en: [
        'Customized B2B sales pipeline blueprint & lead qualification scorecard',
        'High-impact commercial negotiation & objection-handling playbook',
        'Distributor margin tiering and volume contract templates',
        'Two 60-minute 1-on-1 strategic sales advisory sessions',
        'Quarterly sales quota & KPI tracking dashboard'
      ],
      ar: [
        'مخطط هيكلي مخصص لمسار مبيعات B2B ومعايير تأهيل العملاء المحتملين',
        'دليل تكتيكات التفاوض التجاري وإغلاق الصفقات والرد على الاعتراضات',
        'نماذج عقود التوريد وهياكل تسعير هوامش الموزعين والكميات',
        'جلستان استشاريتان تنفيذيتان مدة كل منهما 60 دقيقة',
        'لوحة مؤشرات أداء (KPIs) وجداول تتبع الحصص البيعية المستهدفة'
      ]
    }
  },
  {
    id: 'prod-crm-automation',
    title: {
      en: 'Sales Automation & CRM Tech Consultation',
      ar: 'استشارة أتمتة المبيعات وتنصيب نظم إدارة العملاء (CRM)'
    },
    category: { en: 'Tech Consulting', ar: 'استشارات تقنية' },
    catKey: 'consulting',
    price: 110,
    originalPrice: 150,
    rating: '5.0/5',
    badge: { en: 'Tech & Sales Velocity', ar: 'تقنية ومبيعات' },
    delivery: { en: '2-4 Business Days', ar: '2-4 أيام عمل' },
    iconName: 'Cpu',
    accentColor: 'indigo',
    desc: {
      en: 'Integrate CRM systems, automated follow-up sequences, and pipeline tracking to eliminate manual overhead and accelerate deal closures.',
      ar: 'ربط وتهيئة أنظمة CRM، أتمتة تسلسلات المتابعة، وربط فرق المبيعات مع السحابة لتسريع دورة الصفقات وتفادي ضياع العملاء.'
    },
    deliverables: {
      en: [
        'Complete CRM configuration audit (HubSpot, Zoho, ERPNext, or custom Sheets)',
        'Automated client follow-up sequences and quote delivery workflows',
        'Multi-channel WhatsApp & Email communication template integration',
        'Sales rep accountability metrics & conversion analytics setup',
        'Recorded team walkthrough training session'
      ],
      ar: [
        'تدقيق وتهيئة شاملة لنظام CRM (HubSpot, Zoho, ERPNext أو جداول مخصصة)',
        'أتمتة تسلسلات المتابعة مع العملاء وإرسال العروض السعرية آلياً',
        'تكامل قوالب التواصل السريع عبر واتساب والبريد الإلكتروني',
        'ضبط مؤشرات قياس إنتاجية مندوبي المبيعات ومعدلات التحويل',
        'جلسة تدريب مسجلة لفريق المبيعات على الاستخدام الفعال'
      ]
    }
  },
  {
    id: 'prod-pharma-market-entry',
    title: {
      en: 'Pharma & Cosmetic Product Launch Marketing Audit',
      ar: 'تدقيق وتخطيط إطلاق المنتجات الدوائية والتجميلية في الأسواق'
    },
    category: { en: 'Pharma Marketing', ar: 'تسويق دوائي وتجميلي' },
    catKey: 'services',
    price: 140,
    originalPrice: 195,
    rating: '4.8/5',
    badge: { en: 'Pharma Specialized', ar: 'تخصص دوائي وتجميلي' },
    delivery: { en: '3-5 Business Days', ar: '3-5 أيام عمل' },
    iconName: 'ShieldCheck',
    accentColor: 'emerald',
    desc: {
      en: 'Commercial launch strategy for pharmaceutical formulations, skincare, and cosmetic lines. Pricing, key accounts, and pharmacy positioning.',
      ar: 'استراتيجية إطلاق وتسويق تجاري للمستحضرات الصيدلانية ومنتجات العناية بالبشرة، تسعير المنتجات، واستهداف شبكات الصيدليات.'
    },
    deliverables: {
      en: [
        'Comprehensive product positioning & competitor pricing matrix',
        'Pharmacy & clinic introductory incentive commercial structure',
        'Medical representative detailing guide & objection response sheets',
        'Point-of-Sale (POS) promotional calendar and promotional budget model'
      ],
      ar: [
        'مصفوفة تموضع المنتج وتحليل أسعار المنافسين في السوق',
        'هيكل حوافز وعروض تدشين تنافسية لسلاسل الصيدليات والمراكز الطبية',
        'دليل العرض التقديمي للمندوب العلمي وتكتيكات إقناع الأطباء والصيادلة',
        'جدول زمني للحملات الترويجية وميزانية تسويقية واقعية'
      ]
    }
  },
  {
    id: 'prod-sales-playbook-2026',
    title: {
      en: '2026 Enterprise B2B Sales Playbook & Cold Outreach System',
      ar: 'حقيبة أدلة ونماذج مبيعات B2B ومراسلات الصفقات 2026'
    },
    category: { en: 'Digital Toolkits', ar: 'حقائب رقمية' },
    catKey: 'digital',
    price: 35,
    originalPrice: 55,
    rating: '4.9/5',
    badge: { en: 'Instant Download', ar: 'تحميل فوري' },
    delivery: { en: 'Instant Digital Access', ar: 'تسليم رقمي فوري' },
    iconName: 'FileText',
    accentColor: 'amber',
    desc: {
      en: 'Ready-to-deploy cold outreach sequences, sales pitch decks, proposal templates, and contract closing scripts for B2B executives.',
      ar: 'نماذج جاهزة للاستخدام الفوري لمراسلات كبار العملاء، عروض الأسعار، عقود التوريد، ونصوص إغلاق الصفقات التجارية المعقدة.'
    },
    deliverables: {
      en: [
        '25+ high-converting B2B outreach & follow-up templates (English & Arabic)',
        'Executive sales proposal & quotation template (Word, PowerPoint, PDF)',
        'Master contract negotiation & clause mitigation checklist',
        'Client discovery questionnaire for high-value contracts'
      ],
      ar: [
        'أكثر من 25 نموذج مراسلة ومتابعة جاهز للمبيعات (بالعربية والإنجليزية)',
        'قالب احترافي لعروض الأسعار والمقترحات التجارية (Word, PowerPoint, PDF)',
        'قائمة فحص بنود العقود التجارية لتفادي الثغرات القانونية والمالية',
        'استبيان تأهيل واكتشاف احتياجات العميل للصفقات الكبرى'
      ]
    }
  },
  {
    id: 'prod-pricing-model-sheets',
    title: {
      en: 'Pharma & B2B Commercial Pricing & Margin Calculator',
      ar: 'حاسبة التسعير وهوامش الأرباح للمنتجات والصفقات التجارية'
    },
    category: { en: 'Financial Models', ar: 'نماذج مالية' },
    catKey: 'digital',
    price: 25,
    originalPrice: 40,
    rating: '4.8/5',
    badge: { en: 'Automated Spreadsheets', ar: 'نموذج مؤتمت' },
    delivery: { en: 'Instant Digital Access', ar: 'تسليم رقمي فوري' },
    iconName: 'Calculator',
    accentColor: 'emerald',
    desc: {
      en: 'Automated Excel & Google Sheets model for calculating distributor discounts, gross margins, minimum order quantities (MOQ), and sales rebates.',
      ar: 'نموذج إكسل وجداول جوجل مؤتمت بالكامل لحساب هوامش الربح، خصومات الموزعين، الحصص التشجيعية، والحد الأدنى للطلبيات (MOQ).'
    },
    deliverables: {
      en: [
        'Fully unlocked dynamic Excel (.xlsx) & Google Sheets template',
        'Tiered discount & bulk volume rebate calculator',
        'Sales rep commission structure simulator',
        'Break-even and target profit volume modeling'
      ],
      ar: [
        'ملف إكسل وجداول جوجل مفتوح بالكامل بدون أي كلمات سر',
        'حاسبة الخصومات المتدرجة ومكافآت تحقيق الأهداف البيعية (Rebates)',
        'محاكي لعمولات مندوبي ومسؤولي المبيعات',
        'تحليل نقطة التعادل والكميات المستهدفة لتحقيق صافي الربح المطلوب'
      ]
    }
  },
  {
    id: 'prod-commercial-sysadmin-audit',
    title: {
      en: 'Commercial Enterprise IT Infrastructure & Data Security Audit',
      ar: 'تدقيق البنية التحتية وحماية بيانات المبيعات للشركات'
    },
    category: { en: 'Security Consulting', ar: 'استشارات أمنية' },
    catKey: 'consulting',
    price: 125,
    originalPrice: 175,
    rating: '4.9/5',
    badge: { en: 'CyberSecurity Camp 6', ar: 'أمن وتقنية' },
    delivery: { en: '2-3 Business Days', ar: '2-3 أيام عمل' },
    iconName: 'Lock',
    accentColor: 'rose',
    desc: {
      en: 'Hardening server infrastructure, securing customer databases, isolating commercial POS networks, and preventing corporate data leakage.',
      ar: 'تدريع خوادم العمليات، حماية قواعد بيانات العملاء وفواتير المبيعات، عزل شبكات POS، وتأمين الشركة ضد تسريب البيانات.'
    },
    deliverables: {
      en: [
        'Commercial server & CRM database vulnerability assessment',
        'Zero-Trust network access configuration for remote sales reps',
        'Automated encrypted offsite backup system for sales invoices and accounting',
        'Staff cybersecurity & phishing defense protocol checklist'
      ],
      ar: [
        'فحص أمني لنقاط الضعف في خوادم الشركة وقواعد بيانات العملاء',
        'تهيئة وصول آمن مشفر (Zero-Trust / VPN) لمندوبي المبيعات الميدانيين',
        'إعداد نسخ احتياطي يومي مشفر لقواعد بيانات الفواتير والمحاسبة',
        'دليل تدريب الموظفين على تفادي هجمات التصيد والاختراق'
      ]
    }
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'post-b2b-pharma-sales',
    title: {
      en: 'B2B Sales Mastery: Closing Enterprise Pharmaceutical & Cosmetic Accounts',
      ar: 'احتراف مبيعات B2B: إغلاق الصفقات الكبرى في قطاع الصناعات الدوائية والتجميلية'
    },
    category: { en: 'B2B Sales & Marketing', ar: 'مبيعات B2B وتسويق' },
    date: { en: 'Oct 28, 2026', ar: '28 تشرين الأول 2026' },
    readTime: { en: '6 min read', ar: '6 دقائق' },
    excerpt: {
      en: 'Key strategies from the pharmaceutical and cosmetic frontline: navigating price sensitivities, structuring multi-tier pharmacy discounts, and securing long-term institutional supply agreements.',
      ar: 'استراتيجيات عملية من واقع مبيعات الأدوية ومستحضرات التجميل: إدارة حساسية الأسعار، بناء هياكل الخصومات المتدرجة، وضمان عقود التوريد طويلة الأجل.'
    },
    body: {
      en: `Selling in the pharmaceutical and cosmetics sector is fundamentally different from transactional retail. You are not simply selling a stock unit; you are establishing an institutional relationship built on medical trust, supply continuity, and predictable retail margins for pharmacies and healthcare providers.

A common pitfall among inexperienced sales representatives is opening discussions with discount offers. Leading with discounts commoditizes your formulation and weakens your negotiation position. The professional approach focuses on:

1. Highlighting Active Formulation Purity & Regulatory Compliance: Ensuring pharmacy buyers that the stability and bio-equivalence of the product will protect their brand reputation.
2. Structured Quarterly Volume Rebates (Not Flat Upfront Cuts): Rewarding accounts that meet cumulative target brackets over 90 days, maintaining baseline price integrity in the open market.
3. Rapid Replenishment Guarantee: Providing a direct SLA for urgent inventory dispatch within 24 to 48 hours to prevent stockouts during seasonal demand peaks.`,
      ar: `تختلف مبيعات الشركات B2B في قطاع الصناعات الدوائية والتجميلية تماماً عن المبيعات الاستهلاكية العادية. أنت لا تبيع مجرد عبوة منتج على الرف، بل تبني شراكة مؤسسية قائمة على الموثوقية الدوائية، استقرار سلاسل التوريد، وهوامش ربح مجزية ومستقرة للصيدليات والمراكز الطبية.

البدء الفوري بالحديث عن الخصومات هو فخ يقع فيه كثير من مسؤولي المبيعات المبتدئين، لأن التنافس على السعر الأدنى يضعف قيمة المستحضر ويفقد الشركة احترام المشتري المؤسسي. المنهج الاحترافي يقوم على:

1. إبراز ثبات التركيبة والمطابقة الدوائية الصارمة: طمأنة المشتري الصيدلاني بأن جودة المستحضر تحمي سمعة صيدليته وتكسب ولاء المرضى والمستهلكين.
2. نظام الحوافز التراكمية الربع سنوية (Rebates): بدلاً من حرق السعر مباشرة، يتم ربط الخصومات الإضافية بتحقيق الصيدلية لحصص بيعية مستهدفة على مدار 90 يوماً، مما يحمي استقرار الأسعار في السوق.
3. التعهد بالاستجابة والتوريد السريع: ضمان إمداد الصيدليات بالكميات المطلوبة خلال 24 إلى 48 ساعة لتفادي أي انقطاع في مواسم الذروة العلاجية والتجميلية.`
    },
    takeaways: {
      en: [
        'Never lead with discounts; lead with product clinical trust and margin predictability',
        'Deploy tiered quarterly rebates rather than immediate price cuts',
        'Prioritize 48-hour delivery SLAs to lock in recurring institutional orders'
      ],
      ar: [
        'لا تبدأ بالتخفيضات؛ ابدأ بالقيمة الدوائية وضمان استقرار هوامش ربح الصيدلية',
        'طبق نظام المكافآت التراكمية الربع سنوية لحماية سمعة السعر بالسوق',
        'التزم بمواعيد توريد دقيقة خلال 48 ساعة لبناء شراكات تعاقدية ممتدة'
      ]
    }
  },
  {
    id: 'post-sales-crm-tech',
    title: {
      en: 'Sales Automation & CRM Tech Consulting: Boosting Deal Velocity by 3x',
      ar: 'أتمتة المبيعات واستشارات الـ CRM: كيف تضاعف التقنية سرعة إغلاق الصفقات 3 مرات'
    },
    category: { en: 'Tech Consulting & Automation', ar: 'استشارات تقنية وأتمتة' },
    date: { en: 'Oct 19, 2026', ar: '19 تشرين الأول 2026' },
    readTime: { en: '7 min read', ar: '7 دقائق' },
    excerpt: {
      en: 'How bridging computer information systems with frontline sales eliminates follow-up delays, automates invoice delivery, and gives executives live visibility into revenue pipelines.',
      ar: 'كيف يؤدي دمج نظم المعلومات الحاسوبية مع فرق المبيعات إلى القضاء على تأخر المتابعات، أتمتة إرسال العروض السعرية، وتزويد الإدارة برؤية حية لتدفق الإيرادات.'
    },
    body: {
      en: `In commercial enterprises, sales representatives routinely spend less than 35% of their working hours actively interacting with prospects. The remaining 65% is consumed by manual quote drafting, lost spreadsheets, duplicated CRM entries, and disorganized WhatsApp messaging threads.

Modern sales consulting demonstrates that responding to an inbound business inquiry within 15 minutes yields a 7x higher conversion probability compared to responding after 24 hours.

By integrating automated CRM triggers, deal progression webhooks, and standardized quotation generators, sales reps can trigger approved contract drafts in under 30 seconds. Management receives automated pipeline summaries, ensuring zero high-value inquiries fall through operational cracks.`,
      ar: `في معظم الشركات التجارية، يقضي مسؤول المبيعات أقل من 35% من ساعات دوامه في التواصل الفعلي مع العملاء وإغلاق الصفقات. بينما تضيع نسبة 65% المتبقية في كتابة عروض الأسعار اليدوية، والبحث في ملفات إكسل مبعثرة، وتكرار إدخال البيانات، وتشتت الرسائل عبر تطبيقات المحادثة.

تؤكد الدراسات الميدانية أن الرد على استفسار العميل التجاري خلال أول 15 دقيقة يرفع معدل إتمام الصفقة بمقدار 7 أضعاف مقارنة بالانتظار ليوم كامل.

الربط الذكي بين برمجيات الـ CRM وقوالب المراسلات المؤتمتة يمكّن المندوب من تجهيز عرض أسعار معتمد خلال 30 ثانية فقط، كما يمنح الإدارة رؤية فورية ودقيقة لمراحل تقدم الصفقات وقيمة الإيرادات المتوقعة.`
    },
    takeaways: {
      en: [
        'Under 15-minute response times increase conversion likelihood by 7x',
        'Automated quote generators eliminate 5+ hours of manual paperwork weekly',
        'Unified CRM pipelines prevent high-value commercial deals from falling off the radar'
      ],
      ar: [
        'الاستجابة خلال 15 دقيقة ترفع فرصة الفوز بالصفقة 7 أضعاف',
        'أتمتة عروض الأسعار توفر أكثر من 5 ساعات عمل ورقي أسبوعياً لكل مندوب',
        'توحيد مسار الـ CRM يمنع تسرب العملاء والفرص التجارية الكبرى'
      ]
    }
  },
  {
    id: 'post-sales-production-alignment',
    title: {
      en: 'From Floor to Market: Aligning Production Capacities with Commercial Sales',
      ar: 'من خط الإنتاج إلى السوق: مزامنة طاقة المصنع مع الأهداف البيعية والتجارية'
    },
    category: { en: 'Operations & Production', ar: 'إدارة العمليات والإنتاج' },
    date: { en: 'Oct 05, 2026', ar: '05 تشرين الأول 2026' },
    readTime: { en: '5 min read', ar: '5 دقائق' },
    excerpt: {
      en: 'Having served as both Production Supervisor at Lu Mario and Sales Executive at Ultra-Medica, here is how to bridge the classic friction between manufacturing floors and commercial teams.',
      ar: 'انطلاقاً من خبرتي المزدوجة كمشرف إنتاج في لو ماريو ومسؤول مبيعات في ألترا ميديكا: كيف تقضي على الصدام التقليدي بين طاقة المصنع ومستهدفات فريق المبيعات.'
    },
    body: {
      en: `The tension between Sales and Production departments is one of the oldest challenges in manufacturing. Sales teams want urgent turnaround, custom packaging, and flexible batch sizes to please major accounts. Meanwhile, Production supervisors need predictable batch runs, minimized machine retooling downtime, and strict quality assurance adherence.

Having worked as Production Supervisor at Lu Mario and now leading commercial sales at Ultra-Medica, the solution lies in three foundational operating practices:

1. Standardized Minimum Order Quantities (MOQ) Linked to Retooling Overhead: Transparently showing commercial reps how custom small runs escalate per-unit cost.
2. The 30-Minute Monday S&OP Handshake: A short weekly session synchronizing confirmed delivery promises with current machine maintenance schedules.
3. Real-Time Capacity Dashboards: Eliminating verbal promises by giving sales reps live view into available line hours for the upcoming 14 days.`,
      ar: `الصدام بين فريقي المبيعات والإنتاج أمر يتكرر في كل مصنع ومنشأة تجارية: فريق المبيعات يعد العملاء بمواعيد تسليم قياسية وتعديلات فورية في العبوات، بينما يسعى مشرف الإنتاج للحفاظ على استقرار خطوط التجميع وتفادي توقف الآلات لإعادة الضبط (Retooling).

من واقع خبرتي الميدانية كمشرف إنتاج سابق لدى لو ماريو، ومسؤول مبيعات حالي لدى ألترا ميديكا، فإن الحل الناجح يرتكز على ثلاث ركائز عملية:

1. تحديد حد أدنى للطلب (MOQ) مرتبط بتكلفة إيقاف الآلات: توضيح أثر التغييرات الصغيرة على تكلفة القطعة الواحدة لمسؤولي المبيعات.
2. اجتماع تنسيقي أسبوعي صباح كل إثنين (S&OP) لمدة 30 دقيقة: مراجعة الصفقات المؤكدة ومطابقتها مع طاقة خطوط الإنتاج وجداول الصيانة.
3. لوحة تحكم رقمية مشتركة لبيانات المخزون والطاقة التشغيلية: إلغاء الوعود الشفوية وتمكين المندوب من معرفة التواريخ الدقيقة المتاحة للتسليم.`
    },
    takeaways: {
      en: [
        'MOQ formulas must reflect machine changeover and cleaning downtime',
        'Conduct a 30-minute Monday S&OP handshake between sales and manufacturing leads',
        'Replace verbal delivery estimates with real-time operational capacity dashboards'
      ],
      ar: [
        'ربط الحد الأدنى للطلبيات بتكلفة تجهيز وتنظيف الآلات',
        'عقد اجتماع تنسيقي أسبوعي مدته 30 دقيقة بين المبيعات والتشغيل',
        'الاعتماد على لوحة مؤشرات حية بدلاً من التقديرات الشفهية'
      ]
    }
  },
  {
    id: 'post-digital-transformation-sales',
    title: {
      en: 'Digital Transformation for Commercial Teams: Moving Beyond Messy Spreadsheets',
      ar: 'التحول الرقمي لفرق المبيعات: الانتقال من فوضى الجداول إلى الأنظمة الذكية'
    },
    category: { en: 'Tech & Security Advisory', ar: 'استشارات تقنية وأمنية' },
    date: { en: 'Sep 22, 2026', ar: '22 أيلول 2026' },
    readTime: { en: '6 min read', ar: '6 دقائق' },
    excerpt: {
      en: 'Practical tech consulting for growing businesses: how to secure confidential client pricing, prevent customer list theft, and automate commission reporting safely.',
      ar: 'استشارات تقنية واقعية للشركات النامية: حماية قوائم العملاء وأسعار التوريد السرية، منع تسريب البيانات، وأتمتة تقارير العمولات بأمان تام.'
    },
    body: {
      en: `When small-to-medium commercial companies expand, managing accounts through scattered desktop spreadsheets becomes a critical operational and security vulnerability. Confidential distributor pricing matrices are left in unprotected folders, and staff transitions risk taking valuable customer lists with them.

Enterprise data security does not require million-dollar software. Practical steps include:

1. Role-Based Access Control (RBAC): Segmenting sales territories so representatives only access client files relevant to their active zone.
2. Encrypted Automated Backups: Synchronizing transaction records and invoices daily to offsite encrypted cloud storage.
3. Automated Commission Calculation Engines: Removing manual calculation discrepancies and boosting trust between commercial staff and executive leadership.`,
      ar: `مع توسع النشاط التجاري للشركات، تصبح إدارة الصفقات والحسابات عبر ملفات إكسل مبعثرة على أجهزة الموظفين ثغرة أمنية وتشغيلية بالغة الخطورة. فأسعار التوريد الخاصة وهوامش الخصم تصبح مكشوفة، وعند انتقال أي موظف قد تُفقد بيانات عملاء استراتيجية.

الأمن الرقمي وحماية بيانات الصفقات لا يتطلبان بالضرورة برمجيات باهظة التكلفة، بل خطوات منهجية مدروسة:

1. نظام الصلاحيات المحددة (Role-Based Access Control): حصر وصول مندوب المبيعات على عملاء رقعته الجغرافية المعتمدة فقط.
2. النسخ الاحتياطي السحابي المشفر يومياً: أرشفة الفواتير وعقود التوريد وسجلات الحسابات لمنع فقدان أي بيانات تشغيلية.
3. أتمتة احتساب عمولات المبيعات: إلغاء الأخطاء الحسابية اليدوية وتعزيز الشفافية والثقة بين مسؤولي المبيعات والإدارة العليا.`
    },
    takeaways: {
      en: [
        'Isolate territory data using Role-Based Access Control (RBAC)',
        'Set up automated encrypted backups for invoices and accounting ledgers',
        'Standardize commission calculation logic to ensure full team transparency'
      ],
      ar: [
        'عزل بيانات العملاء جغرافياً عبر نظام الصلاحيات المحددة',
        'تفعيل النسخ الاحتياطي اليومي المشفر لجميع فواتير وعقود المبيعات',
        'أتمتة معادلات العمولات لضمان أعلى درجات الشفافية والتحفيز'
      ]
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: { en: '2026 - Present', ar: '2026 - حتى الآن' },
    role: { en: 'Sales Executive', ar: 'مسؤول مبيعات (Sales Executive)' },
    company: { en: 'Ultra-Medica for Pharmaceutical & Cosmetic Industry', ar: 'شركة ألترا ميديكا للصناعات الدوائية والتجميلية' },
    location: { en: 'Damascus, Syria', ar: 'دمشق، سوريا' },
    contact: '+963 981092422',
    summary: {
      en: 'Directing commercial B2B sales pipelines, expanding pharmaceutical distributor networks, negotiating multi-tier supply contracts with pharmacy chains, and implementing CRM lead tracking workflows.',
      ar: 'إدارة وتطوير مسارات مبيعات الشركات B2B، توسيع شبكة الموزعين المعتمدين، إبرام عقود التوريد المتدرجة لسلاسل الصيدليات والمراكز الطبية، وتطبيق أتمتة الـ CRM لمتابعة الصفقات.'
    },
    highlights: {
      en: [
        'Grew active regional pharmacy and clinic distribution network',
        'Introduced tiered quarterly rebate programs that stabilized wholesale price consistency',
        'Integrated multi-channel outreach protocols accelerating quote-to-close turnaround'
      ],
      ar: [
        'توسيع قاعدة العملاء الفعالين من شبكات الصيدليات والمراكز الطبية الكبرى',
        'تطبيق نظام الحوافز التراكمية الربع سنوية لضبط استقرار الأسعار في السوق',
        'تنظيم وتطوير آليات التواصل والمتابعة لتسريع دورة إغلاق عروض الأسعار'
      ]
    }
  },
  {
    period: { en: '2022 - 2026', ar: '2022 - 2026' },
    role: { en: 'Production Supervisor', ar: 'مشرف إنتاج (Production Supervisor)' },
    company: { en: 'Lu Mario', ar: 'لو ماريو (Lu Mario)' },
    location: { en: 'Damascus, Syria', ar: 'دمشق، سوريا' },
    contact: '+963 954522487',
    summary: {
      en: 'Supervised end-to-end industrial production operations, prepared Standard Operating Procedures (SOPs), scheduled machinery shifts, and ensured stringent quality control before commercial packaging dispatch.',
      ar: 'إدارة وتنظيم خطوط الإنتاج والعمليات الصناعية، إعداد إجراءات التشغيل القياسية (SOPs)، وجدولة تشغيل الآلات وتوزيع الورديات مع ضمان أعلى معايير الجودة والتغليف التجاري.'
    },
    highlights: {
      en: [
        'Streamlined shift handovers, cutting machine idle downtime significantly',
        'Enforced hygiene, occupational safety, and batch traceability protocols',
        'Coordinated directly with commercial dispatch teams to eliminate shipping delays'
      ],
      ar: [
        'رفع كفاءة تسليم الورديات وتقليص فترات توقف الآلات غير المخطط لها',
        'تطبيق بروتوكولات السلامة المهنية ومطابقة العينات قبل التعبئة النهائية',
        'التنسيق المستمر مع فرق الشحن والتوزيع لتسليم الطلبيات التجارية في مواعيدها'
      ]
    }
  },
  {
    period: { en: '2020 - 2022', ar: '2020 - 2022' },
    role: { en: 'Senior Broker', ar: 'وسيط مالي أول (Senior Broker)' },
    company: { en: 'GoldMine Trading', ar: 'غولد ماين للتجارة (GoldMine Trading)' },
    location: { en: 'Dubai / Remote', ar: 'دبي / عن بعد' },
    contact: '+971 505002687',
    summary: {
      en: 'Managed commercial trading portfolios, evaluated macroeconomic indicators, performed liquidity risk assessments, and structured data models under high market volatility.',
      ar: 'إدارة محافظ التداول التجاري، تحليل مؤشرات الأسواق والسيولة، وإعداد النماذج والجداول المالية تحت تقلبات سوقية مرتفعة.'
    },
    highlights: {
      en: [
        'Formulated customized risk-hedging frameworks for commercial clients',
        'Constructed dynamic spreadsheets for portfolio performance monitoring',
        'Conducted high-stake real-time execution negotiations'
      ],
      ar: [
        'بناء أطر إدارة المخاطر المالية والتحوط للعملاء التجاريين',
        'تطوير نماذج وجداول مؤتمتة لتحليل أداء الصفقات',
        'إدارة المفاوضات التجارية والصفقات اللحظية بدقة وسرعة عالية'
      ]
    }
  },
  {
    period: { en: '2020 - 2022', ar: '2020 - 2022' },
    role: { en: 'Sales Manager', ar: 'مدير مبيعات (Sales Manager)' },
    company: { en: 'Alfwares Marble', ar: 'الفوارس للرخام (Alfwares Marble)' },
    location: { en: 'UAE / Damascus', ar: 'الإمارات / دمشق' },
    contact: '+971 549872332',
    summary: {
      en: 'Directed B2B wholesale sales, export agreements, contract quotation models, and client delivery scheduling across regional construction contractors.',
      ar: 'إدارة مبيعات الجملة للشركات B2B، عقود التصدير الإقليمية، وتحديد هياكل وهوامش الأسعار وجداول التوريد لمشاريع المقاولات الكبرى.'
    },
    highlights: {
      en: [
        'Negotiated high-volume commercial marble supply tenders',
        'Established distributor payment milestones securing consistent cash-flow',
        'Managed cross-border freight documentation and logistics compliance'
      ],
      ar: [
        'التفاوض وإغلاق مناقصات توريد كبرى لشركات المقاولات',
        'تنظيم جداول دفعات الموزعين لضمان التدفق النقدي المستمر',
        'متابعة وتخليص مستندات الشحن والتصدير والشهادات الجمركية'
      ]
    }
  },
  {
    period: { en: '2017 - 2020', ar: '2017 - 2020' },
    role: { en: 'Hardware & Electronics Technician', ar: 'فني صيانة إلكترونيات وهاردوير' },
    company: { en: 'Albarq Mobile Store', ar: 'البرق للتقنية (Albarq Mobile Store)' },
    location: { en: 'Damascus', ar: 'دمشق' },
    contact: '+249 883344501',
    summary: {
      en: 'Conducted board-level diagnostics, micro-soldering, power rail troubleshooting, component replacement, and firmware recovery on 250+ devices.',
      ar: 'فحص وتشخيص اللوحات الإلكترونية الدقيقة، اللحام الاحترافي، وتتبع مسارات التغذية الكهربائية وعزل القصر الكهربائي وصيانة أكثر من 250 جهازاً.'
    },
    highlights: {
      en: [
        'Diagnosed intricate electrical power rail shorts with precision schematics',
        'Performed SMD IC micro-soldering with high restoration success rate',
        'Delivered hardware diagnostic reporting and client maintenance guidance'
      ],
      ar: [
        'تتبع أعطال مسارات الطاقة وعزل الشورت الكهربائي بدقة باستخدام المخططات',
        'استبدال الشرائح الإلكترونية الدقيقة (SMD IC) بنسبة نجاح عالية',
        'إعداد تقارير الفحص الفني وتقديم المشورة التقنية للعملاء'
      ]
    }
  }
];

export const EDUCATION = [
  {
    institution: {
      en: 'Syrian Virtual University (SVU)',
      ar: 'الجامعة الافتراضية السورية (SVU)'
    },
    degree: {
      en: 'Technology Information Computer Institute',
      ar: 'المعهد التقاني للحاسوب'
    },
    period: '2023 - 2026',
    status: {
      en: 'Graduated with Grade A- (Ranked among top achievers)',
      ar: 'تخرج بمعدل ممتاز A- (ضمن المراتب المتقدمة)'
    },
    skills: {
      en: 'Data Structures, Database Administration, Systems Analysis, Web Technologies, Computer Networks',
      ar: 'هياكل البيانات، إدارة قواعد البيانات، تحليل النظم، تقنيات الويب، شبكات الحاسوب'
    }
  },
  {
    institution: {
      en: 'CyberPedia Cybersecurity Academy',
      ar: 'أكاديمية CyberPedia للأمن السيبراني'
    },
    degree: {
      en: 'Cybersecurity Camp 6 Graduate',
      ar: 'خريج معسكر الأمن السيبراني 6 (Cybersecurity Camp 6)'
    },
    period: '2026',
    status: {
      en: 'Hands-on Intensive Cyber Defense Training',
      ar: 'تدريب عملي مكثف في الدفاع السيبراني وحماية النظم'
    },
    skills: {
      en: 'Network Penetration Defense, Threat Mitigation, Linux Hardening, Web App Security Protocols',
      ar: 'الدفاع ضد اختراق الشبكات، تدريع خوادم لينكس، معايير أمان تطبيقات الويب'
    }
  }
];

export const SKILLS_CATEGORIES = [
  {
    title: { en: 'B2B Sales & Commercial', ar: 'مبيعات B2B والتفاوض التجاري' },
    skills: [
      { name: { en: 'B2B Pipeline & Account Management', ar: 'إدارة وتطوير مسارات مبيعات الشركات B2B' }, level: 95 },
      { name: { en: 'Commercial Negotiation & Objections', ar: 'التفاوض التجاري وإغلاق الصفقات' }, level: 92 },
      { name: { en: 'Pharma & Cosmetic Wholesale Distribution', ar: 'توزيع الأدوية ومستحضرات التجميل' }, level: 90 },
      { name: { en: 'Pricing Matrices & Volume Rebate Structures', ar: 'هياكل التسعير ونظم الحوافز (Rebates)' }, level: 88 }
    ]
  },
  {
    title: { en: 'IT Systems & CRM Automation', ar: 'الأنظمة التقنية وأتمتة الـ CRM' },
    skills: [
      { name: { en: 'CRM Configuration (HubSpot, Zoho, ERPNext)', ar: 'تهيئة أنظمة CRM وإدارتها' }, level: 92 },
      { name: { en: 'Automated Follow-up Sequences & Webhooks', ar: 'أتمتة المتابعات والربط البرمجي' }, level: 86 },
      { name: { en: 'Database Administration (SQL / Cloud)', ar: 'إدارة قواعد البيانات والنسخ الاحتياطي' }, level: 84 },
      { name: { en: 'Cybersecurity & Commercial Data Hardening', ar: 'حماية بيانات الصفقات والأمن السيبراني' }, level: 88 }
    ]
  },
  {
    title: { en: 'Industrial Operations & Leadership', ar: 'العمليات الصناعية والقيادة' },
    skills: [
      { name: { en: 'Standard Operating Procedures (SOPs)', ar: 'إعداد إجراءات التشغيل القياسية (SOPs)' }, level: 90 },
      { name: { en: 'Production Shift & Capacity Scheduling', ar: 'جدولة الورديات وطاقات خطوط الإنتاج' }, level: 88 },
      { name: { en: 'Batch Traceability & QA Standards', ar: 'تتبع العينات ومعايير ضبط الجودة' }, level: 85 },
      { name: { en: 'Sales & Operations Handshake (S&OP)', ar: 'مواءمة طاقة المصنع مع مواعيد التسليم' }, level: 92 }
    ]
  }
];
