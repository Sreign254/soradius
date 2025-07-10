"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Smartphone,
  Globe,
  Database,
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
  Play,
  Download,
  Sparkles,
  HeartPulse,
  DollarSign,
  Truck,
  ShoppingCart,
  GraduationCap,
  Building,
  Briefcase,
  Settings,
  Cloud,
  Monitor,
  Palette,
  Search,
  Megaphone,
  Phone,
  Mail,
  Calendar,
  Layers,
  Server,
  Lock,
  Wrench,
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

const ServicesComponent = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const serviceCategories = [
    {
      name: "Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "Custom software development solutions",
    },
    {
      name: "Design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "User experience and interface design",
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      description: "Cloud infrastructure and deployment",
    },
    {
      name: "Consulting",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      description: "Strategic technology consulting",
    },
  ]

  const services = [
    // Development Services
    [
      {
        title: "Custom Software Development",
        icon: <Code className="w-8 h-8" />,
        description:
          "Tailored software solutions built from the ground up to meet your specific business requirements.",
        features: [
          "Full-stack web applications",
          "Enterprise software solutions",
          "API development and integration",
          "Legacy system modernization",
        ],
        technologies: ["React", "Node.js", "Python", "Java", "PostgreSQL"],
        pricing: "Starting from $15,000",
        timeline: "8-16 weeks",
        link: "/services/custom-software",
      },
      {
        title: "Web Applications",
        icon: <Globe className="w-8 h-8" />,
        description: "Scalable, responsive web applications for healthcare, finance, and logistics industries.",
        features: [
          "Progressive Web Apps (PWA)",
          "E-commerce platforms",
          "Content management systems",
          "Real-time applications",
        ],
        technologies: ["Next.js", "React", "Vue.js", "Angular", "TypeScript"],
        pricing: "Starting from $12,000",
        timeline: "6-12 weeks",
        link: "/services/web-applications",
      },
      {
        title: "Mobile App Development",
        icon: <Smartphone className="w-8 h-8" />,
        description: "Native and cross-platform mobile applications for iOS and Android platforms.",
        features: [
          "Native iOS/Android apps",
          "Cross-platform solutions",
          "App Store optimization",
          "Mobile-first design",
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
        pricing: "Starting from $18,000",
        timeline: "10-20 weeks",
        link: "/services/mobile-development",
      },
      {
        title: "E-commerce Solutions",
        icon: <ShoppingCart className="w-8 h-8" />,
        description: "Complete e-commerce platforms with payment processing and inventory management.",
        features: [
          "Custom online stores",
          "Payment gateway integration",
          "Inventory management",
          "Multi-vendor marketplaces",
        ],
        technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal"],
        pricing: "Starting from $10,000",
        timeline: "6-14 weeks",
        link: "/services/ecommerce",
      },
      {
        title: "Database Solutions",
        icon: <Database className="w-8 h-8" />,
        description: "Database design, optimization, and management for high-performance applications.",
        features: [
          "Database architecture",
          "Performance optimization",
          "Data migration services",
          "Backup and recovery",
        ],
        technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
        pricing: "Starting from $5,000",
        timeline: "4-8 weeks",
        link: "/services/database",
      },
      {
        title: "API Development",
        icon: <Server className="w-8 h-8" />,
        description: "RESTful APIs and microservices architecture for scalable applications.",
        features: ["RESTful API design", "GraphQL services", "Microservices architecture", "Third-party integrations"],
        technologies: ["Node.js", "Python", "Go", "Docker", "Kubernetes"],
        pricing: "Starting from $8,000",
        timeline: "4-10 weeks",
        link: "/services/api-development",
      },
    ],
    // Design Services
    [
      {
        title: "UI/UX Design",
        icon: <Palette className="w-8 h-8" />,
        description: "User-centered design solutions that enhance user experience and drive engagement.",
        features: [
          "User research and testing",
          "Wireframing and prototyping",
          "Visual design systems",
          "Usability optimization",
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
        pricing: "Starting from $5,000",
        timeline: "4-8 weeks",
        link: "/services/ui-ux-design",
      },
      {
        title: "Brand Identity Design",
        icon: <Star className="w-8 h-8" />,
        description: "Complete brand identity packages including logos, guidelines, and marketing materials.",
        features: ["Logo design and branding", "Brand guidelines", "Marketing materials", "Brand strategy consulting"],
        technologies: ["Adobe Creative Suite", "Figma", "Canva", "Brand Guidelines"],
        pricing: "Starting from $3,000",
        timeline: "3-6 weeks",
        link: "/services/brand-design",
      },
      {
        title: "Web Design",
        icon: <Monitor className="w-8 h-8" />,
        description: "Modern, responsive web designs that convert visitors into customers.",
        features: ["Responsive web design", "Landing page design", "Website redesign", "Conversion optimization"],
        technologies: ["Figma", "Adobe XD", "Webflow", "WordPress", "HTML/CSS"],
        pricing: "Starting from $4,000",
        timeline: "3-7 weeks",
        link: "/services/web-design",
      },
      {
        title: "Mobile App Design",
        icon: <Smartphone className="w-8 h-8" />,
        description: "Intuitive mobile app interfaces designed for optimal user experience.",
        features: ["Mobile UI design", "App icon design", "User flow optimization", "Platform-specific guidelines"],
        technologies: ["Figma", "Sketch", "Adobe XD", "Principle", "Framer"],
        pricing: "Starting from $6,000",
        timeline: "4-8 weeks",
        link: "/services/mobile-design",
      },
      {
        title: "Design Systems",
        icon: <Layers className="w-8 h-8" />,
        description: "Comprehensive design systems for consistent brand experience across platforms.",
        features: ["Component libraries", "Style guides", "Design tokens", "Documentation"],
        technologies: ["Figma", "Storybook", "Design Tokens", "Component Libraries"],
        pricing: "Starting from $8,000",
        timeline: "6-10 weeks",
        link: "/services/design-systems",
      },
      {
        title: "Digital Marketing Design",
        icon: <Megaphone className="w-8 h-8" />,
        description: "Eye-catching designs for digital marketing campaigns and social media.",
        features: ["Social media graphics", "Email templates", "Banner advertisements", "Marketing collateral"],
        technologies: ["Adobe Creative Suite", "Canva", "Figma", "After Effects"],
        pricing: "Starting from $2,000",
        timeline: "2-4 weeks",
        link: "/services/marketing-design",
      },
    ],
    // Cloud & DevOps Services
    [
      {
        title: "Cloud Migration",
        icon: <Cloud className="w-8 h-8" />,
        description: "Seamless migration of your applications and data to cloud platforms.",
        features: [
          "AWS/Azure/GCP migration",
          "Application modernization",
          "Data migration services",
          "Performance optimization",
        ],
        technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
        pricing: "Starting from $10,000",
        timeline: "6-12 weeks",
        link: "/services/cloud-migration",
      },
      {
        title: "DevOps & CI/CD",
        icon: <Settings className="w-8 h-8" />,
        description: "Automated deployment pipelines and infrastructure management.",
        features: ["CI/CD pipeline setup", "Infrastructure as Code", "Monitoring and logging", "Automated testing"],
        technologies: ["Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus"],
        pricing: "Starting from $8,000",
        timeline: "4-8 weeks",
        link: "/services/devops",
      },
      {
        title: "Cloud Architecture",
        icon: <Building className="w-8 h-8" />,
        description: "Scalable cloud architecture design for high-performance applications.",
        features: ["Architecture design", "Scalability planning", "Security implementation", "Cost optimization"],
        technologies: ["AWS", "Azure", "Microservices", "Serverless", "CDN"],
        pricing: "Starting from $12,000",
        timeline: "6-10 weeks",
        link: "/services/cloud-architecture",
      },
      {
        title: "Security Services",
        icon: <Lock className="w-8 h-8" />,
        description: "Comprehensive security audits and implementation of security best practices.",
        features: ["Security audits", "Penetration testing", "Compliance consulting", "Security monitoring"],
        technologies: ["OWASP", "SSL/TLS", "OAuth", "GDPR", "HIPAA"],
        pricing: "Starting from $6,000",
        timeline: "4-8 weeks",
        link: "/services/security",
      },
      {
        title: "Monitoring & Analytics",
        icon: <BarChart3 className="w-8 h-8" />,
        description: "Application monitoring, performance analytics, and business intelligence.",
        features: ["Performance monitoring", "Error tracking", "Business analytics", "Custom dashboards"],
        technologies: ["Grafana", "Prometheus", "ELK Stack", "New Relic", "DataDog"],
        pricing: "Starting from $5,000",
        timeline: "3-6 weeks",
        link: "/services/monitoring",
      },
      {
        title: "Maintenance & Support",
        icon: <Wrench className="w-8 h-8" />,
        description: "Ongoing maintenance and technical support for your applications.",
        features: ["24/7 monitoring", "Bug fixes and updates", "Performance optimization", "Technical support"],
        technologies: ["Various", "Monitoring Tools", "Support Systems", "Documentation"],
        pricing: "Starting from $2,000/month",
        timeline: "Ongoing",
        link: "/services/maintenance",
      },
    ],
    // Consulting Services
    [
      {
        title: "Technology Consulting",
        icon: <Lightbulb className="w-8 h-8" />,
        description: "Strategic technology guidance to help you make informed decisions.",
        features: ["Technology assessment", "Architecture planning", "Technology roadmaps", "Best practices guidance"],
        technologies: ["Various", "Industry Standards", "Best Practices", "Frameworks"],
        pricing: "Starting from $200/hour",
        timeline: "2-8 weeks",
        link: "/services/tech-consulting",
      },
      {
        title: "Digital Transformation",
        icon: <TrendingUp className="w-8 h-8" />,
        description: "Complete digital transformation strategies for modern businesses.",
        features: ["Process digitization", "Legacy modernization", "Change management", "Training and adoption"],
        technologies: ["Cloud Platforms", "Modern Frameworks", "Automation Tools"],
        pricing: "Starting from $25,000",
        timeline: "12-24 weeks",
        link: "/services/digital-transformation",
      },
      {
        title: "Project Management",
        icon: <Target className="w-8 h-8" />,
        description: "Professional project management services for technology initiatives.",
        features: ["Agile project management", "Resource planning", "Risk management", "Stakeholder communication"],
        technologies: ["Jira", "Confluence", "Slack", "Microsoft Project", "Agile"],
        pricing: "Starting from $150/hour",
        timeline: "Project duration",
        link: "/services/project-management",
      },
      {
        title: "Code Review & Audit",
        icon: <Search className="w-8 h-8" />,
        description: "Comprehensive code reviews and technical audits for quality assurance.",
        features: [
          "Code quality assessment",
          "Security vulnerability scan",
          "Performance analysis",
          "Best practices review",
        ],
        technologies: ["Static Analysis Tools", "Security Scanners", "Performance Tools"],
        pricing: "Starting from $3,000",
        timeline: "2-4 weeks",
        link: "/services/code-review",
      },
      {
        title: "Training & Workshops",
        icon: <GraduationCap className="w-8 h-8" />,
        description: "Technical training and workshops for your development team.",
        features: [
          "Custom training programs",
          "Technology workshops",
          "Best practices sessions",
          "Certification preparation",
        ],
        technologies: ["Various Technologies", "Training Materials", "Certification Prep"],
        pricing: "Starting from $2,000",
        timeline: "1-4 weeks",
        link: "/services/training",
      },
      {
        title: "Startup Consulting",
        icon: <Rocket className="w-8 h-8" />,
        description: "Specialized consulting services for startups and early-stage companies.",
        features: [
          "MVP development strategy",
          "Technology stack selection",
          "Scalability planning",
          "Investor pitch support",
        ],
        technologies: ["Lean Startup", "MVP Frameworks", "Scalable Technologies"],
        pricing: "Starting from $5,000",
        timeline: "4-12 weeks",
        link: "/services/startup-consulting",
      },
    ],
  ]

  const industries = [
    {
      name: "Healthcare",
      icon: <HeartPulse className="w-6 h-6" />,
      description: "HIPAA-compliant solutions for modern healthcare",
      projects: "150+ projects",
    },
    {
      name: "Finance",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Secure financial applications and platforms",
      projects: "120+ projects",
    },
    {
      name: "Logistics",
      icon: <Truck className="w-6 h-6" />,
      description: "Supply chain and logistics optimization",
      projects: "80+ projects",
    },
    {
      name: "E-commerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Online retail and marketplace solutions",
      projects: "200+ projects",
    },
    {
      name: "Education",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "EdTech and learning management systems",
      projects: "90+ projects",
    },
    {
      name: "Enterprise",
      icon: <Building className="w-6 h-6" />,
      description: "Large-scale enterprise applications",
      projects: "100+ projects",
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <Briefcase className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Expert Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
  ]

  const testimonials = [
    {
      quote:
        "Soradius transformed our entire business with their custom software solution. The team's expertise and dedication exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      company: "TechStart Inc.",
      rating: 5,
      avatar: "SJ",
      industry: "Technology",
    },
    {
      quote:
        "The web application they built for us has revolutionized how we serve our customers. Outstanding quality and support.",
      author: "Michael Chen",
      position: "VP Engineering, DataFlow Systems",
      company: "DataFlow Systems",
      rating: 5,
      avatar: "MC",
      industry: "Data Analytics",
    },
    {
      quote:
        "Professional, reliable, and innovative. Soradius delivered exactly what we needed on time and within budget.",
      author: "Emily Rodriguez",
      position: "Product Manager, InnovateCorp",
      company: "InnovateCorp",
      rating: 5,
      avatar: "ER",
      industry: "Innovation",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Create system architecture and user experience designs.",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Launch your solution and provide ongoing maintenance.",
      icon: <Rocket className="w-6 h-6" />,
    },
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
                <BreadcrumbPage className="text-foreground font-semibold">Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

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
              <span className="text-sm font-semibold">Comprehensive Technology Services</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-4xl mx-auto"
            >
              From custom software development to cloud solutions and strategic consulting, we provide comprehensive
              technology services to transform your business.
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
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent backdrop-blur-sm font-semibold px-8 py-4"
              >
                <Play className="mr-2 w-5 h-5" />
                View Portfolio
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

      {/* Service Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Service Categories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology services across development, design, cloud infrastructure, and strategic
              consulting.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
                }`}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Services Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {serviceCategories[activeCategory].name} Services
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {serviceCategories[activeCategory].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services[activeCategory].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-card border-border group-hover:border-primary/30 group-hover:transform group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${serviceCategories[activeCategory].color} text-white`}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{service.title}</h4>
                        <div className="text-sm text-primary font-semibold">
                          {service.pricing} • {service.timeline}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Key Features:</h5>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Industries</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Deep expertise across multiple industries with specialized solutions for each sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-card border-border group-hover:border-primary/30 group-hover:transform group-hover:scale-105">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-6 group-hover:bg-primary/20 transition-all">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{industry.description}</p>
                  <div className="text-primary font-semibold">{industry.projects}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Cog className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery with transparency and quality.
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
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-card border-border group-hover:border-primary/30 group-hover:transform group-hover:scale-105">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg mx-auto mb-6">
                    {step.step}
                  </div>
                  <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Client Success</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Trusted by businesses worldwide to deliver exceptional technology solutions.
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"></div>
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
              <span className="text-sm font-semibold text-white">Ready to Get Started?</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Let's Build Something
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Transform your business with our comprehensive technology services. Get a free consultation and discover
              how we can help you achieve your goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-bold px-10 py-4 text-lg"
              >
                <MessageSquare className="mr-3 w-6 h-6" />
                Start Your Project
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
                Get Free Quote
              </Button>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Mail className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-xl font-bold text-white mb-2">Email Us</div>
                <div className="text-blue-200">hello@soradius.com</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Phone className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-xl font-bold text-white mb-2">Call Us</div>
                <div className="text-blue-200">+254 000 000000</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Calendar className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-xl font-bold text-white mb-2">Schedule Meeting</div>
                <div className="text-blue-200">Book a consultation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesComponent
