import Link from "next/link";
import Layout from "../components/layout";
import Header from "../components/header";
import styles from "../styles/actividades.module.css";
import Image from "next/image";
import fondo from "../public/images/fondo-acticidades.webp";
import core from "../public/images/core.webp";
import pilates from "../public/images/pilates.webp";
import tonificacion from "../public/images/tonificacion.webp";
import gap from "../public/images/gap.webp";
import trx from "../public/images/trx-actividades.webp";
import yoga from "../public/images/yoga.webp";

const actividades = () => {
  return (
    <Layout
      title={"Actividades"}
      description={"Actividades deportivas que ofrecemos, FitGim"}
    >
      <Header titulo={"Actividades"} image={fondo} />

      <section className={`${styles.c__actividades}fondo-2 mb-60`}>
        <div className={`${styles.actividades}`}>
          <div className={`${styles.caja__actividades} mt-50`}>
            <div className={`${styles.info} color-1 fondo-1`}>
              <h3>Core</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita hic in, labore molestiae mollitia commodi repellendus
                soluta obcaecati ex culpa nesciunt sunt sint!
              </p>
            </div>

            <div className={`${styles.container__img} mt-5`}>
              <Image src={core} className={styles.img} alt="core" />
            </div>
          </div>
        </div>


        <div className={`${styles.actividades}`}>
          <div className={`${styles.caja__actividades} `}>
            <div className={styles.container__img}>
              <Image src={pilates} className={styles.img} alt="pilates" />
            </div>
            <div className={`${styles.info} color-1 fondo-1`}>
              <h3>Pilates</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita hic in, labore molestiae mollitia commodi repellendus
                soluta obcaecati ex culpa nesciunt sunt sint!
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.actividades}`}>
          <div className={`${styles.caja__actividades} mt-5`}>
            <div className={`${styles.info} color-1 fondo-1`}>
              <h3>Tonificacion</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita hic in, labore molestiae mollitia commodi repellendus
                soluta obcaecati ex culpa nesciunt sunt sint!
              </p>
            </div>

            <div className={`${styles.container__img} mt-5`}>
              <Image
                src={tonificacion}
                className={styles.img}
                alt="tonificacion"
              />
            </div>
          </div>
        </div>


        <div className={`${styles.actividades}`}>
          <div className={`${styles.caja__actividades} `}>
            <div className={styles.container__img}>
              <Image src={gap} className={styles.img} alt="gap" />
            </div>
            <div className={`${styles.info} color-1 fondo-1`}>
              <h3>GAP</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita hic in, labore molestiae mollitia commodi repellendus
                soluta obcaecati ex culpa nesciunt sunt sint!
              </p>
            </div>
          </div>
        </div>


        <div className={`${styles.actividades}`}>
          <div className={`${styles.caja__actividades} mt-5`}>
            <div className={`${styles.info} color-1 fondo-1`}>
              <h3>TRX</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita hic in, labore molestiae mollitia commodi repellendus
                soluta obcaecati ex culpa nesciunt sunt sint!
              </p>
            </div>

            <div className={`${styles.container__img} mt-5`}>
              <Image src={trx} className={styles.img} alt="trx" />
            </div>
          </div>
        </div>


        <div className={`${styles.actividades}`}>
          <div className={`${styles.caja__actividades} `}>
            <div className={styles.container__img}>
              <Image src={yoga} className={styles.img} alt="yoga" />
            </div>
            <div className={`${styles.info} color-1 fondo-1`}>
              <h3>Yoga</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita hic in, labore molestiae mollitia commodi repellendus
                soluta obcaecati ex culpa nesciunt sunt sint!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="enlace__pdf">
        <h3 className="text-center pb-50">
          Si quieres ver el horario con todas las actividades
        </h3>

        <div className="text-center fondo-3 pb-10 pt-10 mb-20">
          <Link href={"/Horario"}>
            <button className="btn btn__hov__2">Entra</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default actividades;
