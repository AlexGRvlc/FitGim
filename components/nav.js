import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.webp";
import styles from "../styles/nav.module.css";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`${styles.nav__top} `}>
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
                location === "/Actividades"
                  ? styles.links__location
                  : styles.links
              }
              href="/Actividades"
            >
              Actividades
            </Link>
          </li>
          <li>
            <Link
              className={
                location === "/Instalaciones"
                  ? styles.links__location
                  : styles.links
              }
              href="/Instalaciones"
            >
              Instalaciones
            </Link>
          </li>
          <li>
            <Link
              className={
                location === "/Bonos" ? styles.links__location : styles.links
              }
              href="/Bonos"
            >
              Bonos
            </Link>
          </li>
          <li>
            <Link
              className={
                location === "/Horarios" ? styles.links__location : styles.links
              }
              href="/Horario"
            >
              Horario
            </Link>
          </li>
          <li>
            <Link
              className={
                location === "/Tienda" ? styles.links__location : styles.links
              }
              href="/Tienda"
            >
              Tienda
            </Link>
          </li>
          <li>
            <Link
              className={
                location === "/Socios" ? styles.links__location : styles.links
              }
              href="/Socios"
            >
              Socios
            </Link>
          </li>
          <li>
            <Link
              className={
                location === "/Contacto" ? styles.links__location : styles.links
              }
              href="/Contacto"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
