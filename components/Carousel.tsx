import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Products } from "../types";
import type { NextPage } from "next";

const CarouselPage: NextPage<{ products: Products[] }> = ({ products }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1504 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1504, min: 670 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 670, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="carousel">
      <Carousel
        infinite={true}
        itemClass="carousel-item-padding-40-px"
        responsive={responsive}
        autoPlaySpeed={7000}
      >
        {products.slice(0, 8).map((product) => {
          return (
            <div className="pictureBox">
              <img
                className="imageSize"
                src={product.image}
                alt={product.description}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselPage;
