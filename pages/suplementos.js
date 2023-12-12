import Suplemento from "../components/suplemento";
import Layout from "../components/layout-tienda";
import styles from "../styles/producto.module.css";


export async function getStaticProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/suplementos?populate=imagen`
  );
  const { data: suplementos } = await respuesta.json();

  return {
    props: {
      suplementos,
    },
  };
}

const Suplementos = ({ suplementos }) => {

  return (
    <Layout
      title={"Suplementos Deportivos"}
      description={"Suplementos deportivos y más"}
    >

      <div className={styles.grid}>
        {suplementos?.map((suplemento) => (
          <Suplemento key={suplemento.id} suplemento={suplemento.attributes} />
        ))}
      </div>
    </Layout>
  );
};

export default Suplementos;


