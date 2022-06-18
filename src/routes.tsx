import React from "react";
import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ChaList from "./pages/ChaList";
import Product from "./pages/Product";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route index element={<Landing />} />
        <Route path="/chalist" element={<ChaList />} />
        <Route path="/product/:id" element={<Product />} />
      </RoutesDom>
    </BrowserRouter>
  );
};

export default Routes;
