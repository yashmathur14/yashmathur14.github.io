import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-6xl font-bold text-gray-900 mb-8">
          Yash Mathur
        </h1>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
          Welcome to my portfolio! I'm a computer science student exploring various fields 
          including computer vision, machine learning, and software development.
        </p>
        
        {/* Portfolio Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* CS280A Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">CS280A Portfolio</h2>
              <p className="text-gray-600 mb-6">
                Computer Vision and Computational Photography projects from Fall 2025
              </p>
              <Link 
                to="/cs280a" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Placeholder for future sections */}
          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-500 mb-4">Coming Soon</h2>
              <p className="text-gray-400 mb-6">
                More projects and sections will be added here
              </p>
              <div className="text-gray-400 text-sm">
                Stay tuned!
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-500 mb-4">Coming Soon</h2>
              <p className="text-gray-400 mb-6">
                More projects and sections will be added here
              </p>
              <div className="text-gray-400 text-sm">
                Stay tuned!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-gray-500">
        <p>© 2024 Yash Mathur - Portfolio</p>
        <div className="mt-4">
          <a href="https://github.com/yashmathur14" className="text-blue-600 hover:text-blue-800 mr-4">
            GitHub
          </a>
          <a href="mailto:your-email@example.com" className="text-blue-600 hover:text-blue-800">
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
