"use client"
import React from "react"

const KeyFactorSection = () => {
  return (
    <section
      className="py-16 bg-gradient-to-br from-blue-100 via-blue-50 to-yellow-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Factors About Soradius</h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          Since 2017, we’ve been committed to delivering secure, scalable, and forward-thinking digital
          solutions for startups, enterprises, and everything in between.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">15+</h3>
            <p className="mt-2 text-sm text-gray-700">Years of Expertise</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-500">100+</h3>
            <p className="mt-2 text-sm text-gray-700">IT Professionals</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-600">200</h3>
            <p className="mt-2 text-sm text-gray-700">Success Stories</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-600">25+</h3>
            <p className="mt-2 text-sm text-gray-700">Industries Covered</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyFactorSection
