import React from 'react';
import {
  X,
  CheckCircle2,
  Clock,
  Star,
  MessageCircle,
  ShoppingCart,
  ShieldCheck
} from 'lucide-react';
import { Language, ProductItem, PROFILE, TRANSLATIONS } from '../data/siteData';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  lang: Language;
  onAddToCart: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  lang,
  onAddToCart
}) => {
  if (!product) return null;
  const t = TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-700/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs">
              <span className="font-semibold text-sky-600 dark:text-sky-400">
                {product.category[lang]}
              </span>
              {product.badge && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-slate-500">
                    {product.badge[lang]}
                  </span>
                </>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              {product.title[lang]}
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

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {lang === 'ar' ? 'نبذة عن الخدمة والمخرجات' : 'Scope & Service Context'}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {product.desc[lang]}
            </p>
          </div>

          {/* Deliverables List */}
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{t.includes_label}</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {product.deliverables[lang].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Turnaround & Ratings */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <span className="text-slate-400 block mb-0.5">{t.turnaround}</span>
              <strong className="text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-sm">
                <Clock className="w-4 h-4 text-sky-500" />
                {product.delivery[lang]}
              </strong>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <span className="text-slate-400 block mb-0.5">{lang === 'ar' ? 'تقييم المستفيدين:' : 'Client Rating:'}</span>
              <strong className="text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-sm">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                {product.rating}
              </strong>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            <span className="text-xs text-slate-400 block">{lang === 'ar' ? 'السعر النهائي:' : 'Total Price:'}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                ${product.price}
              </span>
              <span className="text-xs text-slate-400 line-through font-mono tabular-nums">
                ${product.originalPrice}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
                lang === 'ar'
                  ? `مرحباً أستاذ عمار، أود طلب الخدمة مباشرة: "${product.title.ar}" ($${product.price})`
                  : `Hello Ammar, I would like to directly order: "${product.title.en}" ($${product.price})`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.order_whatsapp}</span>
            </a>

            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm whitespace-nowrap"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{t.add_to_cart}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
