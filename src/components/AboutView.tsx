import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Shield,
  MessageCircle,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  Award,
  Download,
  Languages
} from 'lucide-react';
import {
  Language,
  PROFILE,
  EXPERIENCES,
  EDUCATION,
  SKILLS_CATEGORIES,
  TRANSLATIONS
} from '../data/siteData';

interface AboutViewProps {
  lang: Language;
  onOpenExport: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ lang, onOpenExport }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      
      {/* Header Profile Section */}
      <section className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-10 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-700/60">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-md shrink-0">
              AA
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                {lang === 'ar' ? 'السيرة الذاتية المهنية' : 'Official Curriculum Vitae'}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                {PROFILE.name[lang]}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {PROFILE.title[lang]}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
                lang === 'ar' ? 'مرحباً أستاذ عمار، راجعت سيرتك الذاتية وأود مناقشة فرصة عمل أو شراكة' : 'Hello Ammar, I reviewed your CV and would like to discuss an opportunity'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all flex-1 sm:flex-initial"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.direct_whatsapp}</span>
            </a>
            <a
              href={`mailto:${PROFILE.email}?subject=Regarding%20Ammar%20Alsheikh%20CV`}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors flex-1 sm:flex-initial"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === 'ar' ? 'مراسلة عبر الإيميل' : 'Email Ammar'}</span>
            </a>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="pt-6 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {lang === 'ar' ? 'نبذة تنفيذية' : 'Executive Overview'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {PROFILE.headline[lang]}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs">
              <span className="text-slate-400 block">{lang === 'ar' ? 'الجهة الحالية:' : 'Current Role:'}</span>
              <strong className="text-slate-800 dark:text-slate-200 block mt-0.5 truncate">{PROFILE.company[lang]}</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs">
              <span className="text-slate-400 block">{lang === 'ar' ? 'الموقع الجغرافي:' : 'Location:'}</span>
              <strong className="text-slate-800 dark:text-slate-200 block mt-0.5">{PROFILE.location[lang]}</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs">
              <span className="text-slate-400 block">{lang === 'ar' ? 'المؤهل الأكاديمي:' : 'Education:'}</span>
              <strong className="text-slate-800 dark:text-slate-200 block mt-0.5">{lang === 'ar' ? 'الافتراضية السورية (A-)' : 'SVU Graduate (A-)'}</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs">
              <span className="text-slate-400 block">{lang === 'ar' ? 'الأمن السيبراني:' : 'Cyber Defense:'}</span>
              <strong className="text-slate-800 dark:text-slate-200 block mt-0.5">CyberPedia Camp 6</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Career Objectives Card */}
      <section className="bg-sky-50 dark:bg-sky-950/40 rounded-2xl border border-sky-100 dark:border-sky-900/60 p-6 sm:p-8">
        <h3 className="text-base sm:text-lg font-bold text-sky-900 dark:text-sky-200 mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <span>{lang === 'ar' ? 'الأهداف المهنية الاستراتيجية' : 'Core Strategic Career Objectives'}</span>
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-sky-950 dark:text-sky-300">
          <li className="flex items-start gap-2 bg-white/80 dark:bg-slate-800/80 p-4 rounded-xl border border-sky-100 dark:border-sky-800/60">
            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <span>
              {lang === 'ar'
                ? 'قيادة وتوسيع مسارات مبيعات الشركات B2B وتطوير شبكات التوزيع الدوائية والتجميلية.'
                : 'Leading and scaling commercial B2B sales pipelines and pharmacy distributor partnerships.'}
            </span>
          </li>
          <li className="flex items-start gap-2 bg-white/80 dark:bg-slate-800/80 p-4 rounded-xl border border-sky-100 dark:border-sky-800/60">
            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <span>
              {lang === 'ar'
                ? 'تطبيق استشارات نظم الأتمتة وCRM لرفع سرعة المتابعة ومضاعفة سرعة إغلاق الصفقات.'
                : 'Implementing CRM automation and tech consulting to accelerate inbound deal velocity.'}
            </span>
          </li>
          <li className="flex items-start gap-2 bg-white/80 dark:bg-slate-800/80 p-4 rounded-xl border border-sky-100 dark:border-sky-800/60">
            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <span>
              {lang === 'ar'
                ? 'مواءمة طاقة خطوط الإنتاج والعمليات الصناعية مع متطلبات السوق والصفقات التجارية.'
                : 'Bridging industrial manufacturing floor operations with commercial sales delivery promises.'}
            </span>
          </li>
        </ul>
      </section>

      {/* Practical Work Experience Timeline */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            <span>{lang === 'ar' ? 'الخبرات المهنية والعملية' : 'Practical Work Experience & Track Record'}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {lang === 'ar'
              ? 'تسلسل مهني تصاعدي يجمع بين مبيعات B2B، إدارة العمليات الصناعية، والتقنية.'
              : 'Progressive leadership spanning commercial sales, industrial operations, and IT systems.'}
          </p>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm space-y-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-4">
                <div>
                  <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                    {exp.company[lang]}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role[lang]}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium">
                    {exp.period[lang]}
                  </span>
                  <span>·</span>
                  <span>{exp.location[lang]}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.summary[lang]}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {lang === 'ar' ? 'أبرز الإنجازات والمسؤوليات:' : 'Key Achievements & Responsibilities:'}
                </span>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {exp.highlights[lang].map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-600 dark:text-sky-400 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.contact && (
                <div className="text-[11px] text-slate-400 pt-1">
                  <span>{lang === 'ar' ? 'جهة التحقق / جهة الاتصال: ' : 'Contact verification: '}</span>
                  <span className="font-mono">{exp.contact}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            <span>{lang === 'ar' ? 'المؤهلات العلمية والشهادات' : 'Education & Certifications'}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-sky-600 dark:text-sky-400">{edu.institution[lang]}</span>
                <span className="font-mono">{edu.period}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {edu.degree[lang]}
              </h3>
              <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {edu.status[lang]}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700/60 pt-3">
                <strong>{lang === 'ar' ? 'المواد والمحاور: ' : 'Key Disciplines: '}</strong>
                {edu.skills[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <Shield className="w-6 h-6 text-sky-600 dark:text-sky-400" />
          <span>{lang === 'ar' ? 'المصفوفة التخصصية والمهارات' : 'Core Capabilities & Skill Matrix'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm space-y-4"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700/60 pb-3">
                {cat.title[lang]}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name[lang]}
                      </span>
                      <span className="font-mono text-slate-400 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-sky-600 dark:bg-sky-400 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Languages className="w-5 h-5 text-sky-600" />
          <span>{lang === 'ar' ? 'اللغات المتقنة' : 'Languages Mastered'}</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
            <strong className="text-slate-900 dark:text-white block text-sm">
              {lang === 'ar' ? 'العربية' : 'Arabic'}
            </strong>
            <span className="text-slate-500">{lang === 'ar' ? 'اللغة الأم (Native)' : 'Native Language'}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
            <strong className="text-slate-900 dark:text-white block text-sm">
              {lang === 'ar' ? 'الإنجليزية' : 'English'}
            </strong>
            <span className="text-slate-500">{lang === 'ar' ? 'مستوى مهني متقدم (Professional)' : 'Professional Working Proficiency'}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
            <strong className="text-slate-900 dark:text-white block text-sm">
              {lang === 'ar' ? 'الفرنسية' : 'French'}
            </strong>
            <span className="text-slate-500">{lang === 'ar' ? 'مستوى عملي جيد (Working)' : 'Working Proficiency'}</span>
          </div>
        </div>
      </section>

    </div>
  );
};
