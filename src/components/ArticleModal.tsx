import React from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { Language, ArticleItem, PROFILE } from '../data/siteData';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  lang: Language;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  lang
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 w-full max-w-3xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-700/60 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-sky-600 dark:text-sky-400">
                {article.category[lang]}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date[lang]}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime[lang]}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              {article.title[lang]}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Key Executive Takeaways */}
          <div className="bg-sky-50 dark:bg-sky-950/40 rounded-2xl p-5 border border-sky-100 dark:border-sky-900/60 space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-900 dark:text-sky-300">
              {lang === 'ar' ? 'الخلاصة التنفيذية وأبرز التوصيات:' : 'Key Executive Takeaways:'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-sky-950 dark:text-sky-200">
              {article.takeaways[lang].map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Full Prose */}
          <div className="prose dark:prose-invert max-w-none text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 whitespace-pre-line">
            {article.body[lang]}
          </div>

          {/* Author attribution */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500">
            <div>
              <span>{lang === 'ar' ? 'بقلم: ' : 'Author: '}</span>
              <strong className="text-slate-800 dark:text-slate-200">{PROFILE.name[lang]}</strong>
              <span className="block text-slate-400">{PROFILE.title[lang]}</span>
            </div>
            <a
              href={`https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
                lang === 'ar'
                  ? `مرحباً أستاذ عمار، قرأت مقالك: "${article.title.ar}" وأود مناقشة تفاصيل الاستشارة`
                  : `Hello Ammar, I read your article: "${article.title.en}" and would like to discuss it`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'مناقشة المقال مع الكاتب' : 'Discuss with Author'}</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-700/60 text-right rtl:text-left">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            {lang === 'ar' ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
