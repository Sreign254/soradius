"use client"

import { motion } from "framer-motion"
import {
  HeartPulse,
  Stethoscope,
  TestTube,
  Pill,
  Shield,
  Landmark,
  CreditCard,
  TrendingUp,
  Wallet,
  ShoppingCart,
  Store,
  Package,
  BarChart3,
  Smartphone,
  Factory,
  Cog,
  Truck,
  Settings,
  Database,
  FlaskConical,
  Fuel,
  Gauge,
  HardHat,
  Zap,
  GraduationCap,
  Building,
  Phone,
  Home,
  Briefcase,
  ExternalLink,
} from "lucide-react"

const industries = [
  {
    title: "Healthcare",
    description: "Comprehensive solutions for modern healthcare challenges",
    subcategories: [
      { name: "Healthcare providers", icon: HeartPulse, color: "bg-green-100 text-green-600" },
      { name: "Medical devices & diagnostics", icon: Stethoscope, color: "bg-green-100 text-green-600" },
      { name: "Medical laboratories", icon: TestTube, color: "bg-green-100 text-green-600" },
      { name: "Biotech & pharma", icon: Pill, color: "bg-green-100 text-green-600" },
      { name: "Healthcare payers", icon: Shield, color: "bg-green-100 text-green-600" },
    ],
  },
  {
    title: "Finance",
    description: "Secure and innovative financial technology solutions",
    subcategories: [
      { name: "Banking", icon: Landmark, color: "bg-blue-100 text-blue-600" },
      { name: "Insurance", icon: Shield, color: "bg-blue-100 text-blue-600" },
      { name: "Lending", icon: CreditCard, color: "bg-blue-100 text-blue-600" },
      { name: "Investment", icon: TrendingUp, color: "bg-blue-100 text-blue-600" },
      { name: "Payments", icon: Wallet, color: "bg-blue-100 text-blue-600" },
    ],
  },
  {
    title: "Retail",
    description: "Next-generation retail and e-commerce platforms",
    subcategories: [
      { name: "E-commerce platforms", icon: ShoppingCart, color: "bg-purple-100 text-purple-600" },
      { name: "Point of sale systems", icon: Store, color: "bg-purple-100 text-purple-600" },
      { name: "Inventory management", icon: Package, color: "bg-purple-100 text-purple-600" },
      { name: "Customer analytics", icon: BarChart3, color: "bg-purple-100 text-purple-600" },
      { name: "Omnichannel solutions", icon: Smartphone, color: "bg-purple-100 text-purple-600" },
    ],
  },
  {
    title: "Manufacturing",
    description: "Smart manufacturing and industrial automation",
    subcategories: [
      { name: "Industrial automation", icon: Factory, color: "bg-orange-100 text-orange-600" },
      { name: "Supply chain optimization", icon: Truck, color: "bg-orange-100 text-orange-600" },
      { name: "Quality control systems", icon: Settings, color: "bg-orange-100 text-orange-600" },
      { name: "Predictive maintenance", icon: Cog, color: "bg-orange-100 text-orange-600" },
      { name: "ERP integration", icon: Database, color: "bg-orange-100 text-orange-600" },
    ],
  },
  {
    title: "Oil and Gas",
    description: "Advanced energy sector solutions and optimization",
    subcategories: [
      { name: "Exploration analytics", icon: FlaskConical, color: "bg-red-100 text-red-600" },
      { name: "Pipeline monitoring", icon: Gauge, color: "bg-red-100 text-red-600" },
      { name: "Refinery optimization", icon: Fuel, color: "bg-red-100 text-red-600" },
      { name: "Safety compliance", icon: HardHat, color: "bg-red-100 text-red-600" },
      { name: "Energy trading", icon: Zap, color: "bg-red-100 text-red-600" },
    ],
  },
  {
    title: "More Industries",
    description: "Expanding expertise across diverse sectors",
    subcategories: [
      { name: "Education", icon: GraduationCap, color: "bg-indigo-100 text-indigo-600" },
      { name: "Real Estate", icon: Home, color: "bg-indigo-100 text-indigo-600" },
      { name: "Telecommunications", icon: Phone, color: "bg-indigo-100 text-indigo-600" },
      { name: "Professional Services", icon: Briefcase, color: "bg-indigo-100 text-indigo-600" },
      { name: "Government", icon: Building, color: "bg-indigo-100 text-indigo-600" },
    ],
  },
]

export default function IndustryExpertise() {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 mb-16 border border-blue-100"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Industry Expertise</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
            We've excelled our experience in a wide range of industries to bring valuable insights and provide our
            clients with the truly beneficial solutions.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
          {industries.map((industry, industryIndex) => (
            <motion.div key={industry.title} variants={itemVariants} className="space-y-8">
              {/* Industry Header */}
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{industry.title}</h3>
                <p className="text-gray-600 text-lg">{industry.description}</p>
              </div>

              {/* Subcategory Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {industry.subcategories.map((subcategory, cardIndex) => (
                  <motion.div
                    key={subcategory.name}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-pointer"
                  >
                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 rounded-2xl ${subcategory.color} flex items-center justify-center mb-4 mx-auto`}
                    >
                      <subcategory.icon className="w-8 h-8" />
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-center font-semibold text-gray-900 leading-tight">{subcategory.name}</h4>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Don't see your industry?</h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We're constantly expanding our expertise. Let's discuss how we can bring our proven methodologies to your
              specific industry challenges.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discuss Your Industry
              <ExternalLink className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
