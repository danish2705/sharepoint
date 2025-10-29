import { motion } from "motion/react";
import { FileText, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

export function Resources() {
  const resources = [
    {
      icon: FileText,
      title: "Process Templates",
      description: "Download ready-to-use templates for modeling and documentation",
      color: "from-[#00B097] to-[#00C7A7]"
    },
    {
      icon: BookOpen,
      title: "Guides & Frameworks",
      description: "Reference materials for capability mapping and governance models",
      color: "from-[#00A88D] to-[#00B89F]"
    },
    {
      icon: GraduationCap,
      title: "Training Access",
      description: "Get links to iGrafx training, webinars, and knowledge sessions",
      color: "from-[#009B84] to-[#00A88D]"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl mb-4 text-[#00B097]">Resources</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00B097] to-[#00C7A7] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Access templates, tools, and knowledge resources to accelerate your business architecture journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <resource.icon className="w-7 h-7 text-white" />
                </motion.div>
                
                <h3 className="text-xl mb-3 text-gray-900 group-hover:text-[#00B097] transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {resource.description}
                </p>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-[#00B097] group-hover:text-[#00C7A7] transition-colors"
                >
                  Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
