import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,  Error,  Home,  Plans,  Privacy,  ProductDetails,
  Products,  Profile,  Wishlist,} from "./Pages";
import Header from "./_components/Header.jsx";
import { Footer, ScrollTo } from "./_components";
import { Dialog } from "./components/ui/dialog";
import { Drawer } from "./components/ui/drawer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollTo />
        <Drawer>
          <Dialog>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </Dialog>
        </Drawer>
      </BrowserRouter>
    </div>
  );
};

export default App;
