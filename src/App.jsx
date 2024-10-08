import { useState } from "react"
import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Programs from "./components/Programs/Programs"
import Testimonials from "./components/Testimonials/Testimonials"
import Title from "./components/Title/Title"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login/Login'

const App = () => {
  const [playerState, setPlayerState] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <Routes>
        {/* Redirect to login if the user is not logged in */}
        <Route 
          path="/" 
          element={isLoggedIn ? (
            <>
              <Navbar />
              <Hero />
              <div className="container">
                <Title title={'What We Offer'} subtitle={'Our PROGRAM'} />
                <Programs />
                <About setPlayerState={setPlayerState} />
                <Title title={'Campus Photos'} subtitle={'Gallery'} />
                <Campus />
                <Title title={'What Student Says'} subtitle={'TESTIMONIALS'} />
                <Testimonials />
                <Title title={'Get in Touch'} subtitle={'Contact Us'} />
                <Contact />
                <Footer />
              </div>
              <VideoPlayer playerState={playerState} setPlayerState={setPlayerState} />
            </>
          ) : (
            <Navigate to="/login" replace />
          )}
        />
        
        {/* Login Route */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
};

export default App;
