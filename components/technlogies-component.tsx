"use client"

import { motion } from "framer-motion"
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Shield,
  Zap,
  Brain,
  Settings,
  ArrowRight,
  Star,
  Award,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const technologyCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    description: "Modern, responsive, and interactive user interfaces",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    technologies: [
      { name: "React", level: 95, experience: "5+ years", projects: 200, primary: true },
      { name: "Next.js", level: 92, experience: "4+ years", projects: 150, primary: true },
      { name: "TypeScript", level: 90, experience: "4+ years", projects: 180 },
      { name: "Vue.js", level: 85, experience: "3+ years", projects: 80 },
      { name: "Angular", level: 82, experience: "3+ years", projects: 60 },
      { name: "Svelte", level: 75, experience: "2+ years", projects: 30 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    description: "Scalable, secure, and high-performance server solutions",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    technologies: [
      { name: "Node.js", level: 95, experience: "5+ years", projects: 220, primary: true },
      { name: "Python", level: 90, experience: "4+ years", projects: 180, primary: true },
      { name: ".NET", level: 88, experience: "4+ years", projects: 120 },
      { name: "Java", level: 85, experience: "3+ years", projects: 100 },
      { name: "Go", level: 80, experience: "2+ years", projects: 50 },
      { name: "PHP", level: 75, experience: "3+ years", projects: 80 },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    technologies: [
      { name: "React Native", level: 92, experience: "4+ years", projects: 120, primary: true },
      { name: "Flutter", level: 88, experience: "3+ years", projects: 80, primary: true },
      { name: "Swift", level: 85, experience: "3+ years", projects: 60 },
      { name: "Kotlin", level: 82, experience: "3+ years", projects: 55 },
      { name: "Xamarin", level: 75, experience: "2+ years", projects: 30 },
      { name: "Ionic", level: 70, experience: "2+ years", projects: 25 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Scalable cloud infrastructure and deployment automation",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    technologies: [
      { name: "AWS", level: 95, experience: "5+ years", projects: 200, primary: true },
      { name: "Docker", level: 92, experience: "4+ years", projects: 180, primary: true },
      { name: "Kubernetes", level: 88, experience: "3+ years", projects: 100 },
      { name: "Azure", level: 85, experience: "3+ years", projects: 80 },
      { name: "Google Cloud", level: 82, experience: "3+ years", projects: 70 },
      { name: "Terraform", level: 80, experience: "2+ years", projects: 60 },
    ],
  },
  {
    title: "Database Technologies",
    icon: Database,
    description: "Robust data storage and management solutions",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    technologies: [
      { name: "PostgreSQL", level: 95, experience: "5+ years", projects: 180, primary: true },
      { name: "MongoDB", level: 90, experience: "4+ years", projects: 150, primary: true },
      { name: "Redis", level: 88, experience: "4+ years", projects: 120 },
      { name: "MySQL", level: 85, experience: "4+ years", projects: 100 },
      { name: "Elasticsearch", level: 80, experience: "3+ years", projects: 60 },
      { name: "Cassandra", level: 75, experience: "2+ years", projects: 30 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Intelligent solutions powered by artificial intelligence",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
    technologies: [
      { name: "TensorFlow", level: 85, experience: "3+ years", projects: 40, primary: true },
      { name: "PyTorch", level: 82, experience: "3+ years", projects: 35 },
      { name: "OpenAI API", level: 90, experience: "2+ years", projects: 60, primary: true },
      { name: "Hugging Face", level: 80, experience: "2+ years", projects: 25 },
      { name: "Scikit-learn", level: 85, experience: "3+ years", projects: 50 },
      { name: "LangChain", level: 78, experience: "1+ years", projects: 20 },
    ],
  },
]

const certifications = [
  { name: "AWS Certified Solutions Architect", provider: "Amazon Web Services", level: "Professional" },
  { name: "Google Cloud Professional", provider: "Google Cloud", level: "Professional" },
  { name: "Microsoft Azure Expert", provider: "Microsoft", level: "Expert" },
  { name: "Kubernetes Administrator", provider: "CNCF", level: "Certified" },
]

const stats = [
  { number: "50+", label: "Technologies Mastered", icon: Settings },
  { number: "1000+", label: "Projects Delivered", icon: Award },
  { number: "99.9%", label: "Uptime Achieved", icon: Shield },
  { number: "500+", label: "Happy Clients", icon: Users },
]

export default function TechnologiesPage() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
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
              <Zap className="w-4 h-4" />
              Cutting-Edge Technologies
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Technologies We{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Master
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              From frontend frameworks to AI solutions, we leverage the latest technologies to build exceptional digital
              experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Our Stack
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
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
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We stay at the forefront of technology, continuously updating our skills and adopting new tools to deliver
              the best solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {technologyCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={itemVariants} className="space-y-8">
                {/* Category Header */}
                <div className={`${category.bgColor} rounded-3xl p-8 border border-white/50`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      onHoverStart={() => setHoveredTech(tech.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={tech.primary ? "default" : "secondary"}
                            className={
                              tech.primary
                                ? `bg-gradient-to-r ${category.color} text-white border-0 shadow-md`
                                : "bg-gray-100 text-gray-700"
                            }
                          >
                            {tech.name}
                          </Badge>
                          {tech.primary && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-gray-500">Primary</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Proficiency</span>
                          <span className="text-sm font-semibold text-gray-900">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{ delay: techIndex * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div>
                            <span className="text-xs text-gray-500">Experience</span>
                            <p className="text-sm font-semibold text-gray-900">{tech.experience}</p>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500">Projects</span>
                            <p className="text-sm font-semibold text-gray-900">{tech.projects}+</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-recognized certifications that validate our expertise and commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{cert.provider}</p>
                <Badge variant="secondary" className="text-xs">
                  {cert.level}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's leverage our technology expertise to bring your vision to life with cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                View Our Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
