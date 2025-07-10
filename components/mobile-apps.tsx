
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
  AppWindow,
  SmartphoneCharging,
  Cpu,
  Fingerprint,
  SmartphoneNfc,
  Wifi,
  Bluetooth,
  Camera,
  MapPin,
  ShieldCheck,
  BatteryCharging,
  PhoneIcon,
  Gauge,
  PhoneForwarded,
  PhoneCallIcon,
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

const MobileAppDevelopment = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Native iOS Apps",
      description: "High-performance mobile apps built specifically for Apple devices",
      features: [
        "Optimized for iPhone & iPad",
        "Swift & SwiftUI development",
        "Apple ecosystem integration",
        "App Store submission",
      ],
      technologies: ["Swift", "SwiftUI", "Xcode", "Core Data", "ARKit"],
      price: "Starting from $25,000",
      timeline: "10-16 weeks",
    },
    {
      icon: <SmartphoneCharging className="w-8 h-8" />,
      title: "Native Android Apps",
      description: "Custom Android applications leveraging Google's ecosystem",
      features: [
        "Optimized for all Android devices",
        "Kotlin & Jetpack Compose",
        "Material Design implementation",
        "Google Play Store submission",
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Room DB", "Firebase"],
      price: "Starting from $22,000",
      timeline: "10-16 weeks",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Cross-Platform Apps",
      description: "Single codebase apps that run on both iOS and Android",
      features: [
        "80% code reuse across platforms",
        "Faster development cycle",
        "Consistent UI/UX",
        "Lower maintenance costs",
      ],
      technologies: ["Flutter", "React Native", "Dart", "JavaScript", "Firebase"],
      price: "Starting from $30,000",
      timeline: "8-14 weeks",
    },
    {
      icon: <AppWindow className="w-8 h-8" />,
      title: "Hybrid Apps",
      description: "Web-based apps with native capabilities for broader reach",
      features: [
        "Web + mobile from single codebase",
        "Access to device features",
        "Faster time-to-market",
        "Lower development cost",
      ],
      technologies: ["Ionic", "Capacitor", "React", "Angular", "Cordova"],
      price: "Starting from $18,000",
      timeline: "6-12 weeks",
    },
  ]

  const features = [
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Biometric Authentication",
      description: "Secure login with Face ID, Touch ID, or fingerprint scanning",
    },
    {
      icon: <SmartphoneNfc className="w-6 h-6" />,
      title: "NFC Integration",
      description: "Contactless payments and device interactions",
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Offline Functionality",
      description: "Apps that work seamlessly without internet connection",
    },
    {
      icon: <Bluetooth className="w-6 h-6" />,
      title: "Bluetooth Connectivity",
      description: "Connect with wearables and IoT devices",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Camera Integration",
      description: "Advanced image capture and processing",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location Services",
      description: "GPS tracking and location-based features",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description:
        "We define your app's goals, target audience, and roadmap with detailed user flows and feature prioritization.",
      icon: <Lightbulb className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: ["Market Research", "User Personas", "Feature List", "Technical Feasibility"],
    },
    {
      step: "02",
      title: "UI/UX Design",
      description:
        "Create intuitive interfaces and seamless user experiences with platform-specific design guidelines.",
      ihonePhoneIconon: <PhoneCallIcon className="w-6 h-6" />,
      duration: "2-4 weeks",
      deliverables: ["Wireframes", "Prototypes", "Design System", "Style Guide"],
    },
    {
      step: "03",
      title: "Development",
      description:
        "Agile development with continuous testing, code reviews, and quality assurance for robust performance.",
      icon: <Code className="w-6 h-6" />,
      duration: "8-16 weeks",
      deliverables: ["Alpha/Beta Versions", "Test Reports", "Technical Documentation"],
    },
    {
      step: "04",
      title: "Deployment & Growth",
      description:
        "App store submission, launch strategy, and ongoing updates with analytics-driven improvements.",
      icon: <Rocket className="w-6 h-6" />,
      duration: "Ongoing",
      deliverables: ["App Store Optimization", "Analytics Dashboard", "Maintenance Plan"],
    },
  ]

  const benefits = [
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Native Performance",
      description:
        "60fps smooth animations and instant response times for premium user experience.",
      metric: "60fps Performance",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Bank-level encryption and secure data storage for user protection.",
      metric: "100% Secure",
    },
    {
      icon: <BatteryCharging className="w-6 h-6" />,
      title: "Battery Optimization",
      description: "Efficient resource usage that preserves device battery life.",
      metric: "30% Less Drain",
    },
    {
      icon: <PhoneForwarded className="w-6 h-6" />,
      title: "Device Features",
      description: "Full access to camera, GPS, sensors and other hardware capabilities.",
      metric: "100+ APIs",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "App Store Visibility",
      description: "Optimized metadata and assets for better discoverability.",
      metric: "2-3x More Installs",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "User Retention",
      description: "Higher engagement rates with native-quality experiences.",
      metric: "40% More Retention",
    },
  ]

  const caseStudies = [
    {
      title: "Fitness Tracking App",
      client: "FitLife",
      industry: "Health & Fitness",
      challenge:
        "Needed a cross-platform solution to track workouts with real-time metrics and social features.",
      solution:
        "Built with React Native for both platforms with custom native modules for advanced sensor data.",
      results: [
        "4.8 average App Store rating",
        "500,000+ downloads in first year",
        "30% premium conversion rate",
        "Featured by Apple in Health category",
      ],
      technologies: ["React Native", "Firebase", "HealthKit", "Google Fit", "Redux"],
      image: "/placeholder.svg?height=300&width=400",
      testimonial:
        "The app performs like native on both platforms. Our users love the smooth animations and accurate tracking.",
      clientRole: "CEO, FitLife",
    },
    {
      title: "Banking App Redesign",
      client: "UrbanBank",
      industry: "Finance",
      challenge:
        "Legacy app had poor ratings due to slow performance and outdated design.",
      solution:
        "Complete rebuild with SwiftUI and Jetpack Compose, implementing modern design system.",
      results: [
        "App load time reduced by 70%",
        "4.9 star rating (from 3.2)",
        "40% increase in mobile transactions",
        "Won FinTech design award",
      ],
      technologies: ["SwiftUI", "Jetpack Compose", "Biometrics", "Plaid API", "GraphQL"],
      image: "/placeholder.svg?height=300&width=400",
      testimonial:
        "The new app transformed our digital banking experience. Customer satisfaction scores are at all-time highs.",
      clientRole: "Digital Product Manager, UrbanBank",
    },
    {
      title: "AR Shopping Experience",
      client: "StyleHub",
      industry: "Retail",
      challenge:
        "Wanted to implement virtual try-on for fashion items to reduce returns.",
      solution:
        "Custom AR solution with 3D product scanning and realistic rendering.",
      results: [
        "35% reduction in returns",
        "2x longer session durations",
        "Featured in App Store 'Innovation'",
        "25% increase in conversion",
      ],
      technologies: ["ARKit", "RealityKit", "SceneKit", "Core ML", "Swift"],
      image: "/placeholder.svg?height=300&width=400",
      testimonial:
        "The AR implementation gave us a competitive edge we couldn't have achieved with our web platform alone.",
      clientRole: "CTO, StyleHub",
    },
  ]

  const testimonials = [
    {
      quote:
        "The mobile app they developed exceeded our expectations in both performance and design. User retention is 3x higher than industry average.",
      author: "Jessica Lin",
      position: "Product Director, FinTech Solutions",
      company: "FinTech Solutions",
      rating: 5,
      avatar: "JL",
      industry: "Finance",
    },
    {
      quote:
        "From concept to launch, the team demonstrated deep expertise in mobile development. The app has been featured twice by Apple.",
      author: "David Park",
      position: "Founder, HealthTrack",
      company: "HealthTrack",
      rating: 5,
      avatar: "DP",
      industry: "Health",
    },
    {
      quote:
        "Their attention to detail in animations and transitions made our app feel premium. The reviews speak for themselves.",
      author: "Maria Gonzalez",
      position: "UX Lead, ShopEasy",
      company: "ShopEasy",
      rating: 5,
      avatar: "MG",
      industry: "E-commerce",
    },
  ]

  const technologies = [
    { name: "Swift", category: "iOS", popularity: 95 },
    { name: "Kotlin", category: "Android", popularity: 90 },
    { name: "Flutter", category: "Cross-Platform", popularity: 88 },
    { name: "React Native", category: "Cross-Platform", popularity: 85 },
    { name: "SwiftUI", category: "iOS", popularity: 92 },
    { name: "Jetpack Compose", category: "Android", popularity: 89 },
    { name: "Firebase", category: "Backend", popularity: 90 },
    { name: "ARKit", category: "iOS", popularity: 80 },
    { name: "ML Kit", category: "Android", popularity: 78 },
    { name: "HealthKit", category: "iOS", popularity: 75 },
    { name: "Google Fit", category: "Android", popularity: 72 },
    { name: "Core ML", category: "iOS", popularity: 70 },
    { name: "TensorFlow Lite", category: "Android", popularity: 68 },
    { name: "Realm", category: "Database", popularity: 82 },
    { name: "GraphQL", category: "API", popularity: 85 },
  ]

  const stats = [
    { number: "150+", label: "Mobile Apps Built", icon: <Smartphone className="w-6 h-6" /> },
    { number: "4.8★", label: "Avg. App Rating", icon: <Star className="w-6 h-6" /> },
    { number: "25M+", label: "Combined Downloads", icon: <Download className="w-6 h-6" /> },
    { number: "12", label: "Apple Features", icon: <Award className="w-6 h-6" /> },
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
                <BreadcrumbPage className="text-foreground font-semibold">Mobile App Development</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
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
              <span className="text-sm font-semibold">Award-Winning Mobile Developers</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Mobile App
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
              Transform your business with high-performance mobile apps built by expert developers. From concept to app store, we create engaging experiences that users love.
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
                Start Your App Project
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

      {/* Services Overview */}
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
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Mobile Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From native to cross-platform apps, we build mobile solutions that deliver exceptional user experiences across all devices and platforms.
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

      {/* Mobile Features */}
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
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Mobile Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Advanced Mobile Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leverage cutting-edge mobile technologies to create powerful, engaging experiences for your users.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
              <Cog className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Mobile Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful app delivery with transparency, quality, and on-time results.
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

      {/* Benefits */}
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
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Why Choose Custom</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Benefits of Mobile Apps</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mobile apps provide unique advantages that mobile websites simply can't match, delivering measurable business value.
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

      {/* Case Studies */}
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
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Mobile App Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real projects, real results - see how we've helped businesses transform with custom mobile solutions.
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

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-primary">{study.client}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground mb-4">{study.challenge}</p>
                      
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-muted-foreground mb-4">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg border border-border">
                      <p className="italic text-muted-foreground mb-3">"{study.testimonial}"</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          {study.clientRole.split(", ")[0][0]}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{study.clientRole.split(", ")[0]}</div>
                          <div className="text-xs text-muted-foreground">{study.clientRole.split(", ")[1]}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 font-semibold"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
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
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Client Feedback</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from businesses who've transformed their mobile presence with us.
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
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-card border-border group-hover:border-primary/30 group-hover:transform group-hover:scale-105">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`}
                      />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground italic mb-8">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-xs text-muted-foreground/70">{testimonial.industry} Industry</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
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
              <span className="text-sm font-medium text-primary">Our Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Mobile Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We stay at the forefront of mobile development with the latest frameworks, tools, and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-card border-border group-hover:border-primary/30">
                  <div className="text-2xl font-bold text-foreground mb-2">{tech.name}</div>
                  <div className="text-sm text-muted-foreground mb-4">{tech.category}</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Build Your Mobile App?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Whether you need a simple MVP or a complex enterprise solution, our mobile experts will bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Phone className="mr-2 w-5 h-5" />
                Book a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MobileAppDevelopment