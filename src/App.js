import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import IMG from "./assets/logo.png";
import ErrorPage from "../src/components/fallback/ErrorPage";
import Loading from "../src/components/fallback/Loading";

const Homepage = lazy(() => import("../src/components/homepage/Homepage"));
const About = lazy(() => import("../src/components/about/About"));
const Login = lazy(() => import("../src/components/login/Login"));
const Products = lazy(() => import("../src/components/products/Products"));
const AddProducts = lazy(() =>
  import("../src/components/products/AddProducts")
);
const Search = lazy(() => import("../src/components/products/Search"));
const ProductDisplay = lazy(() =>
  import("../src/components/products/ProductDisplay")
);
const ListProducts = lazy(() => import("./components/products/ListProducts"));

function App() {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <img src={IMG} alt="logo" />
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

export default App;
