"use client"

import { Briefcase, Star, Eye } from "lucide-react"
import React from "react"

const MissionVisionValuesSection = () => {
  return (
    <section className="py-16  rounded-2xl mx-4 sm:mx-8 lg:mx-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 items-center">
        
        {/* Left Content */}
        <div>
          <span className="text-blue-600 font-semibold uppercase">Innovate</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 leading-tight">
            Empowering innovations
          </h2>
          <p className=" mb-6 leading-relaxed">
            Our mission at Soradius is to empower businesses with cutting-edge software solutions. With a 
            commitment to excellence, integrity, and innovation, we create technology that drives growth and shapes 
            the future. Our vision is to lead globally, setting high standards for quality and client satisfaction.
            Guided by core values of excellence, collaboration, and adaptability, we ensure our clients thrive in an
            ever-evolving digital landscape.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold">
            Learn More
          </button>
        </div>

        {/* Right Content - Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-900 text-white p-3 rounded-md">
                <Briefcase className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-1">Mission</h3>
            <p className="text-sm text-gray-600">Empowering Businesses through Innovation.</p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-500 text-white p-3 rounded-md">
                <Star className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-1">Vision</h3>
            <p className="text-sm text-gray-600">Leading the Way in Software Excellence.</p>
          </div>

          {/* Values */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center sm:col-span-2">
            <div className="flex justify-center mb-4">
              <div className="bg-green-600 text-white p-3 rounded-md">
                <Eye className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-1">Values</h3>
            <p className="text-sm text-gray-600">Excellence, Integrity, Collaboration.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionValuesSection
