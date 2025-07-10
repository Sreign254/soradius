"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Code,
  Paintbrush,
  Rocket,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  Globe,
  Mail,
  Plus,
  Minus,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

const programs = [
  {
    title: "Software Development",
    icon: Code,
    description:
      "Work on real projects alongside our engineering team. Gain experience in full-stack development, cloud computing, and DevOps.",
    tracks: [
      "Web Development (React, Node.js, TypeScript)",
      "Mobile Development (Flutter, React Native)",
      "Cloud Engineering (AWS, Azure, Docker)",
      "Backend Systems (Python, Java, .NET)",
      "Quality Assurance & Testing",
      "DevOps & CI/CD Pipelines",
    ],
    duration: "3-6 months",
    spots: "15 positions",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    projects: [
      "E-commerce platform development",
      "Mobile banking application",
      "Cloud infrastructure automation",
      "API development and integration",
    ],
  },
  {
    title: "UI/UX Design",
    icon: Paintbrush,
    description:
      "Collaborate with our design team to create intuitive user experiences. Learn industry-standard tools and design thinking methodologies.",
    tracks: [
      "User Research & Testing",
      "Wireframing & Prototyping (Figma, Sketch)",
      "Interaction Design & Animation",
      "Design Systems & Component Libraries",
      "Accessibility & Inclusive Design",
      "Visual Design & Branding",
    ],
    duration: "3-6 months",
    spots: "8 positions",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    projects: [
      "Healthcare app redesign",
      "Financial dashboard interface",
      "Mobile-first design system",
      "User experience optimization",
    ],
  },
  {
    title: "Product Management",
    icon: Rocket,
    description:
      "Experience the product lifecycle from ideation to launch. Work with cross-functional teams to deliver customer-centric solutions.",
    tracks: [
      "Agile Methodologies & Scrum",
      "Market Research & Analysis",
      "Product Strategy & Roadmapping",
      "Data-Driven Decision Making",
      "Stakeholder Management",
      "Go-to-Market Strategy",
    ],
    duration: "6 months",
    spots: "5 positions",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    projects: [
      "Product feature prioritization",
      "Customer journey mapping",
      "Competitive analysis reports",
      "Product launch campaigns",
    ],
  },
  {
    title: "Data Science & Analytics",
    icon: TrendingUp,
    description:
      "Dive into data analysis, machine learning, and business intelligence. Work with real datasets to drive business decisions.",
    tracks: [
      "Data Analysis & Visualization",
      "Machine Learning & AI",
      "Business Intelligence & Reporting",
      "Statistical Analysis & Modeling",
      "Big Data Technologies",
      "Predictive Analytics",
    ],
    duration: "4-6 months",
    spots: "6 positions",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    projects: [
      "Customer behavior analysis",
      "Predictive modeling systems",
      "Business intelligence dashboards",
      "AI-powered recommendation engines",
    ],
  },
]

const benefits = [
  {
    title: "Expert Mentorship",
    description: "1:1 guidance from senior engineers and industry leaders",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Real Impact Projects",
    description: "Work on production systems used by thousands of users",
    icon: Target,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Flexible Schedule",
    description: "Part-time options to accommodate your academic commitments",
    icon: Clock,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Competitive Stipend",
    description: "Monthly compensation ranging from $800-$1,500",
    icon: DollarSign,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Career Development",
    description: "Clear path to full-time opportunities upon graduation",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Industry Certification",
    description: "Recognized completion certificate and LinkedIn recommendations",
    icon: Award,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Learning Resources",
    description: "Access to premium courses, conferences, and workshops",
    icon: BookOpen,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Networking Opportunities",
    description: "Connect with professionals across the African tech ecosystem",
    icon: Globe,
    color: "from-emerald-500 to-teal-500",
  },
]

const testimonials = [
  {
    quote:
      "My internship at Soradius was transformative. I worked on a mobile banking app that's now used by over 100,000 people across Kenya. The mentorship I received helped me land a senior developer role right after graduation.",
    author: "Sarah Wanjiku",
    role: "Software Development Intern → Senior Developer at Safaricom",
    location: "Nairobi, Kenya",
    image: "/placeholder.svg?height=80&width=80&text=SW",
    rating: 5,
    duration: "6 months",
    achievement: "Led mobile app feature that increased user engagement by 40%",
  },
  {
    quote:
      "The design team at Soradius treated me as a full team member from day one. I contributed to the redesign of their flagship product, and my prototypes are still being used in production. It was incredibly rewarding!",
    author: "Kwame Asante",
    role: "UI/UX Design Intern → Product Designer at Flutterwave",
    location: "Lagos, Nigeria",
    image: "/placeholder.svg?height=80&width=80&text=KA",
    rating: 5,
    duration: "4 months",
    achievement: "Designed user interface that improved conversion rates by 25%",
  },
  {
    quote:
      "As a product management intern, I was involved in strategic decisions and got to present to the executive team. The experience gave me confidence and skills that directly led to my current role at a unicorn startup.",
    author: "Thandiwe Mthembu",
    role: "Product Management Intern → Product Manager at Paystack",
    location: "Cape Town, South Africa",
    image: "/placeholder.svg?height=80&width=80&text=TM",
    rating: 5,
    duration: "6 months",
    achievement: "Managed product feature that generated $50K+ in additional revenue",
  },
  {
    quote:
      "The data science internship opened my eyes to the power of analytics in business. I worked with real customer data and built models that are still being used to drive business decisions. Amazing experience!",
    author: "Ibrahim Hassan",
    role: "Data Science Intern → ML Engineer at Andela",
    location: "Remote",
    image: "/placeholder.svg?height=80&width=80&text=IH",
    rating: 5,
    duration: "5 months",
    achievement: "Built ML model that improved customer retention by 15%",
  },
]

const faqs = [
  {
    question: "What are the eligibility requirements for the internship program?",
    answer:
      "We welcome students currently pursuing or recently completed degrees in Computer Science, Engineering, Design, Business, or related fields. You should have a portfolio or GitHub profile demonstrating relevant skills and be available for at least 20 hours per week.",
  },
  {
    question: "Is the internship paid?",
    answer:
      "Yes! We offer competitive monthly stipends ranging from $800-$1,500 depending on the role and your experience level. We believe in compensating our interns fairly for their valuable contributions.",
  },
  {
    question: "Can I do the internship remotely?",
    answer:
      "We offer flexible arrangements including remote, hybrid, and on-site options. Our offices are located in Nairobi, Lagos, and Cape Town, but we welcome remote interns from across Africa and beyond.",
  },
  {
    question: "What happens after the internship ends?",
    answer:
      "Many of our interns receive full-time job offers upon graduation. We also provide career guidance, LinkedIn recommendations, and maintain an alumni network to support your career growth.",
  },
  {
    question: "When do internship programs start?",
    answer:
      "We have three intake periods per year: January, May, and September. Applications typically open 2-3 months before each intake period.",
  },
  {
    question: "What kind of projects will I work on?",
    answer:
      "You'll work on real production systems and client projects. Past interns have contributed to mobile banking apps, e-commerce platforms, healthcare systems, and AI-powered solutions used by thousands of users.",
  },
]

const stats = [
  { number: "200+", label: "Interns Graduated", icon: GraduationCap },
  { number: "85%", label: "Hired Full-time", icon: TrendingUp },
  { number: "15+", label: "Partner Universities", icon: BookOpen },
  { number: "4.9/5", label: "Program Rating", icon: Star },
]

export default function InternshipPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

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
              <GraduationCap className="w-4 h-4" />
              Launch Your Tech Career
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Soradius{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Internship Program
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Gain hands-on experience at Africa's leading software development company. Work on real projects, learn
              from industry experts, and launch your tech career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowApplicationForm(true)}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More
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

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Internship Tracks</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the path that aligns with your career aspirations and gain hands-on experience in cutting-edge
              technologies.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`${program.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${program.color} shadow-lg`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="outline" className="text-xs">
                        {program.duration}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {program.spots}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      Learning Areas
                    </h4>
                    <ul className="space-y-2">
                      {program.tracks.slice(0, 4).map((track, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{track}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-purple-600" />
                      Sample Projects
                    </h4>
                    <ul className="space-y-2">
                      {program.projects.map((project, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to providing an exceptional internship experience that sets you up for long-term success.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our alumni who have gone on to build successful careers at leading tech companies.
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
                key={testimonial.author}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{testimonial.location}</span>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.duration}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed italic mb-4">"{testimonial.quote}"</p>

                <div className="bg-green-50 rounded-2xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-800">Key Achievement</span>
                  </div>
                  <p className="text-sm text-green-700">{testimonial.achievement}</p>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to common questions about our internship program.</p>
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

      {/* Application Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Career?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join our next cohort of interns and take the first step towards an exciting career in technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Application Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      Currently pursuing or recently completed a degree in CS, Engineering, Design, or related field
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Portfolio/GitHub profile demonstrating relevant skills and projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Available for minimum 20 hours/week during the internship period</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Strong passion for technology and problem-solving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Excellent communication skills and ability to work in teams</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Application Process</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Submit Application</h4>
                      <p className="text-sm opacity-90">
                        Complete our online application form with your details and portfolio
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Technical Assessment</h4>
                      <p className="text-sm opacity-90">
                        Complete a role-specific assessment to demonstrate your skills
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Interview Round</h4>
                      <p className="text-sm opacity-90">
                        Virtual interview with our team to discuss your goals and fit
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Final Decision</h4>
                      <p className="text-sm opacity-90">Successful candidates receive offers within 1 week</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block mb-8">
              <div className="flex items-center gap-4">
                <Calendar className="w-6 h-6" />
                <div className="text-left">
                  <p className="font-semibold">Next Application Deadline</p>
                  <p className="text-sm opacity-90">June 30, 2024 • Program starts September 2024</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowApplicationForm(true)}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowApplicationForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Apply for Internship</h3>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Plus className="w-5 h-5 rotate-45 text-gray-500" />
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Internship Track</option>
                <option value="software">Software Development</option>
                <option value="design">UI/UX Design</option>
                <option value="product">Product Management</option>
                <option value="data">Data Science & Analytics</option>
              </select>
              <input
                type="url"
                placeholder="Portfolio/GitHub URL"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Tell us about yourself and why you're interested in this internship..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="flex gap-3">
                <Button type="submit" className="flex-1">
                  Submit Application
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowApplicationForm(false)}
                  className="flex-1"
                >
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
