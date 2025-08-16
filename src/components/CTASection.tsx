import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CTASection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="bg-black rounded-xl py-16 px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {t('cta.title')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 text-lg font-medium"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t('cta.contactUs')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 text-lg font-medium"
              >
                {t('cta.requestProposal')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
