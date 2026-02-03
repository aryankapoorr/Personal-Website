import './App.css';
import { Hero, Experience, Education, Projects, Awards } from './components/sections';
import { BubbleBackground } from './components/common';
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
    <div className="App" id="top">
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
                <h1 className={`text-lg sm:text-xl md:text-2xl font-semibold text-white ${getResponsiveClasses('typography')}`}>
                  Aryan Kapoor
                </h1>
              </div>
              
              {/* Desktop Navigation - Text only (hidden on mobile, shown on md+) */}
              <nav className="hidden md:flex space-x-4 sm:space-x-6 lg:space-x-8">
                <a 
                  href="#top" 
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
                  href="#awards" 
                  className={`text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] ${getResponsiveClasses('typography')}`}
                >
                  Awards
                </a>
              </nav>

              {/* Mobile Navigation - Icons only (shown on mobile, hidden on md+) */}
              <nav className="flex md:hidden items-center space-x-4">
                <a 
                  href="#top" 
                  className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:bg-gray-800/50 rounded-lg"
                  aria-label="About section"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="#experience" 
                  className="p-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:bg-gray-800/50 rounded-lg"
                  aria-label="Experience section"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="#projects" 
                  className="p-2 text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:bg-gray-800/50 rounded-lg"
                  aria-label="Projects section"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </a>
                <a 
                  href="#awards" 
                  className="p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:bg-gray-800/50 rounded-lg"
                  aria-label="Awards section"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content with Mobile-First Responsive Design */}
        <main className={`relative ${getResponsiveClasses('layout')}`}>
          {/* Combined Hero-Education Section with Shared Background */}
          <section className="relative bg-gray-900 overflow-hidden">
            {/* Shared Bubble Background */}
            <BubbleBackground 
              sectionId="hero-education"
              bubbleCount={18}
              colorTheme="blue"
              intensity="medium"
              className="z-0"
            />
            
            {/* Hero Section Content */}
            <div className="relative z-10">
              <Hero onCTAClick={(cta) => console.log('CTA clicked:', cta)} />
            </div>

            {/* Education Section Content */}
            <div className="relative z-10">
              <Education />
            </div>
          </section>

          {/* Experience Section */}
          <Experience />

          {/* Projects Section */}
          <Projects />

          {/* Awards Section */}
          <Awards />
        </main>

        {/* Compact Footer */}
        <motion.footer 
          className={`bg-black text-white py-6 border-t border-gray-800 ${getResponsiveClasses('spacing')}`}
          ref={footerRef}
          variants={scrollFadeIn}
          initial="hidden"
          animate={isFooterVisible ? "visible" : "hidden"}
        >
          <div className="container">
            <div className="text-center">
              <p className={`text-xs sm:text-sm text-gray-400 ${getResponsiveClasses('typography')}`}>
                © 2026 Aryan Kapoor
                <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0 text-transparent bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text transition-responsive">
                  ✨ Made with heart
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