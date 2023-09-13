// import logo from "./logo.svg";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./WebPages/Home.js";
import ContactusPage from "./WebPages/ContactusPage.js";
import Aboutus from "./WebPages/Aboutus.js";
import Notfound from "./WebPages/Notfound.js";
import Login from "./WebPages/Login.js";
import Register from "./WebPages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactusPage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
