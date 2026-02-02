import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for tracking element visibility using Intersection Observer API
 * Used for scroll-triggered animations and lazy loading
 * 
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection calculation
 * @param {boolean} options.triggerOnce - Whether to trigger only once
 * @returns {Array} [ref, isVisible] - Element ref and visibility state
 */
const useIntersectionObserver = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if Intersection Observer is supported
    if (!window.IntersectionObserver) {
      // Fallback: assume element is visible if API is not supported
      // Use setTimeout to avoid synchronous setState in effect
      const timeoutId = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting) {
          setIsVisible(true);
          
          // If triggerOnce is true, stop observing after first intersection
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          // Only update visibility to false if not triggerOnce
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // Cleanup function
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
};

export default useIntersectionObserver;