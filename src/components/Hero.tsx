import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Eye, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get('https://source.unsplash.com/random/1920x1080/?construction,engineering,architecture,industrial');
        setImageUrl(response.request.responseURL);
      } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
        setImageUrl('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop');
      } finally {
        setIsLoading(false);
      }
    };
    fetchRandomImage();
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div>
      )}

      <div className="relative z-10 text-white px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block">{t('hero.title.line1')}</span>
              <span className="block text-6xl lg:text-8xl">{t('hero.title.line2')}</span>
              <span className="block text-4xl lg:text-6xl font-medium mt-2">{t('hero.title.line3')}</span>
            </h1>
          </div>
          <div className="space-y-8">
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium">
                  <Eye className="mr-2 h-5 w-5" />{t('hero.viewProjects')}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium">
                  <FileText className="mr-2 h-5 w-5" />{t('hero.requestProposal')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
