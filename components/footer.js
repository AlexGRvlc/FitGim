import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer} fondo-1 color-2`}>
          <div className={styles.redes__sociales}>
            <h3>REDES SOCIALES</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
              dolore. Lorem ipsum dolor sit, amet Lorem, ipsum dolor. dolore.
              Lorem ipsum dolor sit, amet Lorem, ipsum dolor. dolore. Lorem
              ipsum dolor sit, amet Lorem, ipsum dolor.
            </p>

            <div className={styles.redes}>
              <ul>
                <li>
                  <Link
                    className="links"
                    href="https://www.facebook.com"
                    target="_blank"
                  >
                    <i className="fabrands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="links"
                    href="https://www.instagram.com"
                    target="_blank"
                  >
                    <i className="fabrands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.twitter.com" target="_blank">
                    <i className="fabrands fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="links"
                    href="https://www.youtube.com"
                    target="_blank"
                  >
                    <i className="fabrands fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="links"
                    href="https://www.snapchat.com"
                    target="_blank"
                  >
                    <i className="fabrands fa-snapchat"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.container__about}>
            <div className={styles.about}>
              <h4>ABOUT</h4>
              <p>Team</p>
              <p>Join us</p>
              <p>Ethic</p>
              <p>Goals</p>
            </div>

            <div className={styles.about__2}>
              <h4>ABOUT</h4>
              <p>Team</p>
              <p>Join us</p>
              <p>Ethic</p>
              <p>Goals</p>
            </div>

            <div className={styles.about__3}>
              <h4>ABOUT</h4>
              <p>Team</p>
              <p>Join us</p>
              <p>Ethic</p>
              <p>Goals</p>
            </div>
          </div>
      </footer>
      <div className="text-center fondo-1 color-1">
        <span>Esta página está realizada con fines didácticos</span>
      </div>
    </>
  );
}
