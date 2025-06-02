import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './assets/Componentes/ItemListConteiner.jsx'
import Error from './assets/Componentes/Error.jsx'
import CarWidget from './assets/Componentes/CarWidget.jsx'
import NavBar from './assets/Componentes/NavBar.jsx'
import Layout from './assets/Componentes/Layout.jsx'
import './assets/App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/">Productos</Link>
          </li>
          <li>
            <Link to="/">Contacto</Link>
          </li>
          <li>
            <Link to="/carrito">Carrito</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la tienda" />} />
        <Route path="/carrito" element={<CarWidget />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
