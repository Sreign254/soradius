"use client"

import { Mail, Code, Server, Cloud, Smartphone, Menu, X } from "lucide-react"
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "./ui/scroll-area"
import ExternalChatScript from "./ExternalScript"
const services = [
  {
    title: "Custom Software Development",
    href: "/services/custom-software",
    description: "Tailored solutions designed to meet your unique business requirements.",
    icon: <Code className="w-4 h-4 mr-2" />
  },
  {
    title: "Web Application Development",
    href: "/services/web-apps",
    description: "High-performance web applications with modern frameworks.",
    icon: <Server className="w-4 h-4 mr-2" />
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-apps",
    description: "iOS and Android apps built with native or cross-platform technologies.",
    icon: <Smartphone className="w-4 h-4 mr-2" />
  },
  {
    title: "Cloud Solutions",
    href: "/services/cloud",
    description: "Scalable cloud infrastructure and migration services.",
    icon: <Cloud className="w-4 h-4 mr-2" />
  },
]

const aboutItems = [
  {
    title: "Our Company",
    href: "/about",
    description: "Learn about Soradius's history, values, and leadership team."
  },
  {
    title: "Development Process",
    href: "/process",
    description: "Our agile methodology for delivering quality software."
  },
  {
    title: "Technologies We Use",
    href: "/technologies",
    description: "Explore our tech stack and expertise areas."
  }
]

const careersItems = [
  {
    title: "Current Openings",
    href: "/careers",
    description: "View available positions at Soradius."
  },
  {
    title: "Internship Program",
    href: "/internships",
    description: "Opportunities for students and recent graduates."
  },
  {
    title: "Why Join Us",
    href: "/why-join",
    description: "Benefits and culture at Soradius."
  }
]

const ListItem = ({ title, href, children, icon }: any) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 rounded-md text-black dark:text-white"
      >
        <div className="text-sm font-medium flex items-center">
          {icon}
          {title}
        </div>
        <p className="line-clamp-2 text-sm text-black dark:text-white/70">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
)

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="flex justify-between items-center text-sm px-4 py-2 bg-blue-600 text-black dark:text-white">
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>support@soradius.com</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/careers" className="hover:underline">Careers</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/partners" className="hover:underline">Partners</Link>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row items-center justify-between px-4 py-3 relative bg-background"
        style={{
          // background: "radial-gradient(ellipse at center, #2d4663 0%, #1a2b42 50%, #0a1628 100%)",
          
        }}
      >
        <div className="flex items-center gap-2 text-xl font-bold w-full md:w-auto justify-between text-black dark:text-white">
          <Link href="/" className="flex items-center gap-2">
            <img src="/img/logo-white.png" alt="Soradius Logo" className="w-20 h-8" />
          </Link>

          <Button
            variant="ghost"
            className="md:hidden p-2 text-black dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        <div className="hidden md:block text-black dark:text-white">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap gap-1">
               <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="px-3 py-2 font-medium hover:text-blue-300 transition-colors text-black dark:text-white"
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 px-3 py-2 font-medium text-black dark:text-white">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[500px] lg:w-[600px] lg:grid-cols-2 bg-[#1a2b42] text-black dark:text-white p-2 rounded-md">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services"
                          className="flex h-full w-full flex-col justify-end rounded-md p-6 bg-gradient-to-b from-blue-600 to-blue-800 text-black dark:text-white no-underline"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">Our Services</div>
                          <p className="text-sm leading-tight">
                            Comprehensive software development services tailored to your business needs, from concept to deployment.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                        icon={service.icon}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 px-3 py-2 font-medium text-black dark:text-white">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2 bg-[#1a2b42] rounded-md">
                    {aboutItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="px-3 py-2 font-medium hover:text-blue-300 transition-colors text-black dark:text-white"
                >
                  <Link href="/industries">Industries</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 px-3 py-2 font-medium text-black dark:text-white">Careers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-1 p-2 bg-[#1a2b42] rounded-md">
                    {careersItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="px-3 py-2 font-medium hover:text-blue-300 transition-colors text-black dark:text-white"
                >
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">
          <Link href="login">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black dark:text-white animate-glow ring-2 ring-yellow-400 dark:ring-yellow-300 shadow-lg">
               Portal
            </Button>
          </Link>
        </div>


        {mobileMenuOpen && (
  <div
    className="md:hidden absolute  top-full left-0 right-0 border-t border-gray-200 shadow-lg text-black dark:text-white"
    style={{
      background: "radial-gradient(ellipse at center, #2d4663 0%, #1a2b42 50%, #0a1628 100%)",
    }}
  >
    <ScrollArea className="max-h-[85vh] overflow-y-auto p-4">
      <div className="flex flex-col space-y-3">
        <Link href="/" className="py-2 px-4 rounded hover:bg-white/10 text-black dark:text-white">
          Home
        </Link>

        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-between text-black dark:text-white">
            Services
          </Button>
          <div className="pl-4 space-y-1">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="block py-2 px-4 rounded hover:bg-white/10 text-black dark:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-between text-black dark:text-white">
            About
          </Button>
          <div className="pl-4 space-y-1">
            {aboutItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block py-2 px-4 rounded hover:bg-white/10 text-black dark:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/industries" className="py-2 px-4 rounded hover:bg-white/10 text-black dark:text-white">
          Industries
        </Link>

        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-between text-black dark:text-white">
            Careers
          </Button>
          <div className="pl-4 space-y-1">
            {careersItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block py-2 px-4 rounded hover:bg-white/10 text-black dark:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/contact" className="py-2 px-4 rounded hover:bg-white/10 text-black dark:text-white">
          Contact
        </Link>

        <Link href="login" className="w-full">
          <Button className="w-full bg-yellow-600 hover:bg-yellow-700 animate-glow text-black dark:text-white">
             Portal
          </Button>
        </Link>
      </div>
    </ScrollArea>
  </div>
)}

      </div>
      {/* <script
      src='//uae.fw-cdn.com/40239696/149314.js'
      chat='true'>
      </script> */}
      <ExternalChatScript />
    </header>
  )
}

export default Header
