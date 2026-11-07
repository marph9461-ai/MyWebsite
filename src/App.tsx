import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ShopView } from './components/ShopView';
import { BlogView } from './components/BlogView';
import { CartView, CartItem } from './components/CartView';
import { ContactView } from './components/ContactView';
import { ProductModal } from './components/ProductModal';
import { ArticleModal } from './components/ArticleModal';
import { StaticExportModal } from './components/StaticExportModal';
import { Language, ProductItem, ArticleItem, TRANSLATIONS } from './data/siteData';

export default function App() {
  const [lang, setLang] = useState<Language>('ar'); // Default to Arabic as Ammar's primary audience, with instant EN toggle
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ammar_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync document direction and language attribute
  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    if (lang === 'ar') {
      document.body.classList.add('lang-ar');
      document.body.classList.remove('lang-en');
    } else {
      document.body.classList.add('lang-en');
      document.body.classList.remove('lang-ar');
    }
  }, [lang]);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ammar_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart:', e);
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });

    const msg =
      lang === 'ar'
        ? `تمت إضافة "${product.title.ar}" إلى السلة!`
        : `Added "${product.title.en}" to your cart!`;
    showToast(msg);
  };

  const handleUpdateQty = (productId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.qty + delta;
            return nextQty > 0 ? { ...item, qty: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Responsive Top Bar */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        lang={lang}
        setLang={setLang}
        cartCount={totalCartCount}
        onOpenExport={() => setIsExportModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 md:pb-0">
        {currentTab === 'home' && (
          <HomeView
            lang={lang}
            setCurrentTab={setCurrentTab}
            onAddToCart={handleAddToCart}
            onSelectProduct={setSelectedProduct}
            onSelectArticle={setSelectedArticle}
          />
        )}

        {currentTab === 'about' && (
          <AboutView
            lang={lang}
            onOpenExport={() => setIsExportModalOpen(true)}
          />
        )}

        {currentTab === 'shop' && (
          <ShopView
            lang={lang}
            onAddToCart={handleAddToCart}
            onSelectProduct={setSelectedProduct}
          />
        )}

        {currentTab === 'blog' && (
          <BlogView
            lang={lang}
            onSelectArticle={setSelectedArticle}
          />
        )}

        {currentTab === 'cart' && (
          <CartView
            lang={lang}
            cart={cart}
            onUpdateQty={handleUpdateQty}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView lang={lang} />
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        setLang={setLang}
        setCurrentTab={setCurrentTab}
        onOpenExport={() => setIsExportModalOpen(true)}
      />

      {/* Mobile-First Fixed Bottom Navigation (Thumb ergonomics) */}
      <MobileBottomNav
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        lang={lang}
        cartCount={totalCartCount}
      />

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        lang={lang}
        onAddToCart={handleAddToCart}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        lang={lang}
      />

      <StaticExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        lang={lang}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg border border-slate-700 dark:border-slate-200 animate-in fade-in slide-in-from-bottom-3 duration-200 pointer-events-none">
          {toastMessage}
        </div>
      )}

    </div>
  );
}
