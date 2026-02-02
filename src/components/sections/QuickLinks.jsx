import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaTwitter, 
  FaGlobe, 
  FaFileDownload, 
  FaMedium, 
  FaStackOverflow,
  FaEye,
  FaDownload,
  FaSpinner,
  FaCheck,
  FaTimes
} from 'react-icons/fa';
import { quickLinks } from '../../data/quickLinks.js';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

/**
 * QuickLinks component that displays social and professional links
 * 
 * @param {Object} props - Component props
 * @param {Array} props.links - Array of quick link objects (optional, defaults to imported data)
 * @param {string} props.className - Additional CSS classes
 */
const QuickLinks = ({ 
  links = quickLinks, 
  className = '' 
}) => {
  // State for download functionality
  const [downloadState, setDownloadState] = useState({});
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  // Add intersection observer for scroll-triggered animations
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px'
  });

  // Icon mapping for React Icons
  const iconMap = {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaTwitter,
    FaGlobe,
    FaFileDownload,
    FaMedium,
    FaStackOverflow,
    FaEye,
    FaDownload
  };

  // Color mapping for different link types
  const colorMap = {
    linkedin: 'text-blue-600 bg-blue-100 hover:bg-blue-200',
    github: 'text-gray-800 bg-gray-100 hover:bg-gray-200',
    email: 'text-green-600 bg-green-100 hover:bg-green-200',
    twitter: 'text-blue-400 bg-blue-50 hover:bg-blue-100',
    portfolio: 'text-purple-600 bg-purple-100 hover:bg-purple-200',
    resume: 'text-red-600 bg-red-100 hover:bg-red-200',
    medium: 'text-gray-900 bg-gray-100 hover:bg-gray-200',
    stackoverflow: 'text-orange-600 bg-orange-100 hover:bg-orange-200'
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for individual link items
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: 'easeInOut'
      }
    }
  };

  // Handle download functionality
  const handleDownload = async (link, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Set downloading state
    setDownloadState(prev => ({ ...prev, [link.id]: 'downloading' }));
    
    try {
      // Simulate download process (in real app, this might involve analytics tracking)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create download link
      const downloadLink = document.createElement('a');
      downloadLink.href = link.url;
      downloadLink.download = 'AryanKapoor_Resume.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      // Set success state
      setDownloadState(prev => ({ ...prev, [link.id]: 'success' }));
      
      // Reset state after 3 seconds
      setTimeout(() => {
        setDownloadState(prev => ({ ...prev, [link.id]: null }));
      }, 3000);
      
      console.log('Resume download initiated');
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadState(prev => ({ ...prev, [link.id]: 'error' }));
      
      // Reset error state after 3 seconds
      setTimeout(() => {
        setDownloadState(prev => ({ ...prev, [link.id]: null }));
      }, 3000);
    }
  };

  // Handle PDF viewer
  const handleViewPdf = (url) => {
    setPdfUrl(url);
    setShowPdfViewer(true);
  };

  // Close PDF viewer
  const closePdfViewer = () => {
    setShowPdfViewer(false);
    setPdfUrl('');
  };

  // Handle regular link clicks
  const handleLinkClick = (link) => {
    // For external links, ensure they open in new tabs
    if (link.external && !link.url.startsWith('mailto:')) {
      console.log(`Opening external link: ${link.label}`);
    }
  };

  // Get download state icon and text
  const getDownloadStateDisplay = (linkId) => {
    const state = downloadState[linkId];
    switch (state) {
      case 'downloading':
        return { icon: FaSpinner, text: 'Downloading...', className: 'animate-spin' };
      case 'success':
        return { icon: FaCheck, text: 'Downloaded!', className: 'text-green-600' };
      case 'error':
        return { icon: FaTimes, text: 'Failed', className: 'text-red-600' };
      default:
        return null;
    }
  };

  return (
    <section id="quick-links" className={`section-padding ${className}`} ref={sectionRef}>
      <div className="container">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-responsive-xl font-bold text-gray-900 mb-3 sm:mb-4"
            variants={itemVariants}
          >
            Connect With Me
          </motion.h2>
          <motion.p 
            className="text-responsive-base text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-6 lg:px-0"
            variants={itemVariants}
          >
            Let's connect and collaborate! Find me on these platforms or get in touch directly.
          </motion.p>
          
          <div className="grid-responsive-2-4-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
            {links.map((link) => {
              const IconComponent = iconMap[link.icon];
              const colorClasses = colorMap[link.id] || 'text-gray-600 bg-gray-100 hover:bg-gray-200';
              const downloadStateDisplay = getDownloadStateDisplay(link.id);
              const isResumeLink = link.id === 'resume';
              
              return (
                <div key={link.id} className="relative">
                  {isResumeLink ? (
                    // Special handling for resume - default action is to view
                    <motion.div
                      className={`
                        group relative touch-target-lg touch-padding touch-manipulation touch-feedback-subtle
                        rounded-lg sm:rounded-xl transition-all duration-300 
                        hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                        ${colorClasses} cursor-pointer
                      `}
                      variants={itemVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => handleViewPdf(link.url)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleViewPdf(link.url);
                        }
                      }}
                      aria-label="View Resume"
                    >
                      <div className="flex flex-col items-center touch-spacing-sm">
                        {/* Icon Container */}
                        <div className="relative">
                          {downloadStateDisplay ? (
                            <downloadStateDisplay.icon 
                              className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform duration-300 ${downloadStateDisplay.className}`}
                              aria-hidden="true"
                            />
                          ) : (
                            IconComponent && (
                              <IconComponent 
                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" 
                                aria-hidden="true"
                              />
                            )
                          )}
                          
                          {/* Subtle glow effect on hover */}
                          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-current blur-md"></div>
                        </div>
                        
                        {/* Label */}
                        <span className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-current transition-colors duration-300 text-center">
                          {downloadStateDisplay ? downloadStateDisplay.text : link.label}
                        </span>
                      </div>
                      
                      {/* Download button - positioned in corner with touch-friendly size */}
                      {!downloadStateDisplay && (
                        <motion.button
                          onClick={(e) => handleDownload(link, e)}
                          className="absolute top-2 right-2 bg-green-600 text-white touch-target rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Download Resume"
                          title="Download Resume"
                        >
                          <FaDownload className="w-3 h-3" />
                        </motion.button>
                      )}
                      
                      {/* Ripple effect on click */}
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150 rounded-lg sm:rounded-xl"></div>
                      </div>
                    </motion.div>
                  ) : (
                    // Regular link handling for non-resume items
                    <motion.a
                      href={link.url}
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className={`
                        group relative touch-target-lg touch-padding touch-manipulation touch-feedback-subtle
                        rounded-lg sm:rounded-xl transition-all duration-300 
                        hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                        ${colorClasses} block
                      `}
                      variants={itemVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => handleLinkClick(link)}
                      aria-label={`Visit ${link.label}${link.external ? ' (opens in new tab)' : ''}`}
                    >
                      <div className="flex flex-col items-center touch-spacing-sm">
                        {/* Icon Container */}
                        <div className="relative">
                          {IconComponent && (
                            <IconComponent 
                              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" 
                              aria-hidden="true"
                            />
                          )}
                          
                          {/* Subtle glow effect on hover */}
                          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-current blur-md"></div>
                        </div>
                        
                        {/* Label */}
                        <span className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-current transition-colors duration-300 text-center">
                          {link.label}
                        </span>
                        
                        {/* External link indicator with touch-friendly positioning */}
                        {link.external && (
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                            <svg 
                              className="w-3 h-3 text-current" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      {/* Ripple effect on click */}
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150 rounded-lg sm:rounded-xl"></div>
                      </div>
                    </motion.a>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Optional call-to-action text */}
          <motion.div 
            className="mt-8 sm:mt-12 text-center px-4 sm:px-0"
            variants={itemVariants}
          >
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Always open to interesting conversations and collaboration opportunities
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* PDF Viewer Modal */}
      {showPdfViewer && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 touch-manipulation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePdfViewer}
        >
          <motion.div
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full h-5/6 flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between touch-padding border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Resume Preview</h3>
              <div className="flex items-center touch-spacing">
                <motion.a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white touch-target-lg rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center touch-spacing-sm touch-feedback-subtle"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEye className="w-4 h-4" />
                  <span>Open in New Tab</span>
                </motion.a>
                <motion.a
                  href={pdfUrl}
                  download="AryanKapoor_Resume.pdf"
                  className="bg-green-600 text-white touch-target-lg rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center touch-spacing-sm touch-feedback-subtle"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="w-4 h-4" />
                  <span>Download</span>
                </motion.a>
                <motion.button
                  onClick={closePdfViewer}
                  className="text-gray-500 hover:text-gray-700 touch-target touch-feedback-subtle flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close PDF viewer"
                >
                  <FaTimes className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* PDF Content */}
            <div className="flex-1 touch-padding">
              <iframe
                src={pdfUrl}
                className="w-full h-full border border-gray-300 rounded"
                title="Resume PDF"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default QuickLinks;