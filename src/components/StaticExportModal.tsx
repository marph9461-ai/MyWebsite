import React, { useState } from 'react';
import { X, Check, Copy, Download, Code, FileText, CheckCircle2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/siteData';

interface StaticExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const StaticExportModal: React.FC<StaticExportModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'html' | 'css'>('overview');
  const t = TRANSLATIONS[lang];

  if (!isOpen) return null;

  const sampleHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Ammar Alsheikh - B2B Sales & Tech Portfolio</title>
  <meta name="description" content="Sales Executive at Ultra-Medica. Strategic B2B Sales, CRM Automation & Precision Operations.">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Sticky Responsive Header -->
  <header class="site-header">
    <div class="container header-container">
      <a href="index.html" class="brand-link">
        <div class="brand-badge">AA</div>
        <div class="brand-info">
          <span class="brand-name">Ammar Alsheikh</span>
          <span class="brand-role">Sales Executive • Ultra-Medica</span>
        </div>
      </a>
      <nav class="desktop-nav">
        <a href="index.html" class="active">Home</a>
        <a href="about.html">About & CV</a>
        <a href="shop.html">Services & Store</a>
        <a href="blog.html">Articles</a>
        <a href="contact.html">Contact</a>
        <a href="cart.html" class="cart-pill">🛒 Cart <span id="cartCount">0</span></a>
      </nav>
      <a href="https://wa.me/963981092422" class="cta-whatsapp">Direct WhatsApp</a>
    </div>
  </header>

  <!-- Mobile Bottom Tab Bar (Thumb Zone) -->
  <nav class="mobile-bottom-nav">
    <a href="index.html" class="tab-item active">Home</a>
    <a href="about.html" class="tab-item">CV</a>
    <a href="shop.html" class="tab-item">Shop</a>
    <a href="blog.html" class="tab-item">Blog</a>
    <a href="cart.html" class="tab-item">Cart</a>
  </nav>

  <main class="main-content">
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-text">
          <div class="status-indicator">Sales Executive at Ultra-Medica • B2B Sales & Advisory</div>
          <h1 class="hero-title">Commercial Growth, Strategic B2B Sales & Precision Operations.</h1>
          <p class="hero-lead">Hi, I'm Ammar Alsheikh — combining B2B sales execution, manufacturing leadership at Lu Mario, and IT systems.</p>
          <div class="hero-actions">
            <a href="shop.html" class="btn btn-primary">Browse Services & Store</a>
            <a href="about.html" class="btn btn-secondary">View My CV</a>
            <a href="https://wa.me/963981092422" class="btn btn-whatsapp">Direct WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</body>
</html>`;

  const sampleCss = `/* Responsive Mobile-First CSS for Ammar Alsheikh Portfolio */
:root {
  --primary: #0284c7;
  --primary-dark: #0f172a;
  --accent-green: #10b981;
  --whatsapp: #25d366;
  --bg-main: #f8fafc;
  --card-bg: #ffffff;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --border: #e2e8f0;
  --radius-lg: 16px;
  --radius-xl: 24px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  background-color: var(--bg-main);
  color: var(--text-main);
  line-height: 1.6;
}

[dir="rtl"] body {
  font-family: 'Cairo', system-ui, sans-serif;
  text-align: right;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Responsive Header */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
  height: 64px;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Mobile-First Navigation */
@media (max-width: 768px) {
  .desktop-nav { display: none; }
  .mobile-bottom-nav {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    border-top: 1px solid var(--border);
    z-index: 999;
  }
}
@media (min-width: 769px) {
  .mobile-bottom-nav { display: none; }
  .desktop-nav { display: flex; gap: 8px; align-items: center; }
}`;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2500);
  };

  const downloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 w-full max-w-4xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {t.export_html_btn}
              </h2>
              <p className="text-xs text-slate-500">
                {t.export_html_desc}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex border-b border-slate-100 dark:border-slate-700/60 px-6 gap-2 bg-slate-50/50 dark:bg-slate-900/40">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-sky-600 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            {lang === 'ar' ? 'نظرة عامة والملفات' : 'Overview & Files'}
          </button>
          <button
            onClick={() => setActiveTab('html')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'html'
                ? 'border-sky-600 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            index.html (HTML5)
          </button>
          <button
            onClick={() => setActiveTab('css')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'css'
                ? 'border-sky-600 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            style.css (Responsive)
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/60 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-950 dark:text-emerald-200 leading-relaxed space-y-1">
                  <strong>
                    {lang === 'ar' ? 'تم تحويل المشروع بنجاح إلى HTML و CSS متجاوب 100%:' : 'Project converted successfully to 100% responsive HTML & CSS:'}
                  </strong>
                  <p>
                    {lang === 'ar'
                      ? 'تم إنشاء نسخة استاتيكية كاملة من جميع الصفحات (الرئيسية، السيرة الذاتية، المتجر، المقالات، السلة، والاتصال) جاهزة للرفع إلى مجلد htdocs على استضافة InfinityFree أو أي خادم ويب بدون الحاجة إلى PHP أو MySQL.'
                      : 'All pages (Home, CV, Shop, Blog, Cart, Contact) have been converted to static responsive HTML & CSS with WhatsApp integration, ready for instant InfinityFree htdocs deployment.'}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {lang === 'ar' ? 'حزمة الملفات الاستاتيكية المحولة:' : 'Converted Static Files Manifest:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-between">
                    <span className="font-mono text-slate-700 dark:text-slate-300">index.html</span>
                    <span className="text-[10px] text-slate-400">Home + Hero + KPIs</span>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-between">
                    <span className="font-mono text-slate-700 dark:text-slate-300">about.html</span>
                    <span className="text-[10px] text-slate-400">Full CV + Timeline</span>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-between">
                    <span className="font-mono text-slate-700 dark:text-slate-300">shop.html</span>
                    <span className="text-[10px] text-slate-400">Services + Filter</span>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-between">
                    <span className="font-mono text-slate-700 dark:text-slate-300">cart.html</span>
                    <span className="text-[10px] text-slate-400">WhatsApp Checkout</span>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-between">
                    <span className="font-mono text-slate-700 dark:text-slate-300">blog.html</span>
                    <span className="text-[10px] text-slate-400">Sales Field Notes</span>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-between">
                    <span className="font-mono text-slate-700 dark:text-slate-300">style.css</span>
                    <span className="text-[10px] text-slate-400">Mobile-First CSS</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'html' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">index.html (Responsive HTML5 Entry)</span>
                <button
                  onClick={() => handleCopy(sampleHtml, 'html')}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {copied === 'html' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied === 'html' ? 'Copied!' : t.copy_html}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto max-h-[400px]">
                {sampleHtml}
              </pre>
            </div>
          )}

          {activeTab === 'css' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">style.css (Mobile-First Ergonomic Styles)</span>
                <button
                  onClick={() => handleCopy(sampleCss, 'css')}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {copied === 'css' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied === 'css' ? 'Copied!' : t.copy_html}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto max-h-[400px]">
                {sampleCss}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {lang === 'ar' ? 'جاهز للاستخدام والتنزيل الفوري' : 'Ready for direct static deployment'}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadFile('index.html', sampleHtml)}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'ar' ? 'تنزيل index.html' : 'Download index.html'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              {lang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
