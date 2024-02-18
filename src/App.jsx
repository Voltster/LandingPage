import Navbar from "./components/Navbar"
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className="relative">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App
