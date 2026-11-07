<?php
require_once 'includes/data.php';
$pageTitle = ($lang === 'ar') ? ("سلة المشتريات - " . $profile['name']) : ("Shopping Cart - " . $profile['name']);
require_once 'includes/header.php';
?>

<section class="page-header">
    <div class="container">
        <span class="section-eyebrow"><?php echo ($lang === 'ar') ? 'تأكيد وحجز الطلبات' : 'Checkout &amp; Inquiries'; ?></span>
        <h1><?php echo $txt['cart']; ?></h1>
        <p class="lead-text"><?php echo ($lang === 'ar') ? 'راجع الخدمات والاستشارات المختارة، ثم أكد طلبك مباشرة عبر تطبيق واتساب أو عبر البريد الإلكتروني.' : 'Review your selected services and toolkits. You can finalize your order directly via WhatsApp or submit your order details by email.'; ?></p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div id="cartWrapper" class="cart-grid-layout">
            <!-- Items Column -->
            <div class="cart-items-col">
                <div class="card p-4">
                    <div class="cart-header-row">
                        <h2><?php echo ($lang === 'ar') ? 'المعروضات المختارة' : 'Selected Items'; ?></h2>
                        <button onclick="clearCart()" class="btn-text text-danger"><?php echo $txt['clear_all']; ?></button>
                    </div>

                    <div id="cartItemsList" class="cart-items-container">
                        <!-- Populated by JavaScript -->
                    </div>

                    <div id="emptyCartNotice" class="empty-cart-state" style="display: none;">
                        <div class="empty-icon">🛒</div>
                        <h3><?php echo $txt['empty_cart']; ?></h3>
                        <p><?php echo ($lang === 'ar') ? 'تصفح خدماتنا واستشاراتنا التجارية والتقنية لاختيار ما يناسب مشروعك.' : 'Explore our B2B sales strategies, CRM automation audits, and digital toolkits to get started.'; ?></p>
                        <a href="shop.php?lang=<?php echo $lang; ?>" class="btn btn-primary mt-3"><?php echo $txt['browse_store']; ?></a>
                    </div>
                </div>
            </div>

            <!-- Summary Column -->
            <div class="cart-summary-col">
                <div class="card p-4 summary-card">
                    <h3><?php echo ($lang === 'ar') ? 'ملخص الطلب' : 'Order Summary'; ?></h3>
                    <div class="summary-line">
                        <span><?php echo $txt['subtotal']; ?></span>
                        <strong id="cartSubtotal">$0.00</strong>
                    </div>
                    <div class="summary-line">
                        <span><?php echo ($lang === 'ar') ? 'رسوم المعالجة والتجهيز' : 'Setup &amp; Processing Fee'; ?></span>
                        <span class="text-success"><?php echo ($lang === 'ar') ? 'مجاناً ($0.00)' : 'Free ($0.00)'; ?></span>
                    </div>
                    <hr class="summary-divider">
                    <div class="summary-total">
                        <span><?php echo $txt['total_due']; ?></span>
                        <strong id="cartTotal" class="total-price">$0.00</strong>
                    </div>

                    <div class="checkout-actions">
                        <button id="whatsappCheckoutBtn" onclick="checkoutWhatsApp()" class="btn btn-whatsapp btn-block btn-lg">
                            💬 <?php echo $txt['confirm_whatsapp']; ?>
                        </button>
                        <button onclick="checkoutEmail()" class="btn btn-outline btn-block mt-2">
                            ✉️ <?php echo $txt['order_email']; ?>
                        </button>
                    </div>

                    <div class="secure-guarantee-note">
                        <small>🔒 <?php echo ($lang === 'ar') ? 'متابعة وتنفيذ مباشر من عمار الشيخ (دمشق، سوريا)' : 'Direct fulfillment with Ammar Alsheikh (Damascus, Syria)'; ?></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>