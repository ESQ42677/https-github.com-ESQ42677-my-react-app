import Logo from '../../1.png'
import CarWidget from '../CarWidget/CarWidget.jsx'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" style={{ height: 50 }} />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CarWidget />
    </nav>
  )
}

export default NavBar