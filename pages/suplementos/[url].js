import { useState } from "react";
import Layout from "@/components/layout-tienda";
import Image from "next/image";
import styles from "../../styles/producto.module.css";

const Producto = ({ suplemento, agregarCarrito, eliminarCarrito }) => {
  const [cantidad, setCantidad] = useState(0);
  const { imagen, nombre, descripcion2, precio } = suplemento[0].attributes;

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("cantidad no valida");
      return;
    }

    const suplementoSeleccionado = {
      id: suplemento[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };
    agregarCarrito(suplementoSeleccionado);
  };

  return (
    <Layout title={`Producto ${nombre}`} description={descripcion2}>
      <section className={styles.container}>
        <div className={styles.imagen}>
          <div>
            <Image
              src={imagen.data.attributes.url}
              width={200}
              height={200}
              alt={`Imagen suplemento ${nombre}`}
            />

            <div className={styles.caracteristicas}>
              <h3>{nombre}</h3>
              <p className={styles.descripcion}>{descripcion2}</p>
              <p className={styles.precio}>{precio}€</p>

              <form onSubmit={handlerSubmit} className={styles.form}>
                <label htmlFor="cantidad" className={styles.label}>
                  Cantidad
                </label>

                <select
                  onChange={(e) => setCantidad(Number(e.target.value))}
                  id="cantidad"
                  className={styles.select}
                >
                  <option className={styles.option} value="0">
                    Seleccione
                  </option>
                  <option className={styles.option} value="1">
                    1
                  </option>
                  <option className={styles.option} value="2">
                    2
                  </option>
                  <option className={styles.option} value="3">
                    3
                  </option>
                  <option className={styles.option} value="4">
                    4
                  </option>
                  <option className={styles.option} value="5">
                    5
                  </option>
                </select>

                <input
                  className={styles.input}
                  type="submit"
                  value="Agregar al carrito"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Producto;

// export async function getStaticPaths() {
//   const respuesta = await fetch(`${process.env.API_URL}/suplementos`);
//   const { data } = await respuesta.json();

//   const paths = data.map((suplemento) => ({
//     params: {
//       url: suplemento.attributes.url,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// // paths pasan automaticamente a getStaticProps
// export async function getStaticProps({ params: { url } }) {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/suplementos?filters[url]=${url}&populate=imagen`
//   );
//   const { data: suplemento } = await respuesta.json();

//   return {
//     props: {
//       suplemento,
//     },
//   };
// }

export async function getServerSideProps({params: { url}}) {
  const respuesta  = await fetch (
         `${process.env.API_URL}/suplementos?filters[url]=${url}&populate=imagen`
       );
  const { data: suplemento } = await respuesta.json()
  console.log(suplemento)
  return {
    props: {
      suplemento
    }
  }
}
