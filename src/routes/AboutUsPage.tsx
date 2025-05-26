import React, { useState } from 'react';
import { Users, Target, Award, Heart, CheckCircle, Star, Zap, TrendingUp, Globe, Shield, ArrowRight, Clock } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  experience: string;
}

interface Value {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
}

interface Achievement {
  number: string;
  label: string;
  description: string;
  icon: any;
}

const AboutUsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('mission');

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Martinez",
      role: "Founder & CEO",
      bio: "Former Google recruiter with 12+ years of experience helping professionals land their dream jobs.",
      expertise: ["Tech Recruiting", "Leadership", "Strategy"],
      experience: "12+ years"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Head of Interview Coaching",
      bio: "Ex-Amazon hiring manager who has conducted 500+ interviews across all industries.",
      expertise: ["Interview Coaching", "Behavioral Prep", "Technical Interviews"],
      experience: "8+ years"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Senior Resume Writer",
      bio: "Professional writer with expertise in ATS optimization and personal branding.",
      expertise: ["Resume Writing", "ATS Optimization", "Personal Branding"],
      experience: "10+ years"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Career Strategy Advisor",
      bio: "Former McKinsey consultant helping professionals navigate career transitions.",
      expertise: ["Career Strategy", "Executive Coaching", "Consulting"],
      experience: "15+ years"
    }
  ];

  const values: Value[] = [
    {
      id: 1,
      title: "Excellence",
      description: "We deliver exceptional quality in every service, ensuring our clients receive the best possible support.",
      icon: Award,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Integrity",
      description: "We build lasting relationships through honest communication and transparent practices.",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Innovation",
      description: "We continuously evolve our methods to stay ahead of industry trends.",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Impact",
      description: "We measure success by the meaningful career transformations we enable.",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements: Achievement[] = [
    {
      number: "5,000+",
      label: "Careers Transformed",
      description: "Professionals who landed their dream jobs",
      icon: Users
    },
    {
      number: "98%",
      label: "Success Rate",
      description: "Client satisfaction and job placement rate",
      icon: Target
    },
    {
      number: "50+",
      label: "Industries Served",
      description: "Across tech, finance, healthcare, and more",
      icon: Globe
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      description: "Based on 2,000+ client reviews",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-24">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Our
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Mission</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We're dedicated to transforming careers and empowering professionals to achieve their dreams through expert guidance and personalized support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                Our Story
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
                Meet The Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To democratize access to career success by providing world-class coaching, 
              personalized guidance, and innovative tools that empower professionals to 
              achieve their full potential.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 text-center">
            <Heart className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Exist</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe everyone deserves to love what they do for a living. Too many talented 
              professionals struggle to showcase their potential. We're here to level the playing 
              field and make career success accessible to all.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                  <div className="text-xl font-semibold text-gray-900 mb-3">{achievement.label}</div>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div key={value.id} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Industry leaders dedicated to your career success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {member.experience}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Journey */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From startup to industry leader
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-lg">
                2019
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Founded with Vision</h3>
              <p className="text-gray-700">Started with a mission to democratize career opportunities and professional growth.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-lg">
                2022
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Recognition</h3>
              <p className="text-gray-700">Named 'Best Career Services Platform' and featured in major publications.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-lg">
                2024
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-700">Serving clients worldwide with AI-powered tools and personalized guidance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of professionals who have accelerated their careers with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Zap className="inline-block mr-2 w-5 h-5" />
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
              Schedule Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 CareerBoost Services. All rights reserved. Empowering careers, one success story at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;