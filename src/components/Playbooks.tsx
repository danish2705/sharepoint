import { motion } from "motion/react";
import { BookOpen, ArrowRight, Download, Eye, Star } from "lucide-react";

interface PlaybooksProps {
  onNavigateToDetail?: () => void;
}

export function Playbooks({ onNavigateToDetail }: PlaybooksProps) {
  const playbooksList = [
    { name: "Strategy Alignment", downloads: "234", status: "Updated" },
    { name: "Process Modeling", downloads: "189", status: "New" },
    { name: "Governance Framework", downloads: "156", status: "Popular" }
  ];

  return (
    <section id="playbooks" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-[#f7faf9] rounded-2xl p-12 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00B097] to-[#00C7A7]"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B097] via-[#00C7A7] to-transparent"></div>
          
          {/* Decorative pattern */}
          <div className="absolute right-8 top-8 opacity-5">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-[#00B097] rounded-full"></div>
              ))}
            </div>
          </div>
          
          <div className="flex items-start gap-6 mb-8">
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="shrink-0 w-16 h-16 bg-gradient-to-br from-[#00B097] to-[#00C7A7] rounded-xl flex items-center justify-center shadow-lg"
            >
              <BookOpen className="w-8 h-8 text-white" />
            </motion.div>
            
            <div className="flex-1">
              <h2 className="text-3xl mb-4 text-[#00B097]">Playbooks</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#00B097] to-transparent mb-6"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our playbooks bring together core frameworks, implementation guides, and process blueprints 
                that drive transformation. They form the foundation for consistency, alignment, and 
                scalability across business functions.
              </p>
            </div>
          </div>

          {/* Playbooks preview */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {playbooksList.map((playbook, index) => (
              <motion.div
                key={playbook.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-[#00B097] transition-all group/card"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm text-gray-900 group-hover/card:text-[#00B097] transition-colors">
                    {playbook.name}
                  </h4>
                  <span className="text-xs px-2 py-0.5 bg-[#e6f7f5] text-[#00B097] rounded-full">
                    {playbook.status}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    <span>{playbook.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>Quick view</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            onClick={onNavigateToDetail}
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B097] to-[#00C7A7] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 group"
          >
            View All Playbooks
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
