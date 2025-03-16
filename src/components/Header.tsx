import logo from '../assets/logo-hardtech-colombia-2.png'
import { Filters } from './Filters'

export function Header() {
  return (
    <header className="p-4 flex flex-row items-center justify-center ">
      <img
        src={logo}
        alt="HardTech Colombia"
        className="w-56 h-auto object-contain"
      />
      <Filters />
    </header>
  )
}
