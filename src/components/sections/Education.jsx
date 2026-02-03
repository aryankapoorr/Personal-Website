import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/education';
import { useResponsiveTransitions } from '../../hooks';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { FaGraduationCap } from 'react-icons/fa';
import utdLogo from '../../assets/utd.png';

/**
 * Compact Education Section Component
 * Brief display of educational background
 */
const Education = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-5%'
  });

  const { getResponsiveClasses } = useResponsiveTransitions({
    enableTransitions: true,
    transitionDuration: 300
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="education" 
      className={`py-0 pb-5 bg-gray-850 ${getResponsiveClasses('layout')}`}
      ref={sectionRef}
    >
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto px-0.5"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Education Cards - Horizontal Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            variants={itemVariants}
          >
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                className="bg-gray-900/50 rounded-lg p-4 sm:p-5 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 mx-0.5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  {/* Logo */}
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1 flex-shrink-0">
                    <img 
                      src={utdLogo} 
                      alt="UT Dallas" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                      {edu.degree.replace('Master of Science in ', 'MS ').replace('Bachelor of Science in ', 'BS ')}
                    </h3>
                    <p className="text-sm text-gray-300 mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{edu.period}</span>
                      <span>{edu.achievements}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;