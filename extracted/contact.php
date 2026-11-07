<?php
require_once 'includes/data.php';
$pageTitle = ($lang === 'ar') ? ("اتصل بي - " . $profile['name']) : ("Contact - " . $profile['name']);
require_once 'includes/header.php';

$sentSuccess = false;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sentSuccess = true;
}
?>

<section class="page-header">
    <div class="container">
        <span class="section-eyebrow"><?php echo ($lang === 'ar') ? 'تواصل مباشر' : 'Get In Touch'; ?></span>
        <h1><?php echo $txt['contact']; ?></h1>
        <p class="lead-text"><?php echo ($lang === 'ar') ? 'هل لديك استفسار تجاري، طلب توريد B2B، أو استشارة في أتمتة المبيعات ونظم التقنية؟ تواصل مباشرة عبر واتساب أو أرسل رسالتك أدناه.' : 'Have a commercial sales inquiry, B2B procurement request, or CRM / IT tech consultation? Reach out directly via WhatsApp, email, or send a message below.'; ?></p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="contact-grid">
            <!-- Contact Details -->
            <div class="contact-cards-col">
                <div class="card p-4">
                    <div class="contact-icon-row">
                        <div class="contact-icon">📱</div>
                        <div>
                            <h4>WhatsApp &amp; Phone</h4>
                            <p><a href="https://wa.me/<?php echo $profile['whatsapp']; ?>" target="_blank">+963 981092422</a></p>
                            <small class="text-muted"><?php echo ($lang === 'ar') ? 'مراسلة فورية مباشرة' : 'Direct instant messaging'; ?></small>
                        </div>
                    </div>
                </div>

                <div class="card p-4 mt-3">
                    <div class="contact-icon-row">
                        <div class="contact-icon">✉️</div>
                        <div>
                            <h4>Email Address</h4>
                            <p><a href="mailto:<?php echo $profile['email']; ?>"><?php echo $profile['email']; ?></a></p>
                            <small class="text-muted">Syrian Virtual University email</small>
                        </div>
                    </div>
                </div>

                <div class="card p-4 mt-3">
                    <div class="contact-icon-row">
                        <div class="contact-icon">📍</div>
                        <div>
                            <h4>Location &amp; Operations</h4>
                            <p><strong>Damascus, Syria</strong></p>
                            <small class="text-muted"><?php echo ($lang === 'ar') ? 'متاح للاجتماعات المباشرة في دمشق والاستشارات عن بعد' : 'Available for local meetings in Damascus and remote consulting worldwide'; ?></small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Form -->
            <div class="contact-form-col">
                <div class="card p-4">
                    <h2><?php echo ($lang === 'ar') ? 'إرسال رسالة' : 'Send a Message'; ?></h2>
                    <p class="text-muted"><?php echo ($lang === 'ar') ? 'املأ النموذج التالي أو راسلني عبر واتساب للرد الفوري.' : 'Fill out the form below or message directly via WhatsApp for urgent inquiries.'; ?></p>

                    <?php if ($sentSuccess): ?>
                    <div class="alert alert-success">
                        <strong><?php echo ($lang === 'ar') ? 'شكراً لك!' : 'Thank you!'; ?></strong> <?php echo ($lang === 'ar') ? 'تم استلام رسالتك بنجاح وسيتواصل معك عمار قريباً.' : 'Your message has been received. Ammar will respond shortly.'; ?>
                    </div>
                    <?php endif; ?>

                    <form method="POST" action="contact.php?lang=<?php echo $lang; ?>" onsubmit="return handleContactSubmit(event)">
                        <div class="form-group">
                            <label for="name"><?php echo $txt['your_name']; ?></label>
                            <input type="text" id="name" name="name" required class="form-control" placeholder="e.g. Tariq Mansour">
                        </div>

                        <div class="form-group">
                            <label for="email"><?php echo $txt['your_email']; ?></label>
                            <input type="email" id="email" name="email" required class="form-control" placeholder="you@company.com">
                        </div>

                        <div class="form-group">
                            <label for="subject"><?php echo $txt['inquiry_topic']; ?></label>
                            <select id="subject" name="subject" class="form-control">
                                <option value="B2B Sales Pipeline"><?php echo ($lang === 'ar') ? 'مبيعات B2B وتطوير شبكات التوزيع' : 'B2B Sales Pipeline & Strategy'; ?></option>
                                <option value="CRM Automation"><?php echo ($lang === 'ar') ? 'استشارة أتمتة المبيعات ونظم CRM' : 'Sales Automation & CRM Tech Setup'; ?></option>
                                <option value="Pharma Launch"><?php echo ($lang === 'ar') ? 'تسويق وإطلاق المنتجات الدوائية والتجميلية' : 'Pharma & Cosmetic Launch Marketing'; ?></option>
                                <option value="Enterprise Security Audit"><?php echo ($lang === 'ar') ? 'تدقيق البنية التحتية وحماية بيانات الصفقات' : 'Enterprise IT & Data Security Audit'; ?></option>
                                <option value="General Commercial"><?php echo ($lang === 'ar') ? 'استفسار تجاري عام' : 'General Commercial / B2B Inquiry'; ?></option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message"><?php echo $txt['your_msg']; ?></label>
                            <textarea id="message" name="message" rows="5" required class="form-control" placeholder="Please describe your inquiry or scope of work..."></textarea>
                        </div>

                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary btn-lg"><?php echo $txt['send_message']; ?></button>
                            <button type="button" onclick="sendViaWhatsAppForm()" class="btn btn-whatsapp btn-lg"><?php echo $txt['direct_whatsapp']; ?></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>