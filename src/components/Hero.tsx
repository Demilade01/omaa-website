import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Eye, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        // Using a free Unsplash API endpoint that doesn't require authentication
        const response = await axios.get('https://source.unsplash.com/random/1920x1080/?construction,engineering,architecture,industrial');
        setImageUrl(response.request.responseURL);
      } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
        // Fallback to a default image
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
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-white px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main headline */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block">Engineering</span>
              <span className="block text-6xl lg:text-8xl">Strength.</span>
              <span className="block text-4xl lg:text-6xl font-medium mt-2">Assembling the Future</span>
            </h1>
          </div>

          {/* Right side - Subtitle and CTAs */}
          <div className="space-y-8">
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              Delivering industrial and petrochemical solutions across Europe and Africa since 2013.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View Projects
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Request a Proposal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for better text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
