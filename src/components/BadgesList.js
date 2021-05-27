import React from "react";
import logo from "../images/logo.svg";
import "./styles/Navbar.css";
class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <p>{badge.firstName}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
