import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const [teamImageUrl, setTeamImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('story');

  useEffect(() => {
    const fetchTeamImage = async () => {
      try {
        const response = await axios.get('https://source.unsplash.com/random/800x600/?construction-workers,team,hard-hat,industrial-workers');
        setTeamImageUrl(response.request.responseURL);
      } catch (error) {
        console.error('Error fetching team image from Unsplash:', error);
        setTeamImageUrl('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop');
      } finally {
        setIsLoading(false);
      }
    };
    fetchTeamImage();
  }, []);

  const tabContent = {
    story: {
      title: t('about.story.title'),
      content: t('about.story.content')
    },
    mission: {
      title: t('about.mission.title'),
      content: t('about.mission.content')
    },
    vision: {
      title: t('about.vision.title'),
      content: t('about.vision.content')
    }
  };

  const statistics = [
    { number: "200+", label: t('about.stats.projects') },
    { number: "$10M", label: t('about.stats.revenue') },
    { number: "90%", label: t('about.stats.successRate') },
    { number: "4.9", label: t('about.stats.rating') }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('about.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            {isLoading ? (
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
              </div>
            ) : (
              <img
                src={teamImageUrl}
                alt="MAA Team"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            )}
          </div>
          <div className="space-y-8">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-white text-gray-800 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {t(`about.tabs.${tab}`)}
                </button>
              ))}
            </div>
            <div className="min-h-[120px]">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{tabContent[activeTab as keyof typeof tabContent].title}</h3>
              <p className="text-gray-600 leading-relaxed">{tabContent[activeTab as keyof typeof tabContent].content}</p>
            </div>
            {/* Statistics - Clean Horizontal Layout */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
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
