// import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Header from "@/components/header";
import fondo from "../public/images/fondo-instalaciones.webp";
import styles from "../styles/instalaciones.module.css";
import Image from "next/image";
import musculacion from "../public/images/musculacion.jpg";
import aerobicos from "../public/images/aerobicos.jpg";
import actividades from "../public/images/actividades.jpg";
import trx from "../public/images/trx-instalaciones.jpg";
import vestuarios from "../public/images/vestuarios.jpg";

const Instalaciones = () => {
  return (
    <Layout title={"Instalaciones"} description={"Conoce nuestro centro"}>
      <Header titulo={"INSTALACIONES"} image={fondo} />

      <section className={`${styles.c__instalaciones}fondo-2 mb-60`}>
        <div className={`${styles.instalaciones}`}>
          <div className={`${styles.caja__instalaciones} mt-50`}>
            <div className={`${styles.info} color-1 fondo-1`}>
              <h3>Musculacion</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita hic in, labore molestiae mollitia commodi repellendus
                soluta obcaecati ex culpa nesciunt sunt sint!
              </p>
            </div>

            <div className={`${styles.container__img} mt-5`}>
              <Image
                src={musculacion}
                className={styles.img}
                alt="musculacion"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.instalaciones}`}>
          <div className={`${styles.caja__instalaciones} `}>
            <div className={styles.container__img}>
              <Image src={aerobicos} className={styles.img} alt="aerobicos" />
            </div>
            <div className={`${styles.info} color-1 fondo-1`}>
              <h3>Aeróbicos</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita hic in, labore molestiae mollitia commodi repellendus
                soluta obcaecati ex culpa nesciunt sunt sint!
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.instalaciones}`}>
          <div className={`${styles.caja__instalaciones} mt-5`}>
            <div className={`${styles.info} color-1 fondo-1`}>
              <h3>Actividades</h3>

              <p>
                instalaciones ipsum dolor sit amet, consectetur adipisicing
                elit. Expedita hic in, labore molestiae mollitia commodi
                repellendus soluta obcaecati ex culpa nesciunt sunt sint!
              </p>
            </div>

            <div className={`${styles.container__img} mt-5`}>
              <Image
                src={actividades}
                className={styles.img}
                alt="actividades"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.instalaciones}`}>
          <div className={`${styles.caja__instalaciones} mt-5`}>
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

        <div className={`${styles.instalaciones}`}>
          <div className={`${styles.caja__instalaciones} `}>
            <div className={styles.container__img}>
              <Image src={vestuarios} className={styles.img} alt="vestuarios" />
            </div>
            <div className={`${styles.info} color-1 fondo-1`}>
              <h3>Vestuarios</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita hic in, labore molestiae mollitia commodi repellendus
                soluta obcaecati ex culpa nesciunt sunt sint!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Instalaciones;
