/*  ./components/Navbar.jsx     */
import Link from "next/link";
import { useState } from "react";
import { MobileNav } from "../components/MobileNav";
const items = [
  {
    id: 1,
    value: "Home",
    directory: "/",
  },
  {
    id: 2,
    value: "Products",
    directory: "/products",
  },
];

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav id="nav">
        <div id="first">
          <Link href="/">
            <a>E-Commerce MarketPlace</a>
          </Link>
        </div>
        <div id="second">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </div>
        <MobileNav id="MobileNav" items={items}></MobileNav>
      </nav>
    </>
  );
};