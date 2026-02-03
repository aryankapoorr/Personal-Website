import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { awards } from '../../data/awards';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

/**
 * Awards Section Component - Creative floating cards with dynamic animations
 */
const Awards = ({ awardsData = awards }) => {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
    triggerOnce: true
  });

  const [hoveredCard, setHoveredCard] = useState(null);
  const [floatingOffsets, setFloatingOffsets] = useState([]);

  // Generate random floating offsets for each award
  useEffect(() => {
    const offsets = awardsData.map(() => ({
      x: Math.random() * 20 - 10,
      y: Math.random() * 20 - 10,
      rotation: Math.random() * 6 - 3,
      delay: Math.random() * 2
    }));
    setFloatingOffsets(offsets);
  }, [awardsData]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Subtle pastel colors following the site's theme
  const getCategoryColor = (category) => {
    const colors = {
      academic: 'from-blue-900/20 to-slate-800/80 border-blue-800/20',
      professional: 'from-teal-900/20 to-slate-800/80 border-teal-800/20',
      competition: 'from-amber-900/20 to-slate-800/80 border-amber-800/20',
      leadership: 'from-purple-900/20 to-slate-800/80 border-purple-800/20',
      innovation: 'from-pink-900/20 to-slate-800/80 border-pink-800/20',
      technical: 'from-cyan-900/20 to-slate-800/80 border-cyan-800/20',
      default: 'from-gray-800/80 to-slate-800/80 border-gray-700/40'
    };
    return colors[category] || colors.default;
  };

  return (
    <section 
      id="awards" 
      className="relative py-6 sm:py-8 md:py-10 overflow-hidden"
      aria-label="Awards and Recognition"
      ref={sectionRef}
    >
      {/* Subtle Background with Pastel Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        
        {/* Subtle Pastel Background Elements */}
        <div className="absolute top-1/4 left-1/6 w-24 h-24 bg-blue-400/3 rounded-full blur-2xl"></div>
        <div className="absolute top-3/4 right-1/6 w-32 h-32 bg-teal-400/3 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-purple-400/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Awards
          </h2>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {awardsData.map((award, index) => (
              <AwardCard
                key={award.id}
                award={award}
                index={index}
                cardVariants={cardVariants}
                getCategoryColor={getCategoryColor}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
                floatingOffset={floatingOffsets[index] || { x: 0, y: 0, rotation: 0, delay: 0 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Individual Award Card Component
const AwardCard = ({ 
  award, 
  index, 
  cardVariants, 
  getCategoryColor, 
  hoveredCard, 
  setHoveredCard,
  floatingOffset
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
      onHoverStart={() => setHoveredCard(index)}
      onHoverEnd={() => setHoveredCard(null)}
      animate={{
        x: floatingOffset.x * 0.5, // Reduce floating intensity
        y: floatingOffset.y * 0.5,
        rotate: floatingOffset.rotation * 0.5,
      }}
      transition={{
        duration: 6 + floatingOffset.delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <motion.div
        className={`relative bg-gradient-to-br ${getCategoryColor(award.category)} backdrop-blur-xl border rounded-xl p-4 shadow-xl overflow-hidden text-gray-300`}
        whileHover={{ 
          scale: 1.02,
          y: -2
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25 
        }}
      >
        {/* Subtle Glow Effect on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent"
          initial={{ x: '-100%' }}
          animate={hoveredCard === index ? { x: '100%' } : { x: '-100%' }}
          transition={{ duration: 0.8 }}
        />

        {/* Content */}
        <div className="text-center space-y-2">
          {/* Icon - Smaller and more subtle */}
          <div className="text-2xl mb-2 opacity-80">
            {award.icon}
          </div>

          <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-cyan-200 transition-colors duration-300">
            {award.title}
          </h3>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-300 group-hover:text-teal-200 transition-colors duration-300">
              {award.organization}
            </p>
            <p className="text-xs text-gray-400 group-hover:text-blue-300 transition-colors duration-300">
              {award.year}
            </p>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            {award.description}
          </p>
        </div>

        {/* Minimal decorative elements */}
        <div className="absolute top-2 right-2 w-1 h-1 bg-white/20 rounded-full"></div>
      </motion.div>
    </motion.div>
  );
};

export default Awards;