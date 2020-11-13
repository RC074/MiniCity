import React, { useState, useEffect } from "react";

import styled from "./Popup.module.css";

const Popup = () => {
  const [show, setShow] = useState(false);
  const [hashloc, setHashloc] = useState("");

  const handleClick = () => {
    console.log(show);
    setShow(!show);
  };

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHashloc(window.location.hash);
    });
  }, []);

  return (
    <div
      className={styled.container}
      style={{
        visibility: hashloc === "#t1" || hashloc === "" ? "initial" : "hidden",
        opacity: hashloc === "#t1" || hashloc === "" ? 1 : 0,
        transition: "visibility 0s, opacity 1s linear",
      }}
    >
      <button
        onClick={handleClick}
        className={styled.scroll}
        style={{
          bottom: show ? "26.5vh" : "30px",
          transition: show ? "all 0.1s ease-in" : "all 0.3s ease-in",
        }}
      ></button>
      <div
        className={styled.instructions}
        style={{ height: show ? "25vh" : "0", bottom: show ? "0" : "-30px" }}
      >
        When the app first loads, there will not be any data because the city is
        not yet selected. To start, search any cities in the search bar above.
        Once selected a city, you can now navigate to the other pages (on the
        left hand side) to view the city's trends, weather and covid data. The
        weather and covid are made in form of cards, they are some really nice
        animation once you hover your mouse on top of them.
      </div>
    </div>
  );
};

export default Popup;
