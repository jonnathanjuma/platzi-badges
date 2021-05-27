import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
// import Badge from "./components/Badge";

// import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

const container = document.getElementById("app");

ReactDOM.render(
  <Badges
  // firstName="Jota"
  // lastName="Juma"
  // jobTitle="Arquitecto"
  // twitter="@jjuma"
  />,
  container
);
