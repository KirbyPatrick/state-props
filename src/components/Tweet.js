import React from "react";

const Tweet = (props) => (
  <section>
    <h1>User: {props.name}</h1>
    <h4>"{props.tweet}"</h4>
  </section>
);

export default Tweet;
