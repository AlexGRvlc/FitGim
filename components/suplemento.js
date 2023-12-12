import Image from "next/image";
import Link from "next/link";
import styles from "../styles/suplemento.module.css";

const Suplemento = ({ suplemento }) => {
  const { descripcion2, imagen, nombre, precio, url } = suplemento;

  return (
    <div className={`${styles.suplemento__container} `}>
      <div className={styles.container}>
        <h3>{nombre}</h3>
        <Image
          src={imagen.data.attributes.formats.thumbnail.url}
          width={200}
          height={200}
          alt={`Imagen suplemento ${nombre}`}
        />
        <p className={styles.precio}>{precio}€</p>
        <Link legacyBehavior href={`suplementos/${url}`}>
          <a className={styles.enlace}>Detalles</a>
        </Link>
      </div>
    </div>
  );
};

export default Suplemento;
