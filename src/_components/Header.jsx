import { Button } from "@/components/ui/button";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "./../assets/images/logo.svg";
import { Heart, ShoppingBag, User } from "lucide-react";

const Header = () => {
  const location = useLocation(); // ✅ get current path

  const menu = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Products", url: "/products" },
    { name: "Pages", url: "/pages" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      {/* <div className="announcement bg-primary-foreground flex items-center justify-center py-2">
        <p className="text-sm">SAVE 20% ON YOUR FIRST ORDER! DON'T MISS OUT. <span className="text-primary cursor-pointer">CLAIM YOUR DISCOUNT</span></p>
      </div> */}
      <div className={`header_container bg-black py-4 z-10 relative px-[4%] ${location.pathname === '/' ? "lg:bg-transparent" : "bg-black"}`}>
        <div className="container m-auto">
          <div className="header flex items-center justify-between">
            <div className="left lg:w-1/3 fixed lg:static right-0 top-0 w-2/3 h-full bg-black lg:bg-transparent lg:z-0 z-30 lg:translate-0 translate-x-[100%]">
              <ul className="flex lg:items-center items-start gap-5 flex-col lg:flex-row px-8 py-12 lg:p-0">
                {menu.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url} className="text-white">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="middle flex items-center justify-center md:w-1/3">
              <Link to="/">
                <img src={logo} alt="logo" className="lg:w-52 md:w-54 w-40" />
              </Link>
            </div>
            <div className="right flex items-center justify-end gap-5 w-1/3">
              <Link to={'/profile'}><User className="text-white" /></Link>
              <Link to={'/wishlist'}><Heart className="text-white" /></Link>
              <Link className="relative" to={'/cart'}>
                <ShoppingBag className="text-white" />
                <div className="car_value absolute w-4 h-4 bg-amber-600 top-[-6px] right-[-6px] flex items-center justify-center text-sm rounded-full">
                  0
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
