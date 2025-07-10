"use client"

import { motion } from "framer-motion"
import {
  LightbulbIcon,
  HeartIcon,
  Users2Icon,
  GraduationCapIcon,
  RocketIcon,
  ShieldIcon,
  UsersIcon,
  MapPinIcon,
  TrendingUpIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  QuoteIcon,
  BrainIcon,
  CoffeeIcon,
  HomeIcon,
  PlaneIcon,
  DollarSignIcon,
  ClockIcon,
  PhoneIcon,
  MailIcon,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"

const coreValues = [
  {
    icon: LightbulbIcon,
    title: "Innovation First",
    description: "We foster a culture of innovation where creativity meets cutting-edge technology.",
    details: [
      "Access to latest technologies and tools",
      "Innovation time for personal projects",
      "Regular hackathons and innovation challenges",
      "Patent and IP recognition programs",
    ],
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: HeartIcon,
    title: "Meaningful Impact",
    description: "Every line of code we write makes a difference in people's lives across Africa and beyond.",
    details: [
      "Solutions that solve real-world problems",
      "Direct impact on African digital transformation",
      "Sustainable and ethical technology practices",
      "Community outreach and social responsibility",
    ],
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Users2Icon,
    title: "Ubuntu Philosophy",
    description: "We believe in the African philosophy of Ubuntu - we are because we are together.",
    details: [
      "Collaborative and inclusive work environment",
      "Cross-functional team collaboration",
      "Mentorship and peer support programs",
      "Diverse and multicultural teams",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: GraduationCapIcon,
    title: "Continuous Growth",
    description: "We invest in your professional development and provide clear paths for career advancement.",
    details: [
      "Personalized learning and development plans",
      "Conference attendance and speaking opportunities",
      "Internal mobility and career progression",
      "Leadership development programs",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
]

const benefits = [
  {
    category: "Health & Wellness",
    icon: ShieldIcon,
    color: "from-green-500 to-emerald-500",
    items: [
      "Comprehensive health insurance",
      "Mental health support and counseling",
      "Gym membership and wellness stipend",
      "Annual health check-ups",
      "Flexible sick leave policy",
    ],
  },
  {
    category: "Work-Life Balance",
    icon: ClockIcon,
    color: "from-blue-500 to-cyan-500",
    items: [
      "Flexible working hours",
      "Remote work options",
      "Unlimited PTO policy",
      "Sabbatical leave programs",
      "Family-friendly policies",
    ],
  },
  {
    category: "Financial Security",
    icon: DollarSignIcon,
    color: "from-purple-500 to-pink-500",
    items: [
      "Competitive salaries",
      "Performance-based bonuses",
      "Stock options and equity",
      "Retirement savings plans",
      "Financial planning assistance",
    ],
  },
  {
    category: "Learning & Development",
    icon: BrainIcon,
    color: "from-orange-500 to-red-500",
    items: [
      "Annual learning budget ($3,000)",
      "Conference and workshop attendance",
      "Online course subscriptions",
      "Internal training programs",
      "Certification reimbursements",
    ],
  },
  {
    category: "Perks & Lifestyle",
    icon: CoffeeIcon,
    color: "from-teal-500 to-cyan-500",
    items: [
      "Home office setup budget",
      "Catered meals and snacks",
      "Team retreats and offsites",
      "Transportation allowance",
      "Employee discount programs",
    ],
  },
  {
    category: "Career Growth",
    icon: TrendingUpIcon,
    color: "from-indigo-500 to-purple-500",
    items: [
      "Clear career progression paths",
      "Mentorship programs",
      "Leadership development",
      "Cross-department mobility",
      "Innovation project opportunities",
    ],
  },
]

const testimonials = [
  {
    name: "Amara Okafor",
    role: "Senior Frontend Engineer",
    location: "Lagos, Nigeria",
    image: "/placeholder.svg?height=80&width=80&text=AO",
    quote:
      "Joining Soradius has been transformative for my career. The collaborative environment and cutting-edge projects have pushed me to grow beyond what I thought possible. The Ubuntu philosophy isn't just words here - it's lived every day.",
    rating: 5,
    tenure: "2 years",
  },
  {
    name: "Kwame Asante",
    role: "Product Manager",
    location: "Nairobi, Kenya",
    image: "/placeholder.svg?height=80&width=80&text=KA",
    quote:
      "The learning opportunities at Soradius are incredible. From attending international conferences to working on AI projects, I've been able to expand my skills while making a real impact on African businesses.",
    rating: 5,
    tenure: "3 years",
  },
  {
    name: "Thandiwe Mthembu",
    role: "UX Designer",
    location: "Cape Town, South Africa",
    image: "/placeholder.svg?height=80&width=80&text=TM",
    quote:
      "What I love most about Soradius is how we're not just building products - we're solving real problems for real people. The design team has incredible creative freedom, and our work directly impacts millions of users.",
    rating: 5,
    tenure: "1.5 years",
  },
  {
    name: "Ibrahim Hassan",
    role: "DevOps Engineer",
    location: "Remote",
    image: "/placeholder.svg?height=80&width=80&text=IH",
    quote:
      "The remote-first culture at Soradius is amazing. I can work from anywhere while being part of a team that's building the future of African tech. The flexibility and trust given to employees is unmatched.",
    rating: 5,
    tenure: "2.5 years",
  },
]

const companyStats = [
  { number: "50+", label: "Team Members", icon: UsersIcon },
  { number: "6", label: "Years of Growth", icon: TrendingUpIcon },
  { number: "500+", label: "Projects Delivered", icon: RocketIcon },
  { number: "98%", label: "Employee Satisfaction", icon: StarIcon },
  { number: "15+", label: "Countries Served", icon: MapPinIcon },
  { number: "24/7", label: "Support Available", icon: ShieldIcon },
]

const careerPaths = [
  {
    title: "Engineering Track",
    levels: ["Junior Engineer", "Engineer", "Senior Engineer", "Lead Engineer", "Principal Engineer", "VP Engineering"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Product Track",
    levels: ["Associate PM", "Product Manager", "Senior PM", "Lead PM", "Head of Product", "VP Product"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Design Track",
    levels: ["Junior Designer", "Designer", "Senior Designer", "Lead Designer", "Design Manager", "Head of Design"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Leadership Track",
    levels: ["Team Lead", "Manager", "Senior Manager", "Director", "VP", "C-Level"],
    color: "from-orange-500 to-red-500",
  },
]

export default function WhyJoinUs() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)

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
              <HeartIcon className="w-4 h-4" />
              Join Our Mission
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Soradius?
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              More than just a workplace - we're a community of innovators, dreamers, and builders creating the future
              of African technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Opportunities
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactForm(true)}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Talk to Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {companyStats.map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These aren't just words on a wall - they're the principles that guide every decision we make and every
              solution we build.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`${value.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${value.color} shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{value.description}</p>

                <ul className="space-y-3">
                  {value.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Benefits Package</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team members with benefits that support your health, growth, and
              well-being.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.category}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${benefit.color} shadow-lg`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.category}</h3>
                </div>

                <ul className="space-y-3">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Career Growth Paths */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clear Career Progression</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in promoting from within and providing clear paths for career advancement across all
              disciplines.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {careerPaths.map((path, index) => (
              <motion.div
                key={path.title}
                variants={itemVariants}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${path.color} mb-4`}>
                    <TrendingUpIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{path.title}</h3>
                </div>

                <div className="space-y-3">
                  {path.levels.map((level, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${path.color}`} />
                      <span className="text-sm text-gray-600">{level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Team Says</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the amazing people who make Soradius what it is.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPinIcon className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{testimonial.location}</span>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.tenure}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <QuoteIcon className="w-6 h-6 text-blue-500 mb-2" />
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Environment */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work Environment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience a workplace designed for creativity, collaboration, and personal well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500">
                    <HomeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Workspace</h3>
                    <p className="text-gray-600">
                      Modern offices in Nairobi, Lagos, and Cape Town, plus full remote work options for maximum
                      flexibility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500">
                    <UsersIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Culture</h3>
                    <p className="text-gray-600">
                      Open communication, cross-functional teams, and a culture where every voice is heard and valued.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
                    <PlaneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Opportunities</h3>
                    <p className="text-gray-600">
                      Work with international clients, attend global conferences, and be part of projects that span
                      continents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
                    <RocketIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Labs</h3>
                    <p className="text-gray-600">
                      Dedicated time and resources for experimentation, side projects, and exploring new technologies.
                    </p>
                  </div>
                </div>
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
                <h3 className="text-2xl font-bold mb-6">Join Our Growing Team</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Team Growth Rate</span>
                    <span className="font-bold">200% YoY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Employee Retention</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Internal Promotions</span>
                    <span className="font-bold">80%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Learning Budget Used</span>
                    <span className="font-bold">100%</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm opacity-90">
                    "The best investment we make is in our people. Every team member's success is our success."
                  </p>
                  <p className="text-sm font-semibold mt-2">- David Kimani, CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Team+Collaboration"
            alt="Team collaboration"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Be part of a team that's transforming Africa's digital landscape. Your next career adventure starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Open Positions
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactForm(true)}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5" />
                Schedule a Chat
              </motion.button>
            </div>

            <div className="flex justify-center gap-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                <LinkedinIcon className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                <TwitterIcon className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                <GithubIcon className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowContactForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Talk!</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Tell us about your interests..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="flex gap-3">
                <Button type="submit" className="flex-1">
                  <MailIcon className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowContactForm(false)} className="flex-1">
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
