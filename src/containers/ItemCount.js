
import '../containers/cart.css'

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {

    return (
        <div>
            <div className='item-count'>
                <button onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className='carrito' onClick={handleAgregar}>Agregar al carrito</button>

        </div>

    )
}

export default ItemCount