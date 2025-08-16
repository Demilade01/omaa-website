import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
  isLanguageOpen: boolean;
  setIsLanguageOpen: (open: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setCurrentLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    setIsLanguageOpen(false);
  };

  const value = {
    currentLanguage,
    changeLanguage,
    isLanguageOpen,
    setIsLanguageOpen,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
