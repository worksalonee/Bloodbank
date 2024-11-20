import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
function Layout({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row g-0" style={{ minHeight: "80vh", width: "100%" }}>
        <div className="col-md-3" style={{ backgroundColor: "grey" }}>
          <Sidebar />
        </div>
        <div className="col-md-9">{children}</div>
      </div>
      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
