import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

const BackgroundAnimations = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  // Throttled mouse move handler for better performance
  const handleMouseMove = useCallback((e) => {
    setMousePosition({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  }, []);

  useEffect(() => {
    let timeoutId;
    const throttledMouseMove = (e) => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleMouseMove(e);
        timeoutId = null;
      }, 16); // ~60fps
    };

    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleMouseMove]);

  // Optimized floating particles with smoother animations
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1.5,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 25 + 15, // Slower, smoother movement
    delay: Math.random() * 8,
  }));

  // Reduced geometric shapes for better performance
  const shapes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 50 + 15,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 40 + 20, // Much slower rotation
    delay: Math.random() * 15,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Smooth animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(59, 130, 246, 0.12) 0%, 
            rgba(147, 51, 234, 0.08) 25%, 
            rgba(236, 72, 153, 0.06) 50%, 
            rgba(6, 182, 212, 0.04) 75%, 
            transparent 100%)`,
        }}
        animate={{
          background: [
            `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(59, 130, 246, 0.12) 0%, 
              rgba(147, 51, 234, 0.08) 25%, 
              rgba(236, 72, 153, 0.06) 50%, 
              rgba(6, 182, 212, 0.04) 75%, 
              transparent 100%)`,
            `radial-gradient(circle at ${(mousePosition.x + 0.1) * 100}% ${(mousePosition.y + 0.1) * 100}%, 
              rgba(147, 51, 234, 0.12) 0%, 
              rgba(236, 72, 153, 0.08) 25%, 
              rgba(6, 182, 212, 0.06) 50%, 
              rgba(59, 130, 246, 0.04) 75%, 
              transparent 100%)`,
          ],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: 'reverse',
          ease: "easeInOut"
        }}
      />

      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/15 to-purple-400/15 backdrop-blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          }}
        />
      ))}

      {/* Smoother geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute border border-cyan-400/8 backdrop-blur-sm"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.initialX}%`,
            top: `${shape.initialY}%`,
            borderRadius: shape.id % 3 === 0 ? '50%' : shape.id % 2 === 0 ? '0%' : '25%',
            willChange: 'transform, opacity',
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.2, 0.05],
            x: [0, 15, -15, 0],
            y: [0, -15, 15, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.25, 0.75, 1],
          }}
        />
      ))}

      {/* Smoother animated grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          willChange: 'background-position',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Smoother pulsing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/8 to-purple-500/8 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/8 to-cyan-500/8 blur-2xl"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-500/8 to-orange-500/8 blur-2xl"
        animate={{
          scale: [0.9, 1.2, 0.9],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        }}
      />

      {/* Smoother shooting stars */}
      <motion.div
        className="absolute top-20 left-10 w-1 h-1 bg-white/80 rounded-full shadow-lg shadow-white/20"
        animate={{
          x: [0, 250],
          y: [0, 120],
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 12,
          ease: 'easeOut',
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-1 h-1 bg-cyan-400/80 rounded-full shadow-lg shadow-cyan-400/20"
        animate={{
          x: [0, -180],
          y: [0, 100],
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 16,
          ease: 'easeOut',
          delay: 5,
        }}
      />

      {/* Smoother floating code symbols */}
      <motion.div
        className="absolute top-1/3 left-1/6 text-blue-400/15 text-2xl font-mono select-none"
        animate={{
          y: [0, -25, 0],
          opacity: [0.15, 0.4, 0.15],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {'</>'}
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/5 text-purple-400/15 text-xl font-mono select-none"
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.45, 0.2],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      >
        {'{}'}
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-3/4 text-cyan-400/15 text-lg font-mono select-none"
        animate={{
          y: [0, -15, 0],
          opacity: [0.15, 0.35, 0.15],
          rotate: [0, 12, -12, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        }}
      >
        {'()'}
      </motion.div>
    </div>
  );
};

export default BackgroundAnimations;