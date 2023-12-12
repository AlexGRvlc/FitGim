import Layout from "../components/layout";
import styles from "../styles/contacto.module.css";

const Contacto = () => {
  return (
    <Layout title={"Contacto"} description={"Contacta con nostros"}>
      <section className={`${styles.contacto} mt-0`}>
        <div className={styles.container}>
          <div className={`${styles.contacto__info} fondo-3`}>
            <div className={` color-1 `}>
              <h2 className="fs-50 mt-70 text-center pb-40">CONTACTO</h2>

              <p>
                <span className="fs-20">Dirección: </span>Juan de Garay, 25
              </p>
              <p>46017 Valencia</p>
              <p>
                <span className="fs-20">Tfno: </span>555-246-369
              </p>
              <p>
                {" "}
                <span className="fs-20">Email: </span>fitgim@gmail.com
              </p>
              <p>
                <span className="fs-20">Metro Zafranar: </span>a 3 minutos
              </p>
              <p>
                <span className="fs-20">BUS: </span>93 - 9 - 11
              </p>
            </div>
          </div>

          <div className={`${styles.container__map}pd0 mt-70 fondo-2`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.6522218165123!2d-0.3983448233015835!3d39.454591871610404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f182a0e3cab%3A0x2e7afc21b4406a81!2sCalle%20Juan%20de%20Garay%2C%2025%2C%20Patraix%2C%2046017%20Valencia!5e0!3m2!1ses!2ses!4v1702356271863!5m2!1ses!2ses"
              // className={styles.map}
              width="1100"
              height="600"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
