import React, { useState, useEffect } from "react";

import styles from "./Tweets.module.css";

import TweetEmbed from "react-tweet-embed";

const Tweets = (props) => {
  const TweetsList = () => {
    console.log(props.data)
    if(!props.data.tweets) {
      return <h1>none</h1>
    } else {
      const ids = props.data.tweets;
      console.log(ids);
    
      return (
        <ul className={styles.tweets}>
          {ids.map((id, i) => (
            <li key={i}>
              <TweetEmbed
                id={id}
                options={{ align: "center", conversation: "none", theme: "dark" }}
              />
            </li>
          ))}
        </ul>
      );
    }
    
  };

  return (
    <div className={styles.container}>
      <TweetsList />
    </div>
  );
};

export default Tweets;
