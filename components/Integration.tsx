"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Zap, Puzzle, CheckCircle, Star, Globe, Shield } from "lucide-react"

const integrationPartners = [
  { name: "Slack", category: "Communication", color: "bg-purple-100", textColor: "text-purple-600", image: "/img/integations/1.png" },
  { name: "Stripe", category: "Payments", color: "bg-blue-100", textColor: "text-blue-600", image: "/img/integations/2.png" },
  { name: "Shopify", category: "E-commerce", color: "bg-green-100", textColor: "text-green-600", image: "/img/integations/3.png" },
  { name: "Salesforce", category: "CRM", color: "bg-indigo-100", textColor: "text-indigo-600", image: "/img/integations/4.png" },
  { name: "HubSpot", category: "Marketing", color: "bg-orange-100", textColor: "text-orange-600", image: "/img/integations/5.png" },
  { name: "Zapier", category: "Automation", color: "bg-yellow-100", textColor: "text-yellow-600", image: "/img/integations/6.png" },
  { name: "Google", category: "Analytics", color: "bg-red-100", textColor: "text-red-600", image: "/img/integations/7.png" },
  { name: "Microsoft", category: "Productivity", color: "bg-blue-100", textColor: "text-blue-600", image: "/img/integations/8.png" },
  { name: "AWS", category: "Cloud", color: "bg-orange-100", textColor: "text-orange-600", image: "/img/integations/9.png" },
  { name: "Notion", category: "Workspace", color: "bg-gray-100", textColor: "text-gray-600", image: "/img/integations/10.png" },
  { name: "Figma", category: "Design", color: "bg-pink-100", textColor: "text-pink-600", image: "/img/integations/11.png" },
  { name: "GitHub", category: "Development", color: "bg-gray-100", textColor: "text-gray-600", image: "/img/integations/12.png" },
]


const logosLeft = integrationPartners.slice(0, 6)
const logosRight = integrationPartners.slice(6, 12)

const stats = [
  { number: "200+", label: "Integrations", icon: Puzzle },
  { number: "99.9%", label: "Uptime", icon: Shield },
  { number: "24/7", label: "Support", icon: Globe },
]

export default function Integration() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20"
            >
              <stat.icon className="w-5 h-5 text-blue-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          {/* Left Logos */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:w-1/4">
            {logosLeft.map((partner, index) => (
              <motion.div key={partner.name} variants={logoVariants} whileHover="hover" className="group relative">
                <div
                  className={`${partner.color} rounded-2xl p-4 shadow-lg border border-white/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl cursor-pointer`}
                >
                  <Image
                   src={partner.image}
                    alt={partner.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs font-medium text-white bg-black/50 rounded px-2 py-1 backdrop-blur-sm">
                      {partner.name}
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`text-center mt-2 text-xs font-medium ${partner.textColor}`}
                >
                  {partner.category}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Zap className="w-4 h-4" />
              Integration
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight"
            >
              Seamless Integration,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Powerful Results
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-8">
              Harmonize your digital ecosystem with our expertise. We offer seamless custom integrations tailored to
              your unique needs, as well as smooth integration with your existing apps. Unlock the full potential of
              your tech stack for a more streamlined and powerful digital experience.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Integrations
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300"
              >
                View Documentation
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Logos */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:w-1/4">
            {logosRight.map((partner, index) => (
              <motion.div key={partner.name} variants={logoVariants} whileHover="hover" className="group relative">
                <div
                  className={`${partner.color} rounded-2xl p-4 shadow-lg border border-white/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl cursor-pointer`}
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs font-medium text-white bg-black/50 rounded px-2 py-1 backdrop-blur-sm">
                      {partner.name}
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`text-center mt-2 text-xs font-medium ${partner.textColor}`}
                >
                  {partner.category}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Bottom Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24"
        >
          {/* Custom Integration Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredCard("custom")}
            onHoverEnd={() => setHoveredCard(null)}
            className="bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <motion.div
                animate={{ rotate: hoveredCard === "custom" ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl shadow-lg"
              >
                <Puzzle className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h5 className="text-xl font-bold text-gray-900">Custom Integration</h5>
                <p className="text-sm text-gray-500">Tailored to your needs</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
              At Soradius we understand that every business has distinct requirements. That's why we offer custom
              integration tailored to your existing systems, ensuring cohesive and efficient workflows.
            </p>

            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-500 ml-2">Custom Solutions</span>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-blue-600 font-medium cursor-pointer"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>

            <span className="absolute top-6 right-6 text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full font-medium shadow-lg">
              Custom
            </span>
          </motion.div>

          {/* Existing Integration Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredCard("existing")}
            onHoverEnd={() => setHoveredCard(null)}
            className="bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <motion.div
                animate={{ rotate: hoveredCard === "existing" ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-2xl shadow-lg"
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h5 className="text-xl font-bold text-gray-900">Existing Integration</h5>
                <p className="text-sm text-gray-500">Ready-to-use solutions</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
              We specialize in enhancing your ecosystem by integrating with popular platforms and services. Unlock
              seamless interoperability with third-party tools and internal apps.
            </p>

            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-500 ml-2">Pre-built Solutions</span>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-green-600 font-medium cursor-pointer"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>

            <span className="absolute top-6 right-6 text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full font-medium shadow-lg">
              Ready
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
