import React, { Component } from "react";
//import components
import Tweet from "./Tweet";

const Tweets = (props) => {
  const tweets = [
    { name: "Kirby", tweet: "I love react.js!!!" },
    { name: "Tim Pool", tweet: "Buy a mac!" },
    { name: "Bob Marly", tweet: "We Jammin" },
    { name: "Andy Bernard", tweet: "Hey Big Tuna!  ROO DOO DOOT DA DOO!!!" },
  ];

  return (
    <section>
      {tweets.map((tweet) => (
        <Tweet name={tweet.name} tweet={tweet.tweet} />
      ))}
    </section>
  );
};

export default Tweets;
