import { useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import styles from "./SidebarItem.module.scss";

const SidebarItem = () => {
    const navigate = useNavigate();

    return (
        <article className={styles.sidebaritem}>
            <div className={styles.sidebaritem__image}>
                <img src={images.NewsImage1} alt="game" />
            </div>
            <div className={styles.sidebaritem__info}>
                <h4 className={styles.sidebaritem__title}>Welcome to PowerUp, the WordPress theme crafted for gamers</h4>
                <time className={styles.sidebaritem__date} dateTime="2023-11-18">18/11/2023</time>
            </div>
        </article>
    );
};

export default SidebarItem;
