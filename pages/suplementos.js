import Suplemento from "../components/suplemento";
import Layout from "../components/layout-tienda";
import styles from "../styles/producto.module.css";


const Suplementos = ({ suplementos }) => {

  return (
    <Layout
      title={"Suplementos Deportivos"}
      description={"Suplementos deportivos y más"}
    >

{suplementos && (
  <div className={styles.grid}>
    {suplementos.map((suplemento) => (
      <Suplemento key={suplemento.id} suplemento={suplemento.attributes} />
    ))}
  </div>
)}


      {/* <div className={styles.grid}>
        {suplementos?.map((suplemento) => (
          <Suplemento key={suplemento.id} suplemento={suplemento.attributes} />
        ))}
      </div> */}
    </Layout>
  );
};





export async function getStaticProps() {
  try {
    const respuesta = await fetch(
      `${process.env.API_URL}/suplementos?populate=imagen`
    );
    
    if (!respuesta.ok) {
      throw new Error(`No se pudo obtener la lista de suplementos. Status: ${respuesta.status}`);
    }

    const { data: suplementos } = await respuesta.json();

    return {
      props: {
        suplementos,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching suplementos:", error);
    return {
      props: {
        suplementos: [],
      },
      revalidate: 60,
    };
  }
}






// export default Suplementos;

// export async function getStaticProps() {
//   try {
//     const respuesta = await fetch(
//       `${process.env.API_URL}/suplementos?populate=imagen`
//     );
//     const { data: suplementos } = await respuesta.json();

//     return {
//       props: {
//         suplementos,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         suplementos: [],
//       },
//       revalidate: 60,
//     };
//   }
// }

