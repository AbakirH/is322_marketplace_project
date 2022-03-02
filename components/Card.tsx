import Image from "next/image";
import { Products } from "../types";
import type { NextPage } from "next";

const Card: NextPage<{ products: Products[] }> = ({ products }) => {
  return (
    <div>
      <h1>Products Page</h1>
      <section className="cards">
        {products.map((product) => {
          return (
            <div key={product.title} className="cardBox">
              <div className="imgBox">
                <img
                  className="cardImageSize"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="cardInfo">
                <h2>{product.title}</h2>
                <p>{product.price}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Card;
