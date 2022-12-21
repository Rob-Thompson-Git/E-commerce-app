import {Carousel} from 'react-bootstrap' 
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          alt="First slide"
          style={{height: "300px", objectFit: "cover"}}
        />
        <Carousel.Caption>
          <LinkContainer style={{cursor: "pointer"}} to="/product-details">
            <h3>Best Selling Product</h3>
          </LinkContainer>  
          <p>Macbook Pro 2022 13.1"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin='anonymous'
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
          style={{height: "300px", objectFit: "cover"}}
        />

        <Carousel.Caption>
          <LinkContainer style={{cursor: "pointer"}} to="/product-details">
            <h3>Best Selling Book</h3>
          </LinkContainer> 
          <p>Greeneggs & Ham by Dr. Suess</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
          style={{height: "300px", objectFit: "cover"}}
        />

        <Carousel.Caption>
          <LinkContainer style={{cursor: "pointer"}} to="/product-details">
            <h3>Best Selling Camera</h3>
          </LinkContainer>           
          <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;