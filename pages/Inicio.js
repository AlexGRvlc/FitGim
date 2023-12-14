import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/inicio.module.css";
import Image from "next/image";
import tienda from "../public/images/ropa.webp";
import sport1 from "../public/images/w-sport-1.png";
import sport2 from "../public/images/w-sport-2.png";
import sport3 from "../public/images/w-sport-3.png";

const Inicio = () => {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={
          "Complejo deportivo, deportes, ropa deportiva, suplementos deportivos y más"
        }
      >
        <header className={`${styles.header} fondo-1`}>
          <div className={`${styles.text__header} w-100 text-center`}>
            <h1 className="color-1 mb-10 fs-50">FITGIM</h1>
            <h2 className="color-2 mb-30">Disfruta del deporte</h2>
            <Link href={"/Socios"}>
              <button className="btn btn__hov">Socios</button>
            </Link>
          </div>
        </header>

        {/* ACTIVIDADES - INSTALACIONES - BONOS */}
        <section className={styles.principales}>
          <div className={styles.titulo}>
            <h2 className="color-1 fs-50 mb-10">EXPLORA</h2>
            <p className="color-1 mb-70">
              Entra en cada sección para informarte de las ventajas de ser uno
              de nuestros socios
            </p>
          </div>

          <div className={styles.container}>
            <div className={`${styles.caja__priori}`}>
              <h5 className="fs-30">ACTIVIDADES</h5>
              <p>
                Decide que actividades se adaptan a lo que buscas de entre las
                que ofrecemos.
              </p>
              <Link href={"/Actividades"}>
                <button className="btn btn__hov">ACCEDE</button>
              </Link>
            </div>
            <div className={styles.caja__priori__2}>
              <h5 className="fs-30">INSTALACIONES</h5>
              <p>
                Cada actividad dispone de un entorno adecuado para sacar el
                máximo rendimiento de tus sesiones.
              </p>

              <div>
                <Link href={"/Instalaciones"}>
                  <button className="btn btn__hov">ACCEDE</button>
                </Link>
              </div>
            </div>
            <div className={styles.caja__priori__3}>
              <h5 className="fs-30">BONOS</h5>
              <p>
                Elije el que más te conviene según tus preferencias y cámbialo
                cuando quieras.
              </p>

              <div>
                <Link href={"/Bonos"}>
                  <button className="btn btn__hov">ACCEDE</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HORARIOS */}
        <section className={styles.horario}>
          <div className="container">
            <h2 className="color-1 text-center">HORARIO ACTIVIDADES</h2>
            <p className="color-1 text-center">
              Ponte al día con tu rutina semanal con la gama de actividades que
              tenemos para que las pruebes todas y elijas las que más te gusten.
            </p>

            <div className="text-center">
              <Link href={"/Horario"}>
                <button className="btn btn__hov">ACCEDE</button>
              </Link>
            </div>
          </div>
        </section>

        {/* TIENDA */}
        <section className={styles.tienda}>
          <div className={styles.img}>
            <Image src={tienda} className={styles.img} alt="tienda" />
          </div>

          <div className={`${styles.tienda__info} fondo-3 color-1`}>
            <h2 className="">TIENDA ONLINE</h2>

            <p>
              Disponemos de una amplia gama de productos orientados a todas las
              necesidades de los usuarios. Reserva los suplementos que quieras y
              pasa a recogerlos cuando decidas.
            </p>
            <div className="">
              <Link href={"/tienda"}>
                <button className="btn btn__hov__2 ">Entra</button>
              </Link>
            </div>
          </div>
        </section>

        {/* CARACTERISTICAS */}
        <section className={`${styles.caracteristicas} fondo-2`}>
          <div className={styles.caracteristicas__container}>
            <div className={styles.saludo}>
              <h2>ESTAMOS PARA AYUDARTE</h2>
              <p>
                Inscríbete y disfruta de todas las ventajas de hacer deporte de
                forma guiada por profesionales
              </p>
            </div>

            <div className={styles.caja__caracteristicas}>
              <Image src={sport1} alt="sport-1" />
              <h2 className="color-3"> Tabla de Entrenamiento </h2>
              <p className="color-3">
                Incluimos gratis una tabla de entrenamiento a corde a tus
                objetivos. Nuestros monitores de sala te guiarán sobre el uso de
                las máquinas y material del centro para facilitarte la
                adaptación.
              </p>
            </div>
            <div className={styles.caja__caracteristicas}>
              <Image src={sport2} alt="sport-3" />
              <h2 className="color-3"> Todas las Actividades Incluidas </h2>
              <p className="color-3">
                Con tu inscripción todas las actividades dirigidas están
                incluidas, podrás acceder multitud de clases a la semana y a los
                programas más novedosos y actuales.
              </p>
            </div>
            <div className={styles.caja__caracteristicas}>
              <Image src={sport3} alt="sport 3" />
              <h2 className="color-3"> Salas y Material de Entrenamiento </h2>
              <p className="color-3">
                Disfruta de las salas de fitness y musculación y de todo el
                material de entrenamiento del centro. Contarás con todo lo que
                necesites para realizar tus entrenamientos.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Inicio;
