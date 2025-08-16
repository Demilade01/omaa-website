import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from './ui/button';
import { Eye, ArrowLeft } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [projectImages, setProjectImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    {
      title: "On-site assembly and technical supervision of a refinery extension project",
      description: "The crucial capacity of managing on-site assembly operations requires expert technical direction and visionary leadership. This complex role involves the orchestration of various teams, promoting synergy among engineers, technicians, and safety experts. It demands a forward-thinking mindset to proactively identify and mitigate potential obstacles while implementing industry-leading practices and pioneering solutions to enhance operational efficiency and elevate safety protocols. Our unwavering dedication to excellence ensures meticulous attention to detail, adherence to the highest quality standards and regulatory mandates, and ultimately, the successful achievement of our expansion objectives.",
      imageQuery: "refinery,industrial-plant,construction-site",
      isSpecial: true,
      buttonText: "Back",
      buttonIcon: ArrowLeft,
      gridClass: "lg:col-span-1" // Narrower card
    },
    {
      title: "Design and construction of heavy-duty support systems in desert conditions",
      description: "Expertly engineered support systems built to withstand extreme desert climates, ensuring durability and stability for heavy-duty industrial operations.",
      imageQuery: "desert-construction,metal-framework,industrial-worker",
      isSpecial: false,
      buttonText: "View Details",
      buttonIcon: Eye,
      gridClass: "lg:col-span-2" // Wider card
    },
    {
      title: "Comprehensive Structural Steel Detailing for Large-Scale Industrial Plants",
      description: "Precision detailing services tailored for complex industrial facilities, ensuring seamless fabrication and on-site assembly.",
      imageQuery: "welding,steel-construction,industrial-welding",
      isSpecial: false,
      buttonText: "View Details",
      buttonIcon: Eye,
      gridClass: "lg:col-span-2" // Wider card
    },
    {
      title: "High-Accuracy Reinforcement Detailing for Petrochemical Infrastructure",
      description: "Accurate and code-compliant rebar detailing solutions for high-risk environments, supporting safety and structural performance.",
      imageQuery: "caulking,sealant-application,industrial-maintenance",
      isSpecial: false,
      buttonText: "View Details",
      buttonIcon: Eye,
      gridClass: "lg:col-span-1" // Narrower card
    }
  ];

  useEffect(() => {
    const fetchProjectImages = async () => {
      try {
        const imagePromises = projects.map(project =>
          axios.get(`https://source.unsplash.com/random/600x400/?${project.imageQuery}`)
        );

        const responses = await Promise.all(imagePromises);
        const urls = responses.map(response => response.request.responseURL);
        setProjectImages(urls);
      } catch (error) {
        console.error('Error fetching project images from Unsplash:', error);
        // Fallback images
        const fallbackImages = [
          'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop'
        ];
        setProjectImages(fallbackImages);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectImages();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Featured Projects & Engineering Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore our portfolio of industrial, petrochemical, and infrastructure projects—where precision detailing meets real-world impact.
          </p>
        </div>

        {/* Projects Grid - Asymmetrical Layout */}
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
                  // Special black card - text only
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {project.title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-gray-300">
                      {project.description}
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <IconComponent className="mr-2 h-4 w-4" />
                      {project.buttonText}
                    </Button>
                  </div>
                ) : (
                  // Regular cards - text at top, image at bottom
                  <>
                    <div className="p-8">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">
                        {project.title}
                      </h3>
                      <p className="mb-6 leading-relaxed text-gray-600">
                        {project.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        <IconComponent className="mr-2 h-4 w-4" />
                        {project.buttonText}
                      </Button>
                    </div>
                    <div className="relative h-64 overflow-hidden">
                      {isLoading ? (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
                        </div>
                      ) : (
                        <img
                          src={projectImages[index] || ''}
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
