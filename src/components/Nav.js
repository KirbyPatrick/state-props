import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Personal</a>
        </li>
        <li>
          <a>Analytics</a>
        </li>
        <li>
          <a>Tweets</a>
        </li>
      </nav>
    );
  }
}
