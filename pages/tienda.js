import Header from "../components/header-tienda";
import Suplemento from "../components/suplemento";
import Layout from "../components/layout-tienda";
import styles from "../styles/tienda-global.module.css";

const Tienda = ({ suplementos }) => {
  return (
    <Layout
      title={"Suplementos Deportivos"}
      description={"Suplementos deportivos y más"}
    >
      <Header titulo={"NUESTROS PRODUCTOS"} />


      <div className={`${styles.grid}`}>
      {suplementos?.map((suplemento) => (
          <Suplemento key={suplemento.id} suplemento={suplemento.attributes} />
        ))}
      </div>
    </Layout>
  );
};

export default Tienda;


export async function getStaticProps() {
  try {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), 10000) 
    );

    const respuesta = await Promise.race([
      fetch(`${process.env.API_URL}/suplementos?populate=imagen`),
      timeoutPromise,
    ]);

    if (!respuesta.ok) {
      const errorMessage = await respuesta.text();
      console.error(`Error al acceder a ${process.env.API_URL}/suplementos?populate=imagen. Status: ${respuesta.status}. Mensaje de error: ${errorMessage}`);
      throw new Error(`Error de la API: ${errorMessage}`);
    }

    let suplementos;
    try {
      const json = await respuesta.json();
      suplementos = json.data;
    } catch (jsonError) {
      console.error('Error al analizar la respuesta JSON:', jsonError);
      throw new Error('Error al analizar la respuesta JSON');
    }

    return {
      props: {
        suplementos,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error al obtener suplementos:", error);
    return {
      props: {
        suplementos: [],
      },
      revalidate: 10,
    };
  }
}




// export async function getStaticProps() {
//   try {
//     const respuesta = await fetch(
//       `${process.env.API_URL}/suplementos?populate=imagen`
//     );
    
//     if (!respuesta.ok) {
//       throw new Error(`Failed to fetch data. Status: ${respuesta.status}`);
//     }

//     const { data: suplementos } = await respuesta.json();

//     return {
//       props: {
//         suplementos,
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error.message);

//     return {
//       props: {
//         suplementos: [],
//       },
//       revalidate: 10,
//     };
//   }
// }

