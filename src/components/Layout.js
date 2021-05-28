import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  //   const React.Fragmentldren = props.children;
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
