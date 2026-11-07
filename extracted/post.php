<?php
require_once 'includes/data.php';

$id = isset($_GET['id']) ? $_GET['id'] : '';
$found = null;
foreach ($articles as $a) {
    if ($a['id'] === $id) {
        $found = $a;
        break;
    }
}
if (!$found) {
    header("Location: blog.php?lang=" . $lang);
    exit;
}

$pageTitle = $found['title'] . " - " . $profile['name'];
require_once 'includes/header.php';
?>

<section class="article-detail-header">
    <div class="container max-w-prose">
        <div class="breadcrumb">
            <a href="index.php?lang=<?php echo $lang; ?>"><?php echo $txt['home']; ?></a> &gt; 
            <a href="blog.php?lang=<?php echo $lang; ?>"><?php echo $txt['blog']; ?></a> &gt; 
            <span><?php echo htmlspecialchars($found['category']); ?></span>
        </div>
        <span class="category-pill"><?php echo htmlspecialchars($found['category']); ?></span>
        <h1 class="article-headline"><?php echo htmlspecialchars($found['title']); ?></h1>
        <div class="article-author-strip">
            <div class="author-avatar">AA</div>
            <div>
                <strong><?php echo htmlspecialchars($profile['name']); ?></strong>
                <p class="text-muted"><?php echo htmlspecialchars($found['date']); ?> &bull; <?php echo htmlspecialchars($found['read_time']); ?></p>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container max-w-prose">
        <div class="featured-article-img">
            <img src="<?php echo htmlspecialchars($found['image']); ?>" alt="<?php echo htmlspecialchars($found['title']); ?>">
        </div>

        <div class="article-content-typography">
            <p class="lead-paragraph"><?php echo htmlspecialchars($found['excerpt']); ?></p>
            <hr class="my-4">
            <p><?php echo nl2br(htmlspecialchars($found['body'])); ?></p>
        </div>

        <!-- Author Box -->
        <div class="author-bio-card mt-5">
            <div class="author-avatar-lg">AA</div>
            <div>
                <h3><?php echo ($lang === 'ar') ? 'بقلم عمار الشيخ' : 'Written by Ammar Alsheikh'; ?></h3>
                <p><?php echo htmlspecialchars($profile['headline']); ?></p>
                <div class="mt-2">
                    <a href="about.php?lang=<?php echo $lang; ?>" class="btn btn-sm btn-outline"><?php echo $txt['view_cv']; ?></a>
                    <a href="shop.php?lang=<?php echo $lang; ?>" class="btn btn-sm btn-primary"><?php echo $txt['browse_store']; ?></a>
                </div>
            </div>
        </div>

        <!-- Back to Blog -->
        <div class="mt-5 text-center">
            <a href="blog.php?lang=<?php echo $lang; ?>" class="btn btn-secondary">&larr; <?php echo ($lang === 'ar') ? 'العودة لجميع المقالات' : 'Back to All Articles'; ?></a>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>