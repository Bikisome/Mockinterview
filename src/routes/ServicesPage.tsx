import React, { useState } from 'react';
import { CheckCircle, Users, FileText, Star, ArrowRight, Clock, Award, Target, Zap } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  price: string;
  duration: string;
  features: string[];
  color: string;
  bgColor: string;
  textColor: string;
}

interface Stat {
  number: string;
  label: string;
  icon: React.ComponentType<any>;
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const ServicesPage: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Mock Interview Sessions",
      description: "Practice with industry professionals and get real-time feedback to ace your next interview.",
      icon: Users,
      price: "Starting at $49",
      duration: "45-60 minutes",
      features: [
        "Personalized interview questions",
        "Real-time feedback and scoring",
        "Industry-specific scenarios",
        "Body language analysis",
        "Follow-up improvement tips"
      ],
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Professional Resume Creation",
      description: "Get a stunning, ATS-optimized resume that highlights your strengths and gets you noticed.",
      icon: FileText,
      price: "Starting at $79",
      duration: "2-3 business days",
      features: [
        "ATS-optimized formatting",
        "Industry-specific templates",
        "Keyword optimization",
        "Multiple format options",
        "Unlimited revisions"
      ],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      id: 3,
      title: "Career Consultation",
      description: "Strategic career guidance to help you navigate your professional journey with confidence.",
      icon: Target,
      price: "Starting at $99",
      duration: "60 minutes",
      features: [
        "Career path analysis",
        "Skill gap assessment",
        "Industry insights",
        "Personalized action plan",
        "Goal setting strategies"
      ],
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  const stats: Stat[] = [
    { number: "2,500+", label: "Successful Interviews", icon: Award },
    { number: "95%", label: "Success Rate", icon: Star },
    { number: "1,200+", label: "Resumes Created", icon: FileText },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      text: "The mock interview sessions were incredibly helpful. I felt confident and prepared for my actual interview!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager at Tesla",
      text: "My new resume got me 3x more interview calls. The ATS optimization really works!",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Product Manager at Amazon",
      text: "The career consultation helped me pivot successfully into product management. Highly recommended!",
      rating: 5
    }
  ];

  const handleServiceHover = (serviceId: number): void => {
    setHoveredService(serviceId);
  };

  const handleServiceLeave = (): void => {
    setHoveredService(null);
  };

  const renderStarRating = (rating: number): JSX.Element[] => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Transform Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert-led mock interviews, professional resume creation, and strategic career guidance to accelerate your success
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat: Stat, index: number) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of professional services designed to boost your career prospects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    hoveredService === service.id ? 'ring-4 ring-blue-300' : ''
                  }`}
                  onMouseEnter={() => handleServiceHover(service.id)}
                  onMouseLeave={handleServiceLeave}
                >
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${service.color}`}></div>
                  
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-xl mb-6`}>
                      <IconComponent className={`w-8 h-8 ${service.textColor}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      Choose This Service
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our satisfied clients who landed their dream jobs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {renderStarRating(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of professionals who have transformed their careers with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Zap className="inline-block mr-2 w-5 h-5" />
              Get Started Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 CareerBoost Services. All rights reserved. Your success is our mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;