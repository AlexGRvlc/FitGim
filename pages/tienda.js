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

{/* 
      <div className={`${styles.grid}`}>
        {suplementos?.map((suplemento) => (
          <Suplemento key={suplemento.id} suplemento={suplemento.attributes} />
        ))}
      </div> */}
    </Layout>
  );
};

export default Tienda;


export async function getStaticProps() {
  try {
    const respuesta = await fetch(
      `${process.env.API_URL}/suplementos?populate=imagen`
    );
    
    if (!respuesta.ok) {
      throw new Error(`Failed to fetch data. Status: ${respuesta.status}`);
    }

    const { data: suplementos } = await respuesta.json();

    return {
      props: {
        suplementos,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);

    return {
      props: {
        suplementos: [],
      },
      revalidate: 60,
    };
  }
}










// export async function getStaticProps() {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/suplementos?populate=imagen`
//   );
//   const { data: suplementos } = await respuesta.json();

//   return {
//     props: {
//       suplementos,
//     },
//     revalidate: 60,

//   };
// }






