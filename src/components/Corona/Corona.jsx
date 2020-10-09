import React from "react";
import { useSpring, animated } from "react-spring";

import styles from "./Corona.module.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 60,
  (x - window.innerWidth / 2) / 60,
  1.08,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Corona = React.memo(
  (props) => {
    const data = props.data;

    const [p, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: { mass: 5, tension: 300, friction: 40 },
    }));

    function timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function sleep() {
      await timeout(4000);
      props.loading(false);
    }

    if (data.length !== 0) {
      sleep();
    }

    const virus = {
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
          <div className={styles.iconBox}>
            <div className="fas fa-virus" style={virus}></div>
          </div>
          <div className={styles.info}>
            <div className={styles.time}>
              <time>{data[4]}</time>
            </div>
            <div className={styles.province}>
              <div>{data[0]}</div>
            </div>
            <div className={styles.confirmed}>
              <div className={styles.category}>
                Confirmed:<span id={styles.confirmed}>{data[1]}</span>
              </div>
            </div>
            <div className={styles.dead}>
              <div className={styles.category}>
                Dead:<span id={styles.dead}>{data[2]}</span>
              </div>
            </div>
            <div className={styles.recovered}>
              <div className={styles.category}>
                Recovered:
                <span id={styles.recovered}>
                  {data[3] === null ? "Unknown" : data[3]}
                </span>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.data === nextProps.data) {
      return true;
    }
    return false;
  }
);

export default Corona;
