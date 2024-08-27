import React from 'react'
import { CuboidIcon, Cog, Bolt, AudioWaveform } from "lucide-react";

function Materials() {
  return (
    <section id='materiales' className="w-full bg-lime-900 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center items-start justify-between gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-2 md:order-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Bolt className="w-8 h-8 mr-3 text-[#4a5d23]" />
                <h3 className="text-xl font-semibold text-[#4a5d23]">ABS</h3>
              </div>
              <p className="text-gray-700">
                Plástico resistente y ligero, con buena estabilidad dimensional y resistencia a altas temperaturas
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CuboidIcon className="w-8 h-8 mr-3 text-[#4a5d23]" />
                <h3 className="text-xl font-semibold text-[#4a5d23]">PLA</h3>
              </div>
              <p className="text-gray-700">Biodegradable, fácil de imprimir, y disponible en varios colores</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <AudioWaveform className="w-8 h-8 mr-3 text-[#4a5d23]" />
                <h3 className="text-xl font-semibold text-[#4a5d23]">PETG</h3>
              </div>
              <p className="text-gray-700">Combina la durabilidad del ABS con la facilidad de impresión del PLA</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Cog className="w-8 h-8 mr-3 text-[#4a5d23]" />
                <h3 className="text-xl font-semibold text-[#4a5d23]">Nylon</h3>
              </div>
              <p className="text-gray-700">
                Material duradero y flexible con alta resistencia a la abrasión y al impacto
              </p>
            </div>
          </div>
          <div className="text-center md:text-left md:w-3/4 mx-auto order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">Materiales</h2>
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