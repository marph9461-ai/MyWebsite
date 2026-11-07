<?php
require_once 'includes/data.php';
$pageTitle = ($lang === 'ar') ? ("المدونة والمقالات - " . $profile['name']) : ("Marketing, Sales & Tech Blog - " . $profile['name']);
require_once 'includes/header.php';
?>

<section class="page-header">
    <div class="container">
        <span class="section-eyebrow"><?php echo ($lang === 'ar') ? 'رؤى تجارية واستشارات' : 'Field Knowledge &amp; Commercial Insights'; ?></span>
        <h1><?php echo $txt['latest_articles']; ?></h1>
        <p class="lead-text"><?php echo $txt['latest_articles_sub']; ?></p>
    </div>
</section>

<section class="section">
    <div class="container">
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