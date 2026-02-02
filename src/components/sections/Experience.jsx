import { motion } from 'framer-motion';
import { Card } from '../common';
import { experiences } from '../../data/experience';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

/**
 * Experience Section Component - Simple and Working Version
 */
const Experience = ({ experienceData = experiences }) => {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
    triggerOnce: true
  });

  // Simple animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Helper functions
  function formatDate(dateString) {
    if (dateString === 'Present') return 'Present';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
      });
    } catch (error) {
      return dateString;
    }
  }

  return (
    <section 
      id="experience" 
      className="section-padding bg-gradient-to-br from-gray-900 via-slate-900 to-black relative"
      aria-label="Work Experience"
      ref={sectionRef}
    >
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Work Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey through innovation, impact, and continuous growth 🚀
          </p>
        </motion.div>

        {/* Experience Entries */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative"
            >
              <Card
                className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl p-8"
                hover={true}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {experience.position}
                    </h3>
                    <div className="text-sm text-gray-400">
                      <span className="font-semibold text-cyan-400">
                        {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl md:text-2xl font-bold text-purple-400 mb-2">
                    {experience.company}
                  </h4>
                  {experience.location && (
                    <span className="text-sm text-gray-400">
                      📍 {experience.location}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {experience.description}
                </p>

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mb-6">
                    <h5 className="text-sm font-bold text-cyan-400 mb-3 uppercase tracking-wider">
                      🏆 Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div>
                    <h5 className="text-sm font-bold text-purple-400 mb-3 uppercase tracking-wider">
                      ⚡ Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-700/50 text-cyan-400 border border-cyan-500/30"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <p className="text-xl text-gray-300 mb-6 font-medium">
            Ready to explore my projects? 🚀
          </p>
          
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const nextSection = document.querySelector('#projects') || document.querySelector('#contact');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="mr-3">View My Projects</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;