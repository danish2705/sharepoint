import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Zap, Target } from "lucide-react";

export function SuccessStories() {
  const stories = [
    {
      icon: Target,
      title: "Unified Operating Model",
      description: "How process alignment across regions reduced duplication by 30% and improved operational efficiency through strategic architecture implementation.",
      color: "from-[#00B097] to-[#00C7A7]"
    },
    {
      icon: Zap,
      title: "Digital Capability Map",
      description: "Leveraging architecture insights to guide digital investments effectively, resulting in accelerated digital transformation initiatives.",
      color: "from-[#00A88D] to-[#00B89F]"
    },
    {
      icon: TrendingUp,
      title: "Agile Governance Model",
      description: "Embedding agility and traceability within enterprise planning cycles, enabling faster decision-making and improved outcomes.",
      color: "from-[#009B84] to-[#00A88D]"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-[#f7faf9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl mb-4 text-[#00B097]">Success Stories</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00B097] to-[#00C7A7] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore how business architecture has enabled transformation across our organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${story.color} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <story.icon className="w-7 h-7 text-white" />
                </motion.div>
                
                <h3 className="text-xl mb-4 text-gray-900 group-hover:text-[#00B097] transition-colors">
                  {story.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {story.description}
                </p>

                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-[#00B097] group-hover:text-[#00C7A7] transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
