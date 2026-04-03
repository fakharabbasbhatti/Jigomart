import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./App.css"; // Tailwind directives included here

// Components
import Navbar from "./component/comman/Navbar";
import Footer from "./component/comman/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Ambassador from "./pages/Ambassador";
import Productspage from "./pages/Productspage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";


// ------------------ Layout Component ------------------
const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// ------------------ Router Setup ------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "ambassador", element: <Ambassador /> },
      { path: "product", element: <Productspage /> },
      { path: "product/:id", element: <ProductDetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> }
    ],
  },
]);

// ------------------ App Component ------------------
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;