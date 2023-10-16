import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./NewsItem.module.scss";

const NewsItem = ({ NewsImage, FontsSmall }) => {
  return (
    <section className={styles.newsitem}>
      <div className={styles.newsitem__image}>
        <img src={NewsImage} alt="name" />
      </div>
      <div className={styles.newsitem__layer}>
        <span className={styles.newsitem__tag}>news</span>
        <Link to="/events/1">
          <h3 className={cn(styles.newsitem__title, {[styles.newsitem__title_small]: FontsSmall})}>
            Welcome to PowerUp, the Slider theme crafted for gamers
          </h3>
          <span className={styles.newsitem__date}>By John Marston // 6 years ago</span>
        </Link>
      </div>
    </section>
  );
};

export default NewsItem;
