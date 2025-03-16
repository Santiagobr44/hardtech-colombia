export function Footer() {
  // const { filters } = useFilters()
  // const { cart } = useCart()

  return (
    <footer className="fixed left-4 bottom-4 bg-black/70 text-white text-left px-6 py-2 rounded-full opacity-95 backdrop-blur-md">
      {/* {JSON.stringify(filters, null, 2)} */}
      {/* {JSON.stringify(cart, null, 2)} */}
      <h4 className="text-lg font-semibold flex">HardTech Colombia</h4>
      <h5 className="text-sm flex">
        Todos los derechos reservados &copy; {new Date().getFullYear()}
      </h5>
      <span className="text-xs text-blue-400 opacity-80">
        Innovando en tecnología
      </span>
    </footer>
  )
}
