import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, Linkedin, Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = ['English', 'Portuguese'];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left Side - Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Hexagon className="w-5 h-5 text-gray-900" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">MAA</span>
              <span className="text-sm text-gray-400">Meta Architecture</span>
            </div>
          </div>

          {/* Middle - Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              <span>{selectedLanguage}</span>
              <ChevronUp className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLanguageOpen && (
              <div className="absolute top-full left-0 mt-2 bg-gray-800 rounded-lg shadow-lg py-2 min-w-[120px]">
                {languages.map((language) => (
                  <button
                    key={language}
                    onClick={() => {
                      setSelectedLanguage(language);
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-700 transition-colors ${
                      selectedLanguage === language ? 'bg-gray-700 text-white' : 'text-gray-300'
                    }`}
                  >
                    {language}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Navigation Links */}
          <nav className="flex flex-wrap gap-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About us
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
              Our Projects
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">
              Blogs
            </Link>
          </nav>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="border-gray-700" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left Side - Copyright */}
          <p className="text-gray-400 text-sm">
            © 2025 All rights reserved.
          </p>

          {/* Right Side - Social Media */}
          <a
            href="https://linkedin.com/company/maa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
