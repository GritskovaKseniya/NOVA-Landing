import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Logo */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <div className="relative">
              <h3 className="text-6xl sm:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
                NOVA
              </h3>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-2xl"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-2xl sm:text-3xl text-gray-700">
            Get Early Access
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of people who are reclaiming their time and energy. Be among the first to experience the future of personal planning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 border-2 border-gray-300 hover:border-purple-400 hover:bg-purple-50/50 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Learn More
              </span>
            </Button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500">
            © 2025 NOVA. Designed for mindful productivity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
