import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaTwitter, 
  FaGlobe, 
  FaFileDownload, 
  FaMedium, 
  FaStackOverflow 
} from 'react-icons/fa';
import { quickLinks } from '../../data/quickLinks.js';

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
  // Icon mapping for React Icons
  const iconMap = {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaTwitter,
    FaGlobe,
    FaFileDownload,
    FaMedium,
    FaStackOverflow
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

  // Handle link clicks
  const handleLinkClick = (link) => {
    // For resume downloads, we might want to track analytics
    if (link.id === 'resume') {
      console.log('Resume download initiated');
    }
    
    // For external links, ensure they open in new tabs
    if (link.external && !link.url.startsWith('mailto:')) {
      // The target="_blank" attribute handles this, but we can add additional logic here if needed
      console.log(`Opening external link: ${link.label}`);
    }
  };

  return (
    <section id="quick-links" className={`section-padding ${className}`}>
      <div className="container">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Connect With Me
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Let's connect and collaborate! Find me on these platforms or get in touch directly.
          </motion.p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {links.map((link) => {
              const IconComponent = iconMap[link.icon];
              const colorClasses = colorMap[link.id] || 'text-gray-600 bg-gray-100 hover:bg-gray-200';
              
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target={link.external ? '_blank' : '_self'}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`
                    group relative p-6 rounded-xl transition-all duration-300 
                    hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                    ${colorClasses}
                  `}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handleLinkClick(link)}
                  aria-label={`Visit ${link.label}${link.external ? ' (opens in new tab)' : ''}`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    {/* Icon Container */}
                    <div className="relative">
                      {IconComponent && (
                        <IconComponent 
                          className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
                          aria-hidden="true"
                        />
                      )}
                      
                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-current blur-md"></div>
                    </div>
                    
                    {/* Label */}
                    <span className="text-sm font-medium text-gray-900 group-hover:text-current transition-colors duration-300">
                      {link.label}
                    </span>
                    
                    {/* External link indicator */}
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
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150 rounded-xl"></div>
                  </div>
                </motion.a>
              );
            })}
          </div>
          
          {/* Optional call-to-action text */}
          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <p className="text-gray-500 text-sm">
              Always open to interesting conversations and collaboration opportunities
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;