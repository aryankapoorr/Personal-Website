import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Button } from '../common';
import { personalInfo } from '../../data/personalInfo';

/**
 * Hero Section Component
 * Displays professional introduction with headshot, name, title, summary, and call-to-action buttons
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onCTAClick - Handler for call-to-action button clicks
 */
const Hero = ({ onCTAClick }) => {
  // Animation variants for the hero content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const headshotVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
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
        <motion.div
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
                <img
                  src={personalInfo.headshot.src}
                  alt={personalInfo.headshot.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.src = personalInfo.headshot.placeholder;
                  }}
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full ring-2 ring-primary-200 ring-offset-4 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-600 mb-6"
            variants={itemVariants}
          >
            {personalInfo.title}
          </motion.h2>

          {/* Summary */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {personalInfo.summary}
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            {personalInfo.callToActions.map((cta, index) => (
              <motion.div
                key={cta.id}
                variants={buttonVariants}
                custom={index}
              >
                <Button
                  variant={cta.variant}
                  size="lg"
                  onClick={() => handleCTAClick(cta)}
                  ariaLabel={`${cta.label} - ${cta.action === 'scroll' ? 'Navigate to section' : cta.action === 'download' ? 'Download file' : 'Open link'}`}
                  motionProps={{
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 }
                  }}
                >
                  {cta.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;