import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { InfoModal } from './InfoModal';

export function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.9], [0.9, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'journey' | 'learn' | null>(null);

  const openModal = (type: 'journey' | 'learn') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 min-h-screen flex items-center">
        <motion.div 
          className="max-w-4xl mx-auto text-center w-full"
          style={{ opacity, scale, y }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
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
                <motion.h3 
                  className="text-6xl sm:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                >
                  NOVA
                </motion.h3>
                
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.p 
              className="text-2xl sm:text-3xl text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Get Early Access
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join thousands of people who are reclaiming their time and energy. Be among the first to experience the future of personal planning.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button 
                size="lg"
                onClick={() => openModal('journey')}
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
                onClick={() => openModal('learn')}
                className="rounded-full px-8 py-6 border-2 border-gray-300 hover:border-purple-400 hover:bg-purple-50/50 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Learn More
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 pt-12 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500">
              © 2025 NOVA. Designed for mindful productivity.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <InfoModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setModalType(null);
        }}
        type={modalType}
      />
    </>
  );
}