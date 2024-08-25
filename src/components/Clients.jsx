import React from 'react'
import BBLogo from '../assets/bbLogo.webp'
import MetalforLogo from '../assets/metalforLogo.webp'

function Clients() {
  return (
    <section id='clientes' className="w-full bg-lime-900 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Algunos de nuestros clientes</h2>
            <p className="text-muted-foreground md:text-xl">
              Algunos clientes que utilizan nuestros productos en distintas etapas de su fabricación.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow">
              <img
                src={BBLogo}
                width="64"
                height="64"
                alt="Client 1"
                className="rounded-full"
                style={{ aspectRatio: "64/64", objectFit: "cover" }}
              />
              <blockquote className="text-center">
                <p className="text-muted-foreground">
                  Empresa especializada en la producción de tanques para depósito de combustibles. Siendo pioneros en su producción en América del Sur. En la actualidad fabricamn alrededor de 2.000 tanques por año tanto en acero como en polietileno de diferentes capacidades.
                </p>
                <cite className="mt-4 block text-sm font-medium not-italic">
                  - Bertotto Boglione
                </cite>
              </blockquote>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow">
              <img
                src={MetalforLogo}
                width="64"
                height="64"
                alt="Client 2"
                className="rounded-full"
                style={{ aspectRatio: "64/64", objectFit: "cover" }}
              />
              <blockquote className="text-center">
                <p className="text-muted-foreground">
                Empresa con más de 45 años de historia siendo actualmente Líderes Nacionales en la fabricación de Maquinaria Agrícola y con 4 plantas industriales en Argentina. Con equipos que se comercializan nacional e internacionalmente.
                </p>
                <cite className="mt-4 block text-sm font-medium not-italic">
                  - Metalfor
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Clients