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
                CORE significa Núcleo o Centro. Entrenamiento de 30 minutos
                donde se tonifica la zona del abdomen, lumbares y glúteos,
                además de aumentar la fuerza funcional.
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
                El método Pilates es un conjunto de ejercicios cuya finalidad es
                la de ejercitar el cuerpo y la mente, ya que mediante su
                práctica, además de mejorar nuestra condición física.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.actividades}`}>
          <div className={`${styles.caja__actividades} mt-5`}>
            <div className={`${styles.info} color-1 fondo-1`}>
              <h3>Tonificacion</h3>

              <p>
                60 min Los ejercicios de tonificación benefician la función
                metabólica del organismo, ya que el porcentaje de masa muscular
                aumenta, pero no de forma excesiva.
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
                El GAP es una modalidad del fitness cuyas siglas significan
                Glúteos, Abdominales y Piernas. Practicar GAP sirve para
                fortalecer y tonificar esas tres partes del cuerpo.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.actividades}`}>
          <div className={`${styles.caja__actividades} mt-5`}>
            <div className={`${styles.info} color-1 fondo-1`}>
              <h3>TRX</h3>

              <p>
                Cuando se usa el TRX, el porcentaje deseado del peso corporal
                recae sobre la zona corporal deseada y con una dinámica de
                movimiento de ejercicio.
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
                60 min El yoga mejora la salud de quienes lo practican, gracias
                a sus múltiples beneficios. Las posturas de yoga no dejan de
                sorprender por los beneficios físicos, mentales y espirituales.
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
