
import  { React } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Materials from "./components/Materials";
import Works from "./components/Works";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";

function App() {

  return (
<div className="flex flex-col min-h-[100dvh] bg-discount-gradient">
  <Navbar/>
    <main className="flex-1">
      <Hero2/>
      {/*<Hero />*/}
      <Materials />
      <Works />
      <Clients/>
    </main>
    <Contact/>
    <Footer/>
  </div>
  )
}


export default App
