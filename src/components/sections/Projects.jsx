import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFileText } from 'react-icons/fi';
import Card from '../common/Card';
import LazyImage from '../common/LazyImage';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { projects } from '../../data/projects';
import { scrollStaggerContainer, scrollSlideUp, scrollFadeIn } from '../../utils/animations';

/**
 * Projects Section Component
 * Displays project portfolio with cards, images, descriptions, and links
 * Features responsive grid layout and scroll-triggered animations
 * 
 * @param {Object} props - Component props
 * @param {Array} props.projectsData - Optional projects data override
 */
const Projects = ({ projectsData = projects }) => {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  /**
   * Handle project link clicks with analytics tracking
   */
  const handleLinkClick = (project, linkType, url) => {
    // Future: Add analytics tracking here
    console.log(`Project link clicked: ${project.title} - ${linkType}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  /**
   * Get icon for project link type
   */
  const getLinkIcon = (linkType) => {
    switch (linkType) {
      case 'demo':
        return <FiExternalLink className="w-4 h-4" />;
      case 'code':
        return <FiGithub className="w-4 h-4" />;
      case 'documentation':
        return <FiFileText className="w-4 h-4" />;
      default:
        return <FiExternalLink className="w-4 h-4" />;
    }
  };

  /**
   * Get technology badge color based on category
   */
  const getTechBadgeColor = (category) => {
    const colors = {
      language: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
      framework: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
      database: 'border-green-500/30 text-green-400 bg-green-500/10',
      tool: 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10'
    };
    return colors[category] || 'border-gray-500/30 text-gray-400 bg-gray-500/10';
  };

  /**
   * Handle image loading success
   */
  const handleImageLoad = (project) => {
    console.log(`Image loaded successfully for project: ${project.title}`);
  };

  /**
   * Handle image loading errors
   */
  const handleImageError = (project) => {
    console.warn(`Failed to load image for project: ${project.title}`);
  };

  return (
    <section 
      id="projects" 
      className="section-padding bg-gray-800"
      ref={sectionRef}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 px-4 sm:px-6 lg:px-0"
          variants={scrollFadeIn}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2 className="text-responsive-xl font-bold text-white mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-responsive-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work, personal projects, and technical experiments. 
            Each project demonstrates different aspects of my development skills and interests.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid-responsive-1-2-3 px-4 sm:px-6 lg:px-0"
          variants={scrollStaggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={scrollSlideUp}
              className="h-full"
            >
              <Card
                className="h-full bg-gray-700/50 backdrop-blur-sm border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col touch-manipulation"
                hover={true}
                padding="sm"
              >
                {/* Project Image */}
                <div className="relative h-36 sm:h-40 md:h-48 mb-3 sm:mb-4 rounded-md sm:rounded-lg overflow-hidden bg-gradient-to-br from-gray-600/50 to-gray-700/50">
                  <LazyImage
                    src={project.image.src}
                    alt={project.image.alt}
                    placeholder={project.image.placeholder}
                    onLoad={() => handleImageLoad(project)}
                    onError={() => handleImageError(project)}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    threshold={0.1}
                    rootMargin="100px"
                  />
                  
                  {/* Status Badge */}
                  {project.status && (
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === 'completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : project.status === 'in-progress'
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {project.status === 'in-progress' ? 'In Progress' : 
                         project.status === 'completed' ? 'Completed' : 'Planned'}
                      </span>
                    </div>
                  )}

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col touch-padding-sm">
                  {/* Title and Category */}
                  <div className="mb-2 sm:mb-3">
                    <div className="flex items-start justify-between mb-1 sm:mb-2 gap-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-400 bg-gray-600/50 px-2 py-1 rounded flex-shrink-0">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex flex-wrap touch-spacing-sm">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 text-xs rounded border ${getTechBadgeColor(tech.category)}`}
                        >
                          {tech.name}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs rounded border border-gray-500/30 text-gray-400 bg-gray-500/10">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="mt-auto">
                    {project.links && project.links.length > 0 ? (
                      <div className="flex touch-spacing">
                        {project.links.map((link, linkIndex) => (
                          <button
                            key={linkIndex}
                            onClick={() => handleLinkClick(project, link.type, link.url)}
                            className={`flex items-center touch-spacing-sm text-xs sm:text-sm font-medium transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] touch-target touch-feedback-subtle ${
                              link.type === 'demo' 
                                ? 'text-cyan-400 hover:text-cyan-300'
                                : 'text-gray-400 hover:text-gray-300'
                            }`}
                            aria-label={`${link.label} for ${project.title}`}
                          >
                            {getLinkIcon(link.type)}
                            {link.label}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="text-xs sm:text-sm text-gray-500">
                        Links coming soon
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {projectsData.length === 0 && (
          <motion.div
            className="text-center py-8 sm:py-12 px-4 sm:px-6 lg:px-0"
            variants={scrollFadeIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <div className="text-gray-400 mb-4">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-2">No Projects Yet</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Projects will be displayed here once they are added to the portfolio.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;