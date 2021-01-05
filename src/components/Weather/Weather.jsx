import React from "react";
import { useSpring, animated } from "react-spring";

import styles from "./Weather.module.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 60,
  (x - window.innerWidth / 2) / 60,
  1.08,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Weather = React.memo(
  (props) => {
    const unixToDate = (tz) => {
      var d = new Date();
      var localTime = d.getTime();
      var localOffset = d.getTimezoneOffset() * 60000;
      var utc = localTime + localOffset;
      var current = utc + 1000 * tz;
      var a = new Date(current);
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var time = date + " " + month + " " + year + " " + hour + ":" + min;
      return time;
    };

    async function sleep() {
      props.loading(false);
    }

    const data = props.weather;
    if (data.length !== 0) {
      sleep();
    }

    const [p, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: { mass: 5, tension: 300, friction: 40 },
    }));

    const weatherIcons = [
      "fas fa-sun",
      "fas fa-cloud",
      "fas fa-cloud-showers-heavy",
      "fas fa-poo-storm",
      "fas fa-snowflake",
      "fas fa-cloud-rain",
      "fas fa-smog",
    ];

    const weatherBox = {
      height: "300px",
      width: "400px",
      fontSize: "90px",
      textAlign: "center",
    };

    const weather = {
      position: "relative",
      top: 100,
    };

    return (
      <div className={styles.container}>
        <animated.div
          className={styles.card}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: p.xys.interpolate(trans) }}
        >
          <div style={weatherBox}>
            <div className={weatherIcons[data[0]]} style={weather}></div>
          </div>
          <div className={styles.info}>
            <div className={styles.time}>
              <time>{unixToDate(data[2])}</time>
            </div>
            <div className={styles.temp}>
              <div>{data[1]}</div>
            </div>
            <div className={styles.description}>
              <div>{data[3]}</div>
            </div>
          </div>
        </animated.div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.weather === nextProps.weather) {
      return true;
    }
    return false;
  }
);

export default Weather;
