import React from "react";
import data from "./data";

const Keys = ({drumpads}) => {
  const {keyCode, keyTrigger, sound} = drumpads;

  return document.addEventListener("keydown", function (e) {
    if (e.keyCode == 81) {
      document.getElementById("audio").play();
    }
  });
};

export default Keys;
