
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Calendar } from "lucide-react";

const ExpertsSection = () => {
  const experts = [
    {
      name: "Dr. Amina Hassan",
      role: "Tech Industry Leader",
      location: "Lagos, Nigeria",
      rating: 4.9,
      sessions: 234,
      expertise: ["Software Engineering", "Leadership", "Startups"],
      image: "/placeholder.svg",
      price: "$50/hour"
    },
    {
      name: "Michael Ochieng",
      role: "Financial Consultant",
      location: "Nairobi, Kenya",
      rating: 4.8,
      sessions: 189,
      expertise: ["Finance", "Investment", "Business Strategy"],
      image: "/placeholder.svg",
      price: "$45/hour"
    },
    {
      name: "Sarah Mensah",
      role: "Marketing Director",
      location: "Accra, Ghana",
      rating: 5.0,
      sessions: 156,
      expertise: ["Digital Marketing", "Brand Strategy", "Growth"],
      image: "/placeholder.svg",
      price: "$40/hour"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Become An E-Africa
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-green-500 mb-6">
            Industry Expert
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with verified industry professionals who have helped thousands achieve their career goals. Book personalized sessions and accelerate your growth.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-lg">
            Become a Mentor
          </Button>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experts.map((expert, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <CardContent className="p-6">
                {/* Expert Image */}
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Expert Info */}
                <div className="text-center mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{expert.name}</h4>
                  <p className="text-green-500 font-medium mb-2">{expert.role}</p>
                  
                  {/* Location & Rating */}
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{expert.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span>{expert.rating}</span>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {expert.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {expert.sessions} sessions
                    </span>
                    <span className="font-semibold text-gray-900">{expert.price}</span>
                  </div>
                </div>

                {/* Book Button */}
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Book Session
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt={`Expert ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
