import { useEffect, useState } from "react";
import Layout from "../components/layout-tienda";
import Header from "../components/header-tienda";
import styles from "../styles/producto.module.css";

import Image from "next/image";

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal.toFixed(2));
  }, [carrito]);

  function subTotal(cantidad, precio) {
    const result = cantidad * precio;

    return result.toFixed(2);
  }

  return (
    <Layout>
      <Header titulo={"ARTICULOS"} />

      <div className={styles.container__carrito}>
        {carrito.length === 0
          ? "Carrito Vacío"
          : carrito.map((producto) => (
              <div key={producto.id}>
                <div className={styles.img__carrito}>
                  <Image
                    width={250}
                    height={250}
                    src={producto.imagen}
                    alt={producto.nombre}
                  />
                </div>

                <div className={styles.producto__pantalla}>
                  <p className="bold">{producto.nombre}</p>

                  <div className={styles.label}>
                    <p>Cantidad:</p>

                    <select
                      onChange={(e) =>
                        actualizarCantidad({
                          id: producto.id,
                          cantidad: +e.target.value,
                        })
                      }
                      value={producto.cantidad}
                      className={styles.select}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <p>
                    {" "}
                    <span className={styles.precio}>{producto.precio}€</span>
                  </p>
                  <p>
                    {" "}
                    Subtotal:{" "}
                    <span className={styles.precio}>
                      {subTotal(producto.cantidad, producto.precio)}€
                    </span>{" "}
                  </p>
                </div>

                <button
                  className={styles.btn__carrito}
                  type="button"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  X
                </button>
              </div>
            ))}
      </div>

      <aside className={`${styles.resumen} mt-70`}>
        <h3 className="text-center">Resumen del Pedido</h3>
        <p>
          Total a pagar:<span className={styles.precio}> {total}€ </span>{" "}
        </p>
      </aside>
    </Layout>
  );
};

export default Carrito;
