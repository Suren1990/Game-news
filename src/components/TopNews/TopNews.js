import { images } from "../../assets/images";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./TopNews.module.scss";

const TopNews = () => {
    return (
        <div className={styles.topnews}>
            <NewsItem NewsImage={images.NewsImage2} FontsSmall={true} />
            <NewsItem NewsImage={images.NewsImage3} FontsSmall={true} />
        </div>
    );
};

export default TopNews;
