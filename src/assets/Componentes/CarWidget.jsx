import { FaShoppingCart } from 'react-icons/fa'

function CarWidget() {
  return (
    <div className="carrito">
      <FaShoppingCart size={30} color="black" />
      <span className="cart-count">0</span>
    </div>
  )
}

export default CarWidget