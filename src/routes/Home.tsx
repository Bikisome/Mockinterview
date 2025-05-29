import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/MarqueImg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <Container>
        <div className="my-8 relative">
          {/* Floating particles */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-float"></div>
          <div className="absolute top-20 -left-5 w-16 h-16 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full animate-float-delayed"></div>
          
          <div className="inline-flex items-center px-6 py-2 mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🚀 Freshly Launched - Join the Revolution!
            </span>
          </div>

          <h2 className="text-3xl text-center md:text-left md:text-6xl relative">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent font-extrabold md:text-8xl drop-shadow-2xl">
              AI Superpower
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl -z-10 rounded-lg"></div>
            <span className="block text-gray-600 font-extrabold mt-2 text-shadow">
              - A better way to
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              improve your interview chances and skills
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
            🎯 Boost your interview skills and increase your success rate with
            AI-driven insights. Discover a smarter way to prepare, practice, and
            stand out from the crowd.
          </p>
        </div>

        <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-12">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-8 py-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
                ⚡ Ready
                <span className="block text-xl text-gray-600 font-semibold mt-1">
                  AI Powered & Live
                </span>
              </p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-8 py-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50">
              <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent text-center">
                ∞ Smart
                <span className="block text-xl text-gray-600 font-semibold mt-1">
                  Unlimited Practice
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced image section */}
        <div className="w-full mt-8 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 h-[420px] drop-shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <img
            src="/assets/img/hero.jpg"
            alt="Interview Copilot Interface"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute top-6 left-6 px-6 py-3 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold tracking-wide">Interviews Copilot©</span>
            </div>
          </div>

          <div className="hidden md:block absolute w-96 bottom-6 right-6 p-6 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <h2 className="text-white font-bold text-xl">Interview Coach</h2>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                  ))}
                  <span className="text-green-300 text-sm ml-2">Active</span>
                </div>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              🎯 Ready to transform your interview performance? Our cutting-edge AI coach 
              provides personalized feedback and practice scenarios tailored just for you.
            </p>

            <Link to="/generate">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-0">
                <span className="flex items-center justify-center gap-2">
                  Start Practicing <Sparkles className="w-5 h-5" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Enhanced marquee section */}
      <div className="w-full my-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent"></div>
        <div className="relative py-8">
          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Trusted Integrations</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <Marquee pauseOnHover speed={40} className="py-4">
            <MarqueImg img="/assets/img/logo/firebase.png" />
            <MarqueImg img="/assets/img/logo/meet.png" />
            <MarqueImg img="/assets/img/logo/zoom.png" />
            <MarqueImg img="/assets/img/logo/firebase.png" />
            <MarqueImg img="/assets/img/logo/microsoft.png" />
            <MarqueImg img="/assets/img/logo/meet.png" />
            <MarqueImg img="/assets/img/logo/tailwindcss.png" />
            <MarqueImg img="/assets/img/logo/microsoft.png" />
          </Marquee>
        </div>
      </div>

      <Container className="py-12 space-y-12">
        <div className="text-center relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <h2 className="tracking-wide text-2xl md:text-3xl text-gray-800 font-bold max-w-4xl mx-auto leading-relaxed">
            ✨ Unleash your potential with personalized AI insights and targeted
            interview practice designed for success.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 group">
          <div className="col-span-1 md:col-span-3 relative overflow-hidden rounded-3xl group-hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="/assets/img/office.jpg"
              alt="Modern Office Environment"
              className="w-full max-h-96 rounded-3xl object-cover shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <p className="text-center text-gray-600 text-lg leading-relaxed max-w-md">
                🚀 Transform the way you prepare, gain confidence, and boost your
                chances of landing your dream job. Let AI be your secret weapon in
                today's competitive job market.
              </p>

              <Link to={"/generate"} className="w-full">
                <Button className="w-4/5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-lg border-0">
                  <span className="flex items-center justify-center gap-3">
                    Generate Magic <Sparkles className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
      `}</style>
    </div>
  );
};

export default HomePage;