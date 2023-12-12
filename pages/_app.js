import { useState, useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : []; //asegurarnos de que unicamente se ejecute en la parte del cliente y no en la del servidor xq no va a existir LS
  const [carrito, setCarrito] = useState(carritoLS); // de string a array
  const [paginaLista, setPaginaLista] = useState(false);

  useEffect(() => {
    setPaginaLista(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (suplemento) => {
    // Comprobar si la suplemento ya esta en el carrito
    if (
      carrito.some((suplementoState) => suplementoState.id === suplemento.id)
    ) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map((suplementoState) => {
        if (suplementoState.id === suplemento.id) {
          suplementoState.cantidad = suplemento.cantidad;
        }
        return suplementoState;
      });
      // Se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      // En caso de que el suplemento no exista, es nuevo y se agrega
      setCarrito([...carrito, suplemento]);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((producto) => producto.id != id);
    setCarrito(carritoActualizado);
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  const actualizarCantidad = (suplemento) => {
    const carritoActualizado = carrito.map((suplementoState) => {
      if (suplementoState.id === suplemento.id) {
        suplementoState.cantidad = parseInt(suplemento.cantidad);
      }
      return suplementoState;
    });
    setCarrito(carritoActualizado);
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  return paginaLista ? (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      eliminarProducto={eliminarProducto}
      actualizarCantidad={actualizarCantidad}
    />
  ) : null; // --> solucion a hidratación
}
