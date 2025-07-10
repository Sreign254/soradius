"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  HeartPulse,
  Stethoscope,
  BrainCircuit,
  Microscope,
  FlaskConical,
  Home,
  Shield,
  DollarSign,
  TrendingUp,
  CreditCard,
  PiggyBank,
  Building2,
  LineChart,
  Truck,
  Package,
  MapPin,
  Warehouse,
  Ship,
  Plane,
  Clock,
  Users,
  Globe,
  Code,
  Smartphone,
  Database,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Lightbulb,
  Award,
  MessageSquare,
  Play,
  Download,
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

const WebApplications = () => {
  const [activeIndustry, setActiveIndustry] = useState(0)

  const industries = [
    {
      name: "Healthcare",
      icon: <HeartPulse className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "HIPAA-compliant solutions for modern healthcare delivery",
      sectors: [
        {
          title: "Hospitals & Medical Centers",
          icon: <HeartPulse className="w-6 h-6" />,
          description:
            "Comprehensive EHR systems, patient management portals, and operational tools for large healthcare institutions.",
          features: [
            "EMR Integration",
            "Patient Flow Optimization",
            "Telemedicine Platforms",
            "Clinical Decision Support",
          ],
          technologies: ["React", "Node.js", "PostgreSQL", "HL7 FHIR", "AWS HIPAA"],
        },
        {
          title: "Medical Practices",
          icon: <Stethoscope className="w-6 h-6" />,
          description: "Specialized practice management solutions for clinics and private practitioners.",
          features: ["Appointment Scheduling", "Billing Automation", "Clinical Documentation", "Insurance Claims"],
          technologies: ["Next.js", "Express", "MongoDB", "Stripe", "Twilio"],
        },
        {
          title: "Mental Health Providers",
          icon: <BrainCircuit className="w-6 h-6" />,
          description: "Secure teletherapy platforms and patient progress tracking systems.",
          features: ["HIPAA-compliant Video", "Mood Tracking", "Treatment Plan Management", "Crisis Intervention"],
          technologies: ["React", "WebRTC", "Socket.io", "Redis", "Docker"],
        },
        {
          title: "Medical Laboratories",
          icon: <Microscope className="w-6 h-6" />,
          description: "Digital solutions for lab management and test result delivery.",
          features: ["LIMS Integration", "Automated Reporting", "Specimen Tracking", "Quality Control"],
          technologies: ["Vue.js", "Python", "PostgreSQL", "RabbitMQ", "Kubernetes"],
        },
        {
          title: "Pharma & Biotech",
          icon: <FlaskConical className="w-6 h-6" />,
          description: "Clinical trial management and research collaboration platforms.",
          features: ["ePRO Systems", "Regulatory Compliance", "Data Visualization", "Clinical Data Management"],
          technologies: ["Angular", "Java", "Oracle", "Apache Kafka", "Tableau"],
        },
        {
          title: "Home Healthcare",
          icon: <Home className="w-6 h-6" />,
          description: "Mobile solutions for home health providers and caregivers.",
          features: ["Visit Verification", "Care Plan Access", "Family Portals", "Medication Reminders"],
          technologies: ["React Native", "Firebase", "GraphQL", "AWS Lambda", "Cognito"],
        },
      ],
    },
    {
      name: "Finance",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      description: "Secure, compliant financial solutions for modern banking",
      sectors: [
        {
          title: "Digital Banking",
          icon: <Building2 className="w-6 h-6" />,
          description: "Modern online banking platforms with advanced security and user experience.",
          features: ["Account Management", "Mobile Banking", "Payment Processing", "Fraud Detection"],
          technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS KMS"],
        },
        {
          title: "Investment Platforms",
          icon: <TrendingUp className="w-6 h-6" />,
          description: "Trading platforms and portfolio management systems for investors.",
          features: ["Real-time Trading", "Portfolio Analytics", "Risk Assessment", "Market Data Integration"],
          technologies: ["Next.js", "Python", "TimescaleDB", "Apache Kafka", "WebSocket"],
        },
        {
          title: "Payment Solutions",
          icon: <CreditCard className="w-6 h-6" />,
          description: "Secure payment processing and digital wallet solutions.",
          features: ["Payment Gateway", "Digital Wallets", "Recurring Billing", "Multi-currency Support"],
          technologies: ["React", "Express", "MongoDB", "Stripe", "PayPal API"],
        },
        {
          title: "Lending Platforms",
          icon: <PiggyBank className="w-6 h-6" />,
          description: "Digital lending solutions with automated underwriting and loan management.",
          features: ["Credit Scoring", "Automated Underwriting", "Loan Origination", "Risk Management"],
          technologies: ["Vue.js", "Django", "PostgreSQL", "Celery", "Machine Learning"],
        },
        {
          title: "Insurance Tech",
          icon: <Shield className="w-6 h-6" />,
          description: "Digital insurance platforms for policy management and claims processing.",
          features: ["Policy Management", "Claims Processing", "Actuarial Analytics", "Customer Portals"],
          technologies: ["Angular", "Java Spring", "Oracle", "Apache Spark", "Microservices"],
        },
        {
          title: "Wealth Management",
          icon: <LineChart className="w-6 h-6" />,
          description: "Comprehensive wealth management platforms for financial advisors and clients.",
          features: ["Client Portals", "Investment Planning", "Performance Reporting", "Compliance Tracking"],
          technologies: ["React", "C#", "SQL Server", "Power BI", "Azure"],
        },
      ],
    },
    {
      name: "Logistics",
      icon: <Truck className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      description: "Smart logistics solutions for supply chain optimization",
      sectors: [
        {
          title: "Supply Chain Management",
          icon: <Package className="w-6 h-6" />,
          description: "End-to-end supply chain visibility and optimization platforms.",
          features: ["Inventory Management", "Demand Forecasting", "Supplier Integration", "Analytics Dashboard"],
          technologies: ["React", "Node.js", "MongoDB", "Apache Kafka", "Machine Learning"],
        },
        {
          title: "Fleet Management",
          icon: <Truck className="w-6 h-6" />,
          description: "Comprehensive fleet tracking and management solutions.",
          features: ["GPS Tracking", "Route Optimization", "Driver Management", "Fuel Monitoring"],
          technologies: ["Next.js", "Python", "PostgreSQL", "Google Maps API", "IoT Integration"],
        },
        {
          title: "Warehouse Management",
          icon: <Warehouse className="w-6 h-6" />,
          description: "Digital warehouse operations and inventory control systems.",
          features: ["Inventory Control", "Order Fulfillment", "Barcode Scanning", "Labor Management"],
          technologies: ["Vue.js", "Java", "MySQL", "RFID Integration", "Microservices"],
        },
        {
          title: "Freight & Shipping",
          icon: <Ship className="w-6 h-6" />,
          description: "Freight management and shipping coordination platforms.",
          features: ["Shipment Tracking", "Carrier Integration", "Rate Comparison", "Documentation Management"],
          technologies: ["Angular", "Express", "PostgreSQL", "EDI Integration", "API Gateway"],
        },
        {
          title: "Last-Mile Delivery",
          icon: <MapPin className="w-6 h-6" />,
          description: "Delivery optimization and customer experience platforms.",
          features: ["Route Planning", "Real-time Tracking", "Delivery Notifications", "Customer Portals"],
          technologies: ["React Native", "Node.js", "Redis", "WebSocket", "Push Notifications"],
        },
        {
          title: "Air Cargo",
          icon: <Plane className="w-6 h-6" />,
          description: "Aviation logistics and cargo management systems.",
          features: ["Cargo Booking", "Flight Scheduling", "Customs Integration", "Hazmat Compliance"],
          technologies: ["React", "Java Spring", "Oracle", "IATA Standards", "Cloud Infrastructure"],
        },
      ],
    },
  ]

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Scalable Architecture",
      description: "Built to handle millions of users with cloud-native architecture and microservices design.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, compliance, and advanced threat protection.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description: "Optimized for speed with CDN, caching, and performance monitoring.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Responsive design that works perfectly on all devices and screen sizes.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Built-in analytics and reporting for data-driven business decisions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Experience",
      description: "Intuitive interfaces designed for maximum user adoption and satisfaction.",
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
    { name: "Redis", category: "Cache", popularity: 80 },
    { name: "AWS", category: "Cloud", popularity: 95 },
  ]

  const caseStudies = [
    {
      title: "Healthcare Management Platform",
      industry: "Healthcare",
      client: "Regional Medical Center",
      challenge: "Manual patient management causing delays and errors in care delivery",
      solution: "Comprehensive EHR system with automated workflows and real-time patient tracking",
      results: ["50% reduction in patient wait times", "99.9% system uptime", "HIPAA compliance achieved"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Digital Banking Platform",
      industry: "Finance",
      client: "Community Bank",
      challenge: "Legacy banking system unable to meet modern customer expectations",
      solution: "Modern web banking platform with mobile-first design and advanced security",
      results: ["300% increase in digital adoption", "60% reduction in branch visits", "Enhanced security"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Supply Chain Optimization",
      industry: "Logistics",
      client: "Global Retailer",
      challenge: "Lack of visibility across complex supply chain operations",
      solution: "Real-time supply chain management platform with predictive analytics",
      results: ["25% reduction in inventory costs", "40% improvement in delivery times", "Real-time visibility"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const stats = [
    { number: "500+", label: "Web Apps Delivered", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { number: "10M+", label: "Users Served", icon: <Users className="w-6 h-6" /> },
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
                <BreadcrumbPage className="text-foreground font-semibold">Web Applications</BreadcrumbPage>
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
              <span className="text-sm font-semibold">Industry-Leading Web Applications</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Enterprise Web
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Applications
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-4xl mx-auto"
            >
              Powerful, scalable web applications for Healthcare, Finance, and Logistics industries. Built with modern
              technologies and designed for enterprise-grade performance.
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
                View Demo
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

      {/* Industry Selector */}
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
              <span className="text-sm font-medium text-primary">Industry Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Web Apps by Industry</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized solutions tailored to the unique needs of Healthcare, Finance, and Logistics sectors.
            </p>
          </motion.div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeIndustry === index
                    ? `bg-gradient-to-r ${industry.color} text-white shadow-lg`
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
                }`}
              >
                {industry.icon}
                {industry.name}
              </motion.button>
            ))}
          </div>

          {/* Industry Content */}
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">{industries[activeIndustry].name} Solutions</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {industries[activeIndustry].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries[activeIndustry].sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-card border-border group-hover:border-primary/30 group-hover:transform group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${industries[activeIndustry].color} text-white`}>
                        {sector.icon}
                      </div>
                      <h4 className="text-xl font-bold text-foreground">{sector.title}</h4>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{sector.description}</p>

                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Key Features:</h5>
                      <ul className="space-y-2">
                        {sector.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {sector.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Core Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose Our Web Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built with enterprise-grade features and modern technologies for maximum performance and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-card border-border group-hover:border-primary/30 group-hover:transform group-hover:scale-105">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary/20 transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real-world examples of how our web applications have transformed businesses across industries.
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
                    <h3 className="text-2xl font-bold text-foreground mb-2">{study.title}</h3>
                    <div className="text-primary font-semibold mb-4">{study.client}</div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <strong className="text-foreground">Challenge:</strong>
                        <p className="text-muted-foreground mt-1 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <strong className="text-foreground">Solution:</strong>
                        <p className="text-muted-foreground mt-1 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div>
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
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
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
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Tech Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Modern, proven technologies that ensure your web application is fast, secure, and scalable.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
              Build Your Next
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Web Application
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Transform your business with a custom web application designed for your industry. Get a free consultation
              and detailed project proposal.
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
                <Download className="mr-3 w-6 h-6" />
                Get Free Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
                <div className="text-blue-200">Expert guidance • No obligation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Quick Turnaround</div>
                <div className="text-blue-200">Proposal within 48 hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Proven Results</div>
                <div className="text-blue-200">500+ successful projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default WebApplications
