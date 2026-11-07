<?php
require_once 'includes/data.php';

$id = isset($_GET['id']) ? $_GET['id'] : '';
$found = null;
foreach ($products as $p) {
    if ($p['id'] === $id) {
        $found = $p;
        break;
    }
}
if (!$found) {
    header("Location: shop.php?lang=" . $lang);
    exit;
}

$pageTitle = $found['title'] . " - " . $profile['name'];
require_once 'includes/header.php';
?>

<section class="section">
    <div class="container">
        <div class="breadcrumb">
            <a href="index.php?lang=<?php echo $lang; ?>"><?php echo $txt['home']; ?></a> &gt; 
            <a href="shop.php?lang=<?php echo $lang; ?>"><?php echo $txt['shop']; ?></a> &gt; 
            <span><?php echo htmlspecialchars($found['title']); ?></span>
        </div>

        <div class="product-detail-layout">
            <div class="product-gallery">
                <img src="<?php echo htmlspecialchars($found['image']); ?>" alt="<?php echo htmlspecialchars($found['title']); ?>" class="main-prod-img">
                <div class="product-guarantee-card">
                    <h4><?php echo ($lang === 'ar') ? 'ضمان جودة المخرجات' : 'Verified Deliverable Guarantee'; ?></h4>
                    <p><?php echo ($lang === 'ar') ? 'كافة الاستشارات ونماذج المبيعات والحزم الرقمية يتم إعدادها وتقديمها مباشرة بواسطة <strong>عمار الشيخ</strong>.' : 'All commercial consultations, sales frameworks, and digital toolkits are conducted and authored directly by <strong>Ammar Alsheikh</strong>.'; ?></p>
                </div>
            </div>

            <div class="product-details-content">
                <div class="product-meta">
                    <span class="category-tag"><?php echo htmlspecialchars($found['category']); ?></span>
                    <span class="rating-text">&starf; <?php echo htmlspecialchars($found['rating']); ?></span>
                </div>

                <h1 class="prod-detail-title"><?php echo htmlspecialchars($found['title']); ?></h1>
                
                <div class="price-detail-box">
                    <span class="price-large">$<?php echo $found['price']; ?></span>
                    <?php if ($found['original_price']): ?>
                        <span class="old-price-large">$<?php echo $found['original_price']; ?></span>
                        <span class="discount-badge"><?php echo ($lang === 'ar') ? 'وفر $' . ($found['original_price'] - $found['price']) : 'Save $' . ($found['original_price'] - $found['price']); ?></span>
                    <?php endif; ?>
                </div>

                <p class="prod-detail-desc"><?php echo htmlspecialchars($found['desc']); ?></p>

                <div class="deliverables-box">
                    <h3><?php echo $txt['includes_label']; ?></h3>
                    <ul class="checklist">
                        <?php foreach ($found['deliverables'] as $item): ?>
                            <li><?php echo htmlspecialchars($item); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>

                <div class="product-cta-group">
                    <button onclick="addToCart('<?php echo $found['id']; ?>', '<?php echo addslashes($found['title']); ?>', <?php echo $found['price']; ?>, '<?php echo $found['image']; ?>')" class="btn btn-primary btn-lg">
                        🛒 <?php echo $txt['add_to_cart']; ?>
                    </button>
                    <a href="https://wa.me/<?php echo $profile['whatsapp']; ?>?text=<?php echo urlencode('Hello Ammar, I would like to order: ' . $found['title'] . ' ($' . $found['price'] . ')'); ?>" target="_blank" class="btn btn-whatsapp btn-lg">
                        <?php echo $txt['order_whatsapp']; ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>