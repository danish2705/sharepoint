import { Search, Bell, User, Menu, ChevronRight, Home } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  onNavigateHome?: () => void;
}

export function Header({ onNavigateHome }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Playbooks", href: "#playbooks" },
    { label: "Community", href: "#community" },
    { label: "Connecting Dots", href: "#connect" },
    { label: "Stories", href: "#stories" },
    { label: "Resources", href: "#resources" },
    { label: "Help", href: "#faq" },
  ];

  const handleNavigation = (href: string) => {
    if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage first
      navigate("/");
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on homepage, just scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={onNavigateHome}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#00B097] to-[#00C7A7] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
            </div>
            <span className="text-[#00B097]">Business Architecture</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                className="px-4 py-2 text-gray-700 hover:text-[#00B097] hover:bg-[#e6f7f5] rounded-lg transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00B097] group-hover:w-3/4 transition-all duration-300"></span>
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="p-2 hover:bg-[#e6f7f5] rounded-lg transition-colors"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.3 }}
              className="p-2 hover:bg-[#e6f7f5] rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5 text-gray-600" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="p-2 hover:bg-[#e6f7f5] rounded-lg transition-colors"
            >
              <User className="w-5 h-5 text-gray-600" />
            </motion.button>
            <button
              className="md:hidden p-2 hover:bg-[#e6f7f5] rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-[#00B097] hover:bg-[#e6f7f5] rounded-lg transition-colors"
                onClick={() => {
                  handleNavigation(item.href);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
