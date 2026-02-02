import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../utils/constants';

/**
 * Custom hook for responsive breakpoint detection
 * Provides boolean values for different screen sizes
 * 
 * @returns {Object} Breakpoint states for mobile, tablet, desktop, and wide screens
 */
const useResponsive = () => {
  const [breakpoints, setBreakpoints] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
    wide: false,
  });

  useEffect(() => {
    const updateBreakpoints = () => {
      const width = window.innerWidth;
      
      setBreakpoints({
        mobile: width < BREAKPOINTS.tablet,
        tablet: width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop,
        desktop: width >= BREAKPOINTS.desktop && width < BREAKPOINTS.wide,
        wide: width >= BREAKPOINTS.wide,
      });
    };

    // Set initial breakpoints
    updateBreakpoints();

    // Add event listener for window resize
    window.addEventListener('resize', updateBreakpoints);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', updateBreakpoints);
    };
  }, []);

  // Additional helper properties for common use cases
  const isMobile = breakpoints.mobile;
  const isTabletOrMobile = breakpoints.mobile || breakpoints.tablet;
  const isDesktopOrWide = breakpoints.desktop || breakpoints.wide;

  return {
    ...breakpoints,
    isMobile,
    isTabletOrMobile,
    isDesktopOrWide,
  };
};

export default useResponsive;