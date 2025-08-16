import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutSection: React.FC = () => {
  const [teamImageUrl, setTeamImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('story');

  useEffect(() => {
    const fetchTeamImage = async () => {
      try {
        // Fetch a team/construction worker image from Unsplash
        const response = await axios.get('https://source.unsplash.com/random/800x600/?construction-workers,team,hard-hat,industrial-workers');
        setTeamImageUrl(response.request.responseURL);
      } catch (error) {
        console.error('Error fetching team image from Unsplash:', error);
        // Fallback to a default team image
        setTeamImageUrl('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamImage();
  }, []);

  const tabContent = {
    mission: {
      title: "Our Mission",
      content: "To deliver exceptional industrial construction and assembly services that exceed client expectations while maintaining the highest standards of safety, quality, and innovation across all our projects."
    },
    vision: {
      title: "Our Vision",
      content: "To be the leading partner in industrial transformation, pioneering sustainable construction practices and setting new industry standards for excellence, reliability, and technological advancement."
    },
    story: {
      title: "Our Story",
      content: "Trusted since 2013 across 8 countries - Our multinational reach ensures your projects receive consistent expertise and world-class delivery, no matter the location."
    }
  };

  const statistics = [
    { number: "200+", label: "Project Completed" },
    { number: "$10M", label: "Total Revenue" },
    { number: "90%", label: "Success Rate" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Section - Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Transforming Industries with MAA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MAA is a specialized partner in industrial construction, on-site assembly, and rehabilitation services.
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Team Image */}
          <div className="relative">
            {isLoading ? (
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={teamImageUrl}
                  alt="MAA Team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
            )}
          </div>

          {/* Right Column - Company Information */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-black text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {tabContent[tab as keyof typeof tabContent].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[120px]">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {tabContent[activeTab as keyof typeof tabContent].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {tabContent[activeTab as keyof typeof tabContent].content}
              </p>
            </div>

            {/* Statistics - Clean Horizontal Layout */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
