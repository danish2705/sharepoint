import { motion } from "motion/react";
import { Users, ArrowRight } from "lucide-react";

interface CommunityProps {
  onNavigateToDetail?: () => void;
}

export function Community({ onNavigateToDetail }: CommunityProps) {
  const employees = [
    { name: "Anita Sharma", image: "https://randomuser.me/api/portraits/women/45.jpg" },
    { name: "Rahul Mehta", image: "https://randomuser.me/api/portraits/men/36.jpg" },
    { name: "Priya Das", image: "https://randomuser.me/api/portraits/women/64.jpg" },
    { name: "Arjun Patel", image: "https://randomuser.me/api/portraits/men/78.jpg" },
    { name: "Sneha Kumar", image: "https://randomuser.me/api/portraits/women/32.jpg" },
    { name: "Vikram Singh", image: "https://randomuser.me/api/portraits/men/52.jpg" }
  ];

  return (
    <section id="community" className="py-20 bg-[#f7faf9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100 relative overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00B097] to-[#00C7A7]"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B097] via-[#00C7A7] to-transparent"></div>
          
          <div className="flex items-start gap-6 mb-8">
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="shrink-0 w-16 h-16 bg-gradient-to-br from-[#00B097] to-[#00C7A7] rounded-xl flex items-center justify-center shadow-lg"
            >
              <Users className="w-8 h-8 text-white" />
            </motion.div>
            
            <div className="flex-1">
              <h2 className="text-3xl mb-4 text-[#00B097]">DBPM Community</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#00B097] to-transparent mb-6"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                The DBPM Community connects practitioners and leaders who model, measure, and optimize 
                enterprise processes. It's where collaboration meets capability — driving learning and 
                innovation across teams.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {employees.map((employee, index) => (
              <motion.div
                key={employee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="relative mb-3 mx-auto w-fit">
                  <div className="w-20 h-20 rounded-full border-3 border-[#00B097] overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:border-[#00C7A7] relative">
                    <img 
                      src={employee.image} 
                      alt={employee.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Online indicator */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#00B097] rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 group-hover:text-[#00B097] transition-colors">
                  {employee.name}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            onClick={onNavigateToDetail}
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B097] to-[#00C7A7] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 group"
          >
            Meet the Community
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
