import './App.css';
import { Hero, QuickLinks, Experience, Projects } from './components/sections';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-900">
        {/* Dark Mode Header */}
        <header className="bg-gray-800/90 backdrop-blur-sm shadow-xl border-b border-gray-700/50">
          <div className="container">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Aryan Kapoor
                </h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                  About
                </a>
                <a href="#experience" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
                  Experience
                </a>
                <a href="#projects" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]">
                  Projects
                </a>
                <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero onCTAClick={(cta) => console.log('CTA clicked:', cta)} />

          {/* Quick Links Section */}
          <QuickLinks />

          {/* Experience Section */}
          <Experience />

          {/* Projects Section */}
          <Projects />
        </main>

        {/* Dark Mode Footer */}
        <footer className="bg-black text-white section-padding border-t border-gray-800">
          <div className="container">
            <div className="text-center">
              <p className="text-gray-400">
                © 2024 Aryan Kapoor. Built with React and Tailwind CSS.
                <span className="ml-2 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                  ✨ Crafted with passion
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;