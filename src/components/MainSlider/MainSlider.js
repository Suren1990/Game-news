import Slider from "react-slick";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./MainSlider.module.scss";
import { images } from "../../assets/images";


const MainSlider = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Slider {...settings} className={`${styles.mainslider} main_slider`}>
            <NewsItem NewsImage={images.NewsImage1} />
            <NewsItem NewsImage={images.NewsImage2} />
            <NewsItem NewsImage={images.NewsImage3} />
        </Slider>
    );
};

export default MainSlider;
