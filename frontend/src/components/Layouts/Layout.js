import React, { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, descripton, title, author, keywords }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="{description}" />
        <meta name="keywords" content="{keywords}" />
        <meta name="author" content="{author}" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <ToastContainer />

      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "Ecommerce app WristUnity",
  descripton: "This is a Wrist accesories store",
  keywords: "bracelet,gold,metal,leather,silver",
  autor: "ramana Gadamalla",
};
export default Layout;
