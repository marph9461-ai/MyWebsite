import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  Cpu,
  ShieldCheck,
  FileText,
  Calculator,
  Lock,
  Search,
  CheckCircle2,
  Clock,
  MessageCircle,
  Filter
} from 'lucide-react';
import { Language, PRODUCTS, TRANSLATIONS, ProductItem, PROFILE } from '../data/siteData';

interface ShopViewProps {
  lang: Language;
  onAddToCart: (product: ProductItem) => void;
  onSelectProduct: (product: ProductItem) => void;
}

const ICONS: Record<string, React.ElementType> = {
  TrendingUp,
  Cpu,
  ShieldCheck,
  FileText,
  Calculator,
  Lock
};

export const ShopView: React.FC<ShopViewProps> = ({
  lang,
  onAddToCart,
  onSelectProduct
}) => {
  const t = TRANSLATIONS[lang];
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'services' | 'consulting' | 'digital'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.catKey === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        q === '' ||
        item.title[lang].toLowerCase().includes(q) ||
        item.desc[lang].toLowerCase().includes(q) ||
        item.category[lang].toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery, lang]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Page Header */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          {lang === 'ar' ? 'المتجر الاستشاري والخدمات التجارية' : 'Commercial Offerings & Advisory Store'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === 'ar' ? 'خدمات مبيعات B2B والاستشارات التقنية' : 'B2B Sales Pipelines & Tech Consultations'}
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {lang === 'ar'
            ? 'احجز استشارات تطوير مسارات مبيعات الشركات B2B، أتمتة الـ CRM، خطط تدشين المستحضرات الدوائية، وحقائب نماذج المبيعات الرقمية مع تنفيذ مباشر من عمار الشيخ.'
            : 'Procure customized commercial B2B sales pipelines, CRM automation audits, pharma launch marketing, and instant digital toolkits directly executed by Ammar Alsheikh.'}
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t.all_offerings} ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setSelectedCategory('services')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'services'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t.it_services}
          </button>
          <button
            onClick={() => setSelectedCategory('consulting')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'consulting'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t.consulting}
          </button>
          <button
            onClick={() => setSelectedCategory('digital')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'digital'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t.digital_guides}
          </button>
        </div>

        {/* Search input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'ar' ? 'بحث في الخدمات والنماذج...' : 'Search services & toolkits...'}
            className="w-full text-xs pl-9 pr-3 rtl:pl-3 rtl:pr-9 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
          <Filter className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {lang === 'ar' ? 'لم يتم العثور على أي نتائج مطابقة.' : 'No matching services or toolkits found.'}
          </p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="text-xs font-medium text-sky-600 hover:underline"
          >
            {lang === 'ar' ? 'إعادة ضبط عوامل التصفية' : 'Reset all filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((prod) => {
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
                    {prod.badge && (
                      <span className="text-[11px] font-semibold text-sky-700 dark:text-sky-300">
                        {prod.badge[lang]}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {prod.category[lang]}
                  </span>

                  <h3
                    onClick={() => onSelectProduct(prod)}
                    className="text-lg font-bold text-slate-900 dark:text-white leading-snug mt-1 cursor-pointer group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors"
                  >
                    {prod.title[lang]}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {prod.desc[lang]}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                      {t.includes_label}
                    </span>
                    {prod.deliverables[lang].slice(0, 2).map((del, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  <div className="flex items-baseline justify-between mb-3">
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

                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="py-2.5 px-3 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-center"
                    >
                      {t.view_details}
                    </button>
                    <button
                      onClick={() => onAddToCart(prod)}
                      className="py-2.5 px-3 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors text-center shadow-sm"
                    >
                      {t.add_to_cart}
                    </button>
                  </div>

                  <a
                    href={`https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
                      lang === 'ar'
                        ? `مرحباً أستاذ عمار الشيخ، أود طلب الخدمة: "${prod.title.ar}" بقيمة $${prod.price}`
                        : `Hello Ammar Alsheikh, I would like to order: "${prod.title.en}" for $${prod.price}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-950/70 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{t.order_whatsapp}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
