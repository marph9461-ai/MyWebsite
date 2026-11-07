<?php
require_once 'includes/data.php';
$pageTitle = ($lang === 'ar') ? ("الخدمات والاستشارات - " . $profile['name']) : ("Services & Consultations - " . $profile['name']);
require_once 'includes/header.php';

$categoryFilter = isset($_GET['cat']) ? $_GET['cat'] : 'all';
$filteredProducts = $products;
if ($categoryFilter !== 'all') {
    $filteredProducts = array_filter($products, function($p) use ($categoryFilter) {
        return $p['cat_key'] === $categoryFilter;
    });
}
?>

<section class="page-header">
    <div class="container">
        <span class="section-eyebrow"><?php echo ($lang === 'ar') ? 'المتجر الاستشاري والتجاري' : 'Commercial Solutions &amp; Consultations'; ?></span>
        <h1><?php echo ($lang === 'ar') ? 'خدمات مبيعات B2B والاستشارات التقنية' : 'B2B Sales, Marketing &amp; Tech Consultations'; ?></h1>
        <p class="lead-text"><?php echo ($lang === 'ar') ? 'استراتيجيات تطوير مبيعات الشركات B2B، أتمتة الـ CRM، خطط تدشين المستحضرات الدوائية والتجميلية، وحقائب نماذج المبيعات الرقمية.' : 'Procure specialized B2B sales pipelines, CRM automation consultations, pharma product launch marketing, and instant commercial sales toolkits.'; ?></p>
    </div>
</section>

<section class="section">
    <div class="container">
        <!-- Filter Bar -->
        <div class="store-filter-bar">
            <a href="shop.php?cat=all&lang=<?php echo $lang; ?>" class="filter-tab <?php echo ($categoryFilter == 'all') ? 'active' : ''; ?>"><?php echo $txt['all_offerings']; ?> (<?php echo count($products); ?>)</a>
            <a href="shop.php?cat=services&lang=<?php echo $lang; ?>" class="filter-tab <?php echo ($categoryFilter == 'services') ? 'active' : ''; ?>"><?php echo $txt['it_services']; ?></a>
            <a href="shop.php?cat=consulting&lang=<?php echo $lang; ?>" class="filter-tab <?php echo ($categoryFilter == 'consulting') ? 'active' : ''; ?>"><?php echo $txt['consulting']; ?></a>
            <a href="shop.php?cat=digital&lang=<?php echo $lang; ?>" class="filter-tab <?php echo ($categoryFilter == 'digital') ? 'active' : ''; ?>"><?php echo $txt['digital_guides']; ?></a>
        </div>

        <!-- Products Grid -->
        <div class="products-grid">
            <?php foreach ($filteredProducts as $prod): ?>
            <div class="product-card">
                <div class="product-image-wrap">
                    <img src="<?php echo htmlspecialchars($prod['image']); ?>" alt="<?php echo htmlspecialchars($prod['title']); ?>">
                    <?php if (!empty($prod['badge'])): ?>
                        <span class="product-badge"><?php echo htmlspecialchars($prod['badge']); ?></span>
                    <?php endif; ?>
                </div>
                <div class="product-info">
                    <div class="product-meta">
                        <span class="category-tag"><?php echo htmlspecialchars($prod['category']); ?></span>
                        <span class="delivery-tag">⏱ <?php echo htmlspecialchars($prod['delivery']); ?></span>
                    </div>
                    <h3 class="product-title">
                        <a href="product.php?id=<?php echo urlencode($prod['id']); ?>&lang=<?php echo $lang; ?>">
                            <?php echo htmlspecialchars($prod['title']); ?>
                        </a>
                    </h3>
                    <p class="product-desc"><?php echo htmlspecialchars($prod['desc']); ?></p>

                    <div class="deliverables-preview">
                        <strong><?php echo $txt['includes_label']; ?></strong>
                        <ul>
                            <?php foreach (array_slice($prod['deliverables'], 0, 2) as $del): ?>
                                <li><?php echo htmlspecialchars($del); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                    <div class="product-bottom">
                        <div class="price-box">
                            <span class="price-val">$<?php echo $prod['price']; ?></span>
                            <?php if ($prod['original_price']): ?>
                                <span class="old-price">$<?php echo $prod['original_price']; ?></span>
                            <?php endif; ?>
                        </div>
                        <div class="btn-group">
                            <a href="product.php?id=<?php echo urlencode($prod['id']); ?>&lang=<?php echo $lang; ?>" class="btn btn-sm btn-outline"><?php echo $txt['details']; ?></a>
                            <button onclick="addToCart('<?php echo $prod['id']; ?>', '<?php echo addslashes($prod['title']); ?>', <?php echo $prod['price']; ?>, '<?php echo $prod['image']; ?>')" class="btn btn-sm btn-primary"><?php echo $txt['add_to_cart']; ?></button>
                        </div>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>

        <!-- Custom Inquiry Callout -->
        <div class="custom-inquiry-box mt-5">
            <div>
                <h3><?php echo ($lang === 'ar') ? 'هل تحتاج إلى استشارة تجارية مخصصة أو أتمتة لفريقك؟' : 'Need a Tailored B2B Sales Strategy or Tech Consultation?'; ?></h3>
                <p><?php echo ($lang === 'ar') ? 'سواء كنت بحاجة إلى استراتيجيات توريد دوائي وتجميلي، أتمتة نظام CRM، أو حماية قواعد بيانات العملاء، تواصل مباشرة لمناقشة التفاصيل.' : 'Looking for commercial distributor agreements, CRM pipeline integration, or confidential sales database protection? Inquire directly for a custom scope of work.'; ?></p>
            </div>
            <a href="https://wa.me/<?php echo $profile['whatsapp']; ?>?text=Hello%20Ammar,%20I%20have%20a%20custom%20inquiry%20regarding%20your%20commercial%20and%20tech%20services" target="_blank" class="btn btn-whatsapp">
                <?php echo $txt['direct_whatsapp']; ?>
            </a>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>