import MainSlider from "../../components/MainSlider/MainSlider";
import PostItem from "../../components/PostItem/PostItem";
import TopNews from "../../components/TopNews/TopNews";
import Sidebar from "../../components/Sidebar/Sidebar";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={`${styles.home__top} container`}>
        <MainSlider />
        <TopNews />
      </div>
      <div className={`${styles.home__content} container`}>
        <div className={styles.home__posts_events}>
          <h1 className={styles.home__posts_title}>Last Posts</h1>
          <div className={styles.home__posts}>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
