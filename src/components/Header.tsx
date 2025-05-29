import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/clerk-react"
import { Container } from "@/components/Container"
import { NavLink } from "react-router-dom"
import { LogoContainer } from "./LogoContainer"
import { NavigationRoutes } from "./NavigationRoutes"
import { ProfileContainer } from "./ProfileContainer"
import { ToggleContainer } from "./ToggleContainer"
import { Sparkles, Zap } from "lucide-react"

const Header = () => {
  const { userId } = useAuth();

  return (
    <header className={cn(
      "w-full backdrop-blur-xl bg-white/80 border-b border-white/20 duration-300 transition-all ease-out sticky top-0 z-50",
      "shadow-sm hover:shadow-lg hover:bg-white/90"
    )}>
      {/* Gradient border effect */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <Container>
        <div className="flex items-center gap-4 w-full py-4 relative">
          {/* Floating background particles */}
          <div className="absolute top-0 left-20 w-32 h-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-sm rounded-full"></div>
          <div className="absolute bottom-0 right-40 w-24 h-1 bg-gradient-to-r from-pink-400/20 to-orange-400/20 blur-sm rounded-full"></div>
          
          {/* Logo with enhanced styling */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative">
              <LogoContainer />
            </div>
          </div>

          {/* Enhanced Navigation */}
          <nav className="hidden md:flex items-center gap-2 relative">
            <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm border border-white/30 shadow-sm">
              <NavigationRoutes />
              
              {userId && (
                <NavLink
                  to={"/generate"}
                  className={({ isActive }) =>
                    cn(
                      "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group overflow-hidden",
                      "text-gray-600 hover:text-white",
                      isActive 
                        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform scale-105" 
                        : "hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-md hover:transform hover:scale-105"
                    )
                  }
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Take An Interview
                    {userId && <Sparkles className="w-3 h-3 opacity-70" />}
                  </span>
                  
                  {/* Animated background for active state */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </NavLink>
              )}
            </div>
          </nav>

          {/* Right side controls with enhanced styling */}
          <div className="ml-auto flex items-center gap-4">
            {/* Profile Container with enhanced styling */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/50 backdrop-blur-sm rounded-full p-1 border border-white/30 shadow-sm hover:shadow-md transition-all duration-300">
                <ProfileContainer />
              </div>
            </div>

            {/* Toggle Container with enhanced styling */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/50 backdrop-blur-sm rounded-lg p-1 border border-white/30 shadow-sm hover:shadow-md transition-all duration-300">
                <ToggleContainer />
              </div>
            </div>
          </div>

          {/* Mobile menu indicator (optional enhancement) */}
          <div className="md:hidden ml-2">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </Container>

      {/* Subtle glow effect on scroll */}
      <style jsx>{`
        header:hover {
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 2s infinite;
        }
      `}</style>
    </header>
  )
}

export default Header