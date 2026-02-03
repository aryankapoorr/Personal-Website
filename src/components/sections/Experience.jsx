import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { experiences } from '../../data/experience';
import { BubbleBackground } from '../common';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

/**
 * Experience Section Component - Scroll-based Expand/Contract Design
 */
const Experience = ({ experienceData = experiences }) => {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
    triggerOnce: true
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
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

  // Get technology color based on category
  const getTechColor = (category) => {
    const colors = {
      framework: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
      language: 'bg-green-500/20 text-green-300 border-green-400/30',
      database: 'bg-slate-500/20 text-slate-300 border-slate-400/30',
      tool: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
      default: 'bg-gray-500/20 text-gray-300 border-gray-400/30'
    };
    return colors[category] || colors.default;
  };

  return (
    <section 
      id="experience" 
      className="relative pt-2 pb-4 sm:pt-3 sm:pb-6 md:pt-4 md:pb-8 overflow-hidden"
      aria-label="Professional Experience"
      ref={sectionRef}
    >
      {/* Enhanced Background with Bubbles */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-teal-900/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Bubble Background */}
      <BubbleBackground 
        sectionId="experience"
        bubbleCount={16}
        colorTheme="teal"
        intensity="medium"
        className="z-0"
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              cardVariants={cardVariants}
              formatDate={formatDate}
              getTechColor={getTechColor}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Separate component for individual experience cards
const ExperienceCard = ({ 
  experience, 
  index, 
  cardVariants, 
  formatDate, 
  getTechColor
}) => {
  const cardRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Simple click handler to toggle expansion
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      className="relative"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="bg-gradient-to-br from-gray-800/90 via-slate-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Always Visible Header - Clickable */}
        <div 
          className="p-4 sm:p-6 cursor-pointer hover:bg-gray-700/10 transition-colors duration-200"
          onClick={toggleExpanded}
        >
          <div className="flex items-start gap-4">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg border border-gray-600/50 flex items-center justify-center overflow-hidden">
                {experience.logo ? (
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded opacity-60"></div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {experience.position}
              </h3>
              <h4 className="text-base sm:text-lg font-semibold text-teal-300 mb-2">
                {experience.company}
              </h4>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1 text-amber-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                </span>
                {experience.location && (
                  <span className="flex items-center gap-1 text-cyan-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {experience.location}
                  </span>
                )}
              </div>
            </div>
            
            {/* Expansion Indicator - Clickable */}
            <motion.button
              className="flex-shrink-0 ml-2 p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation(); // Prevent double-click when clicking the button directly
                toggleExpanded();
              }}
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isExpanded ? "Collapse experience details" : "Expand experience details"}
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Expandable Content */}
        <motion.div
          className="px-4 sm:px-6 pb-4 sm:pb-6"
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ overflow: "hidden" }}
        >
          {/* Content with left margin to align with text above logo */}
          <div className="ml-16 sm:ml-18">
            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {experience.description}
              </p>
            </div>

            {/* Achievements and Technologies Layout */}
            <div className="space-y-4">
              {/* Key Achievements - No Header, More Space */}
              {experience.achievements && experience.achievements.length > 0 && (
                <div>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex}
                        className="flex items-start gap-3 text-gray-300 text-sm"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-teal-400 rounded-full mt-2"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies - Compact Design */}
              {experience.technologies && experience.technologies.length > 0 && (
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-0.5 rounded text-xs font-medium border ${getTechColor(tech.category)}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Gradient Border Effect */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${
            isExpanded 
              ? 'bg-gradient-to-r from-transparent via-blue-500/10 to-transparent'
              : 'bg-transparent'
          }`}
        />
      </div>
    </motion.div>
  );
};

export default Experience;