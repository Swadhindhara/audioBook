import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error, Home, ProductDetails, Profile } from "./Pages";
import Header from "./_components/Header.jsx";
import { Footer, ScrollTo } from "./_components";
import { Dialog } from "./components/ui/dialog";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollTo />
        <Dialog>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Dialog>
      </BrowserRouter>
    </div>
  );
};

export default App;
