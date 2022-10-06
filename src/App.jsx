import React from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experiance from './Components/Experience/Experiance'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonial from './Components/Testimonial/Testimonial'
import Services from './Components/Services/Services'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiance/>
    <Services/>
    <Portfolio/>
    
    {/* <Testimonial/> */}
    <Contact/>
    <Footer/>
    </> 
  )
}
export default App