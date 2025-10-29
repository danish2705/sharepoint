import { motion } from "motion/react";
import { Mail, Linkedin, MessageSquare } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-[#00B097] to-[#00A88D] text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
              </div>
              <h4 className="text-white">BA Portal</h4>
            </div>
            <p className="text-[#eafffa] text-sm leading-relaxed">
              Your central hub for Business Architecture resources, collaboration, and excellence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#playbooks" className="text-[#eafffa] hover:text-white transition-colors hover:translate-x-1 inline-block">Playbooks</a></li>
              <li><a href="#community" className="text-[#eafffa] hover:text-white transition-colors hover:translate-x-1 inline-block">Community</a></li>
              <li><a href="#connect" className="text-[#eafffa] hover:text-white transition-colors hover:translate-x-1 inline-block">Connecting Dots</a></li>
              <li><a href="#resources" className="text-[#eafffa] hover:text-white transition-colors hover:translate-x-1 inline-block">Resources</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-white mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#faq" className="text-[#eafffa] hover:text-white transition-colors hover:translate-x-1 inline-block">Help Center</a></li>
              <li><a href="#" className="text-[#eafffa] hover:text-white transition-colors hover:translate-x-1 inline-block">Contact Us</a></li>
              <li><a href="#faq" className="text-[#eafffa] hover:text-white transition-colors hover:translate-x-1 inline-block">FAQs</a></li>
              <li><a href="#" className="text-[#eafffa] hover:text-white transition-colors hover:translate-x-1 inline-block">Feedback</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="text-[#eafffa] text-sm">
              Stay connected with our community
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-8 border-t border-white/20 text-center text-sm text-[#eafffa]"
        >
          <p>© {currentYear} Business Architecture Portal. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
