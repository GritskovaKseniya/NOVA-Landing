import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Calendar, Heart, Sparkles, Brain } from 'lucide-react';
import { Card } from './ui/card';

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI learns your patterns and suggests optimal times for tasks based on your energy levels and focus.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Mood Tracking",
    description: "Track how you feel throughout the day. NOVA adapts your schedule to support your emotional well-being.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Brain,
    title: "AI Suggestions",
    description: "Get intelligent recommendations for breaks, priorities, and time-blocking that actually work for you.",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: Sparkles,
    title: "Habit Intelligence",
    description: "Build better routines naturally. NOVA recognizes your patterns and helps reinforce positive habits.",
    gradient: "from-amber-500 to-orange-500"
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: false, margin: "-100px", amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="relative p-8 h-full bg-white/60 backdrop-blur-sm border-white/60 hover:bg-white/80 transition-all duration-300 overflow-hidden group">
        {/* Glow effect on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />
        
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        <h3 className="text-2xl text-gray-900 mb-3">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>

        {/* Animated corner accent */}
        <motion.div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300`}
        />
      </Card>
    </motion.div>
  );
}

export function FeaturesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);

  return (
    <section ref={ref} className="py-32 px-6 min-h-screen flex items-center">
      <motion.div 
        className="max-w-7xl mx-auto w-full"
        style={{ opacity, y, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            Designed for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              how you think
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every feature is built to understand you better, not overwhelm you with options.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}