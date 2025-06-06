import { Button } from "@/components/ui/button";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "./../assets/images/logo.svg";
import { Heart, ShoppingBag, User } from "lucide-react";
import avatar from "../assets/graphics/avatar.svg";
import search from "../assets/graphics/search.png";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Header = () => {
  const location = useLocation();
  const authStatus = false;

  const handleLogin = () => {
    console.log("HI");
  };

  const menu = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Products", url: "/products" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      {/* <div className="announcement bg-primary-foreground flex items-center justify-center py-2">
        <p className="text-sm">SAVE 20% ON YOUR FIRST ORDER! DON'T MISS OUT. <span className="text-primary cursor-pointer">CLAIM YOUR DISCOUNT</span></p>
      </div> */}
      <div
        className={`header_container bg-black py-4 z-10 relative px-[4%] ${
          location.pathname === "/" ? "lg:bg-transparent" : "bg-black"
        }`}
      >
        <div className="container m-auto">
          <div className="header flex items-center justify-between">
            <div className="left lg:w-1/3 fixed lg:static right-0 top-0 w-2/3 h-full bg-black lg:bg-transparent lg:z-0 z-30 lg:translate-0 translate-x-[100%]">
              <ul className="flex lg:items-center items-start gap-5 flex-col lg:flex-row px-8 py-12 lg:p-0">
                {menu.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url} className="text-white">
                      {item.name}
                    </Link>
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
              {authStatus ? (
                <Link to={"/profile"}>
                  <img
                    src={avatar}
                    alt=""
                    className="rounded-full w-8 h-8 object-cover"
                  />
                </Link>
              ) : (
                <Link>
                  <DialogTrigger>
                    <User className="text-white" />
                  </DialogTrigger>
                </Link>
              )}
              <Link to={"/wishlist"}>
                <Heart className="text-white" />
              </Link>
              <Link className="relative" to={"/cart"}>
                <ShoppingBag className="text-white" />
                <div className="car_value absolute w-4 h-4 bg-amber-600 top-[-6px] right-[-6px] flex items-center justify-center text-sm rounded-full">
                  0
                </div>
              </Link>
            </div>
          </div>
        </div>

        <DialogContent className={`w-fit`}>
          <DialogHeader>
            <DialogTitle>
              {/* <img src={logo} alt="" /> */}
              <h1 className="font-[Nunito] font-bold text-3xl text-center">LOGO</h1>
              <p className="mt-3 font-[Nunito] font-light font-md text-black">To save a shot, please create a account.</p>
            </DialogTitle>
            <DialogDescription className={`items-center justify-center flex flex-col mt-4`}>
              <Button className={`w-full bg-white shadow-none text-black border border-black rounded-4xl hover:bg-amber-50 hover:text-black cursor-pointer flex items-center gap-3
                `}> <img src={search} alt="icon" className=" w-4 md:w-5 lg:w-6"/> Sign In With Google</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </div>
    </>
  );
};

export default Header;
