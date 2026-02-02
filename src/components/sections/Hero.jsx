import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, LoadingPlaceholder } from '../common';
import { personalInfo } from '../../data/personalInfo';
import { quickLinks } from '../../data/quickLinks';
import { fadeIn, slideUp, stagger } from '../../utils/animations';
import { useResponsiveTransitions } from '../../hooks';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaGlobe, FaFileDownload, FaMedium, FaStackOverflow } from 'react-icons/fa';

/**
 * Compact Hero Section Component
 * Displays a condensed professional introduction with integrated social links
 * Designed to blend seamlessly with the rest of the website
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onCTAClick - Handler for call-to-action button clicks
 */
const Hero = ({ onCTAClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  // Add intersection observer for scroll-triggered animations
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: false,
    rootMargin: '-10%'
  });

  const { getResponsiveClasses, getResponsiveContainerStyles } = useResponsiveTransitions({
    enableTransitions: true,
    transitionDuration: 300
  });

  // Icon mapping for social links
  const iconMap = {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaTwitter,
    FaGlobe,
    FaFileDownload,
    FaMedium,
    FaStackOverflow
  };

  // Color mapping for different link types (matching QuickLinks section)
  const colorMap = {
    linkedin: 'text-blue-600 bg-blue-100/20 hover:bg-blue-100/30 border-blue-400/30 hover:border-blue-400/50',
    github: 'text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 border-gray-600/50 hover:border-gray-500/50',
    email: 'text-green-400 bg-green-100/20 hover:bg-green-100/30 border-green-400/30 hover:border-green-400/50',
    resume: 'text-red-400 bg-red-100/20 hover:bg-red-100/30 border-red-400/30 hover:border-red-400/50'
  };

  // Get professional and contact links
  const professionalLinks = quickLinks.filter(link => 
    ['linkedin', 'github', 'email', 'resume'].includes(link.id)
  );

  // Simulate content loading delay (reduced for compact design)
  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 400);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(loadingTimer);
    };
  }, []);
  // Enhanced animation variants for compact hero content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const loadingVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  // Handle link clicks
  const handleLinkClick = (link) => {
    if (link.id === 'resume') {
      // Open PDF in new tab for resume
      window.open(link.url, '_blank', 'noopener,noreferrer');
    } else if (link.external) {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    } else if (link.url.startsWith('mailto:')) {
      window.location.href = link.url;
    }
  };

  return (
    <section 
      id="hero" 
      className={`pt-8 pb-2 sm:pt-10 sm:pb-3 lg:pt-10 lg:pb-3 bg-gray-900 ${getResponsiveClasses('layout')}`}
      style={getResponsiveContainerStyles()}
      aria-label="Hero section"
      ref={sectionRef}
    >
      <div className="container">
        <AnimatePresence mode="wait">
          {isLoading ? (
            // Compact Loading State
            <motion.div
              key="loading"
              className={`max-w-4xl mx-auto ${getResponsiveClasses('spacing')}`}
              variants={loadingVariants}
              initial="initial"
              exit="exit"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                {/* Content Loading */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Profile Picture Loading */}
                    <LoadingPlaceholder 
                      type="image" 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1">
                      <LoadingPlaceholder 
                        type="text" 
                        lines={1}
                        className="mb-2 max-w-xs"
                      />
                      <LoadingPlaceholder 
                        type="text" 
                        lines={1}
                        className="mb-4 max-w-sm"
                      />
                    </div>
                  </div>
                  <LoadingPlaceholder 
                    type="text" 
                    lines={2}
                    className="mb-6 max-w-2xl"
                  />
                  <div className="flex gap-4">
                    <LoadingPlaceholder type="button" className="w-24" />
                    <LoadingPlaceholder type="button" className="w-24" />
                    <LoadingPlaceholder type="button" className="w-24" />
                    <LoadingPlaceholder type="button" className="w-24" />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            // Compact Main Content
            <motion.div
              key="content"
              className={`max-w-4xl mx-auto ${getResponsiveClasses('spacing')}`}
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                {/* Main Content - now takes full width */}
                <div className="flex-1">
                  {/* Profile Picture and Name/Title */}
                  <motion.div className="flex items-center gap-4 mb-4" variants={itemVariants}>
                    {/* Small Profile Picture */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-gray-700 hover:ring-cyan-400/50 transition-all duration-300">
                        <img
                          src={personalInfo.headshot.src}
                          alt={personalInfo.headshot.alt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = personalInfo.headshot.placeholder;
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Name and Title */}
                    <div className="flex-1 min-w-0">
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: contentLoaded ? 1 : 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        >
                          {personalInfo.name}
                        </motion.span>
                      </h1>
                      <h2 className="text-lg sm:text-xl font-medium bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: contentLoaded ? 1 : 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {personalInfo.title}
                        </motion.span>
                      </h2>
                    </div>
                  </motion.div>

                  {/* Summary with integrated links */}
                  <motion.div className="mb-6" variants={itemVariants}>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: contentLoaded ? 1 : 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {personalInfo.summary}
                      </motion.span>
                    </p>
                    
                    {/* Integrated Social Links */}
                    <motion.div 
                      className="flex items-center gap-4 flex-wrap"
                      variants={itemVariants}
                    >
                      <span className="text-sm text-gray-400 font-medium"></span>
                      {professionalLinks.map((link, index) => {
                        const IconComponent = iconMap[link.icon];
                        const colorClasses = colorMap[link.id] || 'text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 border-gray-600/50 hover:border-gray-500/50';
                        return (
                          <motion.button
                            key={link.id}
                            variants={linkVariants}
                            onClick={() => handleLinkClick(link)}
                            className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-all duration-200 group border ${colorClasses}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`${link.label} - ${
                              link.external ? 'Opens in new tab' : 
                              link.url.startsWith('mailto:') ? 'Send email' :
                              link.id === 'resume' ? 'Open resume in new tab' : 'Contact'
                            }`}
                          >
                            <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            <span className="font-medium">{link.label}</span>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;