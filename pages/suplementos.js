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
            <Suplemento
              key={suplemento.id}
              suplemento={suplemento.attributes}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

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




export default Suplementos;
