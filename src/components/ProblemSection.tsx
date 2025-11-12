import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const problems = [
  "Too many tasks.",
  "Too little time.",
  "No balance."
];

export function ProblemSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={ref} className="py-32 px-6 min-h-screen flex items-center">
      <motion.div 
        className="max-w-4xl mx-auto w-full"
        style={{ opacity, y, scale }}
      >
        <div className="space-y-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px", amount: 0.5 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="text-4xl sm:text-5xl lg:text-6xl text-gray-400"
            >
              {problem}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}