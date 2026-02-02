import React from 'react';
import { motion } from 'framer-motion';

/**
 * Loading Placeholder Component
 * Displays animated skeleton placeholders for content
 * 
 * @param {Object} props - Component props
 * @param {string} props.type - Type of placeholder ('text', 'image', 'button', 'card')
 * @param {number} props.lines - Number of text lines for text type
 * @param {string} props.className - Additional CSS classes
 */
const LoadingPlaceholder = ({ 
  type = 'text', 
  lines = 1, 
  className = '' 
}) => {
  const shimmerVariants = {
    animate: {
      x: ['-100%', '100%'],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const pulseVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const renderPlaceholder = () => {
    switch (type) {
      case 'image':
        return (
          <div className={`relative overflow-hidden bg-gray-200 rounded-lg ${className}`}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              variants={shimmerVariants}
              animate="animate"
            />
          </div>
        );

      case 'button':
        return (
          <motion.div
            className={`h-10 bg-gray-200 rounded-md ${className}`}
            variants={pulseVariants}
            animate="animate"
          >
            <div className="relative overflow-hidden h-full rounded-md">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                variants={shimmerVariants}
                animate="animate"
              />
            </div>
          </motion.div>
        );

      case 'card':
        return (
          <div className={`p-4 bg-gray-50 rounded-lg ${className}`}>
            <motion.div
              className="h-4 bg-gray-200 rounded mb-3"
              variants={pulseVariants}
              animate="animate"
            />
            <motion.div
              className="h-3 bg-gray-200 rounded mb-2"
              variants={pulseVariants}
              animate="animate"
            />
            <motion.div
              className="h-3 bg-gray-200 rounded w-3/4"
              variants={pulseVariants}
              animate="animate"
            />
          </div>
        );

      case 'text':
      default:
        return (
          <div className={className}>
            {Array.from({ length: lines }).map((_, index) => (
              <motion.div
                key={index}
                className={`h-4 bg-gray-200 rounded mb-2 ${
                  index === lines - 1 ? 'w-3/4' : 'w-full'
                }`}
                variants={pulseVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        );
    }
  };

  return renderPlaceholder();
};

export default LoadingPlaceholder;