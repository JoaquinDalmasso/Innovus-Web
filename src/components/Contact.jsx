import React from 'react'
import Input from "./ui/input"
import Textarea from "./ui/textarea.jsx"
import { Button } from "./ui/button.jsx"

function Contact() {
  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contactanos</h2>
                <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ¿Tienes un proyecto en mente? Ponte en contacto con nosotros para recibir el mejor asesoramiento para adaptar nuestros productos a tus necesidades.

                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input type="text" placeholder="Nombre" className="max-w-lg flex-1" />
                  <Input type="email" placeholder="Mail" className="max-w-lg flex-1" />
                  <Textarea placeholder="Mensaje" className="max-w-lg flex-1 min-h-[100px]" />
                  <Button className="bg-gradient-to-r from-lime-500 to-lime-800 py-3 px-4 mx-3 rounded-md text-black" type="submit">Enviar</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Contact