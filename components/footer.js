import Link from "next/link";
import Image from "next/image";
import styles from "../styles/footer.module.css";
import facebook  from "../public/images/facebook.svg";
import twitter  from "../public/images/twitter.svg";
import  instagram  from "../public/images/instagram.svg";
import  youtube  from "../public/images/youtube.svg";
import  snapchat  from "../public/images/snapchat.svg";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer} fondo-1 color-2`}>
        <div className={styles.redes__sociales}>
          <h3>REDES SOCIALES</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            dolore. Lorem ipsum dolor sit, amet Lorem, ipsum dolor. dolore.
            Lorem ipsum dolor sit, amet Lorem, ipsum dolor. dolore. Lorem ipsum
            dolor sit, amet Lorem, ipsum dolor.
          </p>

          <div className={styles.redes}>
            <ul>
              <li>
                <Link
                  className="links"
                  href="https://www.facebook.com"
                  target="_blank"
                >
                  <Image src={facebook} className={styles.image} alt="facebook-icon" /> 
                </Link>
              </li>
              <li>
                <Link
                  className="links"
                  href="https://www.instagram.com"
                  target="_blank"
                >
                <Image src={instagram} className={styles.image} alt="instagram-icon" />
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com" target="_blank">
                <Image src={twitter} className={styles.image} alt="twitter-icon" /> 
                </Link>
              </li>
              <li>
                <Link
                  className="links"
                  href="https://www.youtube.com"
                  target="_blank"
                >
                <Image src={youtube} className={styles.image} alt="youtube-icon" />
                </Link>
              </li>
              <li>
                <Link
                  className="links"
                  href="https://www.snapchat.com"
                  target="_blank"
                >
                <Image src={snapchat} className={styles.image} alt="snapchat-icon" />
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
