import  { React } from 'react'
import { ReactTyped } from 'react-typed'
import { BackgroundCircles } from "./design/Hero";
import imagenCentral from "../assets/imagenCentral1.png"
import imagenLateral1 from "../assets/imagenLateral1.png"
import imagenLateral2 from "../assets/imagenLateral2.png"

function Hero2() {

  return (
<section className="h-full md:h-screen">

<div className="bg-black text-white h-full">
  
    <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center h-full">
    <div className="absolute inset-0 z-0">
  <BackgroundCircles />
  </div>
      <div className="z-10 flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
      <ReactTyped className="bg-gradient-to-r from-lime-500 to-lime-800 text-transparent tracking-loose bg-clip-text text-3xl md:text-5xl p-2" strings={["Innovus"]} typeSpeed={40} loop />
        <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Fabricacion de calidad.</h2>
        <p className="text-sm md:text-base text-gray-50 mb-4">
        Impulsa tu creatividad y da vida a tus ideas con nuestros dasarrollos. Realizamos impresiones 3D y diseños digitales. 
        Desde replicas existentes a piezas completamente nuevas. Contamos con una amplia variedad de soluciones para todo tipo de proyectos.
        </p>
        <a href="#contacto"
          className="bg-gradient-to-r from-lime-500 to-lime-800 text-black hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
          Contacto
        </a>
      </div>
      <div className=" z-10 p-8 mt-10 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
        <div className=" h-48 flex flex-wrap content-center">
          <div>
            <img className=" mt-28 hidden xl:block"
              src={imagenLateral1} />
          </div>
          <div>
            <img className="inline-block w-3/4 md:w-auto mt-0 md:mt-0 p-8 md:p-2"
              src={imagenCentral} />
          </div>
          <div>
            <img className="mt-28 hidden lg:block"
              src={imagenLateral2} />
          </div>
        </div>
      </div>
    </div>

  </div>
  
</section>
  )
}

export default Hero2