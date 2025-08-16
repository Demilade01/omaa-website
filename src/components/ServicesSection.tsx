import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const [serviceImages, setServiceImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const services = [
    {
      title: t('services.items.structuralSteel.title'),
      description: t('services.items.structuralSteel.description'),
      imageQuery: 'steel-construction,industrial-welding,metal-framework'
    },
    {
      title: t('services.items.reinforcement.title'),
      description: t('services.items.reinforcement.description'),
      imageQuery: 'rebar,concrete-reinforcement,construction-steel'
    },
    {
      title: t('services.items.onSiteAssembly.title'),
      description: t('services.items.onSiteAssembly.description'),
      imageQuery: 'industrial-assembly,construction-site,heavy-machinery'
    },
    {
      title: t('services.items.projectManagement.title'),
      description: t('services.items.projectManagement.description'),
      imageQuery: 'project-management,construction-planning,blueprint'
    },
    {
      title: t('services.items.technicalConsulting.title'),
      description: t('services.items.technicalConsulting.description'),
      imageQuery: 'engineering-consulting,technical-drawing,industrial-design'
    },
    {
      title: t('services.items.qualityAssurance.title'),
      description: t('services.items.qualityAssurance.description'),
      imageQuery: 'quality-control,testing-equipment,industrial-inspection'
    }
  ];

  useEffect(() => {
    const fetchServiceImages = async () => {
      try {
        const imagePromises = services.map(service =>
          axios.get(`https://source.unsplash.com/random/400x300/?${service.imageQuery}`)
        );
        const responses = await Promise.all(imagePromises);
        const urls = responses.map(response => response.request.responseURL);
        setServiceImages(urls);
      } catch (error) {
        console.error('Error fetching service images from Unsplash:', error);
        // Fallback images
        setServiceImages([
          'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop'
        ]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServiceImages();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{t('services.title')}</h2>
          </div>
          <div className="flex items-start">
            <p className="text-xl text-gray-600 leading-relaxed">{t('services.subtitle')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                {isLoading ? (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
                  </div>
                ) : (
                  <img
                    src={serviceImages[index] || 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop'}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-lg p-8 lg:p-12">
          <div className="max-w-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t('services.cta.title')}</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">{t('services.cta.subtitle')}</p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
                <FileText className="mr-2 h-5 w-5" />{t('services.cta.button')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
