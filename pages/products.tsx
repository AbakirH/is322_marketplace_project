import Link from "next/link";
import { Products } from "../types";
import type { GetStaticProps, NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Card from "../components/Card";

const ProductsPage: NextPage<{ products: Products[] }> = ({ products }) => {
  return (
    <div id="home">
      <Navbar />
      <div className="content productsSection">
        <div id="filters">
          <h1>Filters</h1>
        </div>
        <div id="products">
          <Card products={products} />
        </div>
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
