import  {React, useState } from "react";
import { CuboidIcon } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="bg-discount-gradient px-4 lg:px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <CuboidIcon className="h-6 w-6 text-primary-foreground" />
        <span className="text-xl font-bold text-primary-foreground">Innovus</span>
      </div>

      {/* Icono del menú */}
      <div className="ml-auto sm:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Enlaces normales en pantallas grandes */}
      <nav className="ml-auto hidden sm:flex gap-4 sm:gap-6">
        <a href="#services" className="text-sm font-medium hover:underline underline-offset-4">Services</a>
        <a href="#materials" className="text-sm font-medium hover:underline underline-offset-4">Materials</a>
        <a href="#portfolio" className="text-sm font-medium hover:underline underline-offset-4">Portfolio</a>
        <a href="#contacto" className="text-sm font-medium hover:underline underline-offset-4">Contact</a>
      </nav>

      {/* Menú desplegable en pantallas pequeñas */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-discount-gradient p-4 sm:hidden flex flex-col gap-4">
          <a href="#services" onClick={toggleMenu} className="text-sm font-medium hover:underline underline-offset-4">Services</a>
          <a href="#materials" onClick={toggleMenu} className="text-sm font-medium hover:underline underline-offset-4">Materials</a>
          <a href="#portfolio" onClick={toggleMenu} className="text-sm font-medium hover:underline underline-offset-4">Portfolio</a>
          <a href="#contacto" onClick={toggleMenu} className="text-sm font-medium hover:underline underline-offset-4">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Navbar