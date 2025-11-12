import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, CheckCircle2, Sparkles, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { useState } from 'react';

type ModalType = 'journey' | 'learn' | null;

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
}

export function InfoModal({ isOpen, onClose, type }: InfoModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-lg border-white/60">
        <DialogHeader>
          <DialogTitle className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {type === 'journey' ? 'Start Your Journey' : 'Learn More About NOVA'}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 py-4"
            >
              {type === 'journey' ? (
                <>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700">
                      Join the NOVA early access program and be among the first to experience intelligent planning.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-gray-900">Early Access</div>
                          <div className="text-sm text-gray-600">Be first to try new features</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-4 bg-purple-50/50 rounded-xl">
                        <Sparkles className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-gray-900">Premium Features</div>
                          <div className="text-sm text-gray-600">Free during beta period</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-4 bg-pink-50/50 rounded-xl">
                        <Users className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-gray-900">Community Access</div>
                          <div className="text-sm text-gray-600">Connect with beta testers</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-4 bg-green-50/50 rounded-xl">
                        <Mail className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-gray-900">Direct Support</div>
                          <div className="text-sm text-gray-600">Priority customer care</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">Email Address</label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full rounded-xl"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl"
                    >
                      Join Waitlist
                    </Button>
                  </form>
                </>
              ) : (
                <>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl text-gray-900 mb-3">What Makes NOVA Different?</h3>
                      <p className="text-gray-700 leading-relaxed">
                        NOVA is more than a calendar app. It's an intelligent companion that learns from your habits, respects your energy levels, and helps you find balance between productivity and well-being.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                        <h4 className="text-gray-900 mb-2">🧠 Adaptive Intelligence</h4>
                        <p className="text-sm text-gray-700">
                          NOVA learns when you work best, when you need breaks, and adapts your schedule automatically.
                        </p>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                        <h4 className="text-gray-900 mb-2">💜 Emotional Awareness</h4>
                        <p className="text-sm text-gray-700">
                          Track your mood and let NOVA adjust your day to support your mental and emotional health.
                        </p>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                        <h4 className="text-gray-900 mb-2">✨ Habit Formation</h4>
                        <p className="text-sm text-gray-700">
                          Build lasting routines naturally with AI-powered insights and gentle nudges.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 text-center mb-4">
                        Want to stay updated on our progress?
                      </p>
                      <form onSubmit={handleSubmit} className="flex gap-2">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="flex-1 rounded-xl"
                        />
                        <Button
                          type="submit"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl"
                        >
                          Subscribe
                        </Button>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-2xl text-gray-900 mb-2">You're on the list!</h3>
              <p className="text-gray-600">We'll be in touch soon with exclusive updates.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
