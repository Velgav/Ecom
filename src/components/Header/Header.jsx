import Carousel from "./Carousel.jsx"; 
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import styles from "./Header.module.scss";

const Header = () => {
  const images = [Image1, Image2, Image3]; //Array of image imports

  return (
    <div className = { styles.header }>
      <Carousel images={images}/>
    </div>
  );

};

export default Header