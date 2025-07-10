"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Smartphone, Zap, Globe, Shield, Layers, Brain, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const technologies = [
  {
    title: "Web Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    categories: [
      {
        name: "Back End",
        skills: [
          { name: ".NET", level: 95, primary: true },
          { name: "Java", level: 90 },
          { name: "Python", level: 85 },
          { name: "Node.js", level: 88 },
          { name: "Go", level: 80 },
          { name: "PHP", level: 75 },
        ],
      },
      {
        name: "Front End",
        skills: [
          { name: "React", level: 95, primary: true },
          { name: "TypeScript", level: 92 },
          { name: "Next.js", level: 90 },
          { name: "Vue.js", level: 85 },
          { name: "Angular", level: 82 },
          { name: "HTML5/CSS3", level: 98 },
        ],
      },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    categories: [
      {
        name: "Native",
        skills: [
          { name: "Swift", level: 90, primary: true },
          { name: "Kotlin", level: 88 },
          { name: "React Native", level: 92 },
          { name: "Flutter", level: 85 },
          { name: "Xamarin", level: 80 },
        ],
      },
      {
        name: "Desktop",
        skills: [
          { name: "Electron", level: 88, primary: true },
          { name: ".NET MAUI", level: 85 },
          { name: "Qt", level: 75 },
          { name: "Tauri", level: 70 },
        ],
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    categories: [
      {
        name: "Cloud Platforms",
        skills: [
          { name: "AWS", level: 95, primary: true },
          { name: "Azure", level: 90 },
          { name: "Google Cloud", level: 85 },
          { name: "Vercel", level: 92 },
        ],
      },
      {
        name: "DevOps",
        skills: [
          { name: "Docker", level: 90, primary: true },
          { name: "Kubernetes", level: 85 },
          { name: "Jenkins", level: 80 },
          { name: "GitHub Actions", level: 88 },
        ],
      },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    categories: [
      {
        name: "SQL",
        skills: [
          { name: "PostgreSQL", level: 95, primary: true },
          { name: "MySQL", level: 90 },
          { name: "SQL Server", level: 88 },
          { name: "Oracle", level: 80 },
        ],
      },
      {
        name: "NoSQL",
        skills: [
          { name: "MongoDB", level: 90, primary: true },
          { name: "Redis", level: 88 },
          { name: "Elasticsearch", level: 82 },
          { name: "Cassandra", level: 75 },
        ],
      },
    ],
  },
  {
    title: "AI & Emerging Tech",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    categories: [
      {
        name: "AI/ML",
        skills: [
          { name: "TensorFlow", level: 85, primary: true },
          { name: "PyTorch", level: 80 },
          { name: "OpenAI API", level: 90 },
          { name: "Hugging Face", level: 82 },
        ],
      },
      {
        name: "Blockchain",
        skills: [
          { name: "Ethereum", level: 75, primary: true },
          { name: "Solidity", level: 70 },
          { name: "Web3.js", level: 78 },
        ],
      },
    ],
  },
]

export default function Technologies() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Zap className="w-4 h-4" />
            Technologies & Platforms
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Technologies We{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Master</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies to deliver robust, scalable solutions across all platforms and
            industries.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
              className={`${tech.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm group relative overflow-hidden`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`}
              />

              {/* Header */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <motion.div
                  animate={{ rotate: activeCard === index ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`p-4 rounded-2xl bg-gradient-to-r ${tech.color} shadow-lg`}
                >
                  <tech.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">{tech.title}</h3>
              </div>

              {/* Categories */}
              <div className="space-y-6 relative z-10">
                {tech.categories.map((category, categoryIndex) => (
                  <div key={category.name}>
                    <h4 className="font-semibold text-gray-700 mb-3 text-lg">{category.name}</h4>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={skill.primary ? "default" : "secondary"}
                              className={
                                skill.primary
                                  ? `bg-gradient-to-r ${tech.color} text-white border-0 shadow-md`
                                  : "bg-white/80 text-gray-700 border border-gray-200"
                              }
                            >
                              {skill.name}
                            </Badge>
                            {skill.primary && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                              />
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ delay: skillIndex * 0.1, duration: 0.8 }}
                                className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                              />
                            </div>
                            <span className="text-xs font-medium text-gray-600 w-8">{skill.level}%</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Technologies", icon: Settings },
            { number: "500+", label: "Projects Delivered", icon: Layers },
            { number: "99.9%", label: "Uptime", icon: Shield },
            { number: "24/7", label: "Support", icon: Globe },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
