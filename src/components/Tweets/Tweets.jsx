import React from "react";
import styles from "./Tweets.module.css";
import TweetEmbed from "react-tweet-embed"; // used to generate Tweets

const Tweets = React.memo((props) => {
  let count = 0; // keep track how many tweets are loaded
  const ids = props.data;

  // if there is no tweets then return the html below
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
      // if all the tweets are loaded, change the loading to be false
      sleep();
    }
  };

  // component's html
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
