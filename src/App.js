import { Fragment } from "react";
import Home from "./pages/home";
import SingleProduct from "./components/singleProduct";
import Registration from "./pages/signUp";
import Login from "./pages/login";
import "./App.css";
import ProductShop from "./components/productShop";
import Contact from "./pages/contact";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Profile from "./components/profile";
import About from "./pages/about";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="singleProduct/:id" element={<SingleProduct />} />
          <Route path="/product" element={<ProductShop />} />
          <Route path="/signUP" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
