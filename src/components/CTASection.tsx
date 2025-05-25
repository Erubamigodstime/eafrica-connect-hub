
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-500 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready? Start On Our Mobile Or Desktop Session To
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-green-100 mb-6">
              Schedule Your Career Opportunities, Discover Your Skills,
            </h3>
            <h4 className="text-xl md:text-2xl text-green-100 mb-8">
              Connect With And Reach Industry Experts Available
            </h4>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Register Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                <Smartphone className="mr-2" size={20} />
                Get Mobile App
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="w-64 h-96 bg-white rounded-3xl shadow-2xl p-4 relative">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">E</span>
                    </div>
                    <div className="space-y-2">
                      <div className="w-32 h-3 bg-gray-300 rounded mx-auto"></div>
                      <div className="w-24 h-3 bg-gray-300 rounded mx-auto"></div>
                      <div className="w-28 h-8 bg-green-500 rounded mx-auto mt-4"></div>
                    </div>
                  </div>
                </div>
                
                {/* Phone Details */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
