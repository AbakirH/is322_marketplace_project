import Link from "next/link";
import { Category, Products } from "../types";
import type { GetStaticProps, NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const ProductsPage: NextPage<{ products: Products[] }> = ({ products }) => {
  const [selectedCategories, setSelectedCategories] = useState([]) as any;

  const categories: string[] = [];

  products.forEach((product) => {
    if (!categories.some((e) => e === product.category)) {
      categories.push(product.category);
    }
  });

  const getSelectedCategories = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item: string) => item !== category)
      );
      return;
    }
    setSelectedCategories([...selectedCategories, category]);
  };

  const filterProducts = () => {
    if (selectedCategories.length == 0) {
      return products;
    } else {
      products = products.filter((product) => {
        if (selectedCategories.includes(product.category)) {
          return product;
        }
      });
      return products;
    }
  };

  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

  return (
    <div id="home">
      <Navbar />
      <div className="content productsSection">
        <div id="filters">
          <h1>Filters</h1>
          <h2>Filter by Category</h2>
          {categories.map((category) => {
            return (
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value={category}
                  onChange={(e) => getSelectedCategories(category)}
                />
                <label>{category}</label>
              </div>
            );
          })}
          <h2>Filter by Price</h2>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="" />
            <label>Low to High</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="" />
            <label>High to Low</label>
          </div>
        </div>
        {console.log(selectedCategories.length)}
        <div id="products">
          <Card products={filterProducts()} />
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
