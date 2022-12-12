import { Routes, Route, Link } from "react-router-dom";

import Homepage from "../src/components/homepage/Homepage";
import About from "../src/components/about/About";
import Login from "../src/components/login/Login";
import ErrorPage from "./components/ErrorPage";

import Products from "../src/components/products/Products";
import AddProducts from "../src/components/products/AddProducts";
import Search from "../src/components/products/Search";
import ProductDisplay from "../src/components/products/ProductDisplay";
import ListProducts from "./components/products/ListProducts";

function App() {
  return (
    <>
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="about" className="nav-item">About</Link>
        <Link to="products" className="nav-item">Products</Link>
        <Link to="login" className="nav-item">Login</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="error" element={<ErrorPage />} />

        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProducts />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
      </Routes>
    </>
  )
};

export default App;
