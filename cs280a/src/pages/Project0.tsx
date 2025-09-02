import { Link } from 'react-router-dom'
import proj0SelfieWrong from '../assets/proj0_selfie_wrong_way.jpg';
import proj0SelfieRight from '../assets/proj0_selfie_right_way.jpg';
import proj0StreetViewZoomed from '../assets/proj0_street_view_1.jpg';
import proj0StreetViewClose from '../assets/proj0_street_view_2.jpg';
import proj0DollyZoom from '../assets/proj0_dolly_zoom_cropped.gif';

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
              <a href="https://cal-cs180.github.io/fa25/hw/proj0/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                Official CS280A Project 0 page
              </a>
          </div>
        </div>

        {/* Part 1: Selfie Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Part 1: Selfie - The Wrong Way vs. The Right Way
          </h2>
          {/* Photo Details Section */}
          <div className="mt-6 text-left">
            <ul className="list-disc list-inside text-left mb-6 space-y-2 text-gray-600">
              <li>Take a close-up selfie, then step back and zoom in to get the same face size. The second photo should look much better. 
              <strong>Think about why this is.</strong></li>
              <li>
                <strong>When taking the close-up selfie:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-gray-500">
                  <li>Nearer objects like her nose, lips, and forehead look bigger</li>
                  <li>Further objects like the sides of her face, hair, and jawline look smaller</li>
                  <li>Overall looks "off" compared to real life since certain facial features are exaggerated</li>
                </ul>
              </li>
              <li>
                <strong>When taking the zoomed in selfie:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-gray-500">
                  <li>Distances between facial features such as eyes, nose, and mouth are smaller relative to the distance from camera</li>
                  <li>This minimizes distortion, maintaining real proportions of facial features</li>
                  <li>Overall looks much better, giving her face a more natural and balanced look like real life</li>
                </ul>
              </li>
              <li>
                Photo Details:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-gray-500">
                  <li>Model: Erena Inoue</li>
                  <li>Equipment: iPhone 14 Pro Max with 3x telephoto lens</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Your Response Section */}
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <img 
                  src={proj0SelfieWrong} 
                  alt="Close-up Selfie - Wrong Way" 
                  className="w-full h-9/10 object-contain rounded-lg mb-3"
                />
                <p className="text-base font-medium text-blue-700">Wrong Way (Close-up)</p>
              </div>
              <div className="text-center">
                <img 
                  src={proj0SelfieRight} 
                  alt="Zoomed Selfie - Right Way" 
                  className="w-full h-9/10 object-contain rounded-lg mb-3"
                />
                <p className="text-base font-medium text-blue-700">Right Way (Zoomed)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Architectural Perspective */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Part 2: Architectural Perspective Compression
          </h2>
          {/* Photo Details Section */}
          <div className="mt-6 text-left">
            <ul className="list-disc list-inside text-left mb-6 space-y-2 text-gray-600">
              <li>Take a zoomed photo down a long street, then walk closer and take another without zoom. The first should look flattened. <strong>Think about why.</strong></li>
              <li>
                <strong>When taking the zoomed photo from further away:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-gray-500">
                  <li>The camera flattens depth of field</li>
                  <li>Objects in the distance (cars, trees, buildings, street signs) appear closer together in size</li>
                  <li>Overall "compressed" effect since objects further away almost look the same size as nearby objects</li>
                </ul>
              </li>
              <li>
                <strong>When taking the close-up photo:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-gray-500">
                  <li>Walking closer and shooting wider (without zoom) exaggerates depth</li>
                  <li>Objects nearby (first street sign) appear much larger than objects down the road</li>
                  <li>Overall "expanded" effect since the street seems to stretch out into the distance dramatically</li>
                </ul>
              </li>
              <li>
                Photo Details:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-gray-500">
                  <li>Location: International House (UC Berkeley), 2299 Piedmont Ave, Berkeley, CA</li>
                  <li>Equipment: iPhone 14 Pro Max with 3x telephoto lens</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Photo Section */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <img 
                  src={proj0StreetViewZoomed} 
                  alt="Zoomed Street View" 
                  className="w-full h-9/10 object-contain rounded-lg mb-3"
                />
                <p className="text-base font-medium text-green-700"> Zoomed Street View</p>
              </div>
              <div className="text-center">
                <img 
                  src={proj0StreetViewClose} 
                  alt="Close Street View" 
                  className="w-full h-9/10 object-contain rounded-lg mb-3"
                />
                <p className="text-base font-medium text-green-700"> Close Street View</p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3: Dolly Zoom */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Part 3: The Dolly Zoom
          </h2>
          {/* Photo Details Section */}
          <div className="mt-6 text-left">
            <ul className="list-disc list-inside text-left mb-6 space-y-2 text-gray-600">
              <li>Create the "Vertigo shot" effect: move camera back while zooming in, keeping image size constant.</li>
              <li>Take 4-8 photos and combine into an animated GIF.</li>
              <li>
                Photo Details:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-gray-500">
                  <li>Location: Ocean Beach, San Francisco, CA</li>
                  <li>Focal Point: Water Tower and the residential buildings of Vista del Mar and Outer Richmond</li>
                  <li>Equipment: iPhone 14 Pro Max with 3x telephoto lens</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Photo Section */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <div className="text-center">
              <img 
                src={proj0DollyZoom} 
                alt="Dolly Zoom GIF" 
                className="w-full h-9/10 object-contain rounded-lg mb-3"
              />
              <p className="text-base font-medium text-purple-700"> Dolly Zoom GIF</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Back to Portfolio */}
      <div className="text-center">
        <Link 
          to="/" 
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