"use client"

import type * as React from "react"
import {ArrowRight, Zap }  from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  BriefcaseIcon,
  BuildingIcon,
  MapPinIcon,
  DollarSignIcon,
  StarIcon,
  BookmarkIcon,
  TrendingUpIcon,
  BarChartIcon,
  UsersIcon,
  CalendarIcon,
  LightbulbIcon,
  HeartIcon,
  Users2Icon,
  GraduationCapIcon,
  PhoneIcon,
  MailIcon,
  CheckCircleIcon,
  RocketIcon,
  ShieldIcon,
  ZapIcon,
  AwardIcon,
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import CareersHero from "./CareersHero"

interface JobPosition {
  id: string
  title: string
  department: string
  companyName: string
  companyLogo: string
  location: string
  locationType: "remote" | "onsite" | "hybrid"
  employmentType: "full-time" | "part-time" | "contract" | "internship"
  experienceLevel: "entry" | "mid" | "senior" | "lead" | "executive"
  postedDate: string
  salary: string
  description: string
  detailedDescription: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  featured: boolean
  highlight: "new" | "trending" | "competitive" | "popular" | undefined
  perks: string[]
  teamSize: string
  reportingTo: string
  growthOpportunities: string[]
}

export default function EnhancedJobSlider() {
  const [showCallbackForm, setShowCallbackForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  // Enhanced job position data with detailed descriptions
  const jobPositions: JobPosition[] = [
    {
      id: "senior-frontend-engineer",
      title: "Senior Frontend Engineer",
      department: "Engineering",
      companyName: "Soradius",
      companyLogo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      location: "Nairobi, Kenya",
      locationType: "hybrid",
      employmentType: "full-time",
      experienceLevel: "senior",
      postedDate: "2024-01-15",
      salary: "$80,000 - $120,000",
      description:
        "Lead the development of our flagship product using React, TypeScript, and modern web technologies. Join a talented team working on cutting-edge solutions.",
      detailedDescription:
        "We're seeking a Senior Frontend Engineer to join our dynamic team and lead the development of innovative web applications that serve clients across Africa and globally. You'll be working on high-impact projects that directly influence our product direction and user experience. This role offers the opportunity to mentor junior developers, architect scalable frontend solutions, and collaborate with cross-functional teams to deliver exceptional digital experiences.",
      responsibilities: [
        "Lead frontend architecture decisions and implement scalable solutions",
        "Mentor junior and mid-level frontend developers",
        "Collaborate with UX/UI designers to implement pixel-perfect interfaces",
        "Optimize application performance and ensure cross-browser compatibility",
        "Participate in code reviews and maintain high code quality standards",
        "Work closely with backend teams to integrate APIs and services",
        "Drive adoption of modern frontend technologies and best practices",
      ],
      requirements: [
        "5+ years of experience in frontend development",
        "Expert knowledge of React, TypeScript, and modern JavaScript",
        "Experience with state management libraries (Redux, Zustand)",
        "Proficiency in CSS frameworks (Tailwind CSS, styled-components)",
        "Strong understanding of responsive design and mobile-first development",
        "Experience with testing frameworks (Jest, React Testing Library)",
        "Knowledge of build tools and CI/CD pipelines",
      ],
      niceToHave: [
        "Experience with Next.js and server-side rendering",
        "Knowledge of GraphQL and Apollo Client",
        "Familiarity with design systems and component libraries",
        "Experience with performance optimization tools",
        "Understanding of accessibility standards (WCAG)",
      ],
      featured: true,
      highlight: "competitive",
      perks: [
        "Flexible working hours",
        "Remote work options",
        "Health insurance",
        "Professional development budget",
        "Stock options",
        "Team retreats",
      ],
      teamSize: "8-person engineering team",
      reportingTo: "Engineering Manager",
      growthOpportunities: ["Lead Engineer position", "Technical Architecture role", "Engineering Management track"],
    },
    {
      id: "product-manager",
      title: "Product Manager",
      department: "Product",
      companyName: "Soradius",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      location: "Lagos, Nigeria",
      locationType: "hybrid",
      employmentType: "full-time",
      experienceLevel: "senior",
      postedDate: "2024-01-18",
      salary: "$70,000 - $100,000",
      description:
        "Define the product vision and strategy for our SaaS platform. Collaborate with cross-functional teams to deliver exceptional user experiences.",
      detailedDescription:
        "Join our Product team as a Product Manager and help shape the future of our innovative SaaS solutions. You'll be responsible for driving product strategy, working closely with engineering and design teams, and ensuring we deliver products that truly solve our customers' problems. This role is perfect for someone who thrives in a fast-paced environment and wants to make a significant impact on product direction and company growth.",
      responsibilities: [
        "Define and execute product roadmap aligned with business objectives",
        "Conduct market research and competitive analysis",
        "Gather and prioritize product requirements from stakeholders",
        "Work closely with engineering teams to deliver features on time",
        "Analyze product metrics and user feedback to drive improvements",
        "Collaborate with sales and marketing teams on go-to-market strategies",
        "Lead product discovery sessions and user research initiatives",
      ],
      requirements: [
        "3+ years of product management experience in SaaS companies",
        "Strong analytical skills and data-driven decision making",
        "Experience with product management tools (Jira, Confluence, Figma)",
        "Understanding of software development lifecycle",
        "Excellent communication and stakeholder management skills",
        "Experience with user research and usability testing",
        "Bachelor's degree in Business, Engineering, or related field",
      ],
      niceToHave: [
        "Experience in African tech market",
        "Knowledge of agile methodologies",
        "Technical background or CS degree",
        "Experience with B2B SaaS products",
        "Familiarity with design thinking principles",
      ],
      featured: true,
      highlight: "new",
      perks: [
        "Unlimited PTO",
        "Health benefits",
        "Remote work flexibility",
        "Stock options",
        "Learning stipend",
        "Conference attendance",
      ],
      teamSize: "5-person product team",
      reportingTo: "Head of Product",
      growthOpportunities: ["Senior Product Manager", "Head of Product", "VP of Product"],
    },
    {
      id: "senior-data-scientist",
      title: "Senior Data Scientist",
      department: "Data Science",
      companyName: "Soradius",
      companyLogo: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
      location: "Remote",
      locationType: "remote",
      employmentType: "full-time",
      experienceLevel: "senior",
      postedDate: "2024-01-16",
      salary: "$90,000 - $130,000",
      description:
        "Apply machine learning and statistical techniques to solve complex business problems. Work with large datasets to extract insights and drive decision-making.",
      detailedDescription:
        "We're looking for a Senior Data Scientist to join our growing data team and help us unlock the power of data to drive business decisions. You'll work on exciting projects involving machine learning, predictive analytics, and data visualization. This role offers the opportunity to work with cutting-edge technologies and make a real impact on our product development and business strategy.",
      responsibilities: [
        "Develop and deploy machine learning models for business applications",
        "Analyze large datasets to extract actionable business insights",
        "Collaborate with product and engineering teams on data-driven features",
        "Design and implement A/B tests and statistical experiments",
        "Create data visualizations and dashboards for stakeholders",
        "Mentor junior data scientists and analysts",
        "Stay current with latest ML/AI technologies and methodologies",
      ],
      requirements: [
        "5+ years of experience in data science or machine learning",
        "Strong programming skills in Python and SQL",
        "Experience with ML frameworks (TensorFlow, PyTorch, scikit-learn)",
        "Proficiency in statistical analysis and experimental design",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Strong communication skills for presenting findings to stakeholders",
        "Master's or PhD in Data Science, Statistics, or related field",
      ],
      niceToHave: [
        "Experience with big data technologies (Spark, Hadoop)",
        "Knowledge of MLOps and model deployment",
        "Experience with deep learning and neural networks",
        "Familiarity with data engineering concepts",
        "Experience in fintech or healthcare domains",
      ],
      featured: true,
      highlight: "trending",
      perks: [
        "Remote-first culture",
        "Flexible schedule",
        "Quarterly team retreats",
        "Health & wellness stipend",
        "Home office budget",
        "Learning resources",
      ],
      teamSize: "4-person data team",
      reportingTo: "Head of Data Science",
      growthOpportunities: ["Lead Data Scientist", "Head of Data Science", "Chief Data Officer"],
    },
    {
      id: "software-architect",
      title: "Software Architect",
      department: "Engineering",
      companyName: "Soradius",
      companyLogo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
      location: "Cape Town, South Africa",
      locationType: "hybrid",
      employmentType: "full-time",
      experienceLevel: "lead",
      postedDate: "2024-01-14",
      salary: "$100,000 - $140,000",
      description:
        "Design and lead the development of scalable, cloud-native applications. Drive technical decisions and mentor junior engineers in best practices.",
      detailedDescription:
        "We're seeking an experienced Software Architect to join our engineering leadership team and help design the next generation of our platform architecture. You'll be responsible for making high-level design choices, establishing technical standards, and ensuring our systems can scale to serve millions of users across Africa and beyond. This is a strategic role that combines hands-on technical work with architectural leadership.",
      responsibilities: [
        "Design scalable, secure, and maintainable system architectures",
        "Lead technical decision-making and establish engineering standards",
        "Mentor senior engineers and provide technical guidance",
        "Collaborate with product teams on technical feasibility",
        "Drive adoption of cloud-native technologies and microservices",
        "Conduct architecture reviews and ensure best practices",
        "Plan and oversee major system migrations and upgrades",
      ],
      requirements: [
        "8+ years of software development experience",
        "5+ years in architecture or technical leadership roles",
        "Expert knowledge of cloud platforms and microservices",
        "Strong experience with distributed systems and scalability",
        "Proficiency in multiple programming languages",
        "Experience with DevOps practices and CI/CD pipelines",
        "Excellent communication and leadership skills",
      ],
      niceToHave: [
        "Experience with Kubernetes and container orchestration",
        "Knowledge of event-driven architectures",
        "Experience with high-traffic, mission-critical systems",
        "Familiarity with security best practices",
        "Previous experience in fintech or healthcare",
      ],
      featured: true,
      highlight: "competitive",
      perks: [
        "Competitive salary",
        "Stock options",
        "401(k) with 6% match",
        "Comprehensive healthcare",
        "Professional development budget",
        "Conference speaking opportunities",
      ],
      teamSize: "15-person engineering organization",
      reportingTo: "CTO",
      growthOpportunities: ["Principal Architect", "VP of Engineering", "CTO track"],
    },
    {
      id: "ux-design-lead",
      title: "UX Design Lead",
      department: "Design",
      companyName: "Soradius",
      companyLogo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
      location: "Nairobi, Kenya",
      locationType: "onsite",
      employmentType: "full-time",
      experienceLevel: "lead",
      postedDate: "2024-01-17",
      salary: "$75,000 - $110,000",
      description:
        "Lead a team of designers to create intuitive, engaging user experiences. Collaborate with product and engineering teams to deliver cohesive products.",
      detailedDescription:
        "Join our design team as a UX Design Lead and help create world-class user experiences for our growing user base across Africa. You'll lead a talented team of designers, establish design systems, and ensure our products are not only functional but delightful to use. This role is perfect for someone who combines strong design skills with leadership abilities and wants to make a significant impact on user experience.",
      responsibilities: [
        "Lead and mentor a team of UX/UI designers",
        "Establish and maintain design systems and standards",
        "Conduct user research and usability testing",
        "Collaborate with product managers on feature requirements",
        "Work closely with engineering teams on implementation",
        "Present design concepts to stakeholders and executives",
        "Drive design thinking workshops and innovation sessions",
      ],
      requirements: [
        "6+ years of UX/UI design experience",
        "3+ years in design leadership or management roles",
        "Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)",
        "Strong portfolio demonstrating user-centered design",
        "Experience with design systems and component libraries",
        "Knowledge of user research methodologies",
        "Excellent presentation and communication skills",
      ],
      niceToHave: [
        "Experience designing for African markets",
        "Knowledge of accessibility standards",
        "Familiarity with front-end development",
        "Experience with design ops and workflow optimization",
        "Background in psychology or human-computer interaction",
      ],
      featured: true,
      highlight: "popular",
      perks: [
        "Creative studio environment",
        "Latest design tools and equipment",
        "Healthcare coverage",
        "Gym membership",
        "Flexible work arrangements",
        "Design conference attendance",
      ],
      teamSize: "6-person design team",
      reportingTo: "Head of Design",
      growthOpportunities: ["Head of Design", "Design Director", "VP of Design"],
    },
    {
      id: "backend-engineer",
      title: "Backend Engineer",
      department: "Engineering",
      companyName: "Soradius",
      companyLogo: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg",
      location: "Remote",
      locationType: "remote",
      employmentType: "full-time",
      experienceLevel: "mid",
      postedDate: "2024-01-20",
      salary: "$60,000 - $90,000",
      description:
        "Develop scalable backend services and APIs using modern technologies. Collaborate with frontend teams to integrate user interfaces.",
      detailedDescription:
        "We're looking for a talented Backend Engineer to join our engineering team and help build the robust, scalable infrastructure that powers our applications. You'll work on designing and implementing APIs, optimizing database performance, and ensuring our systems can handle growing user demands. This role offers excellent growth opportunities and the chance to work with modern technologies in a collaborative environment.",
      responsibilities: [
        "Design and implement RESTful APIs and microservices",
        "Optimize database queries and improve system performance",
        "Collaborate with frontend developers on API integration",
        "Write comprehensive tests and maintain code quality",
        "Participate in code reviews and technical discussions",
        "Monitor system performance and troubleshoot issues",
        "Contribute to architectural decisions and technical planning",
      ],
      requirements: [
        "3+ years of backend development experience",
        "Strong proficiency in Node.js, Python, or Java",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of RESTful API design principles",
        "Familiarity with cloud platforms (AWS, GCP, Azure)",
        "Understanding of version control systems (Git)",
        "Experience with testing frameworks and methodologies",
      ],
      niceToHave: [
        "Experience with GraphQL",
        "Knowledge of containerization (Docker, Kubernetes)",
        "Familiarity with message queues and event streaming",
        "Understanding of security best practices",
        "Experience with monitoring and logging tools",
      ],
      featured: true,
      highlight: "new",
      perks: [
        "Remote-first culture",
        "Flexible working hours",
        "Health insurance",
        "Professional development budget",
        "Home office stipend",
        "Team building events",
      ],
      teamSize: "12-person backend team",
      reportingTo: "Senior Backend Engineer",
      growthOpportunities: ["Senior Backend Engineer", "Lead Backend Engineer", "Engineering Manager"],
    },
  ]

  // Calculate days ago from date
  const getDaysAgo = (dateString: string) => {
    const postDate = new Date(dateString)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - postDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    if (diffDays === 0) {
      return "Today"
    } else if (diffDays === 1) {
      return "Yesterday"
    } else {
      return `${diffDays} days ago`
    }
  }

  // Format location type for display
  const formatLocationType = (type: string) => {
    switch (type) {
      case "remote":
        return "Remote"
      case "hybrid":
        return "Hybrid"
      case "onsite":
        return "On-site"
      default:
        return type
    }
  }

  // Format employment type for display
  const formatEmploymentType = (type: string) => {
    switch (type) {
      case "full-time":
        return "Full-time"
      case "part-time":
        return "Part-time"
      case "contract":
        return "Contract"
      case "internship":
        return "Internship"
      default:
        return type
    }
  }

  // Get appropriate highlight icon and color
  const getHighlightDetails = (highlight: JobPosition["highlight"]) => {
    switch (highlight) {
      case "new":
        return {
          icon: <StarIcon className="h-4 w-4" />,
          label: "New",
          color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        }
      case "trending":
        return {
          icon: <TrendingUpIcon className="h-4 w-4" />,
          label: "Trending",
          color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
        }
      case "competitive":
        return {
          icon: <BarChartIcon className="h-4 w-4" />,
          label: "Competitive",
          color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        }
      case "popular":
        return {
          icon: <UsersIcon className="h-4 w-4" />,
          label: "Popular",
          color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
        }
      default:
        return null
    }
  }

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Callback request:", formData)
    setShowCallbackForm(false)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

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
    <div className="bg-background">
      <CareersHero />
      
      {/* Job Slider Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-3xl font-bold tracking-tight"
          >
            Featured Opportunities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground mx-auto max-w-2xl"
          >
            Discover our handpicked selection of top job opportunities. These positions offer competitive salaries,
            great benefits, and exciting career growth opportunities.
          </motion.p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {jobPositions.map((job, index) => {
              const highlightDetails = job.highlight ? getHighlightDetails(job.highlight) : null
              return (
                <CarouselItem key={job.id} className="pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="flex h-full flex-col hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="bg-card relative flex h-12 w-12 items-center justify-center rounded-md border">
                            <div className="absolute flex h-full w-full items-center justify-center">
                              {job.companyLogo ? (
                                <Image
                                  src={job.companyLogo || "/placeholder.svg"}
                                  alt={job.companyName}
                                  width={48}
                                  height={48}
                                  className="h-12 w-12 object-contain"
                                />
                              ) : (
                                <BuildingIcon className="text-muted-foreground h-6 w-6" />
                              )}
                            </div>
                          </div>
                          {highlightDetails && (
                            <Badge variant="secondary" className={`flex items-center gap-1 ${highlightDetails.color}`}>
                              {highlightDetails.icon}
                              {highlightDetails.label}
                            </Badge>
                          )}
                        </div>
                        <div className="mt-3">
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <div className="mt-1 flex items-center gap-1">
                            <BuildingIcon className="text-muted-foreground h-3.5 w-3.5" />
                            <CardDescription className="!mt-0">{job.companyName}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="flex flex-grow flex-col gap-3">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="text-muted-foreground h-4 w-4" />
                            <span className="text-sm">{job.location}</span>
                            <Badge variant="outline" className="ml-auto text-xs">
                              {formatLocationType(job.locationType)}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <BriefcaseIcon className="text-muted-foreground h-4 w-4" />
                            <span className="text-sm">{job.department}</span>
                            <Badge variant="outline" className="ml-auto text-xs">
                              {formatEmploymentType(job.employmentType)}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSignIcon className="text-muted-foreground h-4 w-4" />
                            <span className="text-sm font-medium">{job.salary}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="text-muted-foreground h-4 w-4" />
                            <span className="text-sm">Posted {getDaysAgo(job.postedDate)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <UsersIcon className="text-muted-foreground h-4 w-4" />
                            <span className="text-sm">{job.teamSize}</span>
                          </div>
                        </div>

                        <div className="mt-2">
                          <p className="text-muted-foreground text-sm leading-relaxed">{job.detailedDescription}</p>
                        </div>

                        <div className="mt-3">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1">
                            {job.responsibilities.slice(0, 3).map((responsibility, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                                <CheckCircleIcon className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-3">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Growth Opportunities:</h4>
                          <div className="flex flex-wrap gap-1">
                            {job.growthOpportunities.map((opportunity, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {opportunity}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto">
                          <p className="text-muted-foreground mb-1.5 text-xs font-medium">Perks & Benefits:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {job.perks.slice(0, 3).map((perk, index) => (
                              <Badge variant="secondary" key={index} className="text-xs">
                                {perk}
                              </Badge>
                            ))}
                            {job.perks.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{job.perks.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="flex gap-3 pt-2">
                        <Button variant="outline" size="sm" className="w-1/2 bg-transparent">
                          <BookmarkIcon className="mr-1 h-4 w-4" />
                          Save
                        </Button>
                        <Button size="sm" className="w-1/2">
                          Apply Now
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <div className="mt-8 flex justify-center">
            <CarouselPrevious className="relative static mr-2 lg:absolute" />
            <CarouselNext className="relative static ml-2 lg:absolute" />
          </div>
        </Carousel>

        <div className="mt-12 text-center">
          <Button asChild variant="default" size="lg" className="px-8">
            <Link href="/careers">View All Positions</Link>
          </Button>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Soradius?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job; we provide a platform for growth, innovation, and meaningful contributions.
              Here's why joining our team is a step towards an enriching and rewarding career.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <LightbulbIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovative Environment</h3>
              <p className="text-gray-600 leading-relaxed">
                We foster a culture of innovation. Joining us means being part of a team that thrives on pushing
                boundaries and creating solutions that make a real impact in the industry.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Meaningful Work</h3>
              <p className="text-gray-600 leading-relaxed">
                We're not just building software; we're solving real-world problems. Join us in creating solutions that
                have a positive impact on businesses and individuals around the world.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users2Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We value collaboration and believe that the best solutions come from working together. Joining our team
                means becoming part of a supportive community where your ideas are heard and valued.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <GraduationCapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in investing in our team members' growth. You'll have access to continuous learning
                opportunities, mentorship programs, and challenging projects that will help you advance in your career.
              </p>
            </motion.div>
          </motion.div>

          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Working Environment & Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-100">
                  <RocketIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cutting-Edge Technology</h4>
                  <p className="text-gray-600 text-sm">
                    Work with the latest technologies and tools in a modern, well-equipped workspace.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-100">
                  <ShieldIcon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Benefits</h4>
                  <p className="text-gray-600 text-sm">
                    Health insurance, retirement plans, and wellness programs to support your well-being.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-purple-100">
                  <ZapIcon className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Flexible Work Options</h4>
                  <p className="text-gray-600 text-sm">
                    Remote work, flexible hours, and hybrid options to maintain work-life balance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-orange-100">
                  <AwardIcon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Recognition & Rewards</h4>
                  <p className="text-gray-600 text-sm">
                    Performance bonuses, stock options, and recognition programs for outstanding contributions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-teal-100">
                  <BookmarkIcon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Learning & Development</h4>
                  <p className="text-gray-600 text-sm">
                    Conference attendance, online courses, and internal training programs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-pink-100">
                  <UsersIcon className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Team Building</h4>
                  <p className="text-gray-600 text-sm">
                    Regular team events, retreats, and social activities to build strong relationships.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Request Callback Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Callback</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Have a question or need assistance? We're here to help. Simply fill out the form below, and one of our
              experts will get in touch with you.
            </p>
          </motion.div>

          {!showCallbackForm ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                onClick={() => setShowCallbackForm(true)}
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Request Callback
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
            >
              <form onSubmit={handleCallbackSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <div className="flex gap-4 justify-center">
                  <Button type="submit" variant="secondary" size="lg" className="px-8">
                    <MailIcon className="mr-2 h-5 w-5" />
                    Send Request
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setShowCallbackForm(false)}
                    variant="outline"
                    size="lg"
                    className="px-8 border-white/30 text-white hover:bg-white/10"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
