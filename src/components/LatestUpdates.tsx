import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { TrendingUp, Award, Lightbulb, Users, Rocket, CheckCircle } from "lucide-react";

export function LatestUpdates() {
  const updates = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Business Architecture team awarded 'Excellence in Digital Transformation' for Q4 2024",
      date: "Jan 15, 2025",
      color: "from-[#00B097] to-[#00C7A7]"
    },
    {
      icon: TrendingUp,
      title: "Process Efficiency Milestone",
      description: "Achieved 35% reduction in process duplication across global operations",
      date: "Jan 10, 2025",
      color: "from-[#00A88D] to-[#00B89F]"
    },
    {
      icon: Lightbulb,
      title: "Innovation Framework Launch",
      description: "New innovation assessment framework deployed across all business units",
      date: "Jan 8, 2025",
      color: "from-[#009B84] to-[#00A88D]"
    },
    {
      icon: Users,
      title: "Community Growth",
      description: "DBPM Community surpasses 500 active members with 25+ countries represented",
      date: "Jan 5, 2025",
      color: "from-[#00B097] to-[#00C7A7]"
    },
    {
      icon: Rocket,
      title: "Strategic Alignment Success",
      description: "95% of strategic initiatives now mapped to enterprise capabilities",
      date: "Jan 3, 2025",
      color: "from-[#00A88D] to-[#00B89F]"
    },
    {
      icon: CheckCircle,
      title: "Playbook Completion",
      description: "Released comprehensive playbooks covering all five BA pillars",
      date: "Dec 28, 2024",
      color: "from-[#009B84] to-[#00A88D]"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [updates.length]);

  const currentUpdate = updates[currentIndex];

  return (
    <section className="py-12 mt-16 bg-gradient-to-r from-[#00B097] to-[#00C7A7] relative overflow-hidden">
      {/* Animated background effect */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
      />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm uppercase tracking-wide">Latest Updates</span>
          </div>
          
          {/* Progress indicator */}
          <div className="flex gap-1.5">
            {updates.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
          >
            <div className="flex items-start gap-6">
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${currentUpdate.color} flex items-center justify-center shadow-lg`}
              >
                <currentUpdate.icon className="w-8 h-8 text-white" />
              </motion.div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="text-2xl text-white"
                  >
                    {currentUpdate.title}
                  </motion.h3>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-sm text-white/70 shrink-0"
                  >
                    {currentUpdate.date}
                  </motion.span>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-white/90 text-lg"
                >
                  {currentUpdate.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Manual navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {updates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to update ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
