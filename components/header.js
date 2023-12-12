import styles from "../styles/header.module.css"

const header = ({ titulo, image="" }) => {
  return (
    <header
      className={`${styles.header} w-100 text-center`}
      style={{
        backgroundImage: `linear-gradient(rgba(23, 43, 7, 0.5), rgba(0, 0, 0, 0.5)), url(${image.src})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}>
      <h1 className={`${styles.text__header} color-1`}>{titulo}</h1>
    </header>
  );
};

export default header;

