import { motion } from "motion/react";
import { useEffect } from "react";
import {
  BookOpen,
  Download,
  ExternalLink,
  ChevronRight,
  Home,
  ArrowLeft,
  FileText,
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  Link2,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

interface PlaybooksDetailProps {
  onNavigateBack: () => void;
}

export function PlaybooksDetail({ onNavigateBack }: PlaybooksDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const chapters = [
    {
      id: "framework",
      number: "01",
      title: "Framework",
      description:
        "Foundational principles and methodologies for business architecture implementation",
      content:
        "Our comprehensive framework establishes the core principles, methodologies, and standards for business architecture. It provides a structured approach to align business capabilities with strategic objectives, ensuring consistency across the organization.",
      detailedOverview:
        "The Business Architecture Framework serves as the cornerstone for all architectural initiatives across the enterprise. It defines how we approach strategic planning, capability modeling, value stream mapping, and organizational design. This framework is based on industry best practices from TOGAF, BIZBOK, and custom methodologies developed through years of enterprise transformation experience.",
      sections: [
        "Introduction to Business Architecture",
        "Core Principles and Standards",
        "Governance Models",
        "Implementation Guidelines",
      ],
      keyObjectives: [
        "Establish consistent architectural standards across the enterprise",
        "Align business capabilities with strategic goals and objectives",
        "Enable better decision-making through clear governance structures",
        "Facilitate communication between business and IT stakeholders",
      ],
      bestPractices: [
        "Start with clear business outcomes and work backwards to define capabilities",
        "Engage stakeholders early and often throughout the architecture process",
        "Use standardized modeling notations (ArchiMate, BPMN) for consistency",
        "Maintain a living architecture that evolves with business needs",
        "Document architecture decisions and rationale for future reference",
      ],
      relatedLinks: [
        { title: "TOGAF Framework Guide", url: "#" },
        { title: "BIZBOK Standard", url: "#" },
        { title: "Architecture Governance Board Charter", url: "#" },
      ],
      downloads: "156",
      lastUpdated: "Jan 10, 2025",
    },
    {
      id: "functional-blueprint",
      number: "02",
      title: "Functional Blueprint",
      description:
        "Detailed mapping of business functions and capabilities across the enterprise",
      content:
        "The Functional Blueprint provides a comprehensive view of all business functions, their relationships, and dependencies. It serves as the foundation for understanding how work gets done across the organization and identifies opportunities for optimization.",
      detailedOverview:
        "A Functional Blueprint is a visual and analytical representation of the enterprise's functional architecture. It maps out every significant business function, showing how they interconnect, share data, and contribute to value creation. This blueprint helps identify redundancies, gaps, and opportunities for consolidation or enhancement.",
      sections: [
        "Capability Mapping",
        "Function Analysis",
        "Dependency Modeling",
        "Integration Points",
      ],
      keyObjectives: [
        "Create a complete inventory of business capabilities and functions",
        "Identify functional redundancies and consolidation opportunities",
        "Map dependencies and integration requirements across functions",
        "Support make-vs-buy decisions with clear functional boundaries",
      ],
      bestPractices: [
        "Use a consistent capability model taxonomy across all business units",
        "Validate functional definitions with business owners and subject matter experts",
        "Maintain heat maps to show capability maturity and strategic importance",
        "Link capabilities to business outcomes and KPIs for measurability",
        "Review and update the blueprint quarterly to reflect organizational changes",
      ],
      relatedLinks: [
        { title: "Capability Model Template", url: "#" },
        { title: "Function Analysis Toolkit", url: "#" },
        { title: "Integration Patterns Library", url: "#" },
      ],
      downloads: "142",
      lastUpdated: "Jan 8, 2025",
    },
    {
      id: "value-chain",
      number: "03",
      title: "Value Chain Design Review Board",
      description:
        "Governance and review processes for value chain optimization",
      content:
        "The Value Chain Design Review Board oversees the strategic design and continuous improvement of our value chains. This chapter outlines the governance structure, review processes, and decision-making frameworks.",
      detailedOverview:
        "The Value Chain Design Review Board (VCDRB) is a governance body responsible for ensuring that value chains are optimally designed to deliver business outcomes. The board reviews proposed changes, approves major transformations, and ensures alignment with strategic priorities. It brings together senior leaders from business, technology, and operations to make informed decisions about value chain evolution.",
      sections: [
        "Board Charter and Composition",
        "Review Process Guidelines",
        "Decision Framework",
        "Success Metrics",
      ],
      keyObjectives: [
        "Ensure value chain designs align with strategic business objectives",
        "Approve significant changes to core value delivery processes",
        "Monitor value chain performance against defined metrics",
        "Facilitate cross-functional collaboration and decision-making",
      ],
      bestPractices: [
        "Hold regular board meetings (monthly or quarterly) with clear agendas",
        "Use data-driven decision criteria based on ROI, risk, and strategic fit",
        "Maintain a backlog of proposed value chain improvements prioritized by impact",
        "Document all decisions with clear rationale and expected outcomes",
        "Conduct post-implementation reviews to validate benefits realization",
      ],
      relatedLinks: [
        { title: "VCDRB Charter Document", url: "#" },
        { title: "Value Chain Assessment Framework", url: "#" },
        { title: "Decision Log and Archive", url: "#" },
      ],
      downloads: "128",
      lastUpdated: "Dec 20, 2024",
    },
    {
      id: "integrated-blueprint",
      number: "04",
      title: "Integrated Blueprint and Roadmap",
      description: "Strategic roadmap integrating all architectural components",
      content:
        "This chapter presents the integrated view of our business architecture and the strategic roadmap for its evolution. It connects capabilities, processes, and technology to deliver business value.",
      detailedOverview:
        "The Integrated Blueprint brings together all aspects of business architecture into a cohesive, actionable roadmap. It shows how capabilities mature over time, how processes evolve, and how technology investments align with business priorities. This integrated view enables portfolio planning, resource allocation, and strategic execution across the enterprise.",
      sections: [
        "Integration Strategy",
        "Roadmap Development",
        "Milestone Planning",
        "Change Management",
      ],
      keyObjectives: [
        "Create a unified view of architectural evolution across all domains",
        "Align technology investments with business capability development",
        "Define clear milestones and success criteria for transformation initiatives",
        "Enable effective change management through phased implementation",
      ],
      bestPractices: [
        "Use multi-year roadmaps with quarterly review and update cycles",
        "Align roadmap phases with fiscal planning and budgeting cycles",
        "Identify and manage dependencies between concurrent initiatives",
        "Build in flexibility to accommodate changing business priorities",
        "Communicate roadmap progress through executive dashboards and scorecards",
      ],
      relatedLinks: [
        { title: "Roadmap Development Guide", url: "#" },
        { title: "Capability Maturity Assessment", url: "#" },
        { title: "Change Management Playbook", url: "#" },
      ],
      downloads: "134",
      lastUpdated: "Jan 5, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7faf9]">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={onNavigateBack}
              className="flex items-center gap-2 text-gray-600 hover:text-[#00B097] transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#00B097]">Playbooks</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00B097] to-[#00C7A7] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.button
            onClick={onNavigateBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portal
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-6"
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-5xl text-white mb-4">Playbooks</h1>
              <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
                Comprehensive guides and frameworks that drive transformation.
                Our playbooks bring together core frameworks, implementation
                guides, and process blueprints that ensure consistency,
                alignment, and scalability across business functions.
              </p>
              <div className="flex items-center gap-6 mt-6 text-white/90">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <span>4 Chapters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  <span>560+ Downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Active Community</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <Tabs defaultValue="framework" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {chapters.map((chapter) => (
                <TabsTrigger
                  key={chapter.id}
                  value={chapter.id}
                  className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#00B097] data-[state=active]:to-[#00C7A7] data-[state=active]:text-white hover:bg-[#f7faf9] rounded-lg transition-all py-4 px-6"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs opacity-75">
                      Chapter {chapter.number}
                    </span>
                    <span className="hidden md:inline">{chapter.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {chapters.map((chapter) => (
              <TabsContent key={chapter.id} value={chapter.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Chapter Header Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge
                            variant="outline"
                            className="text-[#00B097] border-[#00B097]"
                          >
                            Chapter {chapter.number}
                          </Badge>
                          <Badge variant="outline" className="text-gray-600">
                            Updated {chapter.lastUpdated}
                          </Badge>
                        </div>
                        <h2 className="text-4xl text-gray-900 mb-4">
                          {chapter.title}
                        </h2>
                        <p className="text-xl text-gray-600">
                          {chapter.description}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <button className="p-3 bg-[#e6f7f5] hover:bg-[#d1f0ec] rounded-xl transition-colors">
                          <Download className="w-6 h-6 text-[#00B097]" />
                        </button>
                        <button className="p-3 bg-[#e6f7f5] hover:bg-[#d1f0ec] rounded-xl transition-colors">
                          <ExternalLink className="w-6 h-6 text-[#00B097]" />
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Download className="w-5 h-5" />
                        <span>{chapter.downloads} downloads</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FileText className="w-5 h-5" />
                        <span>{chapter.sections.length} sections</span>
                      </div>
                    </div>
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Detailed Overview */}
                      <div className="bg-white rounded-xl p-8 border border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl text-gray-900">Overview</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {chapter.content}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {chapter.detailedOverview}
                        </p>
                      </div>

                      {/* Key Sections */}
                      <div className="bg-white rounded-xl p-8 border border-gray-200">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl text-gray-900">
                            Key Sections
                          </h3>
                        </div>
                        <div className="space-y-3">
                          {chapter.sections.map((section, index) => (
                            <motion.div
                              key={section}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                              className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#f7faf9] to-white hover:from-[#e6f7f5] hover:to-white rounded-lg transition-all cursor-pointer group border border-gray-100"
                            >
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center text-white shrink-0">
                                {index + 1}
                              </div>
                              <span className="flex-1 text-gray-700 group-hover:text-[#00B097] transition-colors">
                                {section}
                              </span>
                              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#00B097] group-hover:translate-x-1 transition-all" />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Best Practices */}
                      <div className="bg-gradient-to-br from-[#e6f7f5] to-white rounded-xl p-8 border border-[#00B097]/20">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center">
                            <Lightbulb className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl text-gray-900">
                            Best Practices
                          </h3>
                        </div>
                        <div className="space-y-4">
                          {chapter.bestPractices.map((practice, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="w-5 h-5 text-[#00B097] shrink-0 mt-0.5" />
                              <p className="text-gray-700 leading-relaxed">
                                {practice}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Key Objectives */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                          <Target className="w-5 h-5 text-[#00B097]" />
                          <h4 className="text-lg text-gray-900">
                            Key Objectives
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          {chapter.keyObjectives.map((objective, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <div className="w-5 h-5 rounded-full bg-[#e6f7f5] flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-2 h-2 rounded-full bg-[#00B097]"></div>
                              </div>
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Related Links */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                          <Link2 className="w-5 h-5 text-[#00B097]" />
                          <h4 className="text-lg text-gray-900">
                            Related Resources
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {chapter.relatedLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              className="flex items-center justify-between p-3 bg-[#f7faf9] hover:bg-[#e6f7f5] rounded-lg transition-colors group"
                            >
                              <span className="text-sm text-gray-700 group-hover:text-[#00B097]">
                                {link.title}
                              </span>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#00B097]" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <button className="w-full bg-gradient-to-r from-[#00B097] to-[#00C7A7] text-white py-4 px-6 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                          <Download className="w-5 h-5" />
                          Download Chapter
                        </button>
                        <button className="w-full border-2 border-[#00B097] text-[#00B097] py-4 px-6 rounded-xl hover:bg-[#e6f7f5] transition-all flex items-center justify-center gap-2">
                          <ExternalLink className="w-5 h-5" />
                          View Online
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
