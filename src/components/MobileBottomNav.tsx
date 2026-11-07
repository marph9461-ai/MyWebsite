import React from 'react';
import { Home, User, ShoppingBag, BookOpen, ShoppingCart } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/siteData';

interface MobileBottomNavProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  lang: Language;
  cartCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentTab,
  setCurrentTab,
  lang,
  cartCount
}) => {
  const t = TRANSLATIONS[lang];

  const tabs = [
    { id: 'home', label: t.home, icon: Home },
    { id: 'about', label: t.about.split('&')[0].trim(), icon: User },
    { id: 'shop', label: t.shop.split('&')[0].trim(), icon: ShoppingBag },
    { id: 'blog', label: t.blog.split('&')[0].trim(), icon: BookOpen },
    { id: 'cart', label: t.cart, icon: ShoppingCart, count: cartCount }
  ];

  const handleTabClick = (id: string) => {
    setCurrentTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 pb-safe"
    >
      <div className="grid grid-cols-5 h-16 items-center px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`min-h-[48px] flex flex-col items-center justify-center relative transition-colors ${
                isActive
                  ? 'text-sky-600 dark:text-sky-400 font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                {tab.count !== undefined && tab.count > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-sky-600 text-white font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                    {tab.count}
                  </span>
                )}
              </div>
              <span className="text-[10px] tracking-tight mt-1 truncate max-w-[60px]">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-sky-600 dark:bg-sky-400" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
