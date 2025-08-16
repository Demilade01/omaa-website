import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';

const Navbar = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, isLanguageOpen, setIsLanguageOpen } = useLanguage();

  const languages = [
    { code: 'en', name: t('languages.english') },
    { code: 'pt', name: t('languages.portuguese') }
  ];

  const getCurrentLanguageName = () => {
    return languages.find(lang => lang.code === currentLanguage)?.name || 'English';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm py-2 px-8 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        {/* Placeholder logo (replace with your logo asset) */}
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-lg text-gray-700">M</div>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-xl">MAA</span>
          <span className="text-xs text-gray-500">Meta Architecture</span>
        </div>
      </div>

      {/* Center: Nav Links */}
      <div className="flex gap-8">
        <Link to="/" className="text-gray-700 hover:text-black font-medium">{t('navbar.home')}</Link>
        <Link to="/about" className="text-gray-700 hover:text-black font-medium">{t('navbar.aboutUs')}</Link>
        <Link to="/projects" className="text-gray-700 hover:text-black font-medium">{t('navbar.ourProjects')}</Link>
        <Link to="/services" className="text-gray-700 hover:text-black font-medium">{t('navbar.services')}</Link>
      </div>

      {/* Right: Language Selector and Contact Button */}
      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center gap-2 text-gray-700 hover:text-black font-medium transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm">{getCurrentLanguageName()}</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLanguageOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[120px] border border-gray-200">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
                    currentLanguage === language.code ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-700'
                  }`}
                >
                  {language.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Contact Us Button */}
        <Link to="/contact">
          <Button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">{t('navbar.contactUs')}</Button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
