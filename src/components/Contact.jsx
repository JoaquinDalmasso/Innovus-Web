import React from 'react'
import Input from "./ui/input"
import Textarea from "./ui/textarea.jsx"
import { Button } from "./ui/button.jsx"

function Contact() {
  return (
    <section id="contacto" className="w-full bg-gray-700 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex gap-10 flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">Contactanos</h2>
                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ¿Tienes un proyecto en mente? Ponte en contacto con nosotros para recibir el mejor asesoramiento y te ayudaremos a encontrar la mejor solucion.
                </p>
              </div>
              <div class="">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>

                        </div>
                    </div>
                    <div class="ml-4">
                        <dt class="text-lg leading-6 font-medium text-white">
                            Phone number
                        </dt>
                        <dd class="mt-2 text-base text-white">
                            (555) 555-5555
                        </dd>
                    </div>
                </div>

                <div class="flex">
                    <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                        </div>
                    </div>
                    <div class="ml-4">
                        <dt class="text-lg leading-6 font-medium text-white">
                            Email
                        </dt>
                        <dd class="mt-2 text-base text-white">
                            info@ourstore.com
                        </dd>
                    </div>
                </div>
            </dl>
        </div>
            </div>
          </div>
          
        </section>
  )
}

export default Contact