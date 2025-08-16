import React from 'react';
import { useTranslation } from 'react-i18next';

const Partners: React.FC = () => {
  const { t } = useTranslation();

  const partners = [
    { name: 'Google', logo: 'Google' },
    { name: 'Medium', logo: 'Medium' },
    { name: 'FactSet', logo: 'FactSet' },
    { name: 'Bunge', logo: 'Bunge' },
    { name: 'Celanese', logo: 'Celanese' },
    { name: 'Darden', logo: 'Darden' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{t('partners.title')}</h2>
          <p className="text-gray-600">{t('partners.subtitle')}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 group">
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-medium text-sm">
                  {partner.logo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
