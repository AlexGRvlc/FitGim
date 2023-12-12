import Layout from "../components/layout";
import Header from "../components/header-tienda";
import Formulario from "../components/form";
import styles from '../styles/socios.module.css';

const Socios = () => {
  return (
    <Layout>
      <Header />


      <div className={`${styles.socios__container} pt-50`}>

        <Formulario />
      </div>
    </Layout>
  );
};

export default Socios;
