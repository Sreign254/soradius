"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, Truck, ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function WorkProcess() {
  const [activeStep, setActiveStep] = useState(0)

  const processSteps = [
    {
      id: 1,
      title: "Research",
      icon: Search,
      description: "We dive deep into your goals, market, and audience to shape a solid foundation",
      details: [
        "Market analysis and competitor research",
        "User persona development",
        "Technical requirements gathering",
        "Project scope definition",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Designing",
      icon: Palette,
      description: "Our team crafts intuitive, visually captivating interfaces that align with your brand identity",
      details: [
        "Wireframing and prototyping",
        "UI/UX design creation",
        "Brand identity integration",
        "User experience optimization",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Building",
      icon: Code,
      description: "Skilled developers bring your project to life with cutting-edge technologies and coding practices",
      details: ["Frontend development", "Backend architecture", "Database integration", "Quality assurance testing"],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Deliver",
      icon: Truck,
      description: "We deploy the solution seamlessly, ready to make its mark in the digital landscape",
      details: ["Production deployment", "Performance optimization", "Launch support", "Ongoing maintenance"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(59,130,246,0.05)_50%,transparent_51%)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-500/30"
          >
            Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our Work Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We follow a structured process to transform concepts into powerful, real-world solutions.
            <br />
            Our methodical approach ensures that each project is executed with precision and care.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                className="relative group"
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 group-hover:border-slate-600/50 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {step.id}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-4 mb-6 shadow-lg`}
                  >
                    <step.icon className="w-full h-full text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{step.description}</p>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeStep === index ? 1 : 0,
                      height: activeStep === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-700/50 pt-4 mt-4">
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                            className="flex items-center text-slate-400 text-xs"
                          >
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700/30 rounded-b-2xl overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: activeStep >= index ? "100%" : "0%" }}
                      transition={{ duration: 0.5, delay: activeStep >= index ? index * 0.1 : 0 }}
                      className={`h-full bg-gradient-to-r ${step.color}`}
                    />
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.4 }}
                    className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20"
                  >
                    <div className="w-12 h-12 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-5 h-5 text-blue-400" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
