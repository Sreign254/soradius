"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, #2d4663 0%, #1a2b42 50%, #0a1628 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3Cfilter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="fixed inset-0 -z-5">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          style={{
            filter: "brightness(0.8) contrast(1.2) saturate(1.1)",
          }}
        >
          <source src="/space-animation.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(45, 70, 99, 0.2) 0%, rgba(26, 43, 66, 0.4) 50%, rgba(10, 22, 40, 0.6) 100%)",
            animationDuration: "4s",
          }}
        />
      </div>

      <main className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1
                className="text-white font-light leading-tight tracking-tight mb-6 relative"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(90deg, #ffffff 0%, #e2e8f0 50%, #ffffff 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              >
                Building Africa’s Digital Future
              </h1>

              <p
                className="text-white/80 mb-8 max-w-xl mx-auto lg:mx-0"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: "1.5",
                }}
              >
                Soradius is a leading Kenyan software company transforming industries through cutting-edge digital
                solutions, crafted for efficiency, scalability, and real-world impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-500/90 hover:bg-blue-500 border border-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 px-8 py-3 text-base font-medium"
                  >
                    Talk to Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 px-8 py-3 text-base font-medium"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
                <motion.div
              className="flex-1 max-w-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src="/img/resources/about-1.png" alt="Soradius Team" className="w-full rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 -z-5 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
    </div>
  )
}
