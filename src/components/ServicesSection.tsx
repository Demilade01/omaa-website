import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [serviceImages, setServiceImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const services = [
    {
      title: "Concession",
      description: "Administrative and legal project setup for industrial works.",
      imageQuery: "business-meeting,contract,legal-documents"
    },
    {
      title: "Project Design",
      description: "Tailored design and engineering for metalwork installations.",
      imageQuery: "architectural-blueprint,engineering-design,technical-drawing"
    },
    {
      title: "Worksite Preparation",
      description: "Groundworks, logistics, and site readiness services.",
      imageQuery: "construction-site,excavation,site-preparation"
    },
    {
      title: "Site Supervision",
      description: "Full technical oversight to ensure quality and safety.",
      imageQuery: "construction-supervisor,site-inspection,quality-control"
    },
    {
      title: "On-site Assembly",
      description: "Skilled, efficient, and certified metal structure assembly.",
      imageQuery: "industrial-assembly,metal-structure,construction-workers"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing and quality control procedures.",
      imageQuery: "quality-testing,inspection,industrial-quality"
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
        const fallbackImages = [
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop'
        ];
        setServiceImages(fallbackImages);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServiceImages();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Comprehensive Industrial Services by MAA
            </h2>
          </div>
          <div className="flex items-start">
            <p className="text-xl text-gray-600 leading-relaxed">
              From concept to construction—we deliver expert detailing, engineering, and on-site solutions tailored to industrial and infrastructure projects.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden">
                {isLoading ? (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
                  </div>
                ) : (
                  <img
                    src={serviceImages[index] || ''}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Block */}
        <div className="bg-gray-900 rounded-lg p-8 lg:p-12">
          <div className="max-w-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Request a Proposal to get the best services
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Fast, reliable care, 24/7. Our expert team is here to handle your urgent health needs, anytime.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-medium"
              >
                <FileText className="mr-2 h-5 w-5" />
                Request a Proposal
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
