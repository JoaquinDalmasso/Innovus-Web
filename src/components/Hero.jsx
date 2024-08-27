import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel.jsx"
import { ReactTyped } from 'react-typed'
import fotoHero1 from '../assets/fotoHero1.webp'
import fotoHero2 from '../assets/fotoHero2.webp'
import fotoHero3 from '../assets/fotoHero3.webp'

function Hero() {
  return (
    <section id="inicio" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-4 mx-auto">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Impresiones 3D <br/> 
            {' '}
            <ReactTyped className="bg-gradient-to-r from-lime-500 to-lime-800 text-transparent bg-clip-text" strings={["rapidas","adaptadas","economicas","complejas"]} typeSpeed={40} loop />
          </h1>
          <p className="md:text-xl">
            Impulsa tu creatividad y da vida a tus ideas con nuestros modelos impresos en 3D. 
            Contamos con una amplia variedad de materiales para todo tipo de soluciones.
            <br/> 
            Contactanos para recibir asesoramiento personalizado ajustado a tus necesidades.
          </p>
        </div>
        <div className="relative w-full max-w-md sm:max-w-xs md:max-w-md mx-auto">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <img
                  src={fotoHero1}
                  width={550}
                  height={310}
                  alt="Industrial Part"
                  className="aspect-video object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={fotoHero2}
                  width={550}
                  height={310}
                  alt="Industrial Part"
                  className="aspect-video object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={fotoHero3}
                  width={550}
                  height={310}
                  alt="Industrial Part"
                  className="aspect-video object-cover rounded-xl"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero