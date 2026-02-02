import useIntersectionObserver from './useIntersectionObserver';
import { 
  scrollFadeIn, 
  scrollSlideUp, 
  scrollSlideInLeft, 
  scrollSlideInRight, 
  scrollStaggerContainer, 
  scrollScaleIn 
} from '../utils/animations';

/**
 * Custom hook for scroll-triggered animations
 * Provides consistent animation variants and intersection observer setup
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.variant - Animation variant ('fadeIn', 'slideUp', 'slideInLeft', 'slideInRight', 'scaleIn', 'stagger')
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection calculation
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Array} [ref, isVisible, animationVariants] - Element ref, visibility state, and animation variants
 */
export const useScrollAnimation = (options = {}) => {
  const {
    variant = 'fadeIn',
    threshold = 0.1,
    rootMargin = '-50px',
    triggerOnce = true
  } = options;

  // Set up intersection observer
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce
  });

  // Get animation variants based on variant type
  const getAnimationVariants = () => {
    switch (variant) {
      case 'slideUp':
        return scrollSlideUp;
      case 'slideInLeft':
        return scrollSlideInLeft;
      case 'slideInRight':
        return scrollSlideInRight;
      case 'scaleIn':
        return scrollScaleIn;
      case 'stagger':
        return scrollStaggerContainer;
      case 'fadeIn':
      default:
        return scrollFadeIn;
    }
  };

  const animationVariants = getAnimationVariants();

  return [ref, isVisible, animationVariants];
};

/**
 * Hook for staggered container animations
 * Provides container and item variants for staggered animations
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold
 * @param {string} options.rootMargin - Root margin for intersection
 * @param {boolean} options.triggerOnce - Whether to trigger only once
 * @param {number} options.staggerDelay - Delay between child animations
 * @param {number} options.delayChildren - Initial delay before children start
 * @returns {Array} [ref, isVisible, containerVariants, itemVariants]
 */
export const useStaggerAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '-50px',
    triggerOnce = true,
    staggerDelay = 0.15,
    delayChildren = 0.3
  } = options;

  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return [ref, isVisible, containerVariants, itemVariants];
};

export default useScrollAnimation;