import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Project0 from './pages/Project0'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation Bar */}
        <nav className="bg-white/90 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-gray-900">Yash Mathur</h1>
              <div className="flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 text-lg">Home</Link>
                <Link to="/project0" className="text-gray-700 hover:text-blue-600 text-lg">Project 0</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project0" element={<Project0 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App