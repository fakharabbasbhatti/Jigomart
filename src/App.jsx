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
      { path: "ambassador", element: <Ambassador /> }
    ],
  },
]);

// ------------------ App Component ------------------
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;