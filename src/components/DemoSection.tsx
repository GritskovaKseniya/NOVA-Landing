import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Calendar, Brain, Heart, CheckCircle2 } from 'lucide-react';

export function DemoSection() {
  const [activeDemo, setActiveDemo] = useState<'schedule' | 'mood' | 'ai'>('schedule');

  const demos = {
    schedule: {
      title: "Smart Scheduling",
      description: "NOVA analyzes your productivity patterns and suggests optimal times for your tasks.",
      tasks: [
        { time: "09:00", task: "Deep Work Session", energy: "high", type: "focus" },
        { time: "11:30", task: "Team Meeting", energy: "medium", type: "collaboration" },
        { time: "14:00", task: "Creative Brainstorm", energy: "high", type: "creative" },
        { time: "16:00", task: "Email & Admin", energy: "low", type: "routine" },
      ]
    },
    mood: {
      title: "Mood Tracking",
      description: "Track your emotional state and let NOVA adapt your schedule accordingly.",
      moods: [
        { day: "Mon", mood: "energized", emoji: "😊", color: "bg-green-400" },
        { day: "Tue", mood: "focused", emoji: "🎯", color: "bg-blue-400" },
        { day: "Wed", mood: "creative", emoji: "✨", color: "bg-purple-400" },
        { day: "Thu", mood: "tired", emoji: "😴", color: "bg-orange-400" },
        { day: "Fri", mood: "balanced", emoji: "🌟", color: "bg-pink-400" },
      ]
    },
    ai: {
      title: "AI Suggestions",
      description: "Get personalized recommendations based on your habits and goals.",
      suggestions: [
        { text: "Take a 15-minute break after 90 minutes of focused work", type: "break" },
        { text: "Schedule important decisions in the morning when energy is highest", type: "timing" },
        { text: "Block 30 minutes for tomorrow's planning before end of day", type: "planning" },
        { text: "Move gym session to morning - you're more consistent then", type: "habit" },
      ]
    }
  };

  return (
    <section id="demo-section" className="py-32 px-6 bg-gradient-to-b from-white via-blue-50/20 to-purple-50/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            See NOVA in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how NOVA's intelligent features work together to optimize your day.
          </p>
        </motion.div>

        {/* Demo Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button
            onClick={() => setActiveDemo('schedule')}
            variant={activeDemo === 'schedule' ? 'default' : 'outline'}
            className={`rounded-full ${activeDemo === 'schedule' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : ''}`}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Schedule
          </Button>
          <Button
            onClick={() => setActiveDemo('mood')}
            variant={activeDemo === 'mood' ? 'default' : 'outline'}
            className={`rounded-full ${activeDemo === 'mood' ? 'bg-gradient-to-r from-pink-600 to-rose-600' : ''}`}
          >
            <Heart className="w-4 h-4 mr-2" />
            Mood
          </Button>
          <Button
            onClick={() => setActiveDemo('ai')}
            variant={activeDemo === 'ai' ? 'default' : 'outline'}
            className={`rounded-full ${activeDemo === 'ai' ? 'bg-gradient-to-r from-purple-600 to-violet-600' : ''}`}
          >
            <Brain className="w-4 h-4 mr-2" />
            AI Insights
          </Button>
        </motion.div>

        {/* Demo Content */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-white/60 shadow-xl">
            <h3 className="text-3xl text-gray-900 mb-3">
              {demos[activeDemo].title}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {demos[activeDemo].description}
            </p>

            {/* Schedule Demo */}
            {activeDemo === 'schedule' && (
              <div className="space-y-4">
                {demos.schedule.tasks.map((task, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl border border-blue-100/50"
                  >
                    <div className="text-sm text-gray-500 min-w-[60px]">{task.time}</div>
                    <div className="flex-1">
                      <div className="text-gray-900">{task.task}</div>
                      <div className="text-sm text-gray-500 capitalize">{task.type} · {task.energy} energy</div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Mood Demo */}
            {activeDemo === 'mood' && (
              <div className="flex flex-wrap gap-4 justify-center">
                {demos.mood.moods.map((mood, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-md border border-gray-100 min-w-[120px]"
                  >
                    <div className={`w-16 h-16 ${mood.color} rounded-full flex items-center justify-center text-3xl`}>
                      {mood.emoji}
                    </div>
                    <div className="text-sm text-gray-500">{mood.day}</div>
                    <div className="text-sm text-gray-700 capitalize">{mood.mood}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* AI Demo */}
            {activeDemo === 'ai' && (
              <div className="space-y-4">
                {demos.ai.suggestions.map((suggestion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-2xl border border-purple-100/50"
                  >
                    <Brain className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 text-gray-700">{suggestion.text}</div>
                  </motion.div>
                ))}
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
