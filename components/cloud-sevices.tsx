"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Cloud,
  Server,
  Shield,
  Settings,
  BarChart3,
  Wrench,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Target,
  TrendingUp,
  Play,
  Download,
  Sparkles,
  Globe,
  Building,
  DollarSign,
  Phone,
  Mail,
  Calendar,
  Activity,
  CloudRain,
  CloudSnow,
  CloudLightning,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const CloudServices = () => {
  const [activeService, setActiveService] = useState(0)

  const cloudServices = [
    {
      id: "migration",
      title: "Cloud Migration",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      description: "Seamless migration of your applications and data to cloud platforms with zero downtime.",
      longDescription:
        "Our cloud migration services help you transition from on-premises infrastructure to cloud platforms like AWS, Azure, and Google Cloud. We ensure minimal disruption to your business operations while maximizing the benefits of cloud computing.",
      features: [
        "AWS/Azure/GCP migration strategy",
        "Application modernization and refactoring",
        "Data migration with integrity validation",
        "Performance optimization post-migration",
        "Cost optimization and right-sizing",
        "Security and compliance assessment",
        "24/7 migration support and monitoring",
        "Rollback planning and disaster recovery",
      ],
      technologies: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform", "Ansible"],
      pricing: "Starting from $10,000",
      timeline: "6-12 weeks",
      benefits: [
        "Reduced infrastructure costs by up to 40%",
        "Improved scalability and flexibility",
        "Enhanced security and compliance",
        "Better disaster recovery capabilities",
      ],
      process: [
        "Assessment and planning",
        "Migration strategy development",
        "Pilot migration and testing",
        "Full migration execution",
        "Optimization and monitoring",
      ],
    },
    {
      id: "devops",
      title: "DevOps & CI/CD",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      description: "Automated deployment pipelines and infrastructure management for faster, reliable releases.",
      longDescription:
        "Transform your development workflow with our comprehensive DevOps solutions. We implement CI/CD pipelines, infrastructure as code, and automated testing to accelerate your development cycle while maintaining high quality standards.",
      features: [
        "CI/CD pipeline design and implementation",
        "Infrastructure as Code (IaC) setup",
        "Automated testing and quality gates",
        "Container orchestration with Kubernetes",
        "Monitoring and logging integration",
        "Security scanning and compliance",
        "Multi-environment deployment strategies",
        "Performance monitoring and alerting",
      ],
      technologies: [
        "Jenkins",
        "GitLab CI",
        "GitHub Actions",
        "Terraform",
        "Ansible",
        "Docker",
        "Kubernetes",
        "Prometheus",
      ],
      pricing: "Starting from $8,000",
      timeline: "4-8 weeks",
      benefits: [
        "Faster deployment cycles (up to 10x)",
        "Reduced deployment errors by 90%",
        "Improved team collaboration",
        "Enhanced system reliability",
      ],
      process: [
        "Current workflow assessment",
        "Pipeline architecture design",
        "Tool selection and setup",
        "Automation implementation",
        "Team training and handover",
      ],
    },
    {
      id: "architecture",
      title: "Cloud Architecture",
      icon: <Building className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      description: "Scalable cloud architecture design for high-performance, resilient applications.",
      longDescription:
        "Design and implement robust cloud architectures that scale with your business. Our architects create solutions that are secure, cost-effective, and optimized for performance while following cloud-native best practices.",
      features: [
        "Microservices architecture design",
        "Serverless computing implementation",
        "Auto-scaling and load balancing",
        "Multi-region deployment strategies",
        "API gateway and service mesh setup",
        "Database architecture optimization",
        "CDN and caching strategies",
        "Disaster recovery planning",
      ],
      technologies: [
        "AWS Well-Architected",
        "Azure Architecture",
        "GCP Architecture",
        "Microservices",
        "Serverless",
        "API Gateway",
      ],
      pricing: "Starting from $12,000",
      timeline: "6-10 weeks",
      benefits: [
        "99.99% uptime guarantee",
        "Automatic scaling capabilities",
        "Optimized performance and costs",
        "Future-proof architecture",
      ],
      process: [
        "Requirements analysis",
        "Architecture design",
        "Proof of concept",
        "Implementation",
        "Testing and optimization",
      ],
    },
    {
      id: "security",
      title: "Cloud Security",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      description: "Comprehensive security audits and implementation of security best practices.",
      longDescription:
        "Protect your cloud infrastructure with enterprise-grade security measures. We implement multi-layered security strategies, conduct thorough audits, and ensure compliance with industry standards.",
      features: [
        "Security assessment and auditing",
        "Identity and access management (IAM)",
        "Network security and firewalls",
        "Data encryption at rest and in transit",
        "Compliance framework implementation",
        "Vulnerability scanning and remediation",
        "Security monitoring and incident response",
        "Backup and disaster recovery",
      ],
      technologies: [
        "AWS Security",
        "Azure Security",
        "OWASP",
        "SSL/TLS",
        "OAuth 2.0",
        "SAML",
        "Zero Trust Architecture",
      ],
      pricing: "Starting from $6,000",
      timeline: "4-8 weeks",
      benefits: [
        "Enhanced data protection",
        "Regulatory compliance assurance",
        "Reduced security risks",
        "24/7 security monitoring",
      ],
      process: [
        "Security assessment",
        "Risk analysis",
        "Security strategy development",
        "Implementation",
        "Monitoring and maintenance",
      ],
    },
    {
      id: "monitoring",
      title: "Monitoring & Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-500",
      description: "Application monitoring, performance analytics, and business intelligence solutions.",
      longDescription:
        "Gain complete visibility into your cloud infrastructure and applications. Our monitoring solutions provide real-time insights, predictive analytics, and automated alerting to ensure optimal performance.",
      features: [
        "Real-time performance monitoring",
        "Application performance management (APM)",
        "Infrastructure monitoring and alerting",
        "Log aggregation and analysis",
        "Custom dashboard creation",
        "Predictive analytics and forecasting",
        "Cost monitoring and optimization",
        "SLA monitoring and reporting",
      ],
      technologies: ["Grafana", "Prometheus", "ELK Stack", "New Relic", "DataDog", "CloudWatch", "Azure Monitor"],
      pricing: "Starting from $5,000",
      timeline: "3-6 weeks",
      benefits: [
        "Proactive issue detection",
        "Improved system performance",
        "Data-driven decision making",
        "Reduced downtime by 95%",
      ],
      process: [
        "Monitoring requirements analysis",
        "Tool selection and setup",
        "Dashboard configuration",
        "Alert configuration",
        "Training and documentation",
      ],
    },
    {
      id: "support",
      title: "Cloud Support & Maintenance",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      description: "Ongoing maintenance and technical support for your cloud infrastructure.",
      longDescription:
        "Keep your cloud infrastructure running smoothly with our comprehensive support and maintenance services. We provide 24/7 monitoring, regular updates, and proactive maintenance to prevent issues.",
      features: [
        "24/7 infrastructure monitoring",
        "Proactive maintenance and updates",
        "Performance optimization",
        "Security patch management",
        "Backup and disaster recovery",
        "Capacity planning and scaling",
        "Technical support and troubleshooting",
        "Regular health checks and reports",
      ],
      technologies: ["Various Cloud Platforms", "Monitoring Tools", "Automation Scripts", "Support Systems"],
      pricing: "Starting from $2,000/month",
      timeline: "Ongoing service",
      benefits: [
        "99.9% uptime guarantee",
        "Reduced operational overhead",
        "Proactive issue resolution",
        "Cost optimization",
      ],
      process: [
        "Service level agreement setup",
        "Monitoring implementation",
        "Support team assignment",
        "Regular maintenance schedule",
        "Continuous optimization",
      ],
    },
  ]

  const cloudPlatforms = [
    {
      name: "Amazon Web Services",
      logo: "AWS",
      description: "Leading cloud platform with comprehensive services",
      services: "200+ services",
      expertise: "Advanced Partner",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "Microsoft Azure",
      logo: "Azure",
      description: "Enterprise-grade cloud computing platform",
      services: "100+ services",
      expertise: "Gold Partner",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Google Cloud Platform",
      logo: "GCP",
      description: "Innovative cloud platform with AI/ML focus",
      services: "90+ services",
      expertise: "Premier Partner",
      color: "from-green-500 to-blue-500",
    },
  ]

  const stats = [
    { number: "200+", label: "Cloud Migrations", icon: <Cloud className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Achieved", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Savings", icon: <DollarSign className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
  ]

  const testimonials = [
    {
      quote:
        "Soradius migrated our entire infrastructure to AWS with zero downtime. Their expertise saved us months of work and significant costs.",
      author: "David Thompson",
      position: "CTO, TechFlow Solutions",
      company: "TechFlow Solutions",
      rating: 5,
      avatar: "DT",
      industry: "Technology",
      savings: "35% cost reduction",
    },
    {
      quote:
        "The DevOps pipeline they implemented reduced our deployment time from hours to minutes. Game-changing for our development team.",
      author: "Lisa Chen",
      position: "VP Engineering, DataCorp",
      company: "DataCorp",
      rating: 5,
      avatar: "LC",
      industry: "Data Analytics",
      savings: "10x faster deployments",
    },
    {
      quote:
        "Their cloud architecture design scaled perfectly with our growth. We've handled 500% traffic increase without any issues.",
      author: "Mark Rodriguez",
      position: "Head of Infrastructure, ScaleUp Inc.",
      company: "ScaleUp Inc.",
      rating: 5,
      avatar: "MR",
      industry: "E-commerce",
      savings: "500% traffic handled",
    },
  ]

  const benefits = [
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs by up to 40% through right-sizing and optimization",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Scalability",
      description: "Auto-scale resources based on demand to handle traffic spikes effortlessly",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Security",
      description: "Enterprise-grade security with compliance to industry standards",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Reliability",
      description: "99.9% uptime with automated failover and disaster recovery",
      icon: <Activity className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant cloud solutions",
      projects: "50+ projects",
      icon: "🏥",
      compliance: ["HIPAA", "HITECH"],
    },
    {
      name: "Finance",
      description: "Secure financial cloud platforms",
      projects: "40+ projects",
      icon: "🏦",
      compliance: ["PCI DSS", "SOX"],
    },
    {
      name: "E-commerce",
      description: "Scalable retail cloud infrastructure",
      projects: "60+ projects",
      icon: "🛒",
      compliance: ["PCI DSS", "GDPR"],
    },
    {
      name: "Manufacturing",
      description: "IoT and industrial cloud solutions",
      projects: "30+ projects",
      icon: "🏭",
      compliance: ["ISO 27001"],
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
                <BreadcrumbLink
                  href="/services"
                  className="text-primary hover:underline hover:text-primary/80 font-medium transition-colors"
                >
                  Services
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-muted-foreground/50">/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground font-semibold">Cloud Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating Cloud Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse">
          <CloudRain className="w-16 h-16 text-white/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000">
          <CloudSnow className="w-20 h-20 text-white/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/5 rounded-full blur-xl animate-pulse delay-500">
          <CloudLightning className="w-12 h-12 text-white/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

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
              <Cloud className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold">Enterprise Cloud Solutions</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Cloud
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
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
              Transform your business with scalable, secure, and cost-effective cloud solutions. From migration to
              ongoing support, we handle your entire cloud journey.
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
                Start Migration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent backdrop-blur-sm font-semibold px-8 py-4"
              >
                <Play className="mr-2 w-5 h-5" />
                Free Assessment
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
                  <div className="flex justify-center mb-2 text-cyan-400">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Cloud Platforms</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certified Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're certified partners with leading cloud providers, ensuring expert-level service delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-card border-border group-hover:border-primary/30 group-hover:transform group-hover:scale-105">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.color} text-white flex items-center justify-center font-bold text-lg shadow-lg mx-auto mb-6`}
                  >
                    {platform.logo}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{platform.name}</h3>
                  <p className="text-muted-foreground mb-4">{platform.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm text-primary font-semibold">{platform.services}</div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {platform.expertise}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services */}
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
              <Server className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Comprehensive Cloud Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              End-to-end cloud services from strategy and migration to ongoing optimization and support.
            </p>
          </motion.div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {cloudServices.map((service, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveService(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeService === index
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
                }`}
              >
                {service.icon}
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Active Service Details */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="p-8 md:p-12 bg-card border-border shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Service Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${cloudServices[activeService].color} text-white shadow-lg`}
                    >
                      {cloudServices[activeService].icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground">{cloudServices[activeService].title}</h3>
                      <div className="text-primary font-semibold">
                        {cloudServices[activeService].pricing} • {cloudServices[activeService].timeline}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {cloudServices[activeService].longDescription}
                  </p>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-foreground mb-4">Key Benefits</h4>
                    <div className="space-y-3">
                      {cloudServices[activeService].benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-foreground mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {cloudServices[activeService].technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-muted text-muted-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                {/* Features & Process */}
                <div>
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-foreground mb-6">Service Features</h4>
                    <div className="space-y-4">
                      {cloudServices[activeService].features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-6">Our Process</h4>
                    <div className="space-y-4">
                      {cloudServices[activeService].process.map((step, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                            {i + 1}
                          </div>
                          <span className="text-muted-foreground font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Why Choose Cloud</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Cloud Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the transformative benefits of cloud computing for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-card border-border group-hover:border-primary/30 group-hover:transform group-hover:scale-105 h-full">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${benefit.color} text-white w-fit mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
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
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Industries</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Industry Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized cloud solutions tailored for different industries with compliance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-card border-border group-hover:border-primary/30 group-hover:transform group-hover:scale-105 h-full">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <div className="text-primary font-semibold mb-4">{industry.projects}</div>
                  <div className="space-y-2">
                    {industry.compliance.map((comp, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </Card>
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
              <span className="text-sm font-medium text-primary">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Client Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how our cloud solutions have transformed businesses across industries.
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

                  {/* Savings Badge */}
                  <div className="mb-6">
                    <Badge className="bg-green-100 text-green-800 border-green-200">{testimonial.savings}</Badge>
                  </div>

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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              <Cloud className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">Ready to Move to the Cloud?</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Start Your Cloud
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Transformation Today
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Get a free cloud assessment and discover how we can optimize your infrastructure, reduce costs, and
              accelerate your business growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-bold px-10 py-4 text-lg"
              >
                <Cloud className="mr-3 w-6 h-6" />
                Free Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent backdrop-blur-sm font-bold px-10 py-4 text-lg"
              >
                <Phone className="mr-3 w-6 h-6" />
                Schedule Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent backdrop-blur-sm font-bold px-10 py-4 text-lg"
              >
                <Download className="mr-3 w-6 h-6" />
                Migration Guide
              </Button>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-xl font-bold text-white mb-2">Email Us</div>
                <div className="text-blue-200">cloud@soradius.com</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-xl font-bold text-white mb-2">Call Us</div>
                <div className="text-blue-200">+254 000 000000</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Calendar className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-xl font-bold text-white mb-2">Book Consultation</div>
                <div className="text-blue-200">Free 30-min session</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CloudServices
