import React from 'react';
import { ArrowUpRight, MessageCircle, Mail, MapPin } from 'lucide-react';
import { Language, PROFILE, TRANSLATIONS } from '../data/siteData';

interface FooterProps {
  lang: Language;
  setLang: (lang: Language) => void;
  setCurrentTab: (tab: string) => void;
  onOpenExport: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  setLang,
  setCurrentTab,
  onOpenExport
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm mt-auto pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                AA
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {PROFILE.name[lang]}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {PROFILE.headline[lang]}
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${PROFILE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +963 981092422</span>
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate">{PROFILE.email}</span>
              </a>
              <span className="inline-flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>{PROFILE.location[lang]}</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t.quick_nav}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => { setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  {t.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  {t.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  {t.shop}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab('blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  {t.blog}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  {t.contact}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenExport}
                  className="text-sky-600 dark:text-sky-400 font-medium inline-flex items-center gap-1 hover:underline"
                >
                  <span>{t.export_html_btn}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Specialties */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t.specialties}
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              {lang === 'ar' ? (
                <>
                  <li>• إدارة مبيعات الشركات B2B وعقود التوزيع</li>
                  <li>• استشارات أتمتة المبيعات ونظم CRM</li>
                  <li>• خطط تدشين وتسويق المستحضرات الدوائية</li>
                  <li>• تدقيق وحماية بيانات الصفقات التجارية</li>
                  <li>• مواءمة طاقة خطوط الإنتاج مع المبيعات</li>
                </>
              ) : (
                <>
                  <li>• Commercial B2B Sales & Distribution Tenders</li>
                  <li>• Sales CRM Automation & Pipeline Velocity</li>
                  <li>• Pharma & Cosmetic Launch Marketing</li>
                  <li>• Commercial Data Hardening & IT Audit</li>
                  <li>• Manufacturing Shift & Sales Alignment</li>
                </>
              )}
            </ul>
          </div>

          {/* Col 4: Hosting & Tech Note */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {lang === 'ar' ? 'التوافق والاستضافة' : 'Architecture & Hosting'}
            </h4>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300">
                Responsive HTML &amp; CSS
              </span>
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {lang === 'ar'
                  ? 'تم تحويل وتطوير هذا المشروع ليعمل بتوافق كامل مع شاشات الهواتف المحمولة والحواسيب مع ميزة تصدير كود HTML و CSS استاتيكي خالص.'
                  : 'Engineered for responsive mobile touch ergonomics and desktop multi-column screens, with clean HTML & CSS static export ready for zero-database deployment.'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {PROFILE.name[lang]}. {t.all_rights}
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang('en')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors ${
                lang === 'en' ? 'font-bold text-sky-600 dark:text-sky-400' : ''
              }`}
            >
              English
            </button>
            <span>·</span>
            <button
              onClick={() => setLang('ar')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors ${
                lang === 'ar' ? 'font-bold text-sky-600 dark:text-sky-400' : ''
              }`}
            >
              العربية
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
