

function Producto({titulo,producto,precio,}) {
  return (
    <div className="card" >
        <h2>{titulo}</h2>
        <h3>{producto}</h3>
        <h2>{precio}</h2>
    </div>
  )
}

export default Producto