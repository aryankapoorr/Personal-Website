import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFileText, FiCalendar } from 'react-icons/fi';
import Card from '../common/Card';
import LazyImage from '../common/LazyImage';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { projects } from '../../data/projects';
import { scrollStaggerContainer, scrollSlideUp, scrollFadeIn } from '../../utils/animations';

/**
 * Projects Section Component
 * Enhanced design with flexible layouts for projects with/without images
 * Features logo areas, time periods, and removed unnecessary badges
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
      language: 'border-cyan-400/30 text-cyan-300 bg-cyan-500/10 backdrop-blur-sm',
      framework: 'border-purple-400/30 text-purple-300 bg-purple-500/10 backdrop-blur-sm',
      database: 'border-green-400/30 text-green-300 bg-green-500/10 backdrop-blur-sm',
      tool: 'border-yellow-400/30 text-yellow-300 bg-yellow-500/10 backdrop-blur-sm'
    };
    return colors[category] || 'border-white/20 text-gray-300 bg-white/10 backdrop-blur-sm';
  };

  /**
   * Generate gradient background for logo fallback
   */
  const getLogoGradient = (projectId) => {
    const gradients = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-teal-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
      'from-pink-500 to-rose-500'
    ];
    const index = parseInt(projectId.slice(-1)) || 0;
    return gradients[index % gradients.length];
  };

  /**
   * Render project logo or fallback
   */
  const renderProjectLogo = (project) => {
    if (project.logo?.src) {
      return (
        <LazyImage
          src={project.logo.src}
          alt={project.logo.alt}
          className="w-full h-full object-contain"
          threshold={0.1}
        />
      );
    }
    
    if (project.logo?.fallback) {
      return (
        <div className={`w-full h-full bg-gradient-to-br ${getLogoGradient(project.id)} rounded-lg flex items-center justify-center`}>
          <span className="text-white font-bold text-lg">
            {project.logo.fallback}
          </span>
        </div>
      );
    }

    return (
      <div className={`w-full h-full bg-gradient-to-br ${getLogoGradient(project.id)} rounded-lg flex items-center justify-center`}>
        <span className="text-white font-bold text-lg">
          {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
        </span>
      </div>
    );
  };

  /**
   * Render project card based on whether it has an image or not
   */
  const renderProjectCard = (project) => {
    const hasImage = project.image?.src;

    if (hasImage) {
      // Layout with image
      return (
        <Card
          className="h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col overflow-hidden group relative hover:bg-white/10"
          hover={true}
          padding="none"
        >
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/20 via-transparent to-transparent" />
          
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <LazyImage
              src={project.image.src}
              alt={project.image.alt}
              placeholder={project.image.placeholder}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              threshold={0.1}
              rootMargin="100px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            
            {/* Logo overlay */}
            <div className="absolute top-4 left-4 w-12 h-12">
              {renderProjectLogo(project)}
            </div>

            {/* Time period */}
            {project.timePeriod && (
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                <FiCalendar className="w-3 h-3 text-gray-300" />
                <span className="text-xs text-gray-300">{project.timePeriod}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col relative z-10">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-white leading-tight flex-1">
                {project.title}
              </h3>
              <span className="text-xs text-gray-200 bg-white/10 backdrop-blur-sm px-2 py-1 rounded ml-3 flex-shrink-0 border border-white/20">
                {project.category}
              </span>
            </div>

            <p className="text-gray-100 text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2 py-1 text-xs rounded border ${getTechBadgeColor(tech.category)}`}
                  >
                    {tech.name}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 text-xs rounded border border-white/20 text-gray-300 bg-white/10 backdrop-blur-sm">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex gap-4 mt-auto">
              {project.links?.map((link, linkIndex) => (
                <button
                  key={linkIndex}
                  onClick={() => handleLinkClick(project, link.type, link.url)}
                  className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] ${
                    link.type === 'demo' 
                      ? 'text-cyan-300 hover:text-cyan-200'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  aria-label={`${link.label} for ${project.title}`}
                >
                  {getLinkIcon(link.type)}
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </Card>
      );
    } else {
      // Layout without image - more compact, logo-focused design
      return (
        <Card
          className="h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col relative overflow-hidden hover:bg-white/10"
          hover={true}
          padding="lg"
        >
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/20 via-transparent to-transparent" />
          
          {/* Header with logo and time */}
          <div className="flex items-start gap-4 mb-4 relative z-10">
            <div className="w-16 h-16 flex-shrink-0">
              {renderProjectLogo(project)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-white leading-tight">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-200 bg-white/10 backdrop-blur-sm px-2 py-1 rounded ml-3 flex-shrink-0 border border-white/20">
                  {project.category}
                </span>
              </div>
              {project.timePeriod && (
                <div className="flex items-center gap-1 text-gray-200">
                  <FiCalendar className="w-3 h-3" />
                  <span className="text-xs">{project.timePeriod}</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-gray-100 text-sm leading-relaxed mb-4 flex-1 relative z-10">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-4 relative z-10">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`px-2 py-1 text-xs rounded border ${getTechBadgeColor(tech.category)}`}
                >
                  {tech.name}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-2 py-1 text-xs rounded border border-white/20 text-gray-300 bg-white/10 backdrop-blur-sm">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex gap-4 mt-auto relative z-10">
            {project.links?.map((link, linkIndex) => (
              <button
                key={linkIndex}
                onClick={() => handleLinkClick(project, link.type, link.url)}
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] ${
                  link.type === 'demo' 
                    ? 'text-cyan-300 hover:text-cyan-200'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-label={`${link.label} for ${project.title}`}
              >
                {getLinkIcon(link.type)}
                {link.label}
              </button>
            ))}
          </div>
        </Card>
      );
    }
  };

  return (
    <section 
      id="projects" 
      className="py-12 sm:py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #10b981 0%, transparent 50%)`
        }} />
      </div>
      
      <div className="container relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 px-4 sm:px-6 lg:px-0"
          variants={scrollFadeIn}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2 className="text-responsive-xl font-bold text-white">
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-0"
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
              {renderProjectCard(project)}
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {projectsData.length === 0 && (
          <motion.div
            className="text-center py-8 px-4 sm:px-6 lg:px-0"
            variants={scrollFadeIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <div className="text-gray-400 mb-4">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012 2v2M7 7h10" />
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