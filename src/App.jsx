import './App.css';
import { Button } from './components/common';
import { Hero } from './components/sections';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-900">
                  Aryan Kapoor
                </h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </a>
                <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Experience
                </a>
                <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
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

          {/* Quick Links Section Placeholder */}
          <section id="quick-links" className="section-padding">
            <div className="container">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Connect With Me
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href="#" className="card p-6 hover:shadow-lg transition-shadow">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-blue-600 text-xl">💼</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                    </div>
                  </a>
                  <a href="#" className="card p-6 hover:shadow-lg transition-shadow">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-gray-600 text-xl">🐙</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">GitHub</h3>
                    </div>
                  </a>
                  <a href="#" className="card p-6 hover:shadow-lg transition-shadow">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-green-600 text-xl">📧</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section Placeholder */}
          <section id="experience" className="section-padding bg-gray-50">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Experience
                </h2>
                <p className="text-lg text-gray-600">
                  My professional journey and key achievements
                </p>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="card p-8 mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>
                      <p className="text-primary-600 font-medium">Tech Company</p>
                    </div>
                    <span className="text-gray-500 text-sm mt-2 md:mt-0">2022 - Present</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Developed and maintained web applications using modern technologies and best practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section Placeholder */}
          <section id="projects" className="section-padding">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Projects
                </h2>
                <p className="text-lg text-gray-600">
                  Some of my recent work and personal projects
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Project One</h3>
                    <p className="text-gray-600 mb-4">
                      A brief description of this amazing project and what it accomplishes.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">React</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Tailwind</span>
                    </div>
                    <div className="flex gap-4">
                      <a href="#" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Live Demo
                      </a>
                      <a href="#" className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white section-padding">
          <div className="container">
            <div className="text-center">
              <p className="text-gray-400">
                © 2024 Aryan Kapoor. Built with React and Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;