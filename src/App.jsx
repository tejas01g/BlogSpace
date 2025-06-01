import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';

// Layout component for pages that need the navbar
const Layout = ({ children }) => (
  <>
    {children}
    <Navbar />
  </>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes with navbar */}
          <Route path="/home" element={
            <Layout>
              <Home />
            </Layout>
          } />
          
          <Route path="/search" element={
            <Layout>
              <div className="card">
                <h1>Search</h1>
                <p>Search functionality coming soon...</p>
              </div>
            </Layout>
          } />
          
          <Route path="/profile" element={
            <Layout>
              <div className="card">
                <h1>Profile</h1>
                <p>Profile page coming soon...</p>
              </div>
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 