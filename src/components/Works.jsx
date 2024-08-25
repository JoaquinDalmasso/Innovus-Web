import React from 'react'
import ValvulaAlivio from '../assets/valvulaAliv.webp'
import ValvulaFlot from '../assets/valvulaFlotante.webp'
import sopMan from '../assets/soporteMan.webp'

function Works() {
  return (
    <section id='trabajos' className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros trabajos</h2>
            <p className="text-muted-foreground md:text-xl">
              Algunos ejemplos de piezas de alta calidad industrial realizadas para nuestros clientes.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <img
                src={ValvulaAlivio}
                width="400"
                height="300"
                alt="Pieza 1"
                className="border border-lime-700 shadow-sm shadow-lime-400 aspect-video overflow-hidden rounded-xl object-cover"
              />
              <h3 className="text-lg font-medium">Valvula de alivio</h3>
              <p className="text-muted-foreground text-sm">Diseñada a medida para instalación</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={ValvulaFlot}
                width="400"
                height="300"
                alt="Part 2"
                className="border border-lime-700 shadow-sm shadow-lime-400 aspect-video overflow-hidden rounded-xl object-cover"
              />
              <h3 className="text-lg font-medium">Valvula flotante</h3>
              <p className="text-muted-foreground text-sm">Desarrollada en PP para líquidos corrosivos</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={sopMan}
                width="400"
                height="300"
                alt="Part 3"
                className="border border-lime-700 shadow-sm shadow-lime-400 aspect-video overflow-hidden rounded-xl object-cover"
              />
              <h3 className="text-lg font-medium">Soporte de manguera</h3>
              <p className="text-muted-foreground text-sm">Remplazo de pieza importada en surtidores</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Works