import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroSection from './components/HeroSection.jsx';
import './App.css'
import Navbar from './components/Navbar.jsx';

function App() {
  const [count, setCount] = useState(0)

  
    return (
     
    <div className="App">
    <Navbar/>  
    <HeroSection />
  </div>
    )
  
}

export default App
