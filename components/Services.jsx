"use client"

import {
  Code2,
  Smartphone,
  Layout,
  Cloud,
  ServerCog,
  ShieldCheck,
  Rocket,
  Link2,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Custom Development",
    description:
      "We craft solutions from the ground up to align perfectly with your goals—be it dynamic web apps or enterprise software.",
    href: "/services/custom-development",
    icon: Code2,
    bg: "bg-purple-100",
  },
  {
    title: "Mobile App Development",
    description:
      "Whether for consumers or enterprises, we deliver intuitive, high-performing apps using modern technologies.",
    href: "/services/mobile-apps",
    icon: Smartphone,
    bg: "bg-blue-100",
  },
  {
    title: "Web Application Development",
    description:
      "We create scalable and responsive web applications that ensure seamless user experiences across all devices.",
    href: "/services/web-apps",
    icon: Layout,
    bg: "bg-green-100",
  },
  {
    title: "Cloud Solutions & Integration",
    description:
      "From storage to computing and analytics, we integrate cloud technologies to drive your business forward.",
    href: "/services/cloud",
    icon: Cloud,
    bg: "bg-cyan-100",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "We streamline development and operations through automation, CI/CD, and efficient infrastructure management.",
    href: "/services/devops",
    icon: ServerCog,
    bg: "bg-orange-100",
  },
  {
    title: "Security & Compliance",
    description:
      "Enterprise-grade security, audits, and compliance to keep your digital ecosystem protected at all times.",
    href: "/services/security",
    icon: ShieldCheck,
    bg: "bg-red-100",
  },
  {
    title: "AI & Automation",
    description:
      "Integrate intelligent automation and machine learning to optimize workflows and decision-making.",
    href: "/services/ai-automation",
    icon: Rocket,
    bg: "bg-pink-100",
  },
  {
    title: "API Development & Integrations",
    description:
      "Seamlessly connect systems, services, and third-party tools through robust API design and integrations.",
    href: "/services/api-integration",
    icon: Link2,
    bg: "bg-indigo-100",
  },
]

export default function ServiceSection() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="justify-between flex mb-10"> 

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <button className="m-1 border border-green-200">
                <span className="p-2">

                  Our Services
                </span>
            </button>
        </div>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          From idea to execution, Soradius delivers technology solutions that elevate your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`${service.bg} p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg text-left`}
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
