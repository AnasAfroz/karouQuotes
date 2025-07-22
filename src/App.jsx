import { useState } from 'react'
import Nav from "./components/Nav.jsx"
import Hero from "./components/Hero.jsx"
import Footer from './components/footer.jsx'
function App() {
  return (
    <>
    
      <main className="bg-[#FFFDEC] border-[2px] border-[#A8D2D4] min-h-screen w-screen  ">
        <Nav/>
        <div className="h-40% mt-10"><Hero/></div>
      </main>
      <Footer/>
    </>
  )
}

export default App
