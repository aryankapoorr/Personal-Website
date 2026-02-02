import './App.css';
import { Hero, Experience, Projects } from './components/sections';
import { personalInfo } from './data/personalInfo';
import { useResponsiveTransitions } from './hooks';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import { motion } from 'framer-motion';
import { scrollFadeIn } from './utils/animations';

function App() {
  const { createResponsiveRef, getResponsiveClasses } = useResponsiveTransitions({
    enableTransitions: true,
    transitionDuration: 300,
    transitionEasing: 'ease-out'
  });

  // Add intersection observer for footer animations
  const [footerRef, isFooterVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px'
  });

  return (
    <div className="App">
      <div className="min-h-screen bg-gray-900" ref={createResponsiveRef()}>
        {/* Mobile-First Responsive Header */}
        <header className={`bg-gray-800/90 backdrop-blur-sm shadow-xl border-b border-gray-700/50 sticky top-0 z-50 ${getResponsiveClasses('layout')}`}>
          <div className="container">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 transition-vh">
              <div className="flex items-center gap-3">
                {/* Profile Picture in Header */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-1 ring-gray-600 hover:ring-cyan-400/50 transition-all duration-300 flex-shrink-0">
                  <img
                    src={personalInfo.headshot.src}
                    alt={personalInfo.headshot.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = personalInfo.headshot.placeholder;
                    }}
                  />
                </div>
                <h1 className={`text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ${getResponsiveClasses('typography')}`}>
                  Aryan Kapoor
                </h1>
              </div>
              
              {/* Mobile Navigation - Hidden by default, shown on larger screens */}
              <nav className="nav-desktop space-x-4 sm:space-x-6 lg:space-x-8">
                <a 
                  href="#about" 
                  className={`text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] ${getResponsiveClasses('typography')}`}
                >
                  About
                </a>
                <a 
                  href="#experience" 
                  className={`text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] ${getResponsiveClasses('typography')}`}
                >
                  Experience
                </a>
                <a 
                  href="#projects" 
                  className={`text-sm sm:text-base text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.5)] ${getResponsiveClasses('typography')}`}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className={`text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] ${getResponsiveClasses('typography')}`}
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Menu Button - Shown on small screens */}
              <button 
                className={`nav-mobile p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md ${getResponsiveClasses('spacing')}`}
                aria-label="Open mobile menu"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-layout" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content with Mobile-First Responsive Design */}
        <main className={`relative ${getResponsiveClasses('layout')}`}>
          {/* Hero Section */}
          <Hero onCTAClick={(cta) => console.log('CTA clicked:', cta)} />

          {/* Experience Section */}
          <Experience />

          {/* Projects Section */}
          <Projects />
        </main>

        {/* Mobile-First Responsive Footer */}
        <motion.footer 
          className={`bg-black text-white section-padding border-t border-gray-800 ${getResponsiveClasses('spacing')}`}
          ref={footerRef}
          variants={scrollFadeIn}
          initial="hidden"
          animate={isFooterVisible ? "visible" : "hidden"}
        >
          <div className="container">
            <div className="text-center">
              <p className={`text-sm sm:text-base text-gray-400 leading-relaxed ${getResponsiveClasses('typography')}`}>
                © 2024 Aryan Kapoor. Built with React and Tailwind CSS.
                <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text transition-responsive">
                  ✨ Crafted with passion
                </span>
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;