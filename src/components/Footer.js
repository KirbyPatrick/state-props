import React from "react";

const Footer = (props) => {
  return <nav>{props.toggle ? <h1>Footer</h1> : ""}</nav>;
};

export default Footer;
