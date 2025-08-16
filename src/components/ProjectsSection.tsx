import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from './ui/button';
import { Eye, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const [projectImages, setProjectImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    {
      title: t('projects.items.refinery.title'),
      description: t('projects.items.refinery.description'),
      imageQuery: "refinery,industrial-plant,construction-site",
      isSpecial: true,
      buttonText: t('projects.items.refinery.button'),
      buttonIcon: ArrowLeft,
      gridClass: "lg:col-span-1"
    },
    {
      title: t('projects.items.desert.title'),
      description: t('projects.items.desert.description'),
      imageQuery: "desert-construction,metal-framework,industrial-worker",
      isSpecial: false,
      buttonText: t('projects.items.desert.button'),
      buttonIcon: Eye,
      gridClass: "lg:col-span-2"
    },
    {
      title: t('projects.items.steel.title'),
      description: t('projects.items.steel.description'),
      imageQuery: "welding,steel-construction,industrial-welding",
      isSpecial: false,
      buttonText: t('projects.items.steel.button'),
      buttonIcon: Eye,
      gridClass: "lg:col-span-2"
    },
    {
      title: t('projects.items.petrochemical.title'),
      description: t('projects.items.petrochemical.description'),
      imageQuery: "caulking,sealant-application,industrial-maintenance",
      isSpecial: false,
      buttonText: t('projects.items.petrochemical.button'),
      buttonIcon: Eye,
      gridClass: "lg:col-span-1"
    }
  ];

  useEffect(() => {
    const fetchProjectImages = async () => {
      try {
        const imagePromises = projects
          .filter(project => !project.isSpecial)
          .map(project =>
            axios.get(`https://source.unsplash.com/random/400x300/?${project.imageQuery}`)
          );
        const responses = await Promise.all(imagePromises);
        const urls = responses.map(response => response.request.responseURL);
        setProjectImages(urls);
      } catch (error) {
        console.error('Error fetching project images from Unsplash:', error);
        setProjectImages([
          'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop'
        ]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjectImages();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{t('projects.title')}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t('projects.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.buttonIcon;
            return (
              <div
                key={index}
                className={`rounded-lg overflow-hidden ${project.gridClass} ${
                  project.isSpecial
                    ? 'bg-black text-white'
                    : 'bg-white border border-gray-100 shadow-sm'
                }`}
              >
                {project.isSpecial ? (
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-white">{project.title}</h3>
                    <p className="mb-6 leading-relaxed text-gray-300">{project.description}</p>
                    <Button variant="secondary" size="sm" className="bg-white text-black hover:bg-gray-100">
                      <IconComponent className="mr-2 h-4 w-4" />{project.buttonText}
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="p-8">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">{project.title}</h3>
                      <p className="mb-6 leading-relaxed text-gray-600">{project.description}</p>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                        <IconComponent className="mr-2 h-4 w-4" />{project.buttonText}
                      </Button>
                    </div>
                    <div className="relative h-64 overflow-hidden">
                      {isLoading ? (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
                        </div>
                      ) : (
                        <img
                          src={projectImages[index - 1] || 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop'}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
