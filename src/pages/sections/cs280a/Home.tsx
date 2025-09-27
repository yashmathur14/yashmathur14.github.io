import { Link } from 'react-router-dom'

function CS280AHome() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          CS280A Portfolio
        </h1>
        <p className="text-xl text-gray-600">
          Computer Vision and Computational Photography - Fall 2025
        </p>
      </div>

      {/* Introduction Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          About This Portfolio
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            Welcome to my CS280A portfolio! This page showcases my work in computer vision and 
            computational photography throughout Fall 2025. Each project demonstrates different 
            techniques and concepts learned in the course.
          </p>
          <p className="text-gray-700">
            This portfolio will be regularly updated from August – December 2025 as I complete 
            new projects and assignments. The focus is on visual results and understanding rather 
            than implementation details.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Project 0</h3>
          <p className="text-gray-600 mb-6">
            Becoming Friends with Your Camera
          </p>
          <Link 
            to="/cs280a/project0" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            View Project
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Project 1</h3>
          <p className="text-gray-600 mb-6">
            Images of the Russian Empire: Colorizing the Prokudin-Gorskii Photo Collection
          </p>
          <Link 
            to="/cs280a/project1" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            View Project
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Project 2</h3>
          <p className="text-gray-600 mb-6">
            Fun with Filters and Frequencies: Image Processing with Convolutions and Frequency Domain Analysis
          </p>
          <Link 
            to="/cs280a/project2" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            View Project
          </Link>
        </div>
      </div>

      {/* Navigation Back to Main Portfolio */}
      <div className="text-center">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Main Portfolio
        </Link>
      </div>
    </div>
  )
}

export default CS280AHome