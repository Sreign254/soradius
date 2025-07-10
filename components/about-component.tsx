"use client"

import { motion } from "framer-motion"
import {
  Users,
  Globe,
  Award,
  Target,
  Heart,
  Lightbulb,
  Shield,
  MapPin,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const teamMembers = [
  {
    name: "David Kimani",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech, passionate about transforming Africa's digital landscape.",
    image: "/placeholder.svg?height=300&width=300&text=DK",
    social: { linkedin: "#", twitter: "#", email: "david@soradius.com" },
  },
  {
    name: "Grace Wanjiku",
    role: "CTO",
    bio: "Tech innovator specializing in AI and cloud solutions, driving our technical excellence.",
    image: "/placeholder.svg?height=300&width=300&text=GW",
    social: { linkedin: "#", twitter: "#", email: "grace@soradius.com" },
  },
  {
    name: "Samuel Ochieng",
    role: "Head of Engineering",
    bio: "Full-stack architect with expertise in scalable systems and modern development practices.",
    image: "/placeholder.svg?height=300&width=300&text=SO",
    social: { linkedin: "#", twitter: "#", email: "samuel@soradius.com" },
  },
  {
    name: "Faith Mutindi",
    role: "Head of Design",
    bio: "Creative director focused on user-centered design and exceptional digital experiences.",
    image: "/placeholder.svg?height=300&width=300&text=FM",
    social: { linkedin: "#", twitter: "#", email: "faith@soradius.com" },
  },
  {
    name: "Michael Otieno",
    role: "Head of Operations",
    bio: "Operations expert ensuring seamless project delivery and client satisfaction.",
    image: "/placeholder.svg?height=300&width=300&text=MO",
    social: { linkedin: "#", twitter: "#", email: "michael@soradius.com" },
  },
  {
    name: "Esther Nyambura",
    role: "Head of Business Development",
    bio: "Strategic partnerships and growth specialist expanding our global footprint.",
    image: "/placeholder.svg?height=300&width=300&text=EN",
    social: { linkedin: "#", twitter: "#", email: "esther@soradius.com" },
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Heart,
    title: "Ubuntu",
    description: "We believe in the African philosophy of Ubuntu - we are because we are together.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Excellence",
    description: "We deliver exceptional quality in every project, exceeding client expectations consistently.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "From Nairobi to the world, we create solutions that make a difference globally.",
    color: "from-green-500 to-emerald-500",
  },
]

const milestones = [
  { year: "2018", title: "Company Founded", description: "Started in Nairobi with a vision to transform African tech" },
  { year: "2019", title: "First International Client", description: "Expanded beyond Kenya to serve global markets" },
  { year: "2021", title: "100+ Projects", description: "Reached milestone of 100 successful project deliveries" },
  { year: "2022", title: "AI Innovation Lab", description: "Launched dedicated AI research and development division" },
  { year: "2023", title: "Regional Expansion", description: "Opened offices in Lagos and Cape Town" },
  { year: "2024", title: "500+ Clients", description: "Serving over 500 clients across 50+ countries" },
]

const stats = [
  { number: "500+", label: "Happy Clients", icon: Users },
  { number: "1000+", label: "Projects Delivered", icon: CheckCircle },
  { number: "50+", label: "Countries Served", icon: Globe },
  { number: "6", label: "Years of Excellence", icon: Award },
]

export default function AboutComponent() {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null)

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <MapPin className="w-4 h-4" />
              Proudly Kenyan, Globally Recognized
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Africa's{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              From the heart of Nairobi, we're building world-class technology solutions that connect Africa to the
              global digital economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Our Story
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300"
              >
                Meet Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
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

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018 in the vibrant tech hub of Nairobi, Soradius began with a simple yet ambitious vision:
                  to bridge the gap between African innovation and global technology standards.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a leading technology company
                  serving clients across six continents. We've maintained our roots in Kenya while expanding our impact
                  globally, proving that world-class solutions can emerge from anywhere.
                </p>
                <p>
                  Today, we're proud to be at the forefront of Africa's digital transformation, creating solutions that
                  not only meet international standards but often exceed them. Our success is built on the foundation of
                  Ubuntu - the belief that we achieve more together.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed mb-6">
                  To empower businesses worldwide with innovative technology solutions while showcasing the exceptional
                  talent and creativity that Africa has to offer.
                </p>
                <div className="flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  <span className="font-semibold">Vision: Leading Africa's Digital Renaissance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a startup in Nairobi to a global technology partner - here's how we've grown.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do, rooted in African values and global excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-white/50 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind Soradius - a diverse team of innovators, creators, and problem solvers.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onHoverStart={() => setActiveTeamMember(index)}
                onHoverEnd={() => setActiveTeamMember(null)}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-3">
                      <a
                        href={member.social.linkedin}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of companies worldwide who trust Soradius to deliver exceptional technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
