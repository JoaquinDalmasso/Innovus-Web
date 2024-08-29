import React from 'react'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
<footer className="flex bg-gray-900 flex-col gap-2 sm:flex-row justify-between py-6 w-full shrink-0 items-center px-8 md:px-24 border-t">
  <p className="text-xs text-muted-foreground">&copy; 2024 Innovus. All rights reserved.</p>
  <nav className="flex gap-4 sm:gap-6">
    <div className="text-gray-20 flex flex-col items-center justify-center">
      <h4 className="font-bold">Instagram</h4>
      <a href="https://www.instagram.com/innovustec/" className="mt-2">
        <FontAwesomeIcon icon={faInstagram} size="2xl" />
      </a>
    </div>
  </nav>
</footer>
  )
}

export default Footer