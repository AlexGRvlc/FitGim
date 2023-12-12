import Layout from "@/components/layout";
import Header from "@/components/header";
import fondo from "../public/images/fondo-bonos.webp";
import styles from "../styles/bonos.module.css";

const Bonos = () => {
  return (
    <Layout
      title={"Bonos"}
      description={"Infórmate sobre los bonos de los que puedes beneficiarte"}
    >
      <Header titulo={"BONOS"} image={fondo} />

      <section className={`${styles.bonos} fondo-2 pd0 mt-20`}>
        <h1 className="color-1 text-center mb-40 w-100 fondo-3 pt-10 pb-20 fw-bold">
          ELIGE UNO DE NUESTROS BONOS
        </h1>

        <div className={` ${styles.container} text-center`}>
          <div className={`${styles.caja__bonos} fondo-4`}>
            <h1 className="fw-bold">ACTIVIDADES</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptatibus eveniet necessitatibus amet voluptas.
            </p>

            <div className="text-center">
              <button className="btn">ALTA</button>
            </div>
          </div>
          <div className={`${styles.caja__bonos} fondo-5`}>
            <h1>INSTALACIONES</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptatibus eveniet necessitatibus amet voluptas.
            </p>

            <div className="text-center">
              <button className="btn">ALTA</button>
            </div>
          </div>
          <div className={`${styles.caja__bonos} fondo-6`}>
            <h1>OFERTAS</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptatibus eveniet necessitatibus amet voluptas.
            </p>

            <div className="text-center">
              <button className="btn">ALTA</button>
            </div>
          </div>
        </div>
        <div className="color-1 mt-60 fondo-3  pb-70 mb-20"></div>
      </section>
    </Layout>
  );
};

export default Bonos;
