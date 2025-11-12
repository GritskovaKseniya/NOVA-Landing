import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900">
              Your day,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                reimagined
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              NOVA analyzes your schedule, habits, and emotional patterns to create a personalized plan that balances productivity with well-being.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              It's not about cramming more in — it's about making space for what truly matters.
            </p>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
