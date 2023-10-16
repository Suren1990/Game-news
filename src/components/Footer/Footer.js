import { icons } from "../../assets/images";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__inner} container`}>
        <div className={styles.footer__social}>
          <a
            href="https://www.facebook.com/"
            className={styles.footer__social_item}
            target="_blank"
            rel="noreferrer"
          >
            <img src={icons.iconFacebook} alt="facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
