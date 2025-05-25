
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Network, Target, Calendar, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Personalized Mentorship & Coaching",
      description: "Connect with industry experts and experienced professionals who can guide you through your career journey with tailored advice and support.",
      image: "/placeholder.svg"
    },
    {
      icon: Briefcase,
      title: "Curated Job Opportunities",
      description: "Access exclusive job postings and gig opportunities from verified companies across Africa and beyond, matched to your skills and interests.",
      image: "/placeholder.svg"
    },
    {
      icon: Target,
      title: "Accountability Partner System",
      description: "Find dedicated accountability partners who will help you stay on track with your goals and provide motivation throughout your journey.",
      image: "/placeholder.svg"
    },
    {
      icon: Network,
      title: "Dynamic Collaboration & Networking",
      description: "Build meaningful professional relationships through our community platform, webinars, and networking events designed for African professionals.",
      image: "/placeholder.svg"
    },
    {
      icon: Calendar,
      title: "Video Consultations",
      description: "Book one-on-one video sessions with mentors, attend group webinars, and participate in skill-building workshops from anywhere.",
      image: "/placeholder.svg"
    },
    {
      icon: MessageCircle,
      title: "Community Support",
      description: "Join active discussion groups, access learning resources, and get real-time support from peers who understand your challenges.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Your Success Through
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive services designed to accelerate your career growth and unlock opportunities across Africa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-green-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
