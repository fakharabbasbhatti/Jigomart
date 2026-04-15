import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./App.css";

// ✅ AOS IMPORT
import AOS from "aos";
import "aos/dist/aos.css";

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
import { PrivacyPolicy } from "./component/comman/PrivacyPolicy";
import { TermsConditions } from "./component/comman/TermsConditions";
import { ReturnPolicy } from "./component/comman/ReturnPolicy";
import { HelpCenter } from "./component/comman/HelpCenter";
import { Support } from "./component/comman/Support";

// ------------------ Layout Component ------------------
const Layout = () => {

  // ✅ GLOBAL AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

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
      { path: "privacypolicy", element: <PrivacyPolicy /> },
      { path: "termsconditions", element: <TermsConditions /> },
      { path: "returnpolicy", element: <ReturnPolicy /> },
      { path: "helpcenter", element: <HelpCenter /> },
      { path: "support", element: <Support /> }
    ],
  },
]);

// ------------------ App Component ------------------
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;