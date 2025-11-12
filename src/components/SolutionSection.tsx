import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SolutionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-100, 0, 0, -50]);
  const imageX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);
  const imageY = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, -30, 0]);

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            style={{ opacity, x: textX, scale }}
            className="space-y-6"
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              Your day,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                reimagined
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              NOVA analyzes your schedule, habits, and emotional patterns to create a personalized plan that balances productivity with well-being.
            </motion.p>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              It's not about cramming more in — it's about making space for what truly matters.
            </motion.p>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            style={{ opacity, x: imageX, scale }}
            className="relative"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative z-10"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border border-white/60 p-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1715321835688-831f4767cf93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2Mjg4MDgwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="NOVA App Interface"
                  className="w-full rounded-[2.5rem] shadow-lg"
                />
              </div>
            </motion.div>

            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}