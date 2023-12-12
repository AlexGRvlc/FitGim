import styles from "../styles/header.module.css";

const header = ({ titulo= "" }) => {
  return (
<header className={`${styles.tienda} fondo-3`}>
    <h1>{titulo}</h1>
  </header>
  );
};

export default header;