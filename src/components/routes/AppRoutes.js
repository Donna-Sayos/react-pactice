import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import LOGO from "../../assets/logo.png";
import ErrorPage from "../fallback/ErrorPage";
import Loading from "../fallback/Loading";

const Homepage = lazy(() => import("../homepage/Homepage"));
const About = lazy(() => import("../about/About"));
const Login = lazy(() => import("../login/Login"));
const Products = lazy(() => import("../products/Products"));
const AddProducts = lazy(() =>
  import("../products/AddProducts")
);
const Search = lazy(() => import("../products/Search"));
const ProductDisplay = lazy(() =>
  import("../products/ProductDisplay")
);
const ListProducts = lazy(() => import("../products/ListProducts"));

export default function AppRoutes() {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <img src={LOGO} alt="logo" />
        </Link>
        <nav>
          <Link to="/" className="nav-item">
            Homepage
          </Link>
          <Link to="about" className="nav-item">
            About
          </Link>
          <Link to="products" className="nav-item">
            Products
          </Link>
          <Link to="login" className="nav-item">
            Login
          </Link>
        </nav>
      </header>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<ListProducts />} />
            <Route path="add" element={<AddProducts />} />
            <Route path=":id" element={<ProductDisplay />} />
          </Route>
          <Route path="error" element={<ErrorPage />}>
            <Route path="list" element={<ListProducts />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
