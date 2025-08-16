import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* CTA Block with rounded corners */}
        <div className="bg-black rounded-xl py-16 px-8 text-center">
          {/* Main Headline */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Looking for a reliable partner in industrial
            <br />
            assembly and engineering?
          </h2>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 text-lg font-medium"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 text-lg font-medium"
              >
                Request a Proposal
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
