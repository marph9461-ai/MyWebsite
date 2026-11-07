import React from 'react';
import { ShoppingCart, Globe, Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { Language, PROFILE, TRANSLATIONS } from '../data/siteData';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  cartCount: number;
  onOpenExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
  cartCount,
  onOpenExport
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const t = TRANSLATIONS[lang];

  const navLinks = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'shop', label: t.shop },
    { id: 'blog', label: t.blog },
    { id: 'contact', label: t.contact }
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    const nextLang: Language = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 sm:gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left rtl:text-right group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
                AA
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-tight whitespace-nowrap">
                  {PROFILE.name[lang]}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap hidden sm:block">
                  {PROFILE.title[lang].split('•')[0].trim()}
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions & Quick Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>{t.lang_switch_label}</span>
            </button>

            {/* Static HTML Export Button */}
            <button
              onClick={onOpenExport}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors whitespace-nowrap"
              title="Export Static HTML & CSS"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>HTML & CSS</span>
            </button>

            {/* Cart Trigger Button */}
            <button
              onClick={() => handleNavClick('cart')}
              className={`relative flex items-center justify-center p-2 rounded-lg transition-colors ${
                currentTab === 'cart'
                  ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={t.cart}
              aria-label={t.cart}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-sky-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-slate-900 animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Action CTA */}
            <a
              href={`https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
                lang === 'ar' ? 'مرحباً أستاذ عمار، أود الاستفسار عن خدماتك التجارية' : 'Hello Ammar, I would like to inquire about your B2B sales services'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left rtl:text-right px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    currentTab === link.id
                      ? 'bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => {
                  onOpenExport();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left rtl:text-right px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-sky-600" />
                  {t.export_html_btn}
                </span>
                <span className="text-xs text-slate-400">Zip / HTML</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
