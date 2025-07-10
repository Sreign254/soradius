"use client"

import { motion } from "framer-motion"
import {
  Search,
  Layout,
  Code,
  TestTube2,
  Rocket,
  ShieldCheck,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  Zap,
  Award,
  Globe,
  DollarSign,
  Shield,
  BookOpen,
  Settings,
  Plus,
  Minus,
  MapPin,
  TrendingUp,
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"

// ... (previous processSteps, methodologies, and stats arrays remain the same)

const processSteps = [
  {
    title: "Discovery & Analysis",
    icon: Search,
    description:
      "We begin by thoroughly understanding your business needs, goals, and challenges through detailed consultations and strategic analysis.",
    duration: "1-2 weeks",
    activities: [
      "Stakeholder interviews and requirement gathering",
      "Market research & competitive analysis",
      "Technical feasibility assessment",
      "Risk analysis and mitigation planning",
      "Project scope and timeline definition",
    ],
    deliverables: ["Project Specification Document", "Technical Requirements", "Project Roadmap"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Planning & Design",
    icon: Layout,
    description:
      "Our team creates comprehensive architecture and design plans tailored to your specifications with user-centered approach.",
    duration: "2-3 weeks",
    activities: [
      "System architecture and database design",
      "UI/UX wireframing and prototyping",
      "Technology stack selection and evaluation",
      "Security architecture planning",
      "Integration strategy development",
    ],
    deliverables: ["Technical Design Document", "UI/UX Mockups", "Architecture Diagrams"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    title: "Development",
    icon: Code,
    description:
      "Our expert developers build your solution using agile methodologies, ensuring maximum flexibility and quality.",
    duration: "4-12 weeks",
    activities: [
      "Sprint planning and backlog management",
      "Feature development with code reviews",
      "Continuous integration and deployment",
      "Regular client demos and feedback",
      "Documentation and code optimization",
    ],
    deliverables: ["Functional Software Product", "Source Code", "Technical Documentation"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    title: "Quality Assurance",
    icon: TestTube2,
    description:
      "We rigorously test every component to ensure reliability, security, and performance meet the highest standards.",
    duration: "1-2 weeks",
    activities: [
      "Automated and manual testing suites",
      "Security vulnerability assessments",
      "Performance and load testing",
      "Cross-platform compatibility testing",
      "User acceptance testing coordination",
    ],
    deliverables: ["Test Reports", "Bug Fixes", "Performance Metrics"],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    title: "Deployment",
    icon: Rocket,
    description:
      "We handle the complete deployment process with minimal downtime and maximum reliability using modern DevOps practices.",
    duration: "3-5 days",
    activities: [
      "Production environment setup",
      "Database migration and optimization",
      "SSL certificates and security configuration",
      "Load balancing and scaling setup",
      "Monitoring and alerting implementation",
    ],
    deliverables: ["Live Production System", "Deployment Guide", "Monitoring Dashboard"],
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Maintenance & Support",
    icon: ShieldCheck,
    description:
      "Our relationship continues with ongoing support, monitoring, and iterative improvements to ensure long-term success.",
    duration: "Ongoing",
    activities: [
      "24/7 system monitoring and alerts",
      "Regular security updates and patches",
      "Performance optimization and scaling",
      "Feature enhancements and improvements",
      "Technical support and troubleshooting",
    ],
    deliverables: ["SLA-based Support", "Monthly Reports", "System Updates"],
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
  },
]

const successFactors = [
  {
    title: "Scoping",
    icon: Target,
    description: "Our approach to requirements engineering, feasibility assessment, and scope management.",
    details: [
      "Comprehensive requirements gathering workshops",
      "Feasibility studies and risk assessments",
      "Scope change management protocols",
      "Scope creep prevention strategies",
    ],
  },
  {
    title: "Cost Estimation",
    icon: DollarSign,
    description: "Transparent pricing with detailed cost breakdowns and optimization strategies.",
    details: [
      "Top-down and bottom-up estimation methods",
      "Risk-adjusted cost modeling",
      "Cost optimization best practices",
      "Regular budget reviews and adjustments",
    ],
  },
  {
    title: "Quality Management",
    icon: Award,
    description: "ISO 9001-inspired quality controls and continuous improvement processes.",
    details: [
      "Quality gates at each development stage",
      "Code review and testing protocols",
      "Performance and security benchmarks",
      "Client satisfaction tracking",
    ],
  },
  {
    title: "Collaboration",
    icon: Users,
    description: "Structured collaboration flow with transparent communication and regular updates.",
    details: [
      "Daily standups and weekly progress reports",
      "Client portal for real-time project tracking",
      "Collaborative planning and feedback sessions",
      "Agile ceremonies and retrospectives",
    ],
  },
  {
    title: "Security Management",
    icon: Shield,
    description: "Comprehensive security measures following international standards and best practices.",
    details: [
      "Security-by-design architecture",
      "Regular security audits and penetration testing",
      "Data encryption and access controls",
      "Compliance with GDPR, HIPAA, and local regulations",
    ],
  },
  {
    title: "Knowledge Management",
    icon: BookOpen,
    description: "Systematic knowledge transfer and comprehensive documentation practices.",
    details: [
      "Technical documentation and user guides",
      "Knowledge base and training materials",
      "Code documentation and API references",
      "Handover sessions and training programs",
    ],
  },
]

const companyFacts = {
  experience: "6 years in IT, specializing in modern web development",
  services:
    "Custom software development, web applications, mobile apps, cloud solutions, AI integration, DevOps, and digital transformation",
  projects: "500+ successful projects, 200+ client testimonials",
  locations: "Headquarters: Nairobi, Kenya. Regional offices: Lagos, Nigeria and Cape Town, South Africa",
  team: "50+ IT specialists, 30+ web developers. Backend developers skilled in Node.js, Python, .NET, Java, Go. Frontend developers working with React, Next.js, Vue.js, Angular, TypeScript. 10+ senior PMs and Scrum masters. 70% of our engineers are senior-level specialists",
  recognitions:
    "Kenya's Top Tech Company 2024, Africa's Fastest Growing Tech Startup, Top 10 African Software Development Companies, Google Cloud Partner, AWS Select Partner",
  standards:
    "Following ISO 27001 and ISO 9001 standards. Compliance experts ensuring adherence to GDPR, local data protection laws, and industry-specific regulations",
}

const faqs = [
  {
    question: "How long does a typical web development project take?",
    answer:
      "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during the planning phase and keep you updated throughout the process.",
  },
  {
    question: "What is your approach to project communication?",
    answer:
      "We believe in transparent communication with daily standups, weekly progress reports, and regular client demos. You'll have access to our project portal for real-time updates and can schedule calls with our team anytime.",
  },
  {
    question: "How do you handle changes in project scope?",
    answer:
      "We have a structured change management process. Any scope changes are documented, assessed for impact on timeline and budget, and require client approval before implementation. This ensures transparency and prevents scope creep.",
  },
  {
    question: "What happens after the project is completed?",
    answer:
      "We provide comprehensive handover documentation, training sessions, and ongoing support options. Our maintenance packages include regular updates, security patches, and technical support to ensure your solution continues to perform optimally.",
  },
  {
    question: "How do you ensure the security of our project?",
    answer:
      "Security is built into every stage of our process. We follow security-by-design principles, conduct regular security audits, implement encryption and access controls, and ensure compliance with relevant data protection regulations.",
  },
  {
    question: "Can you work with our existing team or systems?",
    answer:
      "We're experienced in collaborating with in-house teams and integrating with existing systems. We can work as an extension of your team or provide consultation to enhance your current development processes.",
  },
]

export default function EnhancedProcessPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [hoveredFactor, setHoveredFactor] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Globe className="w-4 h-4" />
              Proven Development Process
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Development{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Process
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              A proven methodology that delivers quality software solutions on time and within budget, every single
              time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soradius at a Glance: Key Facts You Need to Know
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leading the digital transformation across Africa with world-class technology solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Years of Experience</h3>
              </div>
              <p className="text-gray-600">{companyFacts.experience}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Services</h3>
              </div>
              <p className="text-gray-600">{companyFacts.services}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Case Studies & Testimonials</h3>
              </div>
              <p className="text-gray-600">{companyFacts.projects}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">HQ & Offices</h3>
              </div>
              <p className="text-gray-600">{companyFacts.locations}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Team Size</h3>
              </div>
              <p className="text-gray-600">{companyFacts.team}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Recognitions</h3>
              </div>
              <p className="text-gray-600">{companyFacts.recognitions}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Ensure Success in Web Development Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Apart from technical expertise, many other factors influence project success and software quality.
              Soradius's teams approach all of them seriously.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {successFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredFactor(index)}
                onHoverEnd={() => setHoveredFactor(null)}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110 transition-transform">
                    <factor.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{factor.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{factor.description}</p>

                <ul className="space-y-2">
                  {factor.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Steps - keeping the existing section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our 6-Step Development Lifecycle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent, collaborative, and designed for success at every stage of your project journey.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 rounded-full" />

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 shadow-lg z-10" />

                  {/* Content Card */}
                  <div
                    className={`flex-1 ${step.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 backdrop-blur-sm`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mt-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{step.duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{step.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          Key Activities
                        </h4>
                        <ul className="space-y-2">
                          {step.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <span className="text-blue-600 mt-1">•</span>
                              <span className="text-sm">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-purple-600" />
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-2xl shadow-lg">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our development process and approach.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {activeFaq === index ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeFaq === index ? "auto" : 0,
                    opacity: activeFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Glowing CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Glow Effect */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Team+Working"
            alt="Team working on project"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 via-orange-900/80 to-yellow-900/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Glowing Effects */}
          <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-transparent to-transparent animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm text-yellow-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-yellow-400/30"
            >
              <Zap className="w-4 h-4" />
              Ready to Start?
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We are excited to discuss <span className="text-yellow-300 drop-shadow-lg">your web project!</span>
            </h2>

            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Let's talk and make your vision a reality with our proven development process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 glow-button"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-yellow-400 text-yellow-300 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400/10 backdrop-blur-sm transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          .glow-button {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
            animation: glow 2s ease-in-out infinite alternate;
          }
          
          @keyframes glow {
            from {
              box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
            }
            to {
              box-shadow: 0 0 30px rgba(251, 191, 36, 0.6);
            }
          }
          
          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
        `}</style>
      </section>
    </div>
  )
}
