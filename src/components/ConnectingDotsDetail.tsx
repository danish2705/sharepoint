import { motion } from "motion/react";
import { useEffect } from "react";
import {
  Network,
  GitBranch,
  DollarSign,
  Target,
  ChevronRight,
  ExternalLink,
  Home,
  ArrowLeft,
  Mail,
  CheckCircle2,
  Lightbulb,
  Link2,
  Users,
  TrendingUp,
  FileText,
  Workflow,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

interface ConnectingDotsDetailProps {
  onNavigateBack: () => void;
}

export function ConnectingDotsDetail({
  onNavigateBack,
}: ConnectingDotsDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      id: "tmo",
      title: "TMO",
      fullTitle: "Transformation Management Office",
      icon: Target,
      description:
        "Driving organizational transformation through strategic planning and execution",
      content:
        "The Transformation Management Office (TMO) coordinates and oversees enterprise-wide transformation initiatives. It ensures strategic alignment, manages dependencies, and tracks value realization across all transformation programs.",
      detailedOverview:
        "The TMO serves as the central orchestration point for all enterprise transformation activities. It provides governance, standards, and support to ensure transformation initiatives are aligned with strategic objectives, properly resourced, and successfully executed. The TMO maintains a portfolio view of all transformations, identifies synergies, resolves conflicts, and ensures benefits are realized.",
      responsibilities: [
        "Strategic transformation planning and roadmapping",
        "Portfolio governance and prioritization",
        "Change management and organizational readiness",
        "Benefits realization tracking and reporting",
      ],
      keyObjectives: [
        "Align all transformation initiatives with enterprise strategy",
        "Optimize resource allocation across the transformation portfolio",
        "Ensure consistent transformation methodology and governance",
        "Maximize value delivery and benefits realization",
      ],
      collaborationModel:
        "The TMO works closely with Business Architecture to ensure transformations are grounded in capability-based planning. Regular touchpoints include quarterly portfolio reviews, architecture validation sessions, and benefits tracking workshops. The TMO relies on Business Architecture to provide the capability model, value streams, and functional blueprints that inform transformation design.",
      bestPractices: [
        "Maintain a single source of truth for all transformation initiatives",
        "Use stage-gate governance with clear decision criteria",
        "Engage sponsors early and maintain executive visibility",
        "Track benefits from baseline through post-implementation",
        "Build organizational change capability alongside delivery",
      ],
      keyMetrics: [
        { label: "Active Transformations", value: "12" },
        { label: "Value Delivered", value: "$25M" },
        { label: "Success Rate", value: "94%" },
      ],
      contacts: [
        {
          name: "Jennifer Lee",
          role: "Director, TMO",
          email: "jennifer.lee@company.com",
        },
        {
          name: "Robert Taylor",
          role: "Program Manager",
          email: "robert.taylor@company.com",
        },
      ],
      resources: [
        { title: "Transformation Lifecycle Guide", url: "#" },
        { title: "Portfolio Dashboard", url: "#" },
        { title: "Benefits Realization Framework", url: "#" },
      ],
    },
    {
      id: "ea-sa",
      title: "EA/SA",
      fullTitle: "Enterprise Architecture / Solution Architecture",
      icon: GitBranch,
      description:
        "Defining architectural standards and enabling solution design excellence",
      content:
        "Enterprise Architecture (EA) and Solution Architecture (SA) teams work together to create cohesive, scalable, and future-proof technology landscapes. They bridge business strategy with technical implementation.",
      detailedOverview:
        "EA/SA provides the architectural framework and standards that guide all technology decisions across the enterprise. Enterprise Architecture focuses on the big picture—defining target states, technology strategies, and architectural principles. Solution Architecture translates these into specific designs for projects and initiatives. Together, they ensure technical coherence, reusability, and alignment with business needs.",
      responsibilities: [
        "Enterprise architecture framework and standards",
        "Solution design patterns and best practices",
        "Technology roadmap and platform strategy",
        "Architecture review board governance",
      ],
      keyObjectives: [
        "Establish and maintain enterprise-wide architectural standards",
        "Enable rapid, consistent solution design through patterns and frameworks",
        "Reduce technical debt and increase reusability",
        "Bridge business strategy and technology implementation",
      ],
      collaborationModel:
        "EA/SA collaborates extensively with Business Architecture to ensure technical architectures support business capabilities. The teams participate in joint architecture reviews, roadmap planning sessions, and design workshops. Business Architecture provides the 'what' (capabilities and processes), while EA/SA defines the 'how' (technical implementation).",
      bestPractices: [
        "Maintain an architecture repository with patterns, standards, and decisions",
        "Conduct regular architecture reviews for all major initiatives",
        "Use architecture principles to guide technology decisions",
        "Build reference architectures for common solution patterns",
        "Foster a community of practice across architects",
      ],
      keyMetrics: [
        { label: "Architecture Reviews", value: "156/year" },
        { label: "Reusable Patterns", value: "45" },
        { label: "Platform Coverage", value: "98%" },
      ],
      contacts: [
        {
          name: "Michael Chen",
          role: "Chief Architect",
          email: "michael.chen@company.com",
        },
        {
          name: "Sarah Johnson",
          role: "Lead Solution Architect",
          email: "sarah.johnson@company.com",
        },
      ],
      resources: [
        { title: "Architecture Standards Library", url: "#" },
        { title: "Solution Design Patterns", url: "#" },
        { title: "Technology Radar", url: "#" },
      ],
    },
    {
      id: "tco",
      title: "TCO",
      fullTitle: "Total Cost of Ownership",
      icon: DollarSign,
      description:
        "Optimizing technology investments through comprehensive cost analysis",
      content:
        "The TCO practice provides holistic view of technology costs across their entire lifecycle. It enables informed decision-making by considering all direct and indirect costs associated with technology assets and services.",
      detailedOverview:
        "TCO analysis goes beyond initial purchase price to consider the full lifecycle costs of technology assets—including implementation, operation, maintenance, support, and eventual decommissioning. This practice enables accurate cost modeling, vendor comparison, and investment optimization. TCO insights inform make-vs-buy decisions, cloud migration strategies, and technology portfolio rationalization.",
      responsibilities: [
        "Cost modeling and analysis frameworks",
        "Technology investment optimization",
        "Vendor and contract management",
        "Cost transparency and reporting",
      ],
      keyObjectives: [
        "Provide accurate, comprehensive cost models for technology decisions",
        "Identify cost optimization opportunities across the technology portfolio",
        "Enable fair comparison between technology alternatives",
        "Increase cost transparency and accountability",
      ],
      collaborationModel:
        "TCO works with Business Architecture to understand which capabilities drive technology costs and where optimization opportunities exist. Business Architecture's capability model helps allocate costs appropriately and identify capability-based optimization strategies. Joint workshops analyze cost drivers and develop business cases for technology investments.",
      bestPractices: [
        "Use standardized TCO templates and calculation methods",
        "Include all cost categories: capital, operating, hidden, and opportunity costs",
        "Update cost models regularly with actual data",
        "Benchmark costs against industry standards",
        "Link TCO analysis to capability-based planning",
      ],
      keyMetrics: [
        { label: "Cost Savings", value: "$8.5M" },
        { label: "Assets Tracked", value: "2,500+" },
        { label: "Optimization Projects", value: "28" },
      ],
      contacts: [
        {
          name: "David Martinez",
          role: "TCO Lead",
          email: "david.martinez@company.com",
        },
        {
          name: "Emma Wilson",
          role: "Cost Analyst",
          email: "emma.wilson@company.com",
        },
      ],
      resources: [
        { title: "TCO Calculation Templates", url: "#" },
        { title: "Cost Optimization Playbook", url: "#" },
        { title: "Vendor Comparison Framework", url: "#" },
      ],
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
            <span className="text-[#00B097]">Connecting the Dots</span>
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
              <Network className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-5xl text-white mb-4">Connecting the Dots</h1>
              <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
                Integrated collaboration for strategic execution.
                Transformation, Architecture, and Operations work together
                through TMO, EA/SA, and TCO to ensure strategic goals are
                executed efficiently, consistently, and cost-effectively.
              </p>
              <div className="flex items-center gap-6 mt-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Workflow className="w-5 h-5" />
                  <span>Integrated Approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Strategic Alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Cross-Functional Collaboration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Diagram Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-gradient-to-br from-[#f7faf9] to-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl text-gray-900 mb-6 text-center">
              How We Connect
            </h2>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center mx-auto mb-3">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-1">TMO</h3>
                <p className="text-sm text-gray-600 max-w-[200px]">
                  Strategic transformation orchestration
                </p>
              </div>
              <ChevronRight className="w-8 h-8 text-[#00B097] hidden md:block" />
              <div className="text-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center mx-auto mb-3">
                  <GitBranch className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-1">EA/SA</h3>
                <p className="text-sm text-gray-600 max-w-[200px]">
                  Technical architecture & design
                </p>
              </div>
              <ChevronRight className="w-8 h-8 text-[#00B097] hidden md:block" />
              <div className="text-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-1">TCO</h3>
                <p className="text-sm text-gray-600 max-w-[200px]">
                  Cost optimization & value
                </p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
              Business Architecture serves as the common language connecting
              these disciplines, providing capability models, value streams, and
              functional blueprints that inform transformation planning,
              solution design, and cost analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <Tabs defaultValue="tmo" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#00B097] data-[state=active]:to-[#00C7A7] data-[state=active]:text-white hover:bg-[#f7faf9] rounded-lg transition-all py-4 px-6"
                >
                  <div className="flex items-center gap-2">
                    <section.icon className="w-5 h-5" />
                    <span>{section.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Section Header */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center">
                        <section.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge
                            variant="outline"
                            className="text-[#00B097] border-[#00B097]"
                          >
                            {section.title}
                          </Badge>
                        </div>
                        <h2 className="text-4xl text-gray-900 mb-3">
                          {section.fullTitle}
                        </h2>
                        <p className="text-xl text-gray-600">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                      {section.keyMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="text-center p-5 bg-gradient-to-br from-[#f7faf9] to-white rounded-xl border border-gray-100"
                        >
                          <div className="text-4xl text-[#00B097] mb-2">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-500">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Overview */}
                      <div className="bg-white rounded-xl p-8 border border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl text-gray-900">Overview</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {section.content}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {section.detailedOverview}
                        </p>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="bg-white rounded-xl p-8 border border-gray-200">
                        <h3 className="text-2xl text-gray-900 mb-6">
                          Key Responsibilities
                        </h3>
                        <div className="space-y-4">
                          {section.responsibilities.map(
                            (responsibility, index) => (
                              <motion.div
                                key={responsibility}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#f7faf9] to-white rounded-lg border border-gray-100"
                              >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                                  ✓
                                </div>
                                <span className="text-gray-700 flex-1 leading-relaxed">
                                  {responsibility}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Collaboration Model */}
                      <div className="bg-gradient-to-br from-[#e6f7f5] to-white rounded-xl p-8 border border-[#00B097]/20">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center">
                            <Workflow className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl text-gray-900">
                            How We Collaborate with Business Architecture
                          </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {section.collaborationModel}
                        </p>
                      </div>

                      {/* Best Practices */}
                      <div className="bg-white rounded-xl p-8 border border-gray-200">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center">
                            <Lightbulb className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl text-gray-900">
                            Best Practices
                          </h3>
                        </div>
                        <div className="space-y-4">
                          {section.bestPractices.map((practice, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#00B097] shrink-0 mt-0.5" />
                              <p className="text-gray-700 leading-relaxed">
                                {practice}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Contacts */}
                      <div className="bg-white rounded-xl p-8 border border-gray-200">
                        <h3 className="text-2xl text-gray-900 mb-6">
                          Key Contacts
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {section.contacts.map((contact, index) => (
                            <motion.div
                              key={contact.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#f7faf9] to-white hover:from-[#e6f7f5] hover:to-white rounded-lg transition-all border border-gray-100"
                            >
                              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center text-white shrink-0">
                                {contact.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-gray-900 mb-1">
                                  {contact.name}
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                  {contact.role}
                                </p>
                                <a
                                  href={`mailto:${contact.email}`}
                                  className="text-sm text-[#00B097] hover:underline flex items-center gap-1"
                                >
                                  <Mail className="w-4 h-4" />
                                  {contact.email}
                                </a>
                              </div>
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
                          {section.keyObjectives.map((objective, index) => (
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

                      {/* Related Resources */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                          <Link2 className="w-5 h-5 text-[#00B097]" />
                          <h4 className="text-lg text-gray-900">Resources</h4>
                        </div>
                        <div className="space-y-2">
                          {section.resources.map((resource, index) => (
                            <a
                              key={index}
                              href={resource.url}
                              className="flex items-center justify-between p-3 bg-[#f7faf9] hover:bg-[#e6f7f5] rounded-lg transition-colors group"
                            >
                              <span className="text-sm text-gray-700 group-hover:text-[#00B097]">
                                {resource.title}
                              </span>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#00B097]" />
                            </a>
                          ))}
                        </div>
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
