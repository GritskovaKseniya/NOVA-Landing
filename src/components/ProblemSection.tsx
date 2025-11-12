import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const problems = [
  "Too many tasks.",
  "Too little time.",
  "No balance."
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: "easeOut"
              }}
              className="text-4xl sm:text-5xl lg:text-6xl text-gray-400"
            >
              {problem}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
