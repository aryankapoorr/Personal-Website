import React from 'react';
import { motion } from 'framer-motion';

/**
 * Loading Spinner Component
 * Displays an animated loading spinner with optional text
 * 
 * @param {Object} props - Component props
 * @param {string} props.size - Size of the spinner ('sm', 'md', 'lg')
 * @param {string} props.text - Optional loading text
 * @param {string} props.className - Additional CSS classes
 */
const LoadingSpinner = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  const textVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-gray-200 border-t-primary-500 rounded-full`}
        variants={spinnerVariants}
        animate="animate"
      />
      {text && (
        <motion.p
          className="mt-2 text-sm text-gray-600"
          variants={textVariants}
          animate="animate"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingSpinner;