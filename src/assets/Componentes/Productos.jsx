import Producto from './Producto.jsx'

function Productos() {
  return (
    <div id='container'>
        {Productos.map(prod=>(<productos>...prod</productos>
        ))}
    </div>
  )
}

export default Productos