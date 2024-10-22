import { Route, Routes } from "react-router-dom";
import "./App.css";
import Parent from "./Parent";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";
import LandingPage from "./LandingPage";
import ErrorPage from "./ErrorPage";
import Employee from "./Employee";
import Tunde from "./Tunde";
import Sola from "./Sola";
import DefaultEmployee from "./DefaultEmployee";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:var/:id" element={<Product />} />
        </Route>

        <Route path="/employee" element={<Employee />}>
          <Route path="/employee" element={<DefaultEmployee />} />
          <Route path="/employee/tunde" element={<Tunde />} />
          <Route path="/employee/sola" element={<Sola />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
