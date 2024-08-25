import  {React, useState } from "react";
import InnovusLogo from "./logos/Logo"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="bg-navbar px-4 lg:px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      <a href="#inicio" className="flex items-center gap-2">
        <InnovusLogo className="h-6 w-6 text-primary-foreground" />
        <span className="text-xl font-bold text-primary-foreground">Innovus</span>
      </a>

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
        <a href="#materiales" className="text-sm font-medium hover:underline underline-offset-4">Materiales</a>
        <a href="#trabajos" className="text-sm font-medium hover:underline underline-offset-4">Trabajos</a>
        <a href="#clientes" className="text-sm font-medium hover:underline underline-offset-4">Clientes</a>
        <a href="#contacto" className="text-sm font-medium hover:underline underline-offset-4">Contacto</a>
      </nav>

      {/* Menú desplegable en pantallas pequeñas */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-discount-gradient p-4 sm:hidden flex flex-col gap-4">
          <a href="#materiales" onClick={toggleMenu} className="text-sm font-medium hover:underline underline-offset-4">Materiales</a>
          <a href="#trabajos" onClick={toggleMenu} className="text-sm font-medium hover:underline underline-offset-4">Trabajos</a>
          <a href="#clientes" onClick={toggleMenu} className="text-sm font-medium hover:underline underline-offset-4">Clientes</a>
          <a href="#contacto" onClick={toggleMenu} className="text-sm font-medium hover:underline underline-offset-4">Contacto</a>
        </div>
      )}
    </header>
  )
}

export default Navbar