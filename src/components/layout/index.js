import React from "react";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children, noFooter }) => {
  return (
    <div>
      <Header />
      {children}
      {noFooter ? null : <Footer />}
    </div>
  );
};

export default Layout;
