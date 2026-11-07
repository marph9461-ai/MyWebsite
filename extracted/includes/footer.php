<?php require_once __DIR__ . '/data.php'; ?>
    </main>
    <footer class="site-footer">
        <div class="container footer-grid">
            <div class="footer-col brand-col">
                <div class="brand-logo footer-logo">
                    <div class="logo-badge">AA</div>
                    <span class="brand-name"><?php echo htmlspecialchars($profile['name']); ?></span>
                </div>
                <p class="footer-desc"><?php echo htmlspecialchars($profile['headline']); ?></p>
                <div class="contact-pill-list">
                    <a href="https://wa.me/<?php echo $profile['whatsapp']; ?>" target="_blank" class="pill whatsapp-pill">
                        WhatsApp: +963 981092422
                    </a>
                    <a href="mailto:<?php echo $profile['email']; ?>" class="pill email-pill">
                        <?php echo $profile['email']; ?>
                    </a>
                </div>
            </div>

            <div class="footer-col">
                <h4><?php echo $txt['quick_nav']; ?></h4>
                <ul>
                    <li><a href="index.php?lang=<?php echo $lang; ?>"><?php echo $txt['home']; ?></a></li>
                    <li><a href="about.php?lang=<?php echo $lang; ?>"><?php echo $txt['about']; ?></a></li>
                    <li><a href="shop.php?lang=<?php echo $lang; ?>"><?php echo $txt['shop']; ?></a></li>
                    <li><a href="blog.php?lang=<?php echo $lang; ?>"><?php echo $txt['blog']; ?></a></li>
                    <li><a href="cart.php?lang=<?php echo $lang; ?>"><?php echo $txt['cart']; ?></a></li>
                    <li><a href="contact.php?lang=<?php echo $lang; ?>"><?php echo $txt['contact']; ?></a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4><?php echo $txt['specialties']; ?></h4>
                <ul>
                    <?php if ($lang === 'ar'): ?>
                        <li>إدارة مبيعات الشركات B2B وعقود التوزيع</li>
                        <li>استشارات أتمتة المبيعات ونظم CRM</li>
                        <li>خطط تسويق وإطلاق المستحضرات الدوائية والتجميلية</li>
                        <li>تدقيق البنية التحتية وحماية بيانات الشركات</li>
                        <li>مواءمة خطوط الإنتاج مع المبيعات التجارية</li>
                    <?php else: ?>
                        <li>B2B Commercial Sales &amp; Distribution</li>
                        <li>Sales Automation &amp; CRM Consulting</li>
                        <li>Pharma &amp; Cosmetic Launch Marketing</li>
                        <li>Enterprise Data Protection &amp; IT Audits</li>
                        <li>Production &amp; Commercial Alignment</li>
                    <?php endif; ?>
                </ul>
            </div>

            <div class="footer-col">
                <h4>InfinityFree Hosting</h4>
                <div class="hosting-card">
                    <span class="badge-tag">Pure Static PHP</span>
                    <p><?php echo $txt['hosting_note']; ?></p>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container bottom-container">
                <p>&copy; <?php echo date('Y'); ?> <?php echo htmlspecialchars($profile['name']); ?>. <?php echo $txt['all_rights']; ?></p>
                <div class="footer-lang-selector">
                    <a href="?lang=en" class="<?php echo ($lang === 'en') ? 'active-lang' : ''; ?>">English</a> | 
                    <a href="?lang=ar" class="<?php echo ($lang === 'ar') ? 'active-lang' : ''; ?>">العربية</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Cart Floating Shortcut -->
    <a href="cart.php?lang=<?php echo $lang; ?>" class="floating-cart-shortcut" id="floatingCartBtn" title="View Cart">
        🛒 <span class="badge" id="floatingBadge">0</span>
    </a>

    <script src="assets/js/main.js"></script>
</body>
</html>