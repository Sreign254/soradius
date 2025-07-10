"use client"

import { motion } from "framer-motion"
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  Factory,
  Truck,
  Zap,
  Home,
  Briefcase,
  Wifi,
  BookOpen,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Award,
  Target,
  BarChart3,
  Star,
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const featuredIndustries = [
  {
    name: "Healthcare",
    icon: HeartPulse,
    description: "Transforming patient care through innovative digital health solutions and secure data management.",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    solutions: [
      "Electronic Health Records (EHR) Systems",
      "Telemedicine & Remote Care Platforms",
      "Medical Device Integration & IoT",
      "Health Analytics & AI Diagnostics",
      "Patient Portal & Mobile Apps",
      "HIPAA-Compliant Cloud Solutions",
    ],
    caseStudy: {
      title: "Telemedicine Platform Success",
      description: "Developed a HIPAA-compliant telemedicine platform reducing patient wait times by 65%",
      metrics: [
        { label: "Patient Wait Time Reduction", value: "65%" },
        { label: "Healthcare Providers", value: "200+" },
        { label: "Monthly Consultations", value: "50K+" },
      ],
    },
    technologies: ["React", "Node.js", "AWS", "MongoDB", "WebRTC"],
    compliance: ["HIPAA", "GDPR", "FDA"],
  },
  {
    name: "Financial Services",
    icon: Landmark,
    description: "Secure, scalable solutions for modern financial institutions with advanced security and compliance.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    solutions: [
      "Digital Banking & Mobile Apps",
      "Fraud Detection & AI Security",
      "Blockchain & Cryptocurrency Solutions",
      "Wealth Management Platforms",
      "Payment Processing Systems",
      "RegTech & Compliance Tools",
    ],
    caseStudy: {
      title: "Mobile Banking Revolution",
      description: "Built a mobile banking app processing $2B+ in transactions annually with 99.9% uptime",
      metrics: [
        { label: "Annual Transactions", value: "$2B+" },
        { label: "Active Users", value: "500K+" },
        { label: "System Uptime", value: "99.9%" },
      ],
    },
    technologies: ["React Native", "Java", "PostgreSQL", "Kubernetes", "Blockchain"],
    compliance: ["PCI DSS", "SOX", "Basel III"],
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Elevating customer experiences with omnichannel solutions and AI-powered personalization.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    solutions: [
      "E-commerce Platforms & Marketplaces",
      "Inventory Management & Supply Chain",
      "AI-powered Recommendation Engines",
      "Point of Sale (POS) Systems",
      "Customer Analytics & CRM",
      "Omnichannel Experience Platforms",
    ],
    caseStudy: {
      title: "Personalized Shopping Experience",
      description:
        "Created a personalized shopping platform increasing conversions by 40% and customer retention by 35%",
      metrics: [
        { label: "Conversion Increase", value: "40%" },
        { label: "Customer Retention", value: "35%" },
        { label: "Revenue Growth", value: "60%" },
      ],
    },
    technologies: ["Next.js", "Python", "Redis", "Elasticsearch", "AWS"],
    compliance: ["GDPR", "PCI DSS", "CCPA"],
  },
]

const otherIndustries = [
  {
    name: "Manufacturing",
    icon: Factory,
    highlights: "Industry 4.0, IoT Integration, Supply Chain Optimization, Predictive Maintenance",
    color: "from-orange-500 to-red-500",
    projects: "120+",
    expertise: "Smart Factory Solutions",
  },
  {
    name: "Logistics & Transportation",
    icon: Truck,
    highlights: "Fleet Management, Route Optimization, Real-time Tracking, Last-mile Delivery",
    color: "from-purple-500 to-pink-500",
    projects: "80+",
    expertise: "Supply Chain Tech",
  },
  {
    name: "Energy & Utilities",
    icon: Zap,
    highlights: "Smart Grids, Resource Management, Predictive Maintenance, Renewable Energy",
    color: "from-yellow-500 to-orange-500",
    projects: "60+",
    expertise: "Smart Grid Solutions",
  },
  {
    name: "Real Estate",
    icon: Home,
    highlights: "Property Management, Virtual Tours, Transaction Platforms, Market Analytics",
    color: "from-indigo-500 to-purple-500",
    projects: "90+",
    expertise: "PropTech Solutions",
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    highlights: "CRM Systems, Automation Tools, Client Portals, Project Management",
    color: "from-teal-500 to-cyan-500",
    projects: "150+",
    expertise: "Business Automation",
  },
  {
    name: "Telecommunications",
    icon: Wifi,
    highlights: "5G Solutions, Network Management, Customer Analytics, IoT Connectivity",
    color: "from-blue-500 to-indigo-500",
    projects: "40+",
    expertise: "Telecom Infrastructure",
  },
  {
    name: "Education",
    icon: BookOpen,
    highlights: "LMS Platforms, Virtual Classrooms, Student Information Systems, EdTech",
    color: "from-green-500 to-teal-500",
    projects: "70+",
    expertise: "Educational Technology",
  },
  {
    name: "Government",
    icon: Users,
    highlights: "Public Portals, Data Security, Process Automation, Citizen Services",
    color: "from-gray-500 to-slate-500",
    projects: "30+",
    expertise: "GovTech Solutions",
  },
  {
    name: "Travel & Hospitality",
    icon: Globe,
    highlights: "Booking Engines, Property Management, Guest Experience, Revenue Management",
    color: "from-pink-500 to-rose-500",
    projects: "50+",
    expertise: "Travel Technology",
  },
]

const industryStats = [
  { number: "12+", label: "Industries Served", icon: Target },
  { number: "500+", label: "Projects Delivered", icon: Award },
  { number: "98%", label: "Client Satisfaction", icon: Star },
  { number: "24/7", label: "Support Available", icon: Shield },
]

const whyChooseUs = [
  {
    title: "Deep Domain Expertise",
    description: "Our teams have specialized knowledge in each industry's unique challenges and regulations.",
    icon: Award,
  },
  {
    title: "Proven Track Record",
    description: "500+ successful projects across diverse industries with measurable business impact.",
    icon: TrendingUp,
  },
  {
    title: "Compliance & Security",
    description: "We ensure all solutions meet industry-specific compliance requirements and security standards.",
    icon: Shield,
  },
  {
    title: "Scalable Solutions",
    description: "Our solutions grow with your business, from startup to enterprise scale.",
    icon: BarChart3,
  },
]

export default function ProfessionalIndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.1),transparent_50%)]" />
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
              <Target className="w-4 h-4" />
              Industry-Specific Solutions
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Tailored Solutions for{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Deep domain expertise and proven solutions designed for your industry's unique challenges and
              opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Industries
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {industryStats.map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Featured Industries</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep domain expertise and proven success in these key sectors with measurable business impact.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {featuredIndustries.map((industry, index) => (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className={`${industry.bgColor} rounded-3xl p-8 border border-white/50`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${industry.color} shadow-lg`}>
                        <industry.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{industry.description}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          Our Solutions
                        </h4>
                        <ul className="space-y-2">
                          {industry.solutions.slice(0, 3).map((solution, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <span className="text-blue-600 mt-1">•</span>
                              <span className="text-sm">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-purple-600" />
                          Technologies & Compliance
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {industry.technologies.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-white rounded-lg text-xs font-medium text-gray-700 border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {industry.compliance.map((comp, i) => (
                            <span
                              key={i}
                              className={`px-2 py-1 bg-gradient-to-r ${industry.color} text-white rounded-lg text-xs font-medium`}
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study Card */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-green-100">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <h4 className="font-bold text-gray-900">Case Study</h4>
                    </div>

                    <h5 className="text-xl font-semibold text-gray-900 mb-3">{industry.caseStudy.title}</h5>
                    <p className="text-gray-600 mb-6 leading-relaxed">{industry.caseStudy.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {industry.caseStudy.metrics.map((metric, i) => (
                        <div key={i} className="text-center p-4 bg-gray-50 rounded-2xl">
                          <div
                            className={`text-2xl font-bold bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}
                          >
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-blue-600 font-medium mt-6 group"
                    >
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">More Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our adaptable solutions and proven methodologies work across diverse sectors and business models.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {otherIndustries.map((industry, index) => (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-2xl bg-gradient-to-r ${industry.color} shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                    <p className="text-sm text-gray-500">{industry.expertise}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{industry.highlights}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">{industry.projects} Projects</span>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-blue-600 font-medium cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Soradius</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our industry-focused approach ensures solutions that truly understand and address your sector's unique
              needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Industry+Solutions"
            alt="Industry solutions"
            fill
            className="object-cover"
          />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See Your Industry?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our adaptable approach and proven methodologies mean we can create custom solutions for any sector. Let's
              discuss your unique requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Our Experts
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
