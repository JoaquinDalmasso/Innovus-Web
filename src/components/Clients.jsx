import React from 'react'

function Clients() {
  return (
    <section className="w-full bg-lime-950 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
            <p className="text-muted-foreground md:text-xl">
              Hear from some of our satisfied customers about their experience with our 3D printing services.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow">
              <img
                src="/placeholder.svg"
                width="64"
                height="64"
                alt="Client 1"
                className="rounded-full"
                style={{ aspectRatio: "64/64", objectFit: "cover" }}
              />
              <blockquote className="text-center">
                <p className="text-muted-foreground">
                  "The team at 3D Print Solutions has been a game-changer for our business. Their attention to detail
                  and commitment to quality is unparalleled."
                </p>
                <cite className="mt-4 block text-sm font-medium not-italic">
                  - John Doe, CEO at ABC Manufacturing
                </cite>
              </blockquote>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow">
              <img
                src="/placeholder.svg"
                width="64"
                height="64"
                alt="Client 2"
                className="rounded-full"
                style={{ aspectRatio: "64/64", objectFit: "cover" }}
              />
              <blockquote className="text-center">
                <p className="text-muted-foreground">
                  "We've been working with 3D Print Solutions for years, and they've consistently delivered
                  high-quality parts that have helped us stay ahead of the competition."
                </p>
                <cite className="mt-4 block text-sm font-medium not-italic">
                  - Jane Smith, Engineering Manager at XYZ Industries
                </cite>
              </blockquote>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow">
              <img
                src="/placeholder.svg"
                width="64"
                height="64"
                alt="Client 3"
                className="rounded-full"
                style={{ aspectRatio: "64/64", objectFit: "cover" }}
              />
              <blockquote className="text-center">
                <p className="text-muted-foreground">
                  "The team at 3D Print Solutions is truly exceptional. They've helped us streamline our prototyping
                  process and bring our ideas to life with incredible precision."
                </p>
                <cite className="mt-4 block text-sm font-medium not-italic">
                  - Michael Johnson, Design Director at Acme Corp
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Clients