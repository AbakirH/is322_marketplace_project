import Link from "next/link";
import { Products } from "../types";
import type { GetStaticProps, NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const ProductsPage: NextPage<{ products: Products[] }> = ({ products }) => {
  return (
    <div id="home">
      <Navbar />
      <div className="content">
        <ul>
          {products.map((products) => {
            return <li key={products.id}>{products.title}</li>;
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Products = await res.json();

  return {
    props: {
      products: products,
    },
  };
};

export default ProductsPage;
