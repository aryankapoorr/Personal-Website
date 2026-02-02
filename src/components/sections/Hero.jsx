import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, LoadingPlaceholder } from '../common';
import { personalInfo } from '../../data/personalInfo';
import { fadeIn, slideUp, stagger } from '../../utils/animations';

/**
 * Hero Section Component
 * Displays professional introduction with headshot, name, title, summary, and call-to-action buttons
 * Includes loading states and entrance animations
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onCTAClick - Handler for call-to-action button clicks
 */
const Hero = ({ onCTAClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  // Simulate content loading delay
  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 800);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  // Handle image load
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  // Enhanced animation variants for the hero content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth entrance
      }
    }
  };

  const headshotVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    }
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  const loadingVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  };

  // Handle CTA button clicks
  const handleCTAClick = (cta) => {
    if (onCTAClick) {
      onCTAClick(cta);
    }

    // Handle different action types
    switch (cta.action) {
      case 'scroll':
        if (cta.target) {
          const element = document.querySelector(cta.target);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        break;
      case 'download':
        if (cta.target) {
          const link = document.createElement('a');
          link.href = cta.target;
          link.download = '';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        break;
      case 'external':
        if (cta.target) {
          window.open(cta.target, '_blank', 'noopener,noreferrer');
        }
        break;
      default:
        console.log(`CTA clicked: ${cta.id}`);
    }
  };

  return (
    <section 
      id="hero" 
      className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen flex items-center"
      aria-label="Hero section"
    >
      <div className="container">
        <AnimatePresence mode="wait">
          {isLoading ? (
            // Loading State
            <motion.div
              key="loading"
              className="max-w-4xl mx-auto text-center"
              variants={loadingVariants}
              initial="initial"
              exit="exit"
            >
              {/* Headshot Loading Placeholder */}
              <div className="mb-8 flex justify-center">
                <LoadingPlaceholder 
                  type="image" 
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full"
                />
              </div>

              {/* Name Loading Placeholder */}
              <LoadingPlaceholder 
                type="text" 
                lines={1}
                className="mb-4 max-w-md mx-auto"
              />

              {/* Title Loading Placeholder */}
              <LoadingPlaceholder 
                type="text" 
                lines={1}
                className="mb-6 max-w-sm mx-auto"
              />

              {/* Summary Loading Placeholder */}
              <LoadingPlaceholder 
                type="text" 
                lines={3}
                className="mb-10 max-w-3xl mx-auto"
              />

              {/* Buttons Loading Placeholder */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <LoadingPlaceholder 
                  type="button" 
                  className="w-32 sm:w-40"
                />
                <LoadingPlaceholder 
                  type="button" 
                  className="w-32 sm:w-40"
                />
              </div>
            </motion.div>
          ) : (
            // Main Content
            <motion.div
              key="content"
              className="max-w-4xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Professional Headshot */}
              <motion.div
                className="mb-8"
                variants={headshotVariants}
              >
                <div className="relative inline-block">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-white">
                    <AnimatePresence>
                      {!imageLoaded && (
                        <motion.div
                          className="absolute inset-0 z-10"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <LoadingPlaceholder 
                            type="image" 
                            className="w-full h-full rounded-full"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <motion.img
                      src={personalInfo.headshot.src}
                      alt={personalInfo.headshot.alt}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: imageLoaded ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                      onLoad={handleImageLoad}
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.src = personalInfo.headshot.placeholder;
                        setImageLoaded(true);
                      }}
                    />
                  </div>
                  {/* Enhanced decorative ring with animation */}
                  <motion.div 
                    className="absolute inset-0 rounded-full ring-2 ring-primary-200 ring-offset-4"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </div>
              </motion.div>

              {/* Name with enhanced animation */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                variants={itemVariants}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: contentLoaded ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {personalInfo.name}
                </motion.span>
              </motion.h1>

              {/* Title with enhanced animation */}
              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-600 mb-6"
                variants={itemVariants}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: contentLoaded ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {personalInfo.title}
                </motion.span>
              </motion.h2>

              {/* Summary with enhanced animation */}
              <motion.p
                className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: contentLoaded ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {personalInfo.summary}
                </motion.span>
              </motion.p>

              {/* Call-to-Action Buttons with enhanced stagger animation */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                variants={buttonContainerVariants}
              >
                {personalInfo.callToActions.map((cta, index) => (
                  <motion.div
                    key={cta.id}
                    variants={buttonVariants}
                  >
                    <Button
                      variant={cta.variant}
                      size="lg"
                      onClick={() => handleCTAClick(cta)}
                      ariaLabel={`${cta.label} - ${cta.action === 'scroll' ? 'Navigate to section' : cta.action === 'download' ? 'Download file' : 'Open link'}`}
                      motionProps={{
                        whileHover: { 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        },
                        whileTap: { 
                          scale: 0.95,
                          transition: { duration: 0.1 }
                        }
                      }}
                    >
                      {cta.label}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced scroll indicator with loading delay */}
              <motion.div
                className="mt-16 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <motion.div
                  className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center cursor-pointer"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    const nextSection = document.querySelector('#quick-links') || document.querySelector('section:nth-of-type(2)');
                    if (nextSection) {
                      nextSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <motion.div
                    className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;