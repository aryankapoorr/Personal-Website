import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

/**
 * Reusable Card component with hover effects and responsive styling
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Whether to enable hover effects
 * @param {Function} props.onClick - Click handler for interactive cards
 * @param {string} props.variant - Card style variant ('default', 'elevated', 'outlined')
 * @param {string} props.padding - Padding size ('sm', 'md', 'lg')
 * @param {Object} props.motionProps - Additional Framer Motion props
 */
const Card = ({
  children,
  className = '',
  hover = true,
  onClick,
  variant = 'default',
  padding = 'md',
  motionProps = {},
  ...rest
}) => {
  // Base styles that apply to all cards
  const baseStyles = 'rounded-lg transition-all duration-200 focus:outline-none';
  
  // Variant-specific styles
  const variantStyles = {
    default: 'bg-white border border-gray-200 shadow-sm',
    elevated: 'bg-white shadow-md border border-gray-100',
    outlined: 'bg-transparent border-2 border-gray-300'
  };
  
  // Padding-specific styles
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  // Hover styles (applied conditionally)
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-gray-300 hover:-translate-y-1' : '';
  
  // Interactive styles (applied when onClick is provided)
  const interactiveStyles = onClick ? 'cursor-pointer focus:ring-2 focus:ring-primary-500 focus:ring-offset-2' : '';
  
  // Combine all styles
  const cardClasses = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${interactiveStyles} ${className}`;
  
  // Animation variants for hover and tap effects
  const cardVariants = {
    initial: { 
      scale: 1,
      y: 0,
      boxShadow: variant === 'elevated' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    },
    hover: hover ? {
      scale: 1.02,
      y: -4,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { 
        duration: 0.2, 
        ease: 'easeOut'
      }
    } : {},
    tap: onClick ? {
      scale: 0.98,
      y: 0,
      transition: { 
        duration: 0.1, 
        ease: 'easeInOut' 
      }
    } : {}
  };
  
  // Common props for the card element
  const commonProps = {
    className: cardClasses,
    onClick,
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    'aria-pressed': onClick ? false : undefined,
    onKeyDown: onClick ? (e) => {
      // Handle Enter and Space key presses for accessibility
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick(e);
      }
    } : undefined,
    ...rest
  };
  
  return (
    <motion.div
      {...commonProps}
      variants={cardVariants}
      initial="initial"
      whileHover={hover ? "hover" : undefined}
      whileTap={onClick ? "tap" : undefined}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default Card;