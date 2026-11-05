import { formatPrice } from '../utils/formatPrice'

const Navbar = () => {
  // Variables que pide el desafío
  const total = 25000
  const token = false // false = usuario NO logueado

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div>
        <span className="navbar-brand">Pizzería Mamma Mia!</span>

        {/* Home se muestra siempre */}
        <button className="btn btn-outline-light btn-sm me-2">🍕 Home</button>

        {/* Operador ternario: condición ? (si es true) : (si es false) */}
        {token ? (
          <>
            <button className="btn btn-outline-light btn-sm me-2">🔓 Profile</button>
            <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light btn-sm me-2">🔐 Login</button>
            <button className="btn btn-outline-light btn-sm">🔐 Register</button>
          </>
        )}
      </div>

      {/* Total se muestra siempre */}
      <button className="btn btn-outline-info btn-sm">
        🛒 Total: ${formatPrice(total)}
      </button>
    </nav>
  )
}

export default Navbar