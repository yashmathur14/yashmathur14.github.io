import { Link } from 'react-router-dom'

function Project0() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Project 0: Becoming Friends with Your Camera
        </h1>
        <p className="text-xl text-gray-600">
          CS280A: Intro to Computer Vision and Computational Photography
        </p>
      </div>

      {/* Project Content */}
      <div className="space-y-8 mb-12">
        {/* Overview Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Project & Submission Overview
          </h2>
          <div className="prose prose-lg max-w-none">
              <a href="https://cal-cs280.github.io/fa25/hw/proj0/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                Official CS280A Project 0 page
              </a>
          </div>
        </div>

        {/* Part 1: Selfie Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Part 1: Selfie - The Wrong Way vs. The Right Way
          </h2>
          <p className="text-gray-600 mb-6">
            Take a close-up selfie, then step back and zoom in to get the same face size. The second photo should look much better. 
            <strong>Think about why this is.</strong>
          </p>
          
          {/* Your Response Section */}
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Your Response & Photos</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center mb-2">
                  <span className="text-gray-500">Close-up Selfie</span>
                </div>
                <p className="text-sm text-blue-700">Wrong Way (Close-up)</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center mb-2">
                  <span className="text-gray-500">Zoomed Selfie</span>
                </div>
                <p className="text-sm text-blue-700">Right Way (Zoomed)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Architectural Perspective */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Part 2: Architectural Perspective Compression
          </h2>
          <p className="text-gray-600 mb-6">
            Take a zoomed photo down a long street, then walk closer and take another without zoom. The first should look flattened. 
            <strong>Think about why.</strong>
          </p>
          
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Your Response & Photos</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center mb-2">
                <span className="text-gray-500">Zoomed Street View</span>
              </div>
              <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center mb-2">
                <span className="text-gray-500">Close Street View</span>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3: Dolly Zoom */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Part 3: The Dolly Zoom
          </h2>
          <p className="text-gray-600 mb-6">
            Create the "Vertigo shot" effect: move camera back while zooming in, keeping image size constant. 
            Take 4-8 photos and combine into an animated GIF.
          </p>
          
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">Your Dolly Zoom GIF</h3>
            <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
              <span className="text-gray-500">Upload your animated GIF here</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Back to Portfolio */}
      <div className="text-center">
        <Link 
          to="/cs280a/home" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>
      </div>
    </div>
  )
}

export default Project0