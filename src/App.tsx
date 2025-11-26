import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.tsx'
import CS280AHome from './pages/sections/cs280a/Home.tsx'
import Project0 from './pages/sections/cs280a/Project0.tsx'
import Project1 from './pages/sections/cs280a/Project1.tsx'
import Project2 from './pages/sections/cs280a/Project2.tsx'
import Project3 from './pages/sections/cs280a/Project3.tsx'
import Project4 from './pages/sections/cs280a/Project4.tsx'
import Project5 from './pages/sections/cs280a/Project5.tsx'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation Bar */}
        <nav className="bg-white/90 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="text-2xl font-bold text-gray-900">Yash Mathur</Link>
              <div className="flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 text-lg">Home</Link>
                <div className="relative group">
                  <span className="text-gray-700 hover:text-blue-600 text-lg cursor-pointer">CS280A</span>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link to="/cs280a" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Portfolio Home</Link>
                      <Link to="/cs280a/project0" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Project 0</Link>
                      <Link to="/cs280a/project1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Project 1</Link>
                      <Link to="/cs280a/project2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Project 2</Link>
                      <Link to="/cs280a/project3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Project 3</Link>
                      <Link to="/cs280a/project4" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Project 4</Link>
                      <Link to="/cs280a/project5" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Project 5</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cs280a" element={<CS280AHome />} />
          <Route path="/cs280a/project0" element={<Project0 />} />
          <Route path="/cs280a/project1" element={<Project1 />} />
          <Route path="/cs280a/project2" element={<Project2 />} />
          <Route path="/cs280a/project3" element={<Project3 />} />
          <Route path="/cs280a/project4" element={<Project4 />} />
          <Route path="/cs280a/project5" element={<Project5 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
