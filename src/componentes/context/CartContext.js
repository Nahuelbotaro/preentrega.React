import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();


export const CartProvider =  ({children}) => {

    const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];


    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (product, cantidad) => {
        const productoAgregado = { ...product, cantidad }

        const nuevoCarrito = [...carrito]

        const estEnElCarrito = nuevoCarrito.find((product) => product.id === productoAgregado.id);


        if (estEnElCarrito) {
            estEnElCarrito.cantidad += cantidad;
            setCarrito(nuevoCarrito)
        } else {
            nuevoCarrito.push(productoAgregado)
        }
        setCarrito(nuevoCarrito);
    }

  
    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }
    const vaciarCarrito = () => {
        setCarrito([])
    }

    useEffect(() =>{
        localStorage.setItem("carrito" , JSON.stringify(carrito))
    },[carrito])
    return (
        <CartContext.Provider value={{
            carrito,
             agregarAlCarrito,
              cantidadEnCarrito,
               precioTotal,
                vaciarCarrito 
            }}>
            {children}
        </CartContext.Provider>
    ) 

}

