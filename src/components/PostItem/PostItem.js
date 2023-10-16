import { Link } from "react-router-dom";
import { images } from "../../assets/images";
import styles from "./PostItem.module.scss";

const PostItem = () => {
  return (
    <article className={styles.postitem}>
      <div className={styles.postitem__image}>
        <img src={images.NewsImage1} alt="title" />
      </div>
      <div className={styles.postitem__info}>
        <h4 className={styles.postitem__title}>
          PowerUp: Unique navigation that brings it all together
        </h4>
        <time className={styles.postitem__date} dateTime="2023-11-18">18/11/2023</time>
        <p className={styles.postitem__description}>
          While designing PowerUp’s menus, we very purposefully wanted to create
          navigation that goes beyond just having a line of ol’ boring links
        </p>
        <Link to="/events/1" className={styles.postitem__readmore}>Read more</Link>
      </div>
    </article>
  );
};

export default PostItem;
