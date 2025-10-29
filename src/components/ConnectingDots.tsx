import { motion } from "motion/react";
import { Network, ArrowRight } from "lucide-react";

interface ConnectingDotsProps {
  onNavigateToDetail?: () => void;
}

export function ConnectingDots({ onNavigateToDetail }: ConnectingDotsProps) {
  return (
    <section id="connect" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
        >
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00B097] to-[#00C7A7]"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B097] via-[#00C7A7] to-transparent"></div>
          
          {/* Background pattern */}
          <div className="absolute right-0 top-0 w-64 h-64 opacity-5">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="50" cy="50" r="3" fill="#00B097"/>
              <circle cx="150" cy="50" r="3" fill="#00B097"/>
              <circle cx="100" cy="150" r="3" fill="#00B097"/>
              <line x1="50" y1="50" x2="150" y2="50" stroke="#00B097" strokeWidth="1"/>
              <line x1="50" y1="50" x2="100" y2="150" stroke="#00B097" strokeWidth="1"/>
              <line x1="150" y1="50" x2="100" y2="150" stroke="#00B097" strokeWidth="1"/>
            </svg>
          </div>
          
          <div className="flex items-start gap-6">
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="shrink-0 w-16 h-16 bg-gradient-to-br from-[#00B097] to-[#00C7A7] rounded-xl flex items-center justify-center shadow-lg"
            >
              <Network className="w-8 h-8 text-white" />
            </motion.div>
            
            <div className="flex-1">
              <h2 className="text-3xl mb-4 text-[#00B097]">Connecting Dots</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#00B097] to-transparent mb-6"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Transformation, Architecture, and Operations — all aligned through the TMO, EA/SA, and TCO 
                collaboration model. Together, they ensure strategic goals are executed efficiently and 
                consistently.
              </p>
              
              <motion.button
                onClick={onNavigateToDetail}
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B097] to-[#00C7A7] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 group"
              >
                Discover the Connections
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
