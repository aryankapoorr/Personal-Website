import { useEffect, useRef } from 'react';
import useResponsive from './useResponsive';

/**
 * Custom hook for managing smooth responsive transitions
 * Provides utilities to prevent layout shifts and ensure smooth breakpoint transitions
 * 
 * @param {Object} options - Configuration options
 * @param {boolean} options.enableTransitions - Whether to enable smooth transitions (default: true)
 * @param {number} options.transitionDuration - Duration of transitions in ms (default: 300)
 * @param {string} options.transitionEasing - CSS easing function (default: 'ease-out')
 * @returns {Object} Utilities for responsive transitions
 */
const useResponsiveTransitions = (options = {}) => {
  const {
    enableTransitions = true,
    transitionDuration = 300,
    transitionEasing = 'ease-out'
  } = options;

  const breakpoints = useResponsive();
  const previousBreakpoints = useRef(breakpoints);
  const transitionRef = useRef(null);

  // Track breakpoint changes to apply smooth transitions
  useEffect(() => {
    const hasBreakpointChanged = Object.keys(breakpoints).some(
      key => breakpoints[key] !== previousBreakpoints.current[key]
    );

    if (hasBreakpointChanged && enableTransitions && transitionRef.current) {
      // Apply transition styles temporarily during breakpoint changes
      const element = transitionRef.current;
      const originalTransition = element.style.transition;
      
      // Set smooth transition
      element.style.transition = `all ${transitionDuration}ms ${transitionEasing}`;
      
      // Remove transition after duration to prevent interference with other animations
      const timeoutId = setTimeout(() => {
        if (element) {
          element.style.transition = originalTransition;
        }
      }, transitionDuration + 50);

      // Update previous breakpoints
      previousBreakpoints.current = { ...breakpoints };

      return () => clearTimeout(timeoutId);
    }
  }, [breakpoints, enableTransitions, transitionDuration, transitionEasing]);

  /**
   * Apply responsive transition classes to an element
   * @param {HTMLElement} element - The element to apply transitions to
   */
  const applyResponsiveTransitions = (element) => {
    if (!element || !enableTransitions) return;

    element.classList.add('transition-responsive');
    
    // Add specific transition classes based on element type
    if (element.tagName === 'IMG') {
      element.classList.add('transition-layout');
    } else if (element.classList.contains('grid')) {
      element.classList.add('transition-layout');
    } else if (element.tagName.match(/^H[1-6]$/) || element.tagName === 'P') {
      element.classList.add('transition-typography');
    }
  };

  /**
   * Get transition styles object for inline styles
   * @param {string} properties - CSS properties to transition (default: 'all')
   * @returns {Object} Style object with transition properties
   */
  const getTransitionStyles = (properties = 'all') => {
    if (!enableTransitions) return {};

    return {
      transition: `${properties} ${transitionDuration}ms ${transitionEasing}`,
      willChange: properties === 'all' ? 'auto' : properties
    };
  };

  /**
   * Get responsive container styles that prevent layout shifts
   * @param {Object} config - Configuration for container
   * @returns {Object} Style object for responsive container
   */
  const getResponsiveContainerStyles = (config = {}) => {
    const {
      preventLayoutShift = true,
      enableContainment = true
    } = config;

    const styles = {
      ...getTransitionStyles()
    };

    if (preventLayoutShift) {
      styles.contain = enableContainment ? 'layout style' : 'layout';
    }

    return styles;
  };

  /**
   * Create a ref callback that applies responsive transitions
   * @returns {Function} Ref callback function
   */
  const createResponsiveRef = () => {
    return (element) => {
      transitionRef.current = element;
      if (element) {
        applyResponsiveTransitions(element);
      }
    };
  };

  /**
   * Get CSS class names for responsive transitions
   * @param {string} type - Type of transition ('layout', 'typography', 'spacing', 'all')
   * @returns {string} CSS class names
   */
  const getResponsiveClasses = (type = 'all') => {
    if (!enableTransitions) return '';

    const baseClasses = ['transition-responsive'];
    
    switch (type) {
      case 'layout':
        baseClasses.push('transition-layout', 'prevent-layout-shift');
        break;
      case 'typography':
        baseClasses.push('transition-typography');
        break;
      case 'spacing':
        baseClasses.push('transition-spacing');
        break;
      case 'all':
      default:
        baseClasses.push('stable-layout');
        break;
    }

    return baseClasses.join(' ');
  };

  return {
    // Breakpoint information
    ...breakpoints,
    
    // Transition utilities
    transitionRef,
    applyResponsiveTransitions,
    getTransitionStyles,
    getResponsiveContainerStyles,
    createResponsiveRef,
    getResponsiveClasses,
    
    // Configuration
    enableTransitions,
    transitionDuration,
    transitionEasing
  };
};

export default useResponsiveTransitions;