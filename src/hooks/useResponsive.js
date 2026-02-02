import { useState, useEffect, useCallback } from 'react';
import { BREAKPOINTS } from '../utils/constants';

/**
 * Custom hook for responsive breakpoint detection
 * Provides boolean values for different screen sizes using mobile-first approach
 * Includes debounced resize handling for smoother transitions
 * 
 * @returns {Object} Breakpoint states for xs, mobile, tablet, desktop, wide, and 2xl screens
 */
const useResponsive = () => {
  const [breakpoints, setBreakpoints] = useState({
    xs: false,
    mobile: false,
    tablet: false,
    desktop: false,
    wide: false,
    '2xl': false,
  });

  // Debounce resize events to prevent excessive re-renders during transitions
  const debounce = useCallback((func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  const updateBreakpoints = useCallback(() => {
    const width = window.innerWidth;
    
    setBreakpoints({
      xs: width >= BREAKPOINTS.xs,
      mobile: width >= BREAKPOINTS.mobile,
      tablet: width >= BREAKPOINTS.tablet,
      desktop: width >= BREAKPOINTS.desktop,
      wide: width >= BREAKPOINTS.wide,
      '2xl': width >= BREAKPOINTS['2xl'],
    });
  }, []);

  // Debounced version of updateBreakpoints for resize events
  const debouncedUpdateBreakpoints = useCallback(
    debounce(updateBreakpoints, 100),
    [updateBreakpoints, debounce]
  );

  useEffect(() => {
    // Set initial breakpoints immediately
    updateBreakpoints();

    // Add event listener for window resize with debouncing
    window.addEventListener('resize', debouncedUpdateBreakpoints);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', debouncedUpdateBreakpoints);
    };
  }, [updateBreakpoints, debouncedUpdateBreakpoints]);

  // Additional helper properties for common use cases (mobile-first approach)
  const isXs = breakpoints.xs;
  const isMobile = breakpoints.mobile;
  const isTablet = breakpoints.tablet;
  const isDesktop = breakpoints.desktop;
  const isWide = breakpoints.wide;
  const is2xl = breakpoints['2xl'];
  
  // Convenience helpers for ranges
  const isSmallScreen = !breakpoints.tablet; // Below tablet
  const isMediumScreen = breakpoints.tablet && !breakpoints.desktop; // Tablet only
  const isLargeScreen = breakpoints.desktop; // Desktop and above
  const isExtraLargeScreen = breakpoints.wide; // Wide and above

  return {
    ...breakpoints,
    isXs,
    isMobile,
    isTablet,
    isDesktop,
    isWide,
    is2xl,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isExtraLargeScreen,
  };
};

export default useResponsive;