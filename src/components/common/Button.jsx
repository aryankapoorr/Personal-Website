import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

/**
 * Reusable Button component with multiple variants and accessibility features
 * 
 * @param {Object} props - Component props
 * @param {'primary' | 'secondary' | 'outline'} props.variant - Button style variant
 * @param {'sm' | 'md' | 'lg'} props.size - Button size
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler for button functionality
 * @param {string} props.href - URL for link functionality
 * @param {boolean} props.external - Whether link opens in new tab
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.ariaLabel - Accessibility label
 * @param {Object} props.motionProps - Additional Framer Motion props
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  external = false,
  disabled = false,
  className = '',
  ariaLabel,
  motionProps = {},
  ...rest
}) => {
  // Base styles that apply to all buttons
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant-specific styles
  const variantStyles = {
    primary: 'text-white bg-gradient-to-r from-blue-600 to-teal-700 hover:from-blue-700 hover:to-teal-800 focus:ring-blue-500 shadow-lg hover:shadow-xl border border-transparent',
    secondary: 'text-gray-300 bg-gray-800 border border-gray-600 hover:bg-gray-700 hover:text-white focus:ring-cyan-500 shadow-md hover:shadow-lg',
    outline: 'text-cyan-400 bg-transparent border border-cyan-400 hover:bg-cyan-400/10 focus:ring-cyan-500 hover:border-cyan-300'
  };
  
  // Size-specific styles with touch-friendly minimum sizes
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm min-h-[44px] min-w-[44px]', // Minimum 44px touch target
    md: 'px-6 py-3 text-base min-h-[48px] min-w-[48px]', // Comfortable 48px touch target
    lg: 'px-8 py-4 text-lg min-h-[52px] min-w-[52px]'  // Large 52px touch target
  };
  
  // Combine all styles
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  // Animation variants for hover effects
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2, ease: 'easeInOut' }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1, ease: 'easeInOut' }
    }
  };
  
  // Common props for both button and link elements
  const commonProps = {
    className: buttonClasses,
    disabled,
    'aria-label': ariaLabel,
    'aria-disabled': disabled,
    ...rest
  };
  
  // If href is provided, render as a link
  if (href) {
    const linkProps = {
      ...commonProps,
      href: disabled ? undefined : href,
      target: external ? '_blank' : undefined,
      rel: external ? 'noopener noreferrer' : undefined,
      role: 'button',
      tabIndex: disabled ? -1 : 0,
      onClick: disabled ? (e) => e.preventDefault() : onClick,
      onKeyDown: (e) => {
        // Handle Enter and Space key presses for accessibility
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
          e.preventDefault();
          if (onClick) onClick(e);
        }
      }
    };
    
    return (
      <motion.a
        {...linkProps}
        variants={buttonVariants}
        initial="initial"
        whileHover={disabled ? undefined : "hover"}
        whileTap={disabled ? undefined : "tap"}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }
  
  // Otherwise, render as a button
  const buttonProps = {
    ...commonProps,
    type: 'button',
    onClick: disabled ? undefined : onClick,
    onKeyDown: (e) => {
      // Handle Enter and Space key presses for accessibility
      if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
        e.preventDefault();
        if (onClick) onClick(e);
      }
    }
  };
  
  return (
    <motion.button
      {...buttonProps}
      variants={buttonVariants}
      initial="initial"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};

export default Button;