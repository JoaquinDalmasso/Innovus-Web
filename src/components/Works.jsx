import React from 'react'
import ValvulaAlivio from '../assets/valvulaAliv.webp'
import ValvulaFlot from '../assets/valvulaFlotante.webp'
import sopMan from '../assets/soporteMan.webp'

function Works() {
  return (
    <section id='trabajos' className="w-full bg-gradient-to-t from-gray-800 to-gray-900 py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros trabajos</h2>
            <p className=" md:text-xl">
              Algunos ejemplos de piezas de alta calidad industrial. Donde se realizo desde el diseño inicial, el prototipado y finalmente el producto terminado utilizado por nuestro cliente.
            </p>
          </div>
          <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <img
                src={ValvulaAlivio}
                width="480"
                height="360"
                alt="Pieza 1"
                className="border  border-slate-500 shadow-sm shadow-slate-300 aspect-video overflow-hidden rounded-xl object-cover"
              />
              <h3 className="text-lg font-medium">Valvula de alivio</h3>
              <p className=" text-sm">Diseñada a medida para instalación</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={ValvulaFlot}
                width="480"
                height="360"
                alt="Part 2"
                className="border border-slate-500 shadow-sm shadow-slate-300 aspect-video overflow-hidden rounded-xl object-cover"
              />
              <h3 className="text-lg font-medium">Valvula flotante</h3>
              <p className=" text-sm">Desarrollada en PP para líquidos corrosivos</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={sopMan}
                width="480"
                height="360"
                alt="Part 3"
                className="border border-slate-500 shadow-sm shadow-slate-300 aspect-video overflow-hidden rounded-xl object-cover"
              />
              <h3 className="text-lg font-medium">Soporte de manguera</h3>
              <p className=" text-sm">Remplazo de pieza importada en surtidores</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Works