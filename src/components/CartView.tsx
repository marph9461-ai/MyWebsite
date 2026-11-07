import React from 'react';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  MessageCircle,
  Mail,
  ArrowRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { Language, ProductItem, PROFILE, TRANSLATIONS } from '../data/siteData';

export interface CartItem {
  product: ProductItem;
  qty: number;
}

interface CartViewProps {
  lang: Language;
  cart: CartItem[];
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  setCurrentTab: (tab: string) => void;
}

export const CartView: React.FC<CartViewProps> = ({
  lang,
  cart,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  setCurrentTab
}) => {
  const t = TRANSLATIONS[lang];

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const total = subtotal;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message =
      lang === 'ar'
        ? 'مرحباً أستاذ عمار الشيخ! أود تأكيد وحجز الطلب التالي من موقعك الإلكتروني:\n\n'
        : 'Hello Ammar Alsheikh! I would like to confirm and place the following order from your website:\n\n';

    cart.forEach((item, idx) => {
      const title = item.product.title[lang];
      const itemTotal = item.product.price * item.qty;
      message += `${idx + 1}. ${title}\n   ${lang === 'ar' ? 'الكمية' : 'Qty'}: ${item.qty} × $${item.product.price} = $${itemTotal}\n`;
    });

    message += '\n' + (lang === 'ar' ? `المجموع الإجمالي: $${total}` : `Total Due: $${total}`) + '\n';
    message +=
      lang === 'ar'
        ? 'الموقع: دمشق / تنفيذ عن بعد\nيرجى تأكيد الاستلام وتفاصيل بدء العمل.'
        : 'Location: Damascus / Remote Execution\nPlease confirm availability and onboarding steps.';

    const url = `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailCheckout = () => {
    if (cart.length === 0) return;

    let body = `Hello Ammar,\n\nWebsite Order Summary:\n\n`;
    cart.forEach((item, idx) => {
      body += `${idx + 1}. ${item.product.title.en} (Qty: ${item.qty}) - $${item.product.price * item.qty}\n`;
    });
    body += `\nTotal: $${total}\n\nClient Name:\nPhone / WhatsApp:\nNotes:\n`;

    const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      'New Order Request - Ammar Alsheikh'
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          {lang === 'ar' ? 'سلة الخدمات والطلبات' : 'Procurement & Cart'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {t.cart}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {lang === 'ar'
            ? 'راجع الخدمات والاستشارات المختارة، ثم أكد طلبك مباشرة عبر تطبيق واتساب أو عبر البريد الإلكتروني.'
            : 'Review your selected services, pipelines, and toolkits. Finalize directly with Ammar via WhatsApp or Email.'}
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-12 text-center space-y-4 max-w-lg mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mx-auto">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {t.empty_cart}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {t.empty_cart_sub}
          </p>
          <button
            onClick={() => {
              setCurrentTab('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs sm:text-sm shadow-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all inline-flex items-center gap-2"
          >
            <span>{t.browse_store}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cart Items List (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700/60">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {lang === 'ar' ? 'العناصر المحددة' : 'Selected Offerings'} ({cart.length})
              </span>
              <button
                onClick={onClearCart}
                className="text-xs text-rose-600 dark:text-rose-400 font-medium hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.clear_all}</span>
              </button>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
              {cart.map((item) => (
                <div key={item.product.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-sm">
                    <span className="text-[11px] font-semibold text-sky-600 dark:text-sky-400">
                      {item.product.category[lang]}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {item.product.title[lang]}
                    </h3>
                    <div className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      ${item.product.price}{' '}
                      <span className="text-[10px] text-slate-400 font-normal">
                        {lang === 'ar' ? 'للوحدة' : '/ unit'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-1.5 p-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60">
                      <button
                        onClick={() => onUpdateQty(item.product.id, -1)}
                        className="w-7 h-7 flex items-center justify-center rounded text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center font-mono font-bold text-xs text-slate-900 dark:text-white tabular-nums">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.product.id, 1)}
                        className="w-7 h-7 flex items-center justify-center rounded text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="text-right rtl:text-left min-w-[70px]">
                      <span className="text-base font-extrabold text-slate-900 dark:text-white font-mono tabular-nums block">
                        ${item.product.price * item.qty}
                      </span>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Remove"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
              <button
                onClick={() => {
                  setCurrentTab('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1.5"
              >
                <span>{t.continue_shopping}</span>
              </button>
            </div>
          </div>

          {/* Summary Box (5 cols on lg) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-base font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-700/60">
              {lang === 'ar' ? 'ملخص الطلب والحجز' : 'Order Breakdown'}
            </h2>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                <span>{t.subtotal}</span>
                <span className="font-mono font-semibold tabular-nums">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                <span>{t.setup_fee}</span>
                <span className="text-emerald-600 font-semibold">{t.free}</span>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-700/60 pt-3 flex justify-between items-baseline">
                <span className="font-bold text-slate-900 dark:text-white text-base">
                  {t.total_due}
                </span>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Checkout Button */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.confirm_whatsapp}</span>
              </button>

              <button
                onClick={handleEmailCheckout}
                className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{t.order_email}</span>
              </button>
            </div>

            {/* Trust markers */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>{lang === 'ar' ? 'ضمان جودة التنفيذ والسرية' : 'Execution & Confidentiality Guarantee'}</span>
              </div>
              <p className="leading-relaxed">
                {lang === 'ar'
                  ? 'يتم التواصل والتنفيذ مباشرة مع عمار الشيخ، مع اتفاقيات سرية بيانات صفقات وتوريد كاملة.'
                  : 'Direct engagement and execution with Ammar Alsheikh with commercial NDA compliance.'}
              </p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
