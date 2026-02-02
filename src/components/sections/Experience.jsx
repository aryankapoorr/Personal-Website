import { motion } from 'framer-motion';
import { Card } from '../common';
import { experiences } from '../../data/experience';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { scrollStaggerContainer, scrollSlideUp, scrollFadeIn } from '../../utils/animations';

/**
 * Experience Section Component - Simple and Working Version
 */
const Experience = ({ experienceData = experiences }) => {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
    triggerOnce: true
  });

  // Enhanced animation variants using scroll-specific animations
  const containerVariants = scrollStaggerContainer;
  const itemVariants = scrollSlideUp;
  const headerVariants = scrollFadeIn;

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
      className="pt-4 pb-12 sm:pt-6 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative"
      aria-label="Work Experience"
      ref={sectionRef}
    >
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4 sm:px-6 lg:px-0"
          variants={headerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2 className="text-responsive-2xl font-bold bg-gradient-to-r from-blue-500 via-teal-500 to-slate-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Work Experience
          </h2>
          <p className="text-responsive-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey through innovation, impact, and continuous growth 🚀
          </p>
        </motion.div>

        {/* Experience Entries */}
        <motion.div
          className="spacing-responsive-lg px-4 sm:px-6 lg:px-0"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {experienceData.map((experience) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative"
            >
              <Card
                className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl p-4 sm:p-6 md:p-8"
                hover={true}
              >
                {/* Header */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent leading-tight">
                      {experience.position}
                    </h3>
                    <div className="text-xs sm:text-sm text-gray-400">
                      <span className="font-semibold text-cyan-400">
                        {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400 mb-2">
                    {experience.company}
                  </h4>
                  {experience.location && (
                    <span className="text-xs sm:text-sm text-gray-400">
                      📍 {experience.location}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                  {experience.description}
                </p>

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mb-4 sm:mb-6">
                    <h5 className="text-xs sm:text-sm font-bold text-cyan-400 mb-2 sm:mb-3 uppercase tracking-wider">
                      🏆 Key Achievements
                    </h5>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start gap-2 sm:gap-3 text-gray-300"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full mt-1.5 sm:mt-2" />
                          <span className="leading-relaxed text-sm sm:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-purple-400 mb-2 sm:mb-3 uppercase tracking-wider">
                      ⚡ Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-700/50 text-cyan-400 border border-cyan-500/30"
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
          className="text-center mt-12 sm:mt-16 px-4 sm:px-6 lg:px-0"
          variants={headerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 font-medium">
            Ready to explore my projects? 🚀
          </p>
          
          <motion.button
            className="inline-flex items-center touch-target-lg touch-spacing-sm bg-gradient-to-r from-blue-600 via-teal-600 to-slate-700 text-white font-bold rounded-xl sm:rounded-2xl shadow-2xl text-sm sm:text-base touch-manipulation touch-feedback-subtle"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const nextSection = document.querySelector('#projects') || document.querySelector('#contact');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="mr-2 sm:mr-3">View My Projects</span>
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5" 
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