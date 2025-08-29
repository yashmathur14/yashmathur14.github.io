import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Title and Introduction Section */}
      <div className="text-center py-20">
        <h1 className="text-6xl font-bold text-gray-900 mb-8">
          Yash Mathur's CS280A Portfolio
        </h1>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
          Hey there! Welcome to my portfolio showcasing projects and work from CS280A (Fall 2025). 
          This page will serve as a hub for all of my project submissions and assignments for the course, and as such will be regularly updated from August – December 2025.
          <br></br>
          <br></br>
          This page does not contain any code I have written to complete projects or assignments, and is simply a showcase of my work in exploring computer vision and computational photography.
        </p>
        <Link 
          to="/cs280a/project0" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-lg text-xl transition-colors"
        >
          View Project 0
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-gray-500">
        © 2024 Yash Mathur - CS280A Portfolio
      </div>
    </div>
  )
}

export default Home