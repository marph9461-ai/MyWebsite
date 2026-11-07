<?php
require_once 'includes/header.php';
?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container hero-container">
        <div class="hero-content">
            <div class="status-badge">
                <span class="pulse-dot"></span> <?php echo $txt['available_badge']; ?>
            </div>
            <h1 class="hero-title">
                <?php echo $txt['hero_title']; ?>
            </h1>
            <p class="hero-lead">
                <?php echo $txt['hero_lead']; ?>
            </p>
            <div class="hero-actions">
                <a href="shop.php?lang=<?php echo $lang; ?>" class="btn btn-primary"><?php echo $txt['browse_store']; ?></a>
                <a href="about.php?lang=<?php echo $lang; ?>" class="btn btn-secondary"><?php echo $txt['view_cv']; ?></a>
                <a href="https://wa.me/<?php echo $profile['whatsapp']; ?>?text=Hello%20Ammar" target="_blank" class="btn btn-whatsapp">
                    <?php echo $txt['direct_whatsapp']; ?>
                </a>
            </div>
        </div>

        <div class="hero-card">
            <div class="profile-card-header">
                <div class="avatar-box">
                    <span class="avatar-initials">AA</span>
                </div>
                <div>
                    <h3 class="card-name"><?php echo htmlspecialchars($profile['name']); ?></h3>
                    <p class="card-sub"><?php echo htmlspecialchars($profile['title']); ?></p>
                </div>
            </div>
            <div class="card-meta">
                <div class="meta-item">
                    <span class="label"><?php echo ($lang === 'ar') ? 'الموقع' : 'Location'; ?></span>
                    <span class="value"><?php echo ($lang === 'ar') ? 'دمشق، سوريا' : 'Damascus, Syria'; ?></span>
                </div>
                <div class="meta-item">
                    <span class="label"><?php echo ($lang === 'ar') ? 'المؤهل' : 'Education'; ?></span>
                    <span class="value"><?php echo ($lang === 'ar') ? 'الافتراضية السورية (A-)' : 'Syrian Virtual Univ. (A-)'; ?></span>
                </div>
                <div class="meta-item">
                    <span class="label"><?php echo ($lang === 'ar') ? 'الأمن السيبراني' : 'Cybersecurity'; ?></span>
                    <span class="value"><?php echo ($lang === 'ar') ? 'معسكر 6 (CyberPedia)' : 'Camp 6 (CyberPedia)'; ?></span>
                </div>
                <div class="meta-item">
                    <span class="label"><?php echo ($lang === 'ar') ? 'الوظيفة الحالية' : 'Current Job'; ?></span>
                    <span class="value"><?php echo ($lang === 'ar') ? 'ألترا ميديكا (2026-الآن)' : 'Ultra-Medica (2026-Now)'; ?></span>
                </div>
            </div>
            <div class="card-action">
                <a href="about.php?lang=<?php echo $lang; ?>" class="btn-block"><?php echo ($lang === 'ar') ? 'فحص السيرة الذاتية الكاملة &larr;' : 'Inspect Complete Resume &rarr;'; ?></a>
            </div>
        </div>
    </div>
</section>

<!-- Stats Bar -->
<section class="stats-bar">
    <div class="container stats-grid">
        <div class="stat-card">
            <span class="stat-num">+7</span>
            <span class="stat-label"><?php echo $txt['years_exp']; ?></span>
        </div>
        <div class="stat-card">
            <span class="stat-num">A-</span>
            <span class="stat-label"><?php echo $txt['academic_grade']; ?></span>
        </div>
        <div class="stat-card">
            <span class="stat-num">+250</span>
            <span class="stat-label"><?php echo $txt['hardware_repairs']; ?></span>
        </div>
        <div class="stat-card">
            <span class="stat-num">3</span>
            <span class="stat-label"><?php echo $txt['languages_count']; ?></span>
        </div>
    </div>
</section>

<!-- Featured Store & Services -->
<section class="section">
    <div class="container">
        <div class="section-head">
            <div>
                <h2 class="section-title"><?php echo $txt['featured_services']; ?></h2>
                <p class="section-desc"><?php echo $txt['featured_services_sub']; ?></p>
            </div>
            <a href="shop.php?lang=<?php echo $lang; ?>" class="link-arrow"><?php echo $txt['view_all_shop']; ?></a>
        </div>

        <div class="products-grid">
            <?php foreach (array_slice($products, 0, 3) as $prod): ?>
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
                        <span class="rating-text">&starf; <?php echo htmlspecialchars($prod['rating']); ?></span>
                    </div>
                    <h3 class="product-title">
                        <a href="product.php?id=<?php echo urlencode($prod['id']); ?>&lang=<?php echo $lang; ?>">
                            <?php echo htmlspecialchars($prod['title']); ?>
                        </a>
                    </h3>
                    <p class="product-desc"><?php echo htmlspecialchars($prod['desc']); ?></p>
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
    </div>
</section>

<!-- Latest Articles -->
<section class="section section-light">
    <div class="container">
        <div class="section-head">
            <div>
                <h2 class="section-title"><?php echo $txt['latest_articles']; ?></h2>
                <p class="section-desc"><?php echo $txt['latest_articles_sub']; ?></p>
            </div>
            <a href="blog.php?lang=<?php echo $lang; ?>" class="link-arrow"><?php echo $txt['explore_blog']; ?></a>
        </div>

        <div class="articles-grid">
            <?php foreach ($articles as $post): ?>
            <article class="article-card">
                <div class="article-img">
                    <img src="<?php echo htmlspecialchars($post['image']); ?>" alt="<?php echo htmlspecialchars($post['title']); ?>">
                    <span class="article-cat"><?php echo htmlspecialchars($post['category']); ?></span>
                </div>
                <div class="article-body">
                    <div class="article-meta">
                        <span><?php echo htmlspecialchars($post['date']); ?></span> &bull; 
                        <span><?php echo htmlspecialchars($post['read_time']); ?></span>
                    </div>
                    <h3 class="article-title">
                        <a href="post.php?id=<?php echo urlencode($post['id']); ?>&lang=<?php echo $lang; ?>"><?php echo htmlspecialchars($post['title']); ?></a>
                    </h3>
                    <p class="article-excerpt"><?php echo htmlspecialchars($post['excerpt']); ?></p>
                    <a href="post.php?id=<?php echo urlencode($post['id']); ?>&lang=<?php echo $lang; ?>" class="read-more"><?php echo $txt['read_more']; ?></a>
                </div>
            </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>