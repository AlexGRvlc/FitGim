import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/nav.module.css";
import logo from "../public/images/logo.webp";
import carrito from "/public/images/carrito.png";

const NavTienda = () => {
  const location = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`${styles.nav__top} fondo-1 w-100`}>
      <div className={styles.img}>
        <Link href={"/Inicio"}>
          <Image src={logo} alt="Logo FitGim" />
        </Link>
      </div>

      <nav
        className={`${styles.nav} ${
          isMobileMenuOpen ? styles.showMobileMenu : ""
        }`}
      >
        <div className={styles.menuToggle} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <Link
              className={
                location === "/Inicio" ? styles.links__location : styles.links
              }
              href="/Inicio"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className={
                location === "/tienda" ? styles.links__location : styles.links
              }
              href="/tienda"
            >
              Tienda
            </Link>
          </li>
          <li>
            <Link
              href={"../../carrito"}
              className={
                location === "../../carrito"
                  ? styles.links__location
                  : styles.links
              }
            >
              <Image
                src={carrito}
                width={30}
                height={25}
                alt="Carrito de la Compra"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavTienda;
