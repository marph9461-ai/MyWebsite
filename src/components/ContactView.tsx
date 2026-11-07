import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Phone,
  Briefcase
} from 'lucide-react';
import { Language, PROFILE, TRANSLATIONS } from '../data/siteData';

interface ContactViewProps {
  lang: Language;
}

export const ContactView: React.FC<ContactViewProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'b2b-sales',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', topic: 'b2b-sales', message: '' });
    }, 4000);
  };

  const handleSendViaWhatsApp = () => {
    const text =
      lang === 'ar'
        ? `مرحباً أستاذ عمار الشيخ،\nالاسم: ${formData.name || 'عميل تجاري'}\nالمجال: ${formData.topic}\nالرسالة: ${formData.message || 'أود مناقشة تفاصيل التعاقد'}`
        : `Hello Ammar Alsheikh,\nName: ${formData.name || 'Commercial Client'}\nTopic: ${formData.topic}\nMessage: ${formData.message || 'I would like to discuss business collaboration'}`;

    window.open(`https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          {lang === 'ar' ? 'تواصل وتنسيق مباشر' : 'Get In Direct Touch'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {t.contact}
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {lang === 'ar'
            ? 'هل لديك استفسار تجاري، طلب توريد B2B، أو استشارة في أتمتة المبيعات ونظم التقنية؟ تواصل مباشرة عبر واتساب أو أرسل تفاصيل مشروعك أدناه.'
            : 'Have a commercial sales inquiry, B2B procurement request, or CRM / IT tech consultation? Reach out directly via WhatsApp, email, or send your specifications below.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Direct Contacts List (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${PROFILE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 block font-medium">
                  {lang === 'ar' ? 'مراسلة فورية مباشرة' : 'Direct Instant Messaging'}
                </span>
                <strong className="text-base font-bold text-slate-900 dark:text-white block mt-0.5 truncate">
                  WhatsApp: +963 981092422
                </strong>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1 inline-block">
                  {lang === 'ar' ? 'متواجد للمراسلة السريعة ←' : 'Chat directly on WhatsApp →'}
                </span>
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${PROFILE.email}`}
            className="block p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 shadow-sm transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 block font-medium">
                  {lang === 'ar' ? 'البريد الإلكتروني الأكاديمي والرسمي' : 'Official Academic Email'}
                </span>
                <strong className="text-base font-bold text-slate-900 dark:text-white block mt-0.5 truncate">
                  {PROFILE.email}
                </strong>
                <span className="text-xs text-sky-600 dark:text-sky-400 font-semibold mt-1 inline-block">
                  {lang === 'ar' ? 'إرسال بريد إلكتروني ←' : 'Send an email →'}
                </span>
              </div>
            </div>
          </a>

          {/* Location & Organization Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {PROFILE.location[lang]}
                </h3>
                <span className="text-xs text-slate-500">
                  {PROFILE.company[lang]}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-3">
              {lang === 'ar'
                ? 'متاح للاجتماعات التجارية المباشرة في دمشق والمحافظات السورية، وتقديم الاستشارات عن بعد لكافة الدول العربية وإقليمياً.'
                : 'Available for in-person commercial meetings in Damascus, Syria, and remote consulting worldwide via digital conferences.'}
            </p>
          </div>

        </div>

        {/* Form Column (7 cols on lg) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {lang === 'ar' ? 'تم استلام رسالتك بنجاح!' : 'Message Received Successfully!'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                {t.message_sent}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-700/60">
                {lang === 'ar' ? 'إرسال استفسار أو طلب عرض سعر' : 'Send Project Inquiry'}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {t.your_name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'ar' ? 'مثال: سامر العلي' : 'e.g. John Doe'}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {t.your_email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {t.inquiry_topic}
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 text-slate-800 dark:text-slate-200"
                >
                  <option value="b2b-sales">
                    {lang === 'ar' ? 'استراتيجية مسار مبيعات B2B وتوسيع الموزعين' : 'B2B Sales Pipeline & Territory Strategy'}
                  </option>
                  <option value="crm-automation">
                    {lang === 'ar' ? 'استشارة أتمتة المبيعات ونظم إدارة العملاء (CRM)' : 'Sales CRM Automation & Technology'}
                  </option>
                  <option value="pharma-launch">
                    {lang === 'ar' ? 'تدشين وتسويق المستحضرات الدوائية والتجميلية' : 'Pharma & Cosmetic Product Launch'}
                  </option>
                  <option value="security-audit">
                    {lang === 'ar' ? 'تدقيق البنية التحتية وحماية بيانات الصفقات' : 'Data Security & IT Infrastructure Audit'}
                  </option>
                  <option value="digital-toolkit">
                    {lang === 'ar' ? 'طلب النماذج والحقائب الرقمية وحاسبة التسعير' : 'Digital Sales Playbook & Pricing Calculator'}
                  </option>
                  <option value="employment-advisory">
                    {lang === 'ar' ? 'فرصة عمل / تعاقد استشاري مؤسسي' : 'Executive Role / Corporate Retainer'}
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {t.your_msg} *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    lang === 'ar'
                      ? 'وضح تفاصيل الشركة، حجم الصفقات المتوقع، أو التحديات البيعية والتقنية الحالية...'
                      : 'Describe your company context, expected deal volume, or current sales bottlenecks...'
                  }
                  className="w-full text-xs p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.send_message}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
