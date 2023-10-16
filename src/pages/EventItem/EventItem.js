import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

import styles from "./EventItem.module.scss";
import { images } from "../../assets/images";

const EventItem = () => {
    // const navigate = useNavigate();
    let { id } = useParams();
    
    console.log(id);
    
    return (
        <section className={`${styles.eventitem} container`}>
      <div className={styles.eventitem__inner}>
        <div className={styles.eventitem__image}>
          <img src={images.NewsImage1} alt="game" />
        </div>
        <time className={styles.eventitem__date} dateTime="2023-11-18">
          18/11/2023
        </time>
        <h1 className={styles.eventitem__title}>
          Welcome to PowerUp, the WordPress theme crafted for gamers
        </h1>
        <p className={styles.eventitem__desc}>
          Hello fellow gamers! Thank you so much for taking the time to check
          out this demo site for PowerUp, the WordPress theme built from the
          ground up with the gaming community in mind.
        </p>
        <p className={styles.eventitem__desc}>
          Hello fellow gamers! Thank you so much for taking the time to check
          out this demo site for PowerUp, the WordPress theme built from the
          ground up with the gaming community in mind.
        </p>
      </div>
      <Sidebar />
    </section>
  );
};

export default EventItem;
