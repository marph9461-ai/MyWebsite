import React from 'react';
import {
  TrendingUp,
  Cpu,
  ShieldCheck,
  FileText,
  Calculator,
  Lock,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { Language, PROFILE, PRODUCTS, ARTICLES, TRANSLATIONS, ProductItem, ArticleItem } from '../data/siteData';

interface HomeViewProps {
  lang: Language;
  setCurrentTab: (tab: string) => void;
  onAddToCart: (product: ProductItem) => void;
  onSelectProduct: (product: ProductItem) => void;
  onSelectArticle: (article: ArticleItem) => void;
}

const ICONS: Record<string, React.ElementType> = {
  TrendingUp,
  Cpu,
  ShieldCheck,
  FileText,
  Calculator,
  Lock
};

export const HomeView: React.FC<HomeViewProps> = ({
  lang,
  setCurrentTab,
  onAddToCart,
  onSelectProduct,
  onSelectArticle
}) => {
  const t = TRANSLATIONS[lang];
  const featuredProducts = PRODUCTS.slice(0, 3);
  const featuredArticles = ARTICLES.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Actions (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed availability line */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-md border border-emerald-200/60 dark:border-emerald-800/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{t.available_badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] text-balance">
              {t.hero_title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {t.hero_lead}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setCurrentTab('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>{t.browse_store}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <button
                onClick={() => {
                  setCurrentTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-[0.98] transition-all flex items-center justify-center"
              >
                {t.view_cv}
              </button>

              <a
                href={`https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
                  lang === 'ar' ? 'مرحباً أستاذ عمار الشيخ، أود التنسيق معك بخصوص مشروع تجاري' : 'Hello Ammar Alsheikh, I would like to discuss a commercial project'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.direct_whatsapp}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Identity Anchor Card (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-md shrink-0">
                  AA
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {PROFILE.name[lang]}
                  </h3>
                  <p className="text-xs font-medium text-sky-600 dark:text-sky-400 mt-1">
                    {PROFILE.title[lang]}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {PROFILE.company[lang]}
                  </p>
                </div>
              </div>

              {/* Quick Details Table */}
              <div className="border-t border-b border-slate-100 dark:border-slate-700/80 py-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {lang === 'ar' ? 'الموقع الجغرافي:' : 'Location:'}
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {lang === 'ar' ? 'دمشق، سوريا' : 'Damascus, Syria'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {lang === 'ar' ? 'المؤهل الأكاديمي:' : 'Education Standing:'}
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {lang === 'ar' ? 'الافتراضية السورية (A-)' : 'Syrian Virtual Univ. (A-)'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {lang === 'ar' ? 'الأمن السيبراني:' : 'Cybersecurity:'}
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    CyberPedia Camp 6
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">
                    {lang === 'ar' ? 'الخبرة الصناعية:' : 'Industrial Lead:'}
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {lang === 'ar' ? 'مشرف إنتاج سابق (لو ماريو)' : 'Ex-Production Supervisor (Lu Mario)'}
                  </span>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => {
                    setCurrentTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{lang === 'ar' ? 'فحص السيرة الذاتية الكاملة والشهادات' : 'Inspect Full Resume & Experience'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. Key Metrics Strip (Tabular Numerals) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 dark:bg-slate-800 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-slate-800 dark:divide-slate-700">
            
            <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left rtl:sm:text-right">
              <span className="block text-3xl sm:text-4xl font-extrabold text-sky-400 font-mono tabular-nums">
                +7
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1 block">
                {t.years_exp}
              </span>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left rtl:sm:text-right">
              <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tabular-nums">
                A-
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1 block">
                {t.academic_grade} (SVU)
              </span>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left rtl:sm:text-right">
              <span className="block text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tabular-nums">
                +250
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1 block">
                {t.hardware_repairs}
              </span>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left rtl:sm:text-right">
              <span className="block text-3xl sm:text-4xl font-extrabold text-indigo-400 font-mono tabular-nums">
                3
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1 block">
                {t.languages_count} (Arabic, English, French)
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Services & Consultations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {t.featured_services}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
              {t.featured_services_sub}
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentTab('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 inline-flex items-center gap-1 shrink-0 self-start sm:self-auto"
          >
            <span>{t.view_all_shop}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((prod) => {
            const Icon = ICONS[prod.iconName] || TrendingUp;
            return (
              <div
                key={prod.id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {prod.category[lang]}
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(prod)}
                    className="text-lg font-bold text-slate-900 dark:text-white leading-snug cursor-pointer group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors"
                  >
                    {prod.title[lang]}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {prod.desc[lang]}
                  </p>

                  {/* Key Deliverables preview */}
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                      {t.includes_label}
                    </span>
                    {prod.deliverables[lang].slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                        ${prod.price}
                      </span>
                      <span className="text-xs text-slate-400 line-through ml-2 rtl:mr-2 font-mono tabular-nums">
                        ${prod.originalPrice}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {prod.delivery[lang]}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="py-2 px-3 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-center"
                    >
                      {t.view_details}
                    </button>
                    <button
                      onClick={() => onAddToCart(prod)}
                      className="py-2 px-3 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors text-center shadow-sm"
                    >
                      {t.add_to_cart}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Latest Articles / Field Notes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {t.latest_articles}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
              {t.latest_articles_sub}
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentTab('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 inline-flex items-center gap-1 shrink-0 self-start sm:self-auto"
          >
            <span>{t.explore_blog}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-all cursor-pointer group shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-medium text-sky-600 dark:text-sky-400">{art.category[lang]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{art.readTime[lang]}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {art.title[lang]}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                  {art.excerpt[lang]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-slate-400">{art.date[lang]}</span>
                <span className="font-semibold text-sky-600 dark:text-sky-400 inline-flex items-center gap-1 group-hover:underline">
                  <span>{lang === 'ar' ? 'قراءة التحليل' : 'Read Note'}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Direct WhatsApp Deal Dispatch Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white p-8 sm:p-12 shadow-sm border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold text-sky-400 tracking-wider uppercase">
              {lang === 'ar' ? 'تنسيق مباشر مع مسؤول المبيعات' : 'Direct Commercial Coordination'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance">
              {lang === 'ar'
                ? 'هل تبحث عن توسيع شبكة توزيع منتجاتك الدوائية أو أتمتة مبيعاتك؟'
                : 'Need to expand pharmaceutical distribution or automate commercial B2B sales?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'يمكنك بدء محادثة مباشرة عبر واتساب مع عمار الشيخ لمناقشة الصفقات، عقود التوريد لسلاسل الصيدليات، أو تهيئة أنظمة الـ CRM.'
                : 'Initiate a direct WhatsApp conversation with Ammar Alsheikh to discuss tenders, pharmacy chain supply agreements, or sales CRM architectures.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href={`https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
                lang === 'ar' ? 'مرحباً أستاذ عمار، أود استشارتك بخصوص مشروع تجاري' : 'Hello Ammar, I would like to consult with you on a commercial sales project'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{lang === 'ar' ? 'محادثة فورية عبر واتساب' : 'Chat via WhatsApp Now'}</span>
            </a>
            <button
              onClick={() => {
                setCurrentTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-white font-semibold text-sm transition-colors text-center"
            >
              {lang === 'ar' ? 'نموذج التواصل والمراسلة' : 'Send Direct Message'}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
