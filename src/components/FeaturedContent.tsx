import { motion } from "motion/react";
import { Clock, User as UserIcon, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FeaturedContent() {
  const featured = [
    {
      title: "Digital Transformation Roadmap 2025",
      excerpt: "Comprehensive guide to navigating our digital transformation journey with key milestones and success metrics.",
      author: "Sarah Mitchell",
      date: "2 days ago",
      readTime: "8 min read",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    },
    {
      title: "Enterprise Architecture Framework Update",
      excerpt: "Latest updates to our EA framework including new capability models and governance structures.",
      author: "James Chen",
      date: "5 days ago",
      readTime: "6 min read",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
    {
      title: "Process Excellence Best Practices",
      excerpt: "Learn from our top-performing teams about their approaches to process optimization and efficiency gains.",
      author: "Maria Garcia",
      date: "1 week ago",
      readTime: "5 min read",
      category: "Excellence",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-[#f7faf9]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl mb-3 text-[#00B097]">Featured Content</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00B097] to-[#00C7A7] mx-auto mb-4"></div>
          <p className="text-gray-600">Curated insights and updates from our architecture team</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#00B097] to-[#00C7A7]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#00B097] rounded-full text-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-3 text-gray-900 group-hover:text-[#00B097] transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <UserIcon className="w-3.5 h-3.5" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="#"
                  whileHover={{ x: 3 }}
                  className="inline-flex items-center gap-2 text-[#00B097] text-sm mt-4 group-hover:text-[#00C7A7] transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
