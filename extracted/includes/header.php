<?php
require_once __DIR__ . '/data.php';
$currentPage = basename($_SERVER['PHP_SELF'], '.php');
if (!isset($pageTitle)) {
    $pageTitle = $profile['name'] . ' - ' . $profile['title'];
}
?>
<!DOCTYPE html>
<html lang="<?php echo $lang; ?>" dir="<?php echo $dir; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle); ?></title>
    <meta name="description" content="<?php echo htmlspecialchars($profile['headline']); ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="<?php echo ($lang === 'ar') ? 'lang-ar' : 'lang-en'; ?>">
    <header class="site-header">
        <div class="container header-container">
            <a href="index.php?lang=<?php echo $lang; ?>" class="brand-logo">
                <div class="logo-badge">AA</div>
                <div class="brand-text">
                    <span class="brand-name"><?php echo htmlspecialchars($profile['name']); ?></span>
                    <span class="brand-tagline"><?php echo htmlspecialchars($profile['title']); ?></span>
                </div>
            </a>

            <button class="mobile-toggle" id="mobileMenuBtn" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="site-nav" id="siteNav">
                <a href="index.php?lang=<?php echo $lang; ?>" class="<?php echo ($currentPage == 'index' || $currentPage == '') ? 'active' : ''; ?>">
                    <?php echo $txt['home']; ?>
                </a>
                <a href="about.php?lang=<?php echo $lang; ?>" class="<?php echo ($currentPage == 'about') ? 'active' : ''; ?>">
                    <?php echo $txt['about']; ?>
                </a>
                <a href="shop.php?lang=<?php echo $lang; ?>" class="<?php echo ($currentPage == 'shop' || $currentPage == 'product') ? 'active' : ''; ?>">
                    <?php echo $txt['shop']; ?>
                </a>
                <a href="blog.php?lang=<?php echo $lang; ?>" class="<?php echo ($currentPage == 'blog' || $currentPage == 'post') ? 'active' : ''; ?>">
                    <?php echo $txt['blog']; ?>
                </a>
                <a href="contact.php?lang=<?php echo $lang; ?>" class="<?php echo ($currentPage == 'contact') ? 'active' : ''; ?>">
                    <?php echo $txt['contact']; ?>
                </a>
                <a href="cart.php?lang=<?php echo $lang; ?>" class="nav-cart-btn <?php echo ($currentPage == 'cart') ? 'active' : ''; ?>">
                    🛒 <?php echo $txt['cart']; ?> <span class="cart-badge" id="cartCountBadge">0</span>
                </a>

                <!-- Language Switcher -->
                <a href="?lang=<?php echo $txt['lang_switch_target']; ?>" class="lang-switch-btn" title="Change Language">
                    🌐 <?php echo $txt['lang_switch_label']; ?>
                </a>
            </nav>
        </div>
    </header>
    <main class="main-content">