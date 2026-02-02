import './App.css';
import { Hero, QuickLinks, Experience } from './components/sections';

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

          {/* Projects Section Placeholder - Dark Mode */}
          <section id="projects" className="section-padding bg-gray-800">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  Projects
                </h2>
                <p className="text-lg text-gray-300">
                  Some of my recent work and personal projects
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Project One</h3>
                    <p className="text-gray-300 mb-4">
                      A brief description of this amazing project and what it accomplishes.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-gray-600/50 text-cyan-400 text-xs rounded border border-cyan-500/30">React</span>
                      <span className="px-2 py-1 bg-gray-600/50 text-purple-400 text-xs rounded border border-purple-500/30">Tailwind</span>
                    </div>
                    <div className="flex gap-4">
                      <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all">
                        Live Demo
                      </a>
                      <a href="#" className="text-gray-400 hover:text-gray-300 text-sm font-medium transition-colors">
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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