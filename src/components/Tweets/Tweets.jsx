import React from "react";

import styles from "./Tweets.module.css";

import TweetEmbed from "react-tweet-embed";

const Tweets = React.memo((props) => {
  let count = 0;
  const ids = props.data;
  if (ids.length === 0) {
    return (
      <div
        className={styles.container}
        style={{
          height: props.show ? "600px" : "0px",
          borderWidth: props.show ? "10px" : "0px",
        }}
      ></div>
    );
  }

  async function sleep() {
    props.loading(false);
  }

  const handleLoad = () => {
    count++;
    if (count === ids.length) {
      sleep();
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        height: props.show ? "600px" : "0px",
        borderWidth: props.show ? "10px" : "0px",
      }}
    >
      <ul className={styles.tweets}>
        {ids.map((id) => (
          <li key={id}>
            <TweetEmbed
              id={id}
              options={{
                align: "center",
                conversation: "none",
                theme: "dark",
              }}
              onTweetLoadSuccess={() => handleLoad()}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Tweets;
