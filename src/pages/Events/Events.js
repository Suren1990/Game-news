import Sidebar from "../../components/Sidebar/Sidebar";
import PostItem from "../../components/PostItem/PostItem";
import styles from "./Events.module.scss";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className={`${styles.events} container`}>
      <div className={styles.events__content}>
        <h1 className={styles.events__title}>Events</h1>
      </div>
      <div className={styles.events__content_inner}>
        <div className={styles.events__posts}>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <div className={styles.events__pages}>
            <Link to="/" className={styles.active}>1</Link>
            <Link to="/">2</Link>
            <Link to="/">&#8680;</Link>
          </div>
        </div>
        <Sidebar />
      </div>
    </section>
  );
};

export default Events;
