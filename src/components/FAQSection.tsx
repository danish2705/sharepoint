import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle, Send, Mail, User as UserIcon, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";

export function FAQSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Query submitted successfully! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const faqs = [
    {
      question: "How do I request tool access?",
      answer: "Submit a request through the ServiceNow portal under \"Tool Access → iGrafx\". The approval process typically takes 2-3 business days, and you'll receive confirmation once access is granted."
    },
    {
      question: "Who can I contact for support?",
      answer: "Reach out to the Business Architecture support team at ba-support@company.com. Our team is available Monday through Friday, 9 AM to 5 PM, and responds to queries within 24 hours."
    },
    {
      question: "Where can I find iGrafx training materials?",
      answer: "Visit the Resources → Training Access section for available materials and links. You'll find video tutorials, documentation, webinar recordings, and hands-on practice exercises."
    },
    {
      question: "What are the key BA Pillars?",
      answer: "Our Business Architecture Pillars include Strategy & Vision, Capability & Engagement, Data & Insights, Process & Standards, and Learning & Development. Each pillar represents a critical focus area driving organizational excellence."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#f7faf9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B097] to-[#00C7A7] mb-5 shadow-lg"
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl mb-4 text-[#00B097]">Need Help?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00B097] to-[#00C7A7] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Find answers to commonly asked questions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6 text-gray-900">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-white border border-gray-100 rounded-xl px-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group data-[state=open]:shadow-xl"
                  >
                    <AccordionTrigger className="hover:no-underline py-5 text-left group-hover:text-[#00B097] transition-colors">
                      <span className="text-gray-900 group-hover:text-[#00B097] transition-colors">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Submit Query Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-white to-[#f7faf9] rounded-2xl p-8 shadow-lg border border-gray-100 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-gray-900">Submit Your Query</h3>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <UserIcon className="w-4 h-4 text-[#00B097]" />
                      <span>Your Name</span>
                    </div>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="border-gray-200 focus:border-[#00B097] focus:ring-[#00B097]"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4 text-[#00B097]" />
                      <span>Email Address</span>
                    </div>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    required
                    className="border-gray-200 focus:border-[#00B097] focus:ring-[#00B097]"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <HelpCircle className="w-4 h-4 text-[#00B097]" />
                      <span>Subject</span>
                    </div>
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief description of your query"
                    required
                    className="border-gray-200 focus:border-[#00B097] focus:ring-[#00B097]"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-[#00B097]" />
                      <span>Message</span>
                    </div>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your question or issue in detail..."
                    required
                    rows={5}
                    className="border-gray-200 focus:border-[#00B097] focus:ring-[#00B097] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00B097] to-[#00C7A7] hover:from-[#00A88D] hover:to-[#00B89F] text-white py-6 rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Submit Query
                    </span>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Alternatively, email us at{" "}
                  <a href="mailto:ba-support@company.com" className="text-[#00B097] hover:underline">
                    ba-support@company.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
