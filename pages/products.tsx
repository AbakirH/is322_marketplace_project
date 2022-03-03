import Link from "next/link";
import { Category, Products } from "../types";
import type { GetStaticProps, NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const ProductsPage: NextPage<{ products: Products[]; categories: any[] }> = ({
  products,
  categories,
}) => {
  const [selectedCategories, setSelectedCategories] = useState([]) as any;
  const [lowToHigh, setlowToHigh] = useState(false);
  const [highToLow, sethighToLow] = useState(false);

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
      products = setPriceFilter();
      return products;
    } else {
      products = products.filter((product) => {
        if (selectedCategories.includes(product.category)) {
          return product;
        }
      });
      products = setPriceFilter();
      return products;
    }
  };

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value == "lowToHigh") {
      setlowToHigh(true);
      sethighToLow(false);
    } else if (value == "highToLow") {
      sethighToLow(true);
      setlowToHigh(false);
    } else {
      sethighToLow(false);
      setlowToHigh(false);
    }
  };

  const setPriceFilter = () => {
    if (highToLow) {
      return products.sort((a, b) => b.price - a.price);
    } else if (lowToHigh) {
      return products.sort((a, b) => a.price - b.price);
    } else {
      return products.sort((a, b) => a.title.localeCompare(b.title));
    }
  };

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
                  key={category}
                  value={category}
                  onChange={(e) => getSelectedCategories(category)}
                />
                <label>{category}</label>
              </div>
            );
          })}
          <h2>Filter by Price</h2>
          <select onChange={selectChange} name="price" id="price">
            <option value="recommended">Recommended</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
        {console.log(products)}
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
  const products: Products[] = await res.json();
  const categories: string[] = [];

  products.forEach((product) => {
    if (!categories.some((e) => e === product.category)) {
      categories.push(product.category);
    }
  });
  return {
    props: {
      products: products,
      categories: categories,
    },
  };
};

export default ProductsPage;
