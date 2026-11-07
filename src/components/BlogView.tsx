import React from 'react';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { Language, ARTICLES, TRANSLATIONS, ArticleItem } from '../data/siteData';

interface BlogViewProps {
  lang: Language;
  onSelectArticle: (article: ArticleItem) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ lang, onSelectArticle }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          {lang === 'ar' ? 'المدونة والتقارير التنفيذية' : 'Executive Field Notes & Research'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === 'ar' ? 'مقالات التسويق والمبيعات والاستشارات التقنية' : 'Sales Architecture & Operational Insights'}
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {lang === 'ar'
            ? 'خلاصة التجارب الميدانية في إغلاق صفقات الأدوية والتجميل، تسريع وتيرة المبيعات، ومواءمة الإنتاج التجاري بقلم عمار الشيخ.'
            : 'Practical field methodology for closing pharmaceutical accounts, CRM deal acceleration, and production-commercial alignment by Ammar Alsheikh.'}
        </p>
      </div>

      {/* Grid of articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ARTICLES.map((art) => (
          <article
            key={art.id}
            onClick={() => onSelectArticle(art)}
            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-all cursor-pointer group shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-sky-600 dark:text-sky-400">
                  {art.category[lang]}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {art.readTime[lang]}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {art.title[lang]}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                {art.excerpt[lang]}
              </p>

              {/* Quick Key Takeaway Preview */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <strong className="text-slate-700 dark:text-slate-300 block mb-1">
                  {lang === 'ar' ? 'فائدة تنفيذية رئيسية:' : 'Core Key Insight:'}
                </strong>
                <span>{art.takeaways[lang][0]}</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {art.date[lang]}
              </span>

              <span className="font-semibold text-sky-600 dark:text-sky-400 inline-flex items-center gap-1 group-hover:underline">
                <span>{lang === 'ar' ? 'قراءة التحليل كاملاً' : 'Read Full Analysis'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </span>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
