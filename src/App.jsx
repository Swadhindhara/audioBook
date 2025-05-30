import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error, Home, ProductDetails } from "./Pages";
import Header from "./_components/Header.jsx";
import { Footer, ScrollTo } from "./_components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollTo />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
