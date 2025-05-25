
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Fatima Al-Rashid",
      role: "Software Developer",
      location: "Cairo, Egypt",
      image: "/placeholder.svg",
      rating: 5,
      text: "E-Africa connected me with an amazing mentor who helped me transition from marketing to tech. Within 6 months, I landed my dream job at a leading startup."
    },
    {
      name: "James Mukiri",
      role: "Business Analyst",
      location: "Kampala, Uganda",
      image: "/placeholder.svg",
      rating: 5,
      text: "The networking opportunities here are incredible. I've built lasting professional relationships and found several freelance projects through the platform."
    },
    {
      name: "Aisha Diallo",
      role: "Marketing Manager",
      location: "Dakar, Senegal",
      image: "/placeholder.svg",
      rating: 5,
      text: "Thanks to my accountability partner and mentor sessions, I successfully launched my consulting business. The support system here is unmatched."
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Community Is
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-green-500">
            Saying
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-green-500" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-green-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
