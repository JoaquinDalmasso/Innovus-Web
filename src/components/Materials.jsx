import React from 'react'
import { CuboidIcon, Cog, Bolt, AudioWaveform } from "lucide-react";

function Materials() {
  return (
    <section id='materiales' className="w-full bg-lime-900 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl  font-bold tracking-tighter sm:text-4xl">Materiales</h2>
            <p className="text-muted-foreground md:text-xl">
              Nuestras impresoras 3D cuentan con un amplio rango de materiales, lo que nos permite ajustarnos
              a las necesidades específicas de cada cliente.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2">
              <Bolt  className="h-12 w-12 text-primary" />
              <h3 className="text-lg font-medium">ABS</h3>
              <p className="text-muted-foreground text-sm">Plástico resistente y ligero, con buena estabilidad dimensional y resistencia a altas temperaturas</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CuboidIcon className="h-12 w-12 text-primary" />
              <h3 className="text-lg  font-medium">PLA</h3>
              <p className="text-muted-foreground text-sm">Biodegradable, fácil de imprimir, y disponible en varios colores</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AudioWaveform className="h-12 w-12 text-primary" />
              <h3 className="text-lg  font-medium">PETG</h3>
              <p className="text-muted-foreground text-sm">Combina la durabilidad del ABS con la facilidad de impresión del PLA</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Cog className="h-12 w-12 text-primary" />
              <h3 className="text-lg font-medium">Nylon</h3>
              <p className="text-muted-foreground text-sm">Material duradero y flexible con alta resistencia a la abrasión y al impacto</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Materials