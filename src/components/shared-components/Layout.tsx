import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
