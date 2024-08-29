import React from 'react'
import { CuboidIcon, Cog, Bolt, AudioWaveform } from "lucide-react";
import fotoPLA from "../assets/fotoPLA.png"
import fotoPETG from "../assets/fotoPETG.png"
import fotoPP from "../assets/fotoPP.png"
import fotoNylon from "../assets/fotoNylon.png"

function Materials() {
  return (
    <section id='materiales' className="w-full bg-gradient-to-t from-gray-900 to-black py-12 md:py-24 lg:py-32">
        <div className="container mx-auto flex flex-col md:items-center items-start justify-between gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 order-2">
            <div className="bg-gray-200 rounded-xl gap-4 flex flex-col md:flex-row items-center hover:rounded-2xl shadow-md p-6">
            <img  class="mx-auto rounded-3xl block w-4/6 h-40 sm:w-1/2"  alt="art cover" loading="lazy" src={fotoPP} />
            <div>
              <div className="flex items-center mb-4">
                <Bolt className="w-8 h-8 mr-3 text-black" />
                <h3 className="text-xl font-semibold text-black">Polipropileno</h3>
              </div>
              <p className="text-black">
              Excelente resistencia química, gran pureza, baja absorción de agua y buenas propiedades de aislamiento eléctrico
              </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl gap-4 flex flex-col md:flex-row items-center hover:rounded-2xl shadow-md p-6">
            <img  class="mx-auto rounded-3xl block w-4/6 h-40 sm:w-2/5 md:w-2/5 lg:w-2/5"  alt="art cover" loading="lazy" src={fotoPLA} />
            <div>
              <div className="flex items-center mb-4">
                <CuboidIcon className="w-8 h-8 mr-3 text-black" />
                <h3 className="text-xl font-semibold text-black">PLA</h3>
              </div>
              <p className="text-black">
              Biodegradable, fácil de imprimir, y disponible en varios colores
              </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl gap-4 flex flex-col md:flex-row items-center hover:rounded-2xl shadow-md p-6">
            <img  class="mx-auto rounded-3xl block w-4/6 h-40 sm:w-2/5 md:w-2/5 lg:w-2/5"  alt="art cover" loading="lazy" src={fotoPETG} />
            <div>
              <div className="flex items-center mb-4">
                <AudioWaveform className="w-8 h-8 mr-3 text-black" />
                <h3 className="text-xl font-semibold text-black">PETG</h3>
              </div>
              <p className="text-black">
              Combina la durabilidad del ABS con la facilidad de impresión del PLA
              </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl gap-4 flex flex-col md:flex-row items-center hover:rounded-2xl shadow-md p-6">
            <img  class="mx-auto rounded-3xl block w-4/6 h-40 sm:w-2/5 md:w-2/5 lg:w-2/5"  alt="art cover" loading="lazy" src={fotoNylon} />
            <div>
              <div className="flex items-center mb-4">
                <Cog className="w-8 h-8 mr-3 text-black" />
                <h3 className="text-xl font-semibold text-black">Nylon</h3>
              </div>
              <p className="text-black">
              Material duradero y flexible con alta resistencia a la abrasión y al impacto
              </p>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left md:w-3/4 mx-auto order-1">
            <h2 className="text-3xl font-bold mb-4">Materiales 3D con los que trabajamos</h2>
            <p className=" md:text-xl">
              Nuestras impresoras 3D cuentan con un amplio rango de materiales, lo que nos permite ajustarnos a las
              necesidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </section>
      
  )
}

export default Materials