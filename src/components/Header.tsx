import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi' // Iconos de menú (hamburguesa y cerrar)
import logo from '../assets/logo-hardtech-colombia-1.jpg'
import { Cart } from '../modules/cart/components/Cart'
import { Filters } from '../modules/filters/components/Filters'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="HardTech Colombia"
          className="w-40 h-auto object-contain"
        />

        {/* Filtros (Versión Escritorio) */}
        <div className="hidden md:block">
          <Filters />
        </div>

        <div>
          <Cart />
        </div>

        {/* Botón de menú hamburguesa (solo en móviles) */}
        <button
          type="button"
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Menú móvil (aparece cuando isOpen es true) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md p-4">
          <Filters />
        </div>
      )}
    </header>
  )
}
