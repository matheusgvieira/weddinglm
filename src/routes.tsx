import React from "react";
import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ChaList from "./pages/ChaList";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route index element={<Landing />} />
        <Route path="/chalist" element={<ChaList />} />
        <Route path="/product/:id" element={<Product />} />

        <Route path="/*" element={<NotFound />} />
      </RoutesDom>
    </BrowserRouter>
  );
};

export default Routes;
