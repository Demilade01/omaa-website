import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

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
      {/* Right: Contact Us Button */}
      <Link to="/contact">
        <Button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">{t('navbar.contactUs')}</Button>
      </Link>
    </nav>
  )
}

export default Navbar
