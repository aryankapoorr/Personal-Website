import { motion } from 'framer-motion';

const SectionBackground = ({ 
  variant = 'default', 
  children, 
  className = '',
  enableParticles = true,
  particleCount = 5,
  color = 'blue'
}) => {
  const colorVariants = {
    blue: {
      primary: 'rgba(59, 130, 246, 0.1)',
      secondary: 'rgba(147, 51, 234, 0.08)',
      accent: 'rgba(6, 182, 212, 0.06)',
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.1)',
      secondary: 'rgba(236, 72, 153, 0.08)',
      accent: 'rgba(59, 130, 246, 0.06)',
    },
    pink: {
      primary: 'rgba(236, 72, 153, 0.1)',
      secondary: 'rgba(6, 182, 212, 0.08)',
      accent: 'rgba(147, 51, 234, 0.06)',
    },
    cyan: {
      primary: 'rgba(6, 182, 212, 0.1)',
      secondary: 'rgba(59, 130, 246, 0.08)',
      accent: 'rgba(236, 72, 153, 0.06)',
    },
  };

  const colors = colorVariants[color] || colorVariants.blue;

  const particles = enableParticles ? Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  })) : [];

  const backgroundVariants = {
    default: (
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            `linear-gradient(45deg, ${colors.primary} 0%, transparent 50%, ${colors.secondary} 100%)`,
            `linear-gradient(135deg, ${colors.secondary} 0%, transparent 50%, ${colors.accent} 100%)`,
            `linear-gradient(225deg, ${colors.accent} 0%, transparent 50%, ${colors.primary} 100%)`,
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    ),
    gradient: (
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at center, ${colors.primary} 0%, ${colors.secondary} 50%, transparent 100%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    ),
    mesh: (
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, ${colors.primary} 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, ${colors.secondary} 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, ${colors.accent} 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, ${colors.primary} 0%, transparent 50%)
          `,
        }}
        animate={{
          backgroundPosition: [
            '0% 0%, 100% 100%, 100% 0%, 0% 100%',
            '10% 10%, 90% 90%, 90% 10%, 10% 90%',
            '0% 0%, 100% 100%, 100% 0%, 0% 100%',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    ),
  };

  return (
    <div className={`relative ${className}`}>
      {/* Background Effect */}
      {backgroundVariants[variant] || backgroundVariants.default}

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            background: colors.primary,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SectionBackground;