<?php
require_once 'includes/data.php';
$pageTitle = ($lang === 'ar') ? ("السيرة الذاتية - " . $profile['name']) : ("About & CV - " . $profile['name']);
require_once 'includes/header.php';
?>

<section class="page-header">
    <div class="container">
        <span class="section-eyebrow"><?php echo ($lang === 'ar') ? 'السيرة الذاتية الرسمية' : 'Curriculum Vitae'; ?></span>
        <h1><?php echo ($lang === 'ar') ? 'عن عمار الشيخ' : 'About Ammar Alsheikh'; ?></h1>
        <p class="lead-text"><?php echo htmlspecialchars($profile['headline']); ?></p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="cv-hero-card">
            <div class="cv-hero-left">
                <h2><?php echo htmlspecialchars($profile['name']); ?></h2>
                <p class="cv-title"><?php echo htmlspecialchars($profile['title']); ?> &bull; <?php echo htmlspecialchars($profile['company']); ?></p>
                <div class="cv-info-grid">
                    <div><strong><?php echo ($lang === 'ar') ? 'الجنسية:' : 'Nationality:'; ?></strong> <?php echo htmlspecialchars($profile['nationality']); ?></div>
                    <div><strong><?php echo ($lang === 'ar') ? 'الموقع:' : 'Location:'; ?></strong> <?php echo htmlspecialchars($profile['location']); ?></div>
                    <div><strong><?php echo ($lang === 'ar') ? 'الهاتف:' : 'Mobile:'; ?></strong> <a href="tel:<?php echo $profile['phone']; ?>"><?php echo $profile['phone']; ?></a></div>
                    <div><strong><?php echo ($lang === 'ar') ? 'البريد الإلكتروني:' : 'Email:'; ?></strong> <a href="mailto:<?php echo $profile['email']; ?>"><?php echo $profile['email']; ?></a></div>
                </div>
            </div>
            <div class="cv-hero-right">
                <div class="objectives-box">
                    <h3><?php echo ($lang === 'ar') ? 'الأهداف المهنية' : 'Core Objectives'; ?></h3>
                    <ul>
                        <?php if ($lang === 'ar'): ?>
                            <li>قيادة وتوسيع مسارات مبيعات الشركات B2B وتطوير شبكات التوزيع الدوائية والتجميلية.</li>
                            <li>تطبيق استشارات نظم الأتمتة وCRM لرفع سرعة المتابعة ومضاعفة المبيعات.</li>
                            <li>مواءمة عمليات وخطوط الإنتاج الصناعي مع متطلبات السوق والصفقات التجارية.</li>
                        <?php else: ?>
                            <li>Leading and scaling commercial B2B sales pipelines and distributor partnerships in pharma & cosmetics.</li>
                            <li>Implementing CRM automation and tech consulting to accelerate deal velocity.</li>
                            <li>Bridging industrial manufacturing operations with commercial sales commitments.</li>
                        <?php endif; ?>
                    </ul>
                    <a href="https://wa.me/<?php echo $profile['whatsapp']; ?>?text=Hello%20Ammar,%20I%20reviewed%20your%20CV%20and%20would%20like%20to%20connect" target="_blank" class="btn btn-whatsapp btn-block">
                        <?php echo $txt['direct_whatsapp']; ?>
                    </a>
                </div>
            </div>
        </div>

        <!-- Experience Timeline -->
        <div class="cv-section">
            <h2 class="cv-heading"><?php echo ($lang === 'ar') ? 'الخبرات المهنية والعملية' : 'Practical Work Experience'; ?></h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-badge">2026 - <?php echo ($lang === 'ar') ? 'الآن' : 'Now'; ?></div>
                    <div class="timeline-content">
                        <h3><?php echo ($lang === 'ar') ? 'مسؤول مبيعات (Sales Executive) &mdash; ألترا ميديكا للصناعات الدوائية والتجميلية' : 'Sales Executive &mdash; Ultra-Medica for pharmaceutical and cosmetic industry'; ?></h3>
                        <p class="timeline-contact"><?php echo ($lang === 'ar') ? 'الموقع: دمشق | واتساب: +963 981092422' : 'Location: Damascus | WhatsApp: +963 981092422'; ?></p>
                        <p><?php echo ($lang === 'ar') ? 'إدارة وتطوير مسارات مبيعات الشركات B2B، توسيع شبكة الموزعين، وبناء شراكات التوريد لسلاسل الصيدليات والمراكز الطبية.' : 'Leading commercial B2B sales pipelines, distributor network expansion, pharmacy chain partnerships, and institutional supply agreements.'; ?></p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-badge">2022 - 2026</div>
                    <div class="timeline-content">
                        <h3><?php echo ($lang === 'ar') ? 'مشرف إنتاج &mdash; لو ماريو (Lu Mario)' : 'Production Supervisor &mdash; Lu Mario'; ?></h3>
                        <p class="timeline-contact"><?php echo ($lang === 'ar') ? 'الموقع: دمشق | هاتف: +963 954522487' : 'Location: Damascus | Contact: +963 954522487'; ?></p>
                        <p><?php echo ($lang === 'ar') ? 'إدارة وتنظيم خطوط الإنتاج والعمليات، إعداد إجراءات التشغيل القياسية (SOPs)، وجدولة تشغيل الآلات وتوزيع الورديات.' : 'Supervised end-to-end manufacturing workflows, drafted SOPs, optimized machine scheduling, and coordinated shift operations.'; ?></p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-badge">2020 - 2022</div>
                    <div class="timeline-content">
                        <h3><?php echo ($lang === 'ar') ? 'وسيط مالي أول &mdash; غولد ماين للتجارة (GoldMine Trading)' : 'Senior Broker &mdash; GoldMine Trading'; ?></h3>
                        <p class="timeline-contact">Contact: +971 505002687</p>
                        <p><?php echo ($lang === 'ar') ? 'إدارة حسابات التداول المالي التجاري، تحليل مؤشرات الأسواق، وإعداد النماذج والجداول المالية تحت تقلبات عالية.' : 'Managed commercial brokerage accounts, market trends analysis, financial spreadsheets, and negotiation under market volatility.'; ?></p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-badge">2020 - 2022</div>
                    <div class="timeline-content">
                        <h3><?php echo ($lang === 'ar') ? 'مدير مبيعات &mdash; الفوارس للرخام (Alfwares Marble)' : 'Sales Manager &mdash; Alfwares Marble'; ?></h3>
                        <p class="timeline-contact">Contact: +971 549872332</p>
                        <p><?php echo ($lang === 'ar') ? 'إدارة مبيعات الشركات B2B، عقود التصدير، وتحديد هياكل وهوامش الأسعار وجداول التوريد.' : 'Directed commercial B2B sales pipelines, export contracts, pricing tiers, and client supply schedules.'; ?></p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-badge">2017 - 2020</div>
                    <div class="timeline-content">
                        <h3><?php echo ($lang === 'ar') ? 'فني صيانة إلكترونيات &mdash; البرق (Albarq Mobile Store)' : 'Hardware Technician &mdash; Albarq Mobile Store'; ?></h3>
                        <p class="timeline-contact">Contact: +249 883344501</p>
                        <p><?php echo ($lang === 'ar') ? 'فحص وتشخيص اللوحات الإلكترونية، اللحام الدقيق، وتتبع مسارات التغذية الكهربائية وعزل القصر الكهربائي (الشورت).' : 'Specialized in board-level electronics troubleshooting, micro-soldering, and power rail diagnostics.'; ?></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Education -->
        <div class="cv-section">
            <h2 class="cv-heading"><?php echo ($lang === 'ar') ? 'المؤهل العلمي والدورات التخصصية' : 'Education & Certifications'; ?></h2>
            <div class="grid-2">
                <div class="card p-4">
                    <span class="badge-tag">2026</span>
                    <h3><?php echo ($lang === 'ar') ? 'المعهد التقاني للحاسوب وتقنية المعلومات' : 'Technology Information Computer Institute'; ?></h3>
                    <p class="text-muted"><?php echo ($lang === 'ar') ? 'الجامعة الافتراضية السورية (SVU)' : 'Syrian Virtual University (SVU)'; ?></p>
                    <p class="grade-pill"><?php echo ($lang === 'ar') ? 'المعدل العام: ممتاز (A-)' : 'Academic Standing: Grade A-'; ?></p>
                </div>

                <div class="card p-4">
                    <span class="badge-tag">2025</span>
                    <h3><?php echo ($lang === 'ar') ? 'معسكر الأمن السيبراني 6 (CyberPedia)' : 'Cyber Security Camp 6 (CyberPedia)'; ?></h3>
                    <p class="text-muted">OSINT &bull; Threat Hunting &bull; Linux Hardening &bull; Network Forensics</p>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>