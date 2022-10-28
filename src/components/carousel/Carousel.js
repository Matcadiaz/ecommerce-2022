import { Carousel } from "react-bootstrap";
import './Carousel.css'

const Carru = () => {
    return (
        <Carousel variant="dark" className="carousel-inner" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.armytech.com.ar/Pubs/Sites/Default/Banners/2120.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.armytech.com.ar/Pubs/Sites/Default/Banners/2121.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.armytech.com.ar/Pubs/Sites/Default/Banners/2110.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.armytech.com.ar/Pubs/Sites/Default/Banners/2101.jpg"
          alt="Third slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.armytech.com.ar/Pubs/Sites/Default/Banners/2098.jpg"
          alt="Third slide"
        />
        </Carousel.Item>
    </Carousel>
      );
}
 
export default Carru;