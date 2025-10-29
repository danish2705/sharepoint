import { motion } from "motion/react";
import { useEffect } from "react";
import {
  Users,
  Calendar,
  Video,
  Star,
  MapPin,
  Clock,
  ChevronRight,
  Home,
  ArrowLeft,
  Mail,
  Award,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  Link2,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

interface CommunityDetailProps {
  onNavigateBack: () => void;
}

export function CommunityDetail({ onNavigateBack }: CommunityDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      id: "whos-who",
      title: "Who's Who",
      icon: Users,
      description:
        "Directory of key stakeholders and experts in the DBPM community",
      content:
        "Connect with business architecture leaders, process modelers, and capability owners across the organization. This directory helps you find the right experts for collaboration and knowledge sharing.",
      detailedOverview:
        "The Who's Who directory is your gateway to connecting with experts across the enterprise. Our community spans multiple geographies, business units, and functional areas, bringing together diverse perspectives and deep expertise in business process modeling, capability management, and enterprise transformation.",
      members: [
        {
          name: "Sarah Mitchell",
          role: "Chief Architect",
          expertise: "Enterprise Architecture",
          location: "New York",
          bio: "15+ years leading enterprise transformation initiatives",
        },
        {
          name: "James Chen",
          role: "Process Lead",
          expertise: "Process Modeling",
          location: "San Francisco",
          bio: "Expert in BPMN and process optimization",
        },
        {
          name: "Maria Garcia",
          role: "Capability Owner",
          expertise: "Digital Strategy",
          location: "London",
          bio: "Driving digital transformation across EMEA",
        },
        {
          name: "David Kumar",
          role: "Sr. Architect",
          expertise: "Integration",
          location: "Singapore",
          bio: "Specializing in API and integration architecture",
        },
        {
          name: "Lisa Anderson",
          role: "Business Analyst",
          expertise: "Requirements Engineering",
          location: "Toronto",
          bio: "Expert in business analysis and stakeholder management",
        },
        {
          name: "Robert Taylor",
          role: "Solution Architect",
          expertise: "Cloud Architecture",
          location: "Sydney",
          bio: "Cloud-first architecture and modernization",
        },
      ],
      stats: { members: "500+", countries: "25", teams: "45" },
      keyBenefits: [
        "Direct access to subject matter experts across all business domains",
        "Cross-functional networking and collaboration opportunities",
        "Mentorship programs pairing junior and senior practitioners",
        "Community-driven knowledge base and best practices repository",
      ],
      resources: [
        { title: "Community Directory Search", url: "#" },
        { title: "Expertise Map by Domain", url: "#" },
        { title: "Contact Guidelines", url: "#" },
      ],
    },
    {
      id: "capability-leaders",
      title: "Capability Leaders Forum",
      icon: Star,
      description: "Strategic forum for capability owners and business leaders",
      content:
        "A collaborative space where capability leaders align on strategic priorities, share best practices, and drive cross-functional initiatives. Regular forums facilitate decision-making and knowledge exchange.",
      detailedOverview:
        "The Capability Leaders Forum serves as the strategic nerve center for capability owners across the enterprise. This forum brings together leaders who own specific business capabilities to discuss roadmaps, share insights, resolve dependencies, and make collective decisions about capability evolution. Monthly meetings and quarterly strategic sessions ensure continuous alignment.",
      upcomingMeetings: [
        {
          title: "Q1 Strategy Alignment",
          date: "Feb 5, 2025",
          time: "10:00 AM EST",
          attendees: 45,
          agenda: "Review Q4 achievements, align on Q1 priorities",
        },
        {
          title: "Capability Roadmap Review",
          date: "Feb 12, 2025",
          time: "2:00 PM EST",
          attendees: 38,
          agenda: "Multi-year capability roadmap presentation",
        },
        {
          title: "Innovation Showcase",
          date: "Feb 19, 2025",
          time: "11:00 AM EST",
          attendees: 52,
          agenda: "Demo emerging capabilities and pilot programs",
        },
        {
          title: "Cross-Capability Dependencies Workshop",
          date: "Feb 26, 2025",
          time: "9:00 AM EST",
          attendees: 42,
          agenda: "Identify and resolve capability dependencies",
        },
      ],
      stats: { meetings: "24/year", leaders: "65", initiatives: "12" },
      keyBenefits: [
        "Strategic alignment across all capability owners",
        "Early visibility into capability roadmaps and dependencies",
        "Collaborative decision-making on cross-capability initiatives",
        "Executive sponsorship and support for capability development",
      ],
      resources: [
        { title: "Forum Charter and Operating Model", url: "#" },
        { title: "Meeting Archive and Minutes", url: "#" },
        { title: "Capability Roadmap Dashboard", url: "#" },
      ],
    },
    {
      id: "modelers-office",
      title: "Modelers Office Hours",
      icon: Video,
      description: "Regular sessions for process modeling support and guidance",
      content:
        "Weekly office hours where process modelers can get hands-on help, troubleshoot modeling challenges, and learn best practices. Our expert team is available to support your modeling journey.",
      detailedOverview:
        "Modelers Office Hours provide dedicated time for practitioners to get expert guidance on their modeling challenges. Whether you're struggling with complex process flows, need help selecting the right modeling notation, or want feedback on your work, our team of experienced modelers is here to help. Sessions are conducted virtually with screen sharing for hands-on troubleshooting.",
      schedule: [
        {
          day: "Monday",
          time: "2:00 PM - 4:00 PM EST",
          host: "Alex Thompson",
          focus: "BPMN and process modeling fundamentals",
        },
        {
          day: "Wednesday",
          time: "10:00 AM - 12:00 PM EST",
          host: "Lisa Chen",
          focus: "Advanced modeling patterns and best practices",
        },
        {
          day: "Friday",
          time: "1:00 PM - 3:00 PM EST",
          host: "Michael Brown",
          focus: "Tool support and technical troubleshooting",
        },
      ],
      stats: {
        sessions: "156/year",
        participants: "300+",
        satisfaction: "4.8/5",
      },
      keyBenefits: [
        "One-on-one expert support for modeling challenges",
        "Learn advanced techniques and modeling patterns",
        "Get real-time feedback on your process models",
        "Build confidence in using modeling tools and standards",
      ],
      resources: [
        { title: "Office Hours Booking System", url: "#" },
        { title: "Modeling Standards Guide", url: "#" },
        { title: "FAQ and Common Issues", url: "#" },
      ],
    },
    {
      id: "value-stories",
      title: "DBPM Value Stories",
      icon: TrendingUp,
      description:
        "Success stories and value realization from DBPM initiatives",
      content:
        "Discover how business process modeling has delivered tangible value across the organization. These stories highlight improvements in efficiency, cost savings, and strategic alignment.",
      detailedOverview:
        "DBPM Value Stories showcase real-world examples of how business process modeling and business architecture have driven measurable business outcomes. Each story documents the challenge, approach, solution, and quantified results. These success stories serve as inspiration and proof points for the value of disciplined business architecture practices.",
      stories: [
        {
          title: "30% Efficiency Gain in Finance",
          impact: "$2.5M saved",
          category: "Process Optimization",
          description:
            "Streamlined accounts payable processes through process mining and optimization",
          timeline: "6 months",
          team: "Finance Operations",
        },
        {
          title: "Global Process Standardization",
          impact: "15 countries",
          category: "Standardization",
          description:
            "Harmonized order-to-cash processes across all regional operations",
          timeline: "12 months",
          team: "Global Operations",
        },
        {
          title: "Digital Transformation Enablement",
          impact: "20 initiatives",
          category: "Innovation",
          description:
            "Business architecture enabled portfolio of digital initiatives",
          timeline: "18 months",
          team: "Digital Strategy",
        },
        {
          title: "Compliance Automation",
          impact: "85% reduction",
          category: "Risk Management",
          description:
            "Automated compliance checking reduced manual review time by 85%",
          timeline: "9 months",
          team: "Risk & Compliance",
        },
        {
          title: "Customer Onboarding Redesign",
          impact: "50% faster",
          category: "Customer Experience",
          description:
            "Redesigned onboarding process cut time-to-value in half",
          timeline: "8 months",
          team: "Customer Success",
        },
        {
          title: "Supply Chain Visibility",
          impact: "$1.8M saved",
          category: "Operations",
          description:
            "End-to-end supply chain process modeling revealed optimization opportunities",
          timeline: "10 months",
          team: "Supply Chain",
        },
      ],
      stats: { stories: "45+", totalValue: "$15M+", teams: "30" },
      keyBenefits: [
        "Learn from successful implementations across the enterprise",
        "Understand ROI and value metrics for DBPM initiatives",
        "Get inspired by innovative approaches to common challenges",
        "Connect with teams who have delivered similar outcomes",
      ],
      resources: [
        { title: "Full Value Stories Library", url: "#" },
        { title: "ROI Calculator Tool", url: "#" },
        { title: "Submit Your Success Story", url: "#" },
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
            <span className="text-[#00B097]">DBPM Community</span>
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
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-5xl text-white mb-4">DBPM Community</h1>
              <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
                Connect, collaborate, and grow together. The DBPM Community
                brings together practitioners, leaders, and experts who model,
                measure, and optimize enterprise processes. Join a thriving
                network driving innovation and excellence.
              </p>
              <div className="flex items-center gap-6 mt-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>500+ Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>25 Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>45+ Success Stories</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <Tabs defaultValue="whos-who" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#00B097] data-[state=active]:to-[#00C7A7] data-[state=active]:text-white hover:bg-[#f7faf9] rounded-lg transition-all py-4 px-6"
                >
                  <div className="flex items-center gap-2">
                    <section.icon className="w-4 h-4" />
                    <span className="hidden md:inline">
                      {section.title.split(" ")[0]}
                    </span>
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
                        <h2 className="text-4xl text-gray-900 mb-3">
                          {section.title}
                        </h2>
                        <p className="text-xl text-gray-600">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                      {Object.entries(section.stats).map(([key, value]) => (
                        <div
                          key={key}
                          className="text-center p-4 bg-gradient-to-br from-[#f7faf9] to-white rounded-lg"
                        >
                          <div className="text-3xl text-[#00B097] mb-1">
                            {value}
                          </div>
                          <div className="text-sm text-gray-500 capitalize">
                            {key}
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
                        <h3 className="text-2xl text-gray-900 mb-4">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {section.content}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {section.detailedOverview}
                        </p>
                      </div>

                      {/* Dynamic Content */}
                      {section.id === "whos-who" && section.members && (
                        <div className="bg-white rounded-xl p-8 border border-gray-200">
                          <h3 className="text-2xl text-gray-900 mb-6">
                            Key Members
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {section.members.map((member, index) => (
                              <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#f7faf9] to-white hover:from-[#e6f7f5] hover:to-white rounded-lg transition-all cursor-pointer border border-gray-100"
                              >
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center text-white shrink-0">
                                  {member.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-gray-900 mb-1">
                                    {member.name}
                                  </h4>
                                  <p className="text-sm text-gray-600 mb-2">
                                    {member.role}
                                  </p>
                                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                                    <Badge
                                      variant="outline"
                                      className="text-[#00B097] border-[#00B097]"
                                    >
                                      {member.expertise}
                                    </Badge>
                                  </div>
                                  <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <MapPin className="w-3 h-3" />
                                    {member.location}
                                  </div>
                                  <p className="text-xs text-gray-500 mt-2">
                                    {member.bio}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {section.id === "capability-leaders" &&
                        section.upcomingMeetings && (
                          <div className="bg-white rounded-xl p-8 border border-gray-200">
                            <h3 className="text-2xl text-gray-900 mb-6">
                              Upcoming Meetings
                            </h3>
                            <div className="space-y-4">
                              {section.upcomingMeetings.map(
                                (meeting, index) => (
                                  <motion.div
                                    key={meeting.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-5 bg-gradient-to-r from-[#f7faf9] to-white hover:from-[#e6f7f5] hover:to-white rounded-lg transition-all cursor-pointer border border-gray-100 group"
                                  >
                                    <div className="flex items-start justify-between mb-3">
                                      <div className="flex items-start gap-4 flex-1">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center shrink-0">
                                          <Calendar className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="text-lg text-gray-900 group-hover:text-[#00B097] transition-colors mb-2">
                                            {meeting.title}
                                          </h4>
                                          <p className="text-sm text-gray-600 mb-3">
                                            {meeting.agenda}
                                          </p>
                                          <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <span>{meeting.date}</span>
                                            <span>•</span>
                                            <div className="flex items-center gap-1">
                                              <Clock className="w-4 h-4" />
                                              {meeting.time}
                                            </div>
                                            <span>•</span>
                                            <span>
                                              {meeting.attendees} attendees
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#00B097] group-hover:translate-x-1 transition-all" />
                                    </div>
                                  </motion.div>
                                )
                              )}
                            </div>
                          </div>
                        )}

                      {section.id === "modelers-office" && section.schedule && (
                        <div className="bg-white rounded-xl p-8 border border-gray-200">
                          <h3 className="text-2xl text-gray-900 mb-6">
                            Weekly Schedule
                          </h3>
                          <div className="space-y-4">
                            {section.schedule.map((slot, index) => (
                              <motion.div
                                key={slot.day}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-5 bg-gradient-to-r from-[#f7faf9] to-white rounded-lg border border-gray-100"
                              >
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-4">
                                    <div className="w-24">
                                      <div className="text-lg text-[#00B097]">
                                        {slot.day}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700">
                                      <Clock className="w-5 h-5 text-gray-400" />
                                      <span>{slot.time}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Video className="w-5 h-5" />
                                    <span>Host: {slot.host}</span>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600 pl-28">
                                  {slot.focus}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {section.id === "value-stories" && section.stories && (
                        <div className="bg-white rounded-xl p-8 border border-gray-200">
                          <h3 className="text-2xl text-gray-900 mb-6">
                            Featured Success Stories
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {section.stories.map((story, index) => (
                              <motion.div
                                key={story.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-5 bg-gradient-to-br from-[#f7faf9] to-white border border-gray-100 rounded-lg hover:border-[#00B097] hover:shadow-md transition-all cursor-pointer group"
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <h4 className="text-lg text-gray-900 group-hover:text-[#00B097] transition-colors flex-1">
                                    {story.title}
                                  </h4>
                                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#00B097] group-hover:translate-x-1 transition-all shrink-0" />
                                </div>
                                <p className="text-sm text-gray-600 mb-3">
                                  {story.description}
                                </p>
                                <div className="text-2xl text-[#00B097] mb-3">
                                  {story.impact}
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <Badge variant="outline" className="text-xs">
                                    {story.category}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {story.timeline}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {story.team}
                                  </Badge>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Benefits */}
                      <div className="bg-gradient-to-br from-[#e6f7f5] to-white rounded-xl p-8 border border-[#00B097]/20">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00B097] to-[#00C7A7] flex items-center justify-center">
                            <Lightbulb className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl text-gray-900">
                            Key Benefits
                          </h3>
                        </div>
                        <div className="space-y-4">
                          {section.keyBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#00B097] shrink-0 mt-0.5" />
                              <p className="text-gray-700 leading-relaxed">
                                {benefit}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Related Resources */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                          <Link2 className="w-5 h-5 text-[#00B097]" />
                          <h4 className="text-lg text-gray-900">
                            Related Resources
                          </h4>
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
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#00B097]" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Get Involved */}
                      <div className="bg-gradient-to-br from-[#00B097] to-[#00C7A7] rounded-xl p-6 text-white">
                        <MessageCircle className="w-10 h-10 mb-4" />
                        <h4 className="text-lg mb-2">Get Involved</h4>
                        <p className="text-sm text-white/90 mb-4">
                          Join our vibrant community and contribute to the
                          collective knowledge.
                        </p>
                        <button className="w-full bg-white text-[#00B097] py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                          <Mail className="w-4 h-4" />
                          Contact Community Team
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
