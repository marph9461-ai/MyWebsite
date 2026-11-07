<?php
/**
 * Ammar Alsheikh - Bilingual Static PHP Data
 * English & Arabic support optimized for InfinityFree Free Hosting
 */

// Language detection from query parameter or cookie
$lang = isset($_GET['lang']) ? strtolower($_GET['lang']) : (isset($_COOKIE['site_lang']) ? $_COOKIE['site_lang'] : 'en');
if (!in_array($lang, ['en', 'ar'])) {
    $lang = 'en';
}
// Set cookie for persistence (30 days)
setcookie('site_lang', $lang, time() + (86400 * 30), "/");

$dir = ($lang === 'ar') ? 'rtl' : 'ltr';

// Bilingual translations dictionary
$t = [
    'en' => [
        'brand_title' => 'Ammar Alsheikh',
        'brand_subtitle' => 'Sales Executive • Ultra-Medica • Tech & Services',
        'home' => 'Home',
        'about' => 'About & CV',
        'shop' => 'Services & Store',
        'blog' => 'Articles',
        'contact' => 'Contact',
        'cart' => 'Cart',
        'lang_switch_label' => 'العربية',
        'lang_switch_target' => 'ar',
        'available_badge' => 'Sales Executive at Ultra-Medica • Available for B2B Contracts & Consulting',
        'hero_title' => 'Commercial Growth, <span class="gradient-text">Strategic B2B Sales</span> & Precision Operations.',
        'hero_lead' => 'Hi, I\'m <strong>Ammar Alsheikh</strong> &mdash; Sales Executive at Ultra-Medica for Pharmaceutical & Cosmetic Industry, Syrian Virtual University Graduate (A- average), and former Production Supervisor at Lu Mario. I combine commercial B2B sales execution, manufacturing workflow leadership, and deep technical IT knowledge.',
        'browse_store' => 'Browse Services & Store',
        'view_cv' => 'View My CV & Experience',
        'direct_whatsapp' => 'Direct WhatsApp',
        'years_exp' => 'Years Experience',
        'academic_grade' => 'Academic Standing',
        'hardware_repairs' => 'Hardware Interventions',
        'languages_count' => 'Languages Mastered',
        'featured_services' => 'Featured Sales & Tech Consultations',
        'featured_services_sub' => 'Strategic B2B pipelines, CRM automation systems, and enterprise data security audits by Ammar Alsheikh.',
        'latest_articles' => 'Marketing, Sales & Tech Consulting Articles',
        'latest_articles_sub' => 'Practical field notes on B2B pharma deal closing, CRM deal velocity, and manufacturing-sales alignment.',
        'view_all_shop' => 'View All Products & Services &rarr;',
        'explore_blog' => 'Explore Blog &rarr;',
        'add_to_cart' => 'Add to Cart',
        'details' => 'Details',
        'read_more' => 'Read Full Article &rarr;',
        'includes_label' => 'Includes:',
        'order_whatsapp' => 'Order via WhatsApp',
        'turnaround' => 'Turnaround:',
        'empty_cart' => 'Your cart is currently empty',
        'subtotal' => 'Subtotal',
        'total_due' => 'Total Due',
        'clear_all' => 'Clear All',
        'confirm_whatsapp' => 'Confirm Order via WhatsApp',
        'order_email' => 'Submit Order via Email',
        'continue_shopping' => '&larr; Continue Shopping',
        'quick_nav' => 'Quick Navigation',
        'specialties' => 'Core Specialties',
        'hosting_note' => 'Designed and structured specifically for fast, reliable deployment on <strong>InfinityFree</strong> hosting without MySQL database limits.',
        'all_rights' => 'All rights reserved. Damascus, Syria.',
        'all_offerings' => 'All Offerings',
        'it_services' => 'B2B Sales & Marketing',
        'consulting' => 'Tech Consultations & CRM',
        'digital_guides' => 'Digital Toolkits & Models',
        'send_message' => 'Send Message',
        'your_name' => 'Your Name',
        'your_email' => 'Your Email Address',
        'inquiry_topic' => 'Service / Inquiry Topic',
        'your_msg' => 'Your Message or Requirements'
    ],
    'ar' => [
        'brand_title' => 'عمار الشيخ',
        'brand_subtitle' => 'مسؤول مبيعات • ألترا ميديكا • خدمات ومتجر',
        'home' => 'الرئيسية',
        'about' => 'السيرة الذاتية',
        'shop' => 'الخدمات والمتجر',
        'blog' => 'المدونة والتقارير',
        'contact' => 'اتصل بي',
        'cart' => 'السلة',
        'lang_switch_label' => 'English',
        'lang_switch_target' => 'en',
        'available_badge' => 'مسؤول مبيعات في ألترا ميديكا • متاح للتعاقدات التجارية والاستشارات',
        'hero_title' => 'نمو تجاري متسارع، <span class="gradient-text">مبيعات B2B استراتيجية</span> وإشراف تشغيلي دقيق.',
        'hero_lead' => 'مرحباً، أنا <strong>عمار الشيخ</strong> &mdash; مسؤول مبيعات (Sales Executive) لدى شركة ألترا ميديكا للصناعات الدوائية والتجميلية، خريج المعهد التقاني للحاسوب بالجامعة الافتراضية السورية (معدل ممتاز A-)، ومشرف إنتاج سابق لدى لو ماريو. أجمع بين مهارات التفاوض التجاري B2B، القيادة التشغيلية للمصانع، والخبرة التقنية الحاسوبية.',
        'browse_store' => 'تصفح الخدمات والمتجر',
        'view_cv' => 'عرض السيرة الذاتية والخبرات',
        'direct_whatsapp' => 'تواصل عبر واتساب',
        'years_exp' => 'سنوات خبرة عملية',
        'academic_grade' => 'الترتيب الأكاديمي',
        'hardware_repairs' => 'عمليات ومشاريع تجارية وتقنية',
        'languages_count' => 'لغات متقنة',
        'featured_services' => 'أبرز خدمات المبيعات والاستشارات التقنية',
        'featured_services_sub' => 'تطوير مسارات مبيعات الشركات B2B، أتمتة نظم الـ CRM، وتدقيق البنية التحتية وحماية بيانات الصفقات من إعداد عمار الشيخ.',
        'latest_articles' => 'مقالات التسويق والمبيعات والاستشارات التقنية',
        'latest_articles_sub' => 'خلاصة التجارب الميدانية في إغلاق صفقات الأدوية والتجميل، تسريع وتيرة المبيعات، والتحول الرقمي للشركات التجارية.',
        'view_all_shop' => 'عرض جميع الخدمات والمنتجات &larr;',
        'explore_blog' => 'تصفح المقالات كاملة &larr;',
        'add_to_cart' => 'أضف للسلة',
        'details' => 'التفاصيل',
        'read_more' => 'قراءة المقال كاملاً &larr;',
        'includes_label' => 'تشمل الخدمة:',
        'order_whatsapp' => 'اطلب مباشرة عبر واتساب',
        'turnaround' => 'مدة الإنجاز:',
        'empty_cart' => 'سلة المشتريات فارغة حالياً',
        'subtotal' => 'المجموع الفرعي',
        'total_due' => 'المجموع الإجمالي',
        'clear_all' => 'إفراغ السلة',
        'confirm_whatsapp' => 'تأكيد وإرسال الطلب عبر واتساب',
        'order_email' => 'إرسال الطلب عبر البريد الإلكتروني',
        'continue_shopping' => '&rarr; متابعة التسوق',
        'quick_nav' => 'روابط سريعة',
        'specialties' => 'أبرز التخصصات',
        'hosting_note' => 'تمت برمجة هذا الموقع بهيكلية PHP استاتيكية متطورة ومخصصة للاستقرار التام على استضافة <strong>InfinityFree</strong> دون الحاجة لقواعد بيانات.',
        'all_rights' => 'جميع الحقوق محفوظة. دمشق، سوريا.',
        'all_offerings' => 'جميع المعروضات',
        'it_services' => 'مبيعات B2B والتسويق',
        'consulting' => 'استشارات تقنية وCRM',
        'digital_guides' => 'حقائب ونماذج المبيعات الرقمية',
        'send_message' => 'إرسال الرسالة',
        'your_name' => 'الاسم الكامل',
        'your_email' => 'عنوان البريد الإلكتروني',
        'inquiry_topic' => 'مجال الاستشارة أو الخدمة',
        'your_msg' => 'تفاصيل الرسالة أو متطلبات العمل'
    ]
];

$txt = $t[$lang];

$profile = [
    'name' => ($lang === 'ar') ? 'عمار الشيخ' : 'Ammar Alsheikh',
    'title' => ($lang === 'ar') ? 'مسؤول مبيعات (Sales Executive)' : 'Sales Executive',
    'company' => ($lang === 'ar') ? 'شركة ألترا ميديكا للصناعات الدوائية والتجميلية' : 'Ultra-Medica for Pharmaceutical & Cosmetic Industry',
    'nationality' => ($lang === 'ar') ? 'سوري (دمشق 1994)' : 'Syrian (Damascus 1994)',
    'location' => ($lang === 'ar') ? 'دمشق، الجمهورية العربية السورية' : 'Damascus, Syria',
    'email' => 'ammar_268009@svuonline.org',
    'phone' => '+963 981092422',
    'whatsapp' => '963981092422',
    'education' => ($lang === 'ar') ? 'المعهد التقاني للحاسوب - الجامعة الافتراضية السورية (2026، معدل ممتاز A-)' : 'Technology Information Computer Institute - Syrian Virtual University (2026, Grade A-)',
    'headline' => ($lang === 'ar') ? 'مسؤول مبيعات في شركة ألترا ميديكا للصناعات الدوائية والتجميلية بخبرة في التفاوض التجاري، الإشراف الصناعي، ونظم المعلومات.' : 'Sales Executive at Ultra-Medica (Pharmaceutical & Cosmetic Industry) with extensive experience in commercial B2B negotiation, manufacturing operations, and IT systems.'
];

$products = [
    [
        'id' => 'prod-b2b-sales-strategy',
        'title' => ($lang === 'ar') ? 'استراتيجية وتطوير مسارات مبيعات الشركات (B2B Pipeline)' : 'B2B Sales Pipeline & Territory Expansion Strategy',
        'category' => ($lang === 'ar') ? 'مبيعات B2B' : 'B2B Sales',
        'cat_key' => 'services',
        'price' => 130,
        'original_price' => 180,
        'rating' => '4.9/5',
        'badge' => ($lang === 'ar') ? 'الأكثر طلباً' : 'Flagship',
        'delivery' => ($lang === 'ar') ? '2-3 أيام' : '2-3 Days',
        'desc' => ($lang === 'ar') ? 'بناء وتطوير منظومة مبيعات الشركات B2B للقطاعات الدوائية والتجميلية والتجارية، استراتيجيات التفاوض، وتوسيع الرقعة الجغرافية للموزعين.' : 'End-to-end commercial sales architecture for healthcare, pharma, and retail brands. Prospecting frameworks, objection handling, and territory closing.',
        'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
        'deliverables' => ($lang === 'ar') ? [
            'مخطط هيكلي مخصص لمسار مبيعات B2B ومعايير تأهيل العملاء المحتملين',
            'دليل تكتيكات التفاوض التجاري وإغلاق الصفقات والرد على الاعتراضات',
            'نماذج عقود التوريد وهياكل تسعير هوامش الموزعين والكميات',
            'جلستان استشاريتان تنفيذيتان مدة كل منهما 60 دقيقة',
            'لوحة مؤشرات أداء (KPIs) وجداول تتبع الحصص البيعية المستهدفة'
        ] : [
            'Customized B2B sales pipeline blueprint & lead qualification scorecard',
            'High-impact commercial negotiation & objection-handling playbook',
            'Distributor margin tiering and volume contract templates',
            'Two 60-minute 1-on-1 strategic sales advisory sessions',
            'Quarterly sales quota & KPI tracking dashboard'
        ]
    ],
    [
        'id' => 'prod-crm-automation',
        'title' => ($lang === 'ar') ? 'استشارة أتمتة المبيعات وتنصيب نظم إدارة العملاء (CRM)' : 'Sales Automation & CRM Tech Consultation',
        'category' => ($lang === 'ar') ? 'استشارات تقنية' : 'Tech Consulting',
        'cat_key' => 'consulting',
        'price' => 110,
        'original_price' => 150,
        'rating' => '5.0/5',
        'badge' => ($lang === 'ar') ? 'تقنية ومبيعات' : 'Tech & Sales',
        'delivery' => ($lang === 'ar') ? '2-4 أيام' : '2-4 Days',
        'desc' => ($lang === 'ar') ? 'ربط وتهيئة أنظمة CRM، أتمتة تسلسلات المتابعة، وربط فرق المبيعات مع السحابة لتسريع دورة الصفقات وتفادي ضياع العملاء.' : 'Integrate CRM systems, automated follow-up sequences, and pipeline tracking to eliminate manual overhead and accelerate deal closures.',
        'image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        'deliverables' => ($lang === 'ar') ? [
            'تدقيق وتهيئة شاملة لنظام CRM (HubSpot, Zoho, ERPNext أو جداول مخصصة)',
            'أتمتة تسلسلات المتابعة مع العملاء وإرسال العروض السعرية آلياً',
            'تكامل قوالب التواصل السريع عبر واتساب والبريد الإلكتروني',
            'ضبط مؤشرات قياس إنتاجية مندوبي المبيعات ومعدلات التحويل',
            'جلسة تدريب مسجلة لفريق المبيعات على الاستخدام الفعال'
        ] : [
            'Complete CRM configuration audit (HubSpot, Zoho, ERPNext, or custom Sheets)',
            'Automated client follow-up sequences and quote delivery workflows',
            'Multi-channel WhatsApp & Email communication template integration',
            'Sales rep accountability metrics & conversion analytics setup',
            'Recorded team walkthrough training session'
        ]
    ],
    [
        'id' => 'prod-pharma-market-entry',
        'title' => ($lang === 'ar') ? 'تدقيق وتخطيط إطلاق المنتجات الدوائية والتجميلية في الأسواق' : 'Pharma & Cosmetic Product Launch Marketing Audit',
        'category' => ($lang === 'ar') ? 'تسويق دوائي' : 'Pharma Marketing',
        'cat_key' => 'services',
        'price' => 140,
        'original_price' => 195,
        'rating' => '4.8/5',
        'badge' => ($lang === 'ar') ? 'تخصص دوائي وتجميلي' : 'Industry Specific',
        'delivery' => ($lang === 'ar') ? '3-5 أيام' : '3-5 Days',
        'desc' => ($lang === 'ar') ? 'استراتيجية إطلاق وتسويق تجاري للمستحضرات الصيدلانية ومنتجات العناية بالبشرة، تسعير المنتجات، واستهداف شبكات الصيدليات.' : 'Commercial launch strategy for pharmaceutical formulations, skincare, and cosmetic lines. Pricing, key accounts, and pharmacy positioning.',
        'image' => 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        'deliverables' => ($lang === 'ar') ? [
            'مصفوفة تموضع المنتج وتحليل أسعار المنافسين في السوق',
            'هيكل حوافز وعروض تدشين تنافسية لسلاسل الصيدليات والمراكز الطبية',
            'دليل العرض التقديمي للمندوب العلمي وتكتيكات إقناع الأطباء والصيادلة',
            'جدول زمني للحملات الترويجية وميزانية تسويقية واقعية'
        ] : [
            'Comprehensive product positioning & competitor pricing matrix',
            'Pharmacy & clinic introductory incentive commercial structure',
            'Medical representative detailing guide & objection response sheets',
            'Point-of-Sale (POS) promotional calendar and promotional budget model'
        ]
    ],
    [
        'id' => 'prod-sales-playbook-2026',
        'title' => ($lang === 'ar') ? 'حقيبة أدلة ونماذج مبيعات B2B ومراسلات الصفقات 2026' : '2026 Enterprise B2B Sales Playbook & Cold Outreach System',
        'category' => ($lang === 'ar') ? 'حقائب رقمية' : 'Digital Toolkits',
        'cat_key' => 'digital',
        'price' => 35,
        'original_price' => 55,
        'rating' => '4.9/5',
        'badge' => ($lang === 'ar') ? 'تحميل رقمي فوري' : 'Instant Download',
        'delivery' => ($lang === 'ar') ? 'تحميل فوري' : 'Instant Digital',
        'desc' => ($lang === 'ar') ? 'نماذج جاهزة للاستخدام الفوري لمراسلات كبار العملاء، عروض الأسعار، عقود التوريد، ونصوص إغلاق الصفقات التجارية المعقدة.' : 'Ready-to-deploy cold outreach sequences, sales pitch decks, proposal templates, and contract closing scripts for B2B executives.',
        'image' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
        'deliverables' => ($lang === 'ar') ? [
            'أكثر من 25 نموذج مراسلة ومتابعة جاهز للمبيعات (بالعربية والإنجليزية)',
            'قالب احترافي لعروض الأسعار والمقترحات التجارية (Word, PowerPoint, PDF)',
            'قائمة فحص بنود العقود التجارية لتفادي الثغرات القانونية والمالية',
            'استبيان تأهيل واكتشاف احتياجات العميل للصفقات الكبرى'
        ] : [
            '25+ high-converting B2B outreach & follow-up templates (English & Arabic)',
            'Executive sales proposal & quotation template (Word, PowerPoint, PDF)',
            'Master contract negotiation & clause mitigation checklist',
            'Client discovery questionnaire for high-value contracts'
        ]
    ],
    [
        'id' => 'prod-pricing-model-sheets',
        'title' => ($lang === 'ar') ? 'حاسبة التسعير وهوامش الأرباح للمنتجات والصفقات التجارية' : 'Pharma & B2B Commercial Pricing & Margin Calculator',
        'category' => ($lang === 'ar') ? 'نماذج مالية' : 'Financial Models',
        'cat_key' => 'digital',
        'price' => 25,
        'original_price' => 40,
        'rating' => '4.8/5',
        'badge' => ($lang === 'ar') ? 'تحميل فوري' : 'Instant Download',
        'delivery' => ($lang === 'ar') ? 'تحميل فوري' : 'Instant Digital',
        'desc' => ($lang === 'ar') ? 'نموذج إكسل وجداول جوجل مؤتمت بالكامل لحساب هوامش الربح، خصومات الموزعين، الحصص التشجيعية، والحد الأدنى للطلبيات (MOQ).' : 'Automated Excel & Google Sheets model for calculating distributor discounts, gross margins, minimum order quantities (MOQ), and sales rebates.',
        'image' => 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
        'deliverables' => ($lang === 'ar') ? [
            'ملف إكسل وجداول جوجل مفتوح بالكامل بدون أي كلمات سر',
            'حاسبة الخصومات المتدرجة ومكافآت تحقيق الأهداف البيعية (Rebates)',
            'محاكي لعمولات مندوبي ومسؤولي المبيعات',
            'تحليل نقطة التعادل والكميات المستهدفة لتحقيق صافي الربح المطلوب'
        ] : [
            'Fully unlocked dynamic Excel (.xlsx) & Google Sheets template',
            'Tiered discount & bulk volume rebate calculator',
            'Sales rep commission structure simulator',
            'Break-even and target profit volume modeling'
        ]
    ],
    [
        'id' => 'prod-commercial-sysadmin-audit',
        'title' => ($lang === 'ar') ? 'تدقيق البنية التحتية وحماية بيانات المبيعات للشركات' : 'Commercial Enterprise IT Infrastructure & Data Security Audit',
        'category' => ($lang === 'ar') ? 'استشارات أمنية' : 'Security Consulting',
        'cat_key' => 'consulting',
        'price' => 125,
        'original_price' => 175,
        'rating' => '4.9/5',
        'badge' => ($lang === 'ar') ? 'أمن وتقنية' : 'Tech & Security',
        'delivery' => ($lang === 'ar') ? '2-3 أيام' : '2-3 Days',
        'desc' => ($lang === 'ar') ? 'تدريع خوادم العمليات، حماية قواعد بيانات العملاء وفواتير المبيعات، عزل شبكات POS، وتأمين الشركة ضد تسريب البيانات.' : 'Hardening server infrastructure, securing customer databases, isolating commercial POS networks, and preventing corporate data leakage.',
        'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        'deliverables' => ($lang === 'ar') ? [
            'فحص أمني لنقاط الضعف في خوادم الشركة وقواعد بيانات العملاء',
            'تهيئة وصول آمن مشفر (Zero-Trust / VPN) لمندوبي المبيعات الميدانيين',
            'إعداد نسخ احتياطي يومي مشفر لقواعد بيانات الفواتير والمحاسبة',
            'دليل تدريب الموظفين على تفادي هجمات التصيد والاختراق'
        ] : [
            'Commercial server & CRM database vulnerability assessment',
            'Zero-Trust network access configuration for remote sales reps',
            'Automated encrypted offsite backup system for sales invoices and accounting',
            'Staff cybersecurity & phishing defense protocol checklist'
        ]
    ]
];

$articles = [
    [
        'id' => 'post-b2b-pharma-sales',
        'title' => ($lang === 'ar') ? 'احتراف مبيعات B2B: إغلاق الصفقات الكبرى في قطاع الصناعات الدوائية والتجميلية' : 'B2B Sales Mastery: Closing Enterprise Pharmaceutical & Cosmetic Accounts',
        'category' => ($lang === 'ar') ? 'مبيعات B2B وتسويق' : 'B2B Sales & Marketing',
        'date' => ($lang === 'ar') ? '28 تشرين الأول 2026' : 'October 28, 2026',
        'read_time' => ($lang === 'ar') ? '6 دقائق' : '6 min read',
        'excerpt' => ($lang === 'ar') ? 'استراتيجيات عملية من واقع مبيعات الأدوية ومستحضرات التجميل: إدارة حساسية الأسعار، بناء هياكل الخصومات المتدرجة، وضمان عقود التوريد طويلة الأجل.' : 'Key strategies from the pharmaceutical and cosmetic frontline: navigating price sensitivities, structuring multi-tier pharmacy discounts, and securing long-term institutional supply agreements.',
        'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
        'body' => ($lang === 'ar') ? 'تختلف مبيعات الشركات B2B في قطاع الصناعات الدوائية والتجميلية تماماً عن المبيعات الاستهلاكية العادية. أنت لا تبيع مجرد عبوة منتج، بل تقدم شراكة مبنية على الثقة الدوائية، موثوقية سلاسل التوريد، وهوامش ربح مجزية للصيدليات والموزعين. البدء بالحديث عن السعر المنخفض هو فخ شائع، فالمدخل الاحترافي هو إبراز جودة المواد الفعالة وثبات المستحضر وتطبيق نظام مكافآت تحقيق الأهداف (Rebates) التراكمية الربع سنوية.' : 'Selling in the pharmaceutical and cosmetics sector is fundamentally different from transactional retail. Leading with price is a trap. Instead, frame discussions around formulation efficacy, compliance, margin predictability, and structured quarterly rebate incentives.'
    ],
    [
        'id' => 'post-sales-crm-tech',
        'title' => ($lang === 'ar') ? 'أتمتة المبيعات واستشارات الـ CRM: كيف تضاعف التقنية سرعة إغلاق الصفقات 3 مرات' : 'Sales Automation & CRM Tech Consulting: Boosting Deal Velocity by 3x',
        'category' => ($lang === 'ar') ? 'استشارات تقنية وأتمتة' : 'Tech Consulting & Automation',
        'date' => ($lang === 'ar') ? '19 تشرين الأول 2026' : 'October 19, 2026',
        'read_time' => ($lang === 'ar') ? '7 دقائق' : '7 min read',
        'excerpt' => ($lang === 'ar') ? 'كيف يؤدي دمج نظم المعلومات الحاسوبية مع فرق المبيعات إلى القضاء على تأخر المتابعات، أتمتة إرسال العروض السعرية، وتزويد الإدارة برؤية حية لتدفق الإيرادات.' : 'How bridging computer information systems with frontline sales eliminates follow-up delays, automates invoice delivery, and gives executives live visibility into revenue pipelines.',
        'image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        'body' => ($lang === 'ar') ? 'في معظم الشركات التجارية، يقضي موظف المبيعات أقل من 35% من وقته في البيع الفعلي وبقية الوقت تضيع في مهام روتينية. تشير الدراسات إلى أن الرد على استفسار العميل خلال 15 دقيقة يرفع احتمالية إتمام الصفقة بنسبة 7 أضعاف مقارنة بالانتظار ليوم كامل. ربط الـ CRM بـ Webhooks ورسائل واتساب مؤتمتة وتوحيد مراحل الصفقة يضاعف سرعة إغلاق الصفقات دون مجهود مضاعف.' : 'In most commercial enterprises, salespeople spend less than 35% of their working hours actually selling. Inbound lead response within 15 minutes yields 7x higher conversion. Integrating CRM webhooks, multi-channel WhatsApp messaging, and standardized deal stages eliminates operational friction and accelerates revenue.'
    ],
    [
        'id' => 'post-sales-production-alignment',
        'title' => ($lang === 'ar') ? 'من خط الإنتاج إلى السوق: مزامنة طاقة المصنع مع الأهداف البيعية والتجارية' : 'From Floor to Market: Aligning Production Capacities with Commercial Sales',
        'category' => ($lang === 'ar') ? 'إدارة العمليات والإنتاج' : 'Operations & Production',
        'date' => ($lang === 'ar') ? '05 تشرين الأول 2026' : 'October 05, 2026',
        'read_time' => ($lang === 'ar') ? '5 دقائق' : '5 min read',
        'excerpt' => ($lang === 'ar') ? 'انطلاقاً من خبرتي المزدوجة كمشرف إنتاج في لو ماريو ومسؤول مبيعات في ألترا ميديكا: كيف تقضي على الصدام التقليدي بين طاقة المصنع ومستهدفات فريق المبيعات.' : 'Having served as both Production Supervisor at Lu Mario and Sales Executive at Ultra-Medica, here is how to bridge the classic friction between manufacturing floors and commercial teams.',
        'image' => 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        'body' => ($lang === 'ar') ? 'الصدام بين فريقي المبيعات والإنتاج أمر تقليدي: المبيعات تعد العملاء بمواعيد قياسية، والإنتاج يشكو من ارتباك خطوط العمل والآلات. الحل يكمن في الشفافية الحية لطاقة المصنع عبر لوحة تحكم مشتركة، وتحديد معايير واضحة للحد الأدنى للطلب (MOQ)، واجتماع تنسيقي أسبوعي (S&OP) مدته 30 دقيقة صباح كل إثنين بين مشرف الإنتاج ومسؤول المبيعات.' : 'The tension between Sales and Production is well known. Sales commits to rapid client delivery; Production struggles with batch changes. Establishing shared production scheduling dashboards, standardized MOQs, and weekly 30-minute S&OP alignment handshakes turns friction into commercial momentum.'
    ],
    [
        'id' => 'post-digital-transformation-sales',
        'title' => ($lang === 'ar') ? 'التحول الرقمي لفرق المبيعات: الانتقال من فوضى الجداول إلى الأنظمة الذكية' : 'Digital Transformation for Commercial Teams: Moving Beyond Messy Spreadsheets',
        'category' => ($lang === 'ar') ? 'استشارات تقنية وأمنية' : 'Tech & Security Advisory',
        'date' => ($lang === 'ar') ? '22 أيلول 2026' : 'September 22, 2026',
        'read_time' => ($lang === 'ar') ? '6 دقائق' : '6 min read',
        'excerpt' => ($lang === 'ar') ? 'استشارات تقنية واقعية للشركات النامية: حماية قوائم العملاء وأسعار التوريد السرية، منع تسريب البيانات، وأتمتة تقارير العمولات بأمان تام.' : 'Practical tech consulting for growing businesses: how to secure confidential client pricing, prevent customer list theft, and automate commission reporting safely.',
        'image' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
        'body' => ($lang === 'ar') ? 'مع نمو فريق المبيعات، تصبح إدارة الصفقات عبر ملفات إكسل متفرقة خطراً أمنياً وتشغيلياً كبيراً. يجب حماية سرية قوائم العملاء وهياكل الأسعار عبر التحكم في صلاحيات الوصول (RBAC) والتخزين السحابي المشفر، مع أتمتة احتساب عمولات المبيعات لإلغاء أي خلافات حسابية بين الإدارة والمندوبين.' : 'Managing commercial operations through scattered spreadsheets introduces immense security risks. Confidential pricing formulas and client databases must be secured with Role-Based Access Control (RBAC), encrypted cloud backups, and automated commission tracking engines.'
    ]
];
?>