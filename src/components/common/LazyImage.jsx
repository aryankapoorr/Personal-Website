import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingPlaceholder from './LoadingPlaceholder';

/**
 * LazyImage Component
 * Implements lazy loading with intersection observer, error handling, and loading states
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text
 * @param {string} props.placeholder - Placeholder image URL or base64
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 * @param {Function} props.onLoad - Callback when image loads successfully
 * @param {Function} props.onError - Callback when image fails to load
 * @param {boolean} props.eager - Skip lazy loading and load immediately
 * @param {number} props.threshold - Intersection observer threshold (0-1)
 * @param {string} props.rootMargin - Intersection observer root margin
 */
const LazyImage = ({
  src,
  alt,
  placeholder,
  className = '',
  style = {},
  onLoad,
  onError,
  eager = false,
  threshold = 0.1,
  rootMargin = '50px',
  ...props
}) => {
  const [imageState, setImageState] = useState('loading'); // 'loading', 'loaded', 'error'
  const [imageSrc, setImageSrc] = useState(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (eager || shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [eager, shouldLoad, threshold, rootMargin]);

  // Load image when shouldLoad becomes true
  useEffect(() => {
    if (!shouldLoad || !src) return;

    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setImageState('loaded');
      onLoad?.();
    };

    img.onerror = () => {
      setImageState('error');
      if (placeholder) {
        setImageSrc(placeholder);
      }
      onError?.();
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [shouldLoad, src, placeholder, onLoad, onError]);

  // Generate default placeholder if none provided
  const getDefaultPlaceholder = () => {
    const encodedAlt = encodeURIComponent(alt || 'Image');
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#374151"/>
        <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#9CA3AF" text-anchor="middle" dy=".3em">${encodedAlt}</text>
      </svg>
    `)}`;
  };

  const renderContent = () => {
    if (imageState === 'loading' || !shouldLoad) {
      return (
        <div className={`relative overflow-hidden bg-gray-700 ${className}`} style={style}>
          <LoadingPlaceholder 
            type="image" 
            className="w-full h-full absolute inset-0"
          />
          {/* Shimmer effect overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/20 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      );
    }

    if (imageState === 'error' && !placeholder) {
      return (
        <div 
          className={`relative overflow-hidden bg-gray-700 border-2 border-dashed border-gray-600 flex items-center justify-center ${className}`}
          style={style}
        >
          <div className="text-center p-4">
            <svg 
              className="w-12 h-12 mx-auto mb-2 text-gray-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <p className="text-sm text-gray-500">Image not available</p>
          </div>
        </div>
      );
    }

    return (
      <motion.img
        ref={imgRef}
        src={imageSrc || placeholder || getDefaultPlaceholder()}
        alt={alt}
        className={className}
        style={style}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        {...props}
      />
    );
  };

  return (
    <div ref={!shouldLoad ? imgRef : null} className="relative">
      {renderContent()}
    </div>
  );
};

export default LazyImage;