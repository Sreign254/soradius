"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Lightbulb,
  Cog,
  BarChart3,
  Rocket,
  Award,
  TrendingUp,
  MessageSquare,
  Phone,
  Download,
  Play,
  Building,
  Briefcase,
  Heart,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const CustomSoftwareServices = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Applications",
      description: "Scalable, responsive web applications built with modern frameworks",
      features: [
        "React/Next.js Development",
        "Progressive Web Apps",
        "E-commerce Platforms",
        "Content Management Systems",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
      price: "Starting from $15,000",
      timeline: "8-16 weeks",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android",
      features: [
        "Native iOS/Android Apps",
        "Cross-platform Solutions",
        "Mobile-first Design",
        "App Store Optimization",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      price: "Starting from $20,000",
      timeline: "10-20 weeks",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Enterprise Software",
      description: "Complex enterprise solutions for large-scale operations",
      features: ["ERP Systems", "CRM Solutions", "Workflow Automation", "Integration Services"],
      technologies: ["Java", "C#", ".NET", "Spring Boot", "Microservices"],
      price: "Starting from $50,000",
      timeline: "16-32 weeks",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "API Development",
      description: "Robust APIs and microservices architecture",
      features: ["RESTful APIs", "GraphQL Services", "Microservices", "Third-party Integrations"],
      technologies: ["Node.js", "Python", "Go", "Docker", "Kubernetes"],
      price: "Starting from $8,000",
      timeline: "4-12 weeks",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your requirements, define project scope, and create a detailed roadmap with clear milestones and deliverables.",
      icon: <Lightbulb className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: ["Requirements Document", "Project Roadmap", "Technical Specifications"],
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Create system architecture, UI/UX designs, and technical specifications that align with your business goals.",
      icon: <Cog className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: ["System Architecture", "UI/UX Designs", "Database Schema"],
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Agile development with continuous testing, code reviews, and quality assurance to ensure robust solutions.",
      icon: <Code className="w-6 h-6" />,
      duration: "8-16 weeks",
      deliverables: ["Working Software", "Test Reports", "Documentation"],
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Launch your software with comprehensive deployment and provide ongoing maintenance and support services.",
      icon: <Rocket className="w-6 h-6" />,
      duration: "Ongoing",
      deliverables: ["Live Application", "Deployment Guide", "Support Plan"],
    },
  ]

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tailored Solutions",
      description:
        "Software built specifically for your business needs and processes, ensuring perfect alignment with your operations.",
      metric: "100% Custom Fit",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Solutions that grow with your business and adapt to changing requirements without major overhauls.",
      metric: "10x Growth Ready",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description:
        "Enterprise-grade security measures to protect your data and users with industry-standard protocols.",
      metric: "Bank-Level Security",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Improved Efficiency",
      description:
        "Automate processes and streamline operations for maximum productivity and reduced operational costs.",
      metric: "60% Time Savings",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Better User Experience",
      description:
        "Intuitive interfaces designed with your users in mind, resulting in higher adoption and satisfaction rates.",
      metric: "95% User Satisfaction",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description:
        "Built-in analytics and reporting for informed decision making with real-time business intelligence.",
      metric: "Real-time Analytics",
    },
  ]

  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      client: "RetailCorp",
      industry: "Retail",
      challenge:
        "Legacy system couldn't handle growing traffic and inventory complexity, causing frequent downtime and lost sales.",
      solution:
        "Built scalable microservices architecture with modern frontend, implementing advanced caching and load balancing.",
      results: [
        "300% increase in page load speed",
        "99.9% uptime achieved",
        "50% reduction in cart abandonment",
        "$2M additional revenue in first year",
      ],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
      image: "/placeholder.svg?height=300&width=400",
      testimonial:
        "Soradius transformed our entire business. The new platform handles 10x our previous traffic with zero issues.",
      clientRole: "CTO, RetailCorp",
    },
    {
      title: "Healthcare Management System",
      client: "MedTech Solutions",
      industry: "Healthcare",
      challenge:
        "Manual processes causing delays in patient care and billing, leading to compliance issues and revenue loss.",
      solution:
        "Comprehensive patient management system with automated workflows, HIPAA compliance, and integrated billing.",
      results: [
        "60% reduction in administrative time",
        "Improved patient satisfaction scores",
        "HIPAA compliant solution",
        "40% faster billing cycles",
      ],
      technologies: ["React", "Python", "Django", "PostgreSQL", "Docker"],
      image: "/placeholder.svg?height=300&width=400",
      testimonial:
        "Our staff can now focus on patient care instead of paperwork. It's been a game-changer for our practice.",
      clientRole: "Medical Director, MedTech Solutions",
    },
    {
      title: "Financial Trading Platform",
      client: "InvestPro",
      industry: "Finance",
      challenge:
        "Need for real-time trading platform with advanced analytics and regulatory compliance for institutional clients.",
      solution:
        "High-performance trading system with real-time data processing, advanced charting, and automated compliance reporting.",
      results: [
        "Sub-millisecond trade execution",
        "Real-time market analysis",
        "Regulatory compliance achieved",
        "500% increase in trading volume",
      ],
      technologies: ["Java", "Spring Boot", "Apache Kafka", "MongoDB", "React"],
      image: "/placeholder.svg?height=300&width=400",
      testimonial:
        "The platform's speed and reliability have given us a significant competitive advantage in the market.",
      clientRole: "Head of Trading, InvestPro",
    },
  ]

  const testimonials = [
    {
      quote:
        "Soradius delivered exactly what we needed. Their custom software solution transformed our operations and gave us a competitive edge in the market.",
      author: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      company: "TechStart Inc.",
      rating: 5,
      avatar: "SJ",
      industry: "Technology",
    },
    {
      quote:
        "The team's expertise in custom development is outstanding. They understood our complex requirements and delivered beyond our expectations.",
      author: "Michael Chen",
      position: "VP Engineering, DataFlow Systems",
      company: "DataFlow Systems",
      rating: 5,
      avatar: "MC",
      industry: "Data Analytics",
    },
    {
      quote:
        "Working with Soradius was seamless. Their agile approach and communication kept us informed throughout the entire development process.",
      author: "Emily Rodriguez",
      position: "Product Manager, InnovateCorp",
      company: "InnovateCorp",
      rating: 5,
      avatar: "ER",
      industry: "Innovation",
    },
  ]

  const technologies = [
    { name: "React", category: "Frontend", popularity: 95 },
    { name: "Next.js", category: "Frontend", popularity: 90 },
    { name: "Vue.js", category: "Frontend", popularity: 85 },
    { name: "Angular", category: "Frontend", popularity: 80 },
    { name: "Node.js", category: "Backend", popularity: 92 },
    { name: "Python", category: "Backend", popularity: 88 },
    { name: "Java", category: "Backend", popularity: 85 },
    { name: "C#", category: "Backend", popularity: 82 },
    { name: "PostgreSQL", category: "Database", popularity: 90 },
    { name: "MongoDB", category: "Database", popularity: 85 },
    { name: "Redis", category: "Database", popularity: 80 },
    { name: "AWS", category: "Cloud", popularity: 95 },
    { name: "Azure", category: "Cloud", popularity: 88 },
    { name: "Docker", category: "DevOps", popularity: 92 },
    { name: "Kubernetes", category: "DevOps", popularity: 85 },
  ]

  const stats = [
    { number: "200+", label: "Projects Delivered", icon: <Briefcase className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> },
    { number: "50+", label: "Expert Developers", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
  ]

  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto">
          <Breadcrumb className="py-4 px-4">
            <BreadcrumbList className="flex items-center space-x-2 text-sm text-muted-foreground">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-primary hover:underline hover:text-primary/80 font-medium transition-colors"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-muted-foreground/50">/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-muted-foreground/50">/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground font-semibold">Custom Software Development</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/5 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 shadow-lg"
            >
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">Award-Winning Development Team</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Custom Software
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Development
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-4xl mx-auto"
            >
              Transform your business with tailored software solutions built by expert developers. From concept to
              deployment, we create powerful applications that drive growth and innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-semibold px-8 py-4"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent backdrop-blur-sm font-semibold px-8 py-4"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-yellow-400">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Custom Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From web applications to enterprise software, we build solutions that drive your business forward with
              cutting-edge technology and proven methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Selector */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                    activeService === index
                      ? "bg-primary text-primary-foreground shadow-2xl border-primary transform scale-105"
                      : "bg-card hover:shadow-lg border-border hover:border-primary/30 hover:transform hover:scale-102"
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl ${
                        activeService === index ? "bg-primary-foreground/20" : "bg-primary/10"
                      }`}
                    >
                      <div className={activeService === index ? "text-primary-foreground" : "text-primary"}>
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <div
                        className={`text-sm font-medium ${
                          activeService === index ? "text-primary-foreground/80" : "text-primary"
                        }`}
                      >
                        {/* {service.price} • */}
                         {service.timeline}
                      </div>
                    </div>
                  </div>
                  <p
                    className={`text-lg ${
                      activeService === index ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}
                  >
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Service Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-10 shadow-lg border border-border sticky top-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-xl bg-primary/10 text-primary">{services[activeService].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">{services[activeService].title}</h3>
                  <div className="text-primary font-semibold">
                    {/* {services[activeService].price} • */}
                     {services[activeService].timeline}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {services[activeService].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                Get Started with {services[activeService].title}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Development Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Cog className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery with transparency, quality, and on-time
              results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-card border-border group-hover:border-primary/30 group-hover:transform group-hover:scale-105">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">{step.icon}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-foreground">Deliverables:</div>
                      {step.deliverables.map((deliverable, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Why Choose Custom</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Benefits of Custom Software</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Custom software provides unique advantages that off-the-shelf solutions simply can't match, delivering
              measurable business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-card border-border group-hover:border-primary/30 group-hover:transform group-hover:scale-105">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                      {benefit.icon}
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      {benefit.metric}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Case Studies */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real projects, real results - see how we've helped businesses transform with custom software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 bg-card border-border group-hover:border-primary/30">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{study.title}</h3>
                    <div className="text-primary font-semibold mb-4">{study.client}</div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <strong className="text-foreground">Challenge:</strong>
                        <p className="text-muted-foreground mt-1">{study.challenge}</p>
                      </div>
                      <div>
                        <strong className="text-foreground">Solution:</strong>
                        <p className="text-muted-foreground mt-1">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <strong className="text-foreground mb-3 block">Results:</strong>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-muted/50 p-4 rounded-xl mb-6">
                      <p className="text-muted-foreground italic text-sm mb-2">"{study.testimonial}"</p>
                      <div className="text-foreground font-semibold text-sm">— {study.clientRole}</div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Technologies */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Tech Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Technologies We Master</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We work with cutting-edge technologies to build robust, scalable solutions that stand the test of time.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-card border-border group-hover:border-primary/30 group-hover:transform group-hover:scale-105">
                  <div className="font-bold text-foreground mb-2 text-lg">{tech.name}</div>
                  <div className="text-sm text-muted-foreground mb-3">{tech.category}</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-500 group-hover:from-primary/80 group-hover:to-primary"
                      style={{ width: `${tech.popularity}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{tech.popularity}% adoption</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Client Love</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from the businesses we've helped transform with custom software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 h-full bg-card border-border group-hover:shadow-xl group-hover:border-primary/30 transition-all duration-300">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-xs text-primary font-semibold">{testimonial.industry}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <MessageSquare className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">Let's Build Something Amazing Together</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Ready to Build Your
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Custom Solution?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Let's discuss your project and create software that drives your business forward. Get a free consultation
              and detailed project proposal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-bold px-10 py-4 text-lg"
              >
                <MessageSquare className="mr-3 w-6 h-6" />
                Start a Conversation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent backdrop-blur-sm font-bold px-10 py-4 text-lg"
              >
                <Phone className="mr-3 w-6 h-6" />
                Schedule a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent backdrop-blur-sm font-bold px-10 py-4 text-lg"
              >
                <Download className="mr-3 w-6 h-6" />
                Get Pricing Guide
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
                <div className="text-blue-200">No obligation • Expert guidance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Quick Response</div>
                <div className="text-blue-200">Within 24 hours • Detailed proposal</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Proven Results</div>
                <div className="text-blue-200">200+ successful projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CustomSoftwareServices
