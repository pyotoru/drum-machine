import React, {useState, useEffect} from "react";
import cat from "./svg/cat.svg";

const DrumPads = ({drumpads}) => {
  const {keyTrigger, keyCode, sound, id} = drumpads;

  const [text, setText] = useState("");

  const playOnKey = (e) => {
    if (e.keyCode === keyCode) {
      var audio = new Audio(sound);
      audio.play();
      setText(id);
    }
  };

  console.log(document.addEventListener("keydown", playOnKey));

  // const [active, setActive] = useState(false);

  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeyPress);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, []);

  // const handleKeyPress = (e) => {
  //   if (e.keyCode === drumpads[0].keyCode) {
  //     playSound();
  //   }
  // };

  // const playSound = () => {
  //   const audioTag = document.getElementById(drumpads.keyTrigger);
  //   audioTag.currentTime = 0;
  //   audioTag.play();
  // };

  return (
    <>
      {drumpads.map((drumpad) => {
        const {keyTrigger, keyCode, sound, id} = drumpad;

        // window.addEventListener("keydown", (e) => {
        //   if (e.keyCode === keyCode) {
        //     play();
        //   }
        // });
        // window.removeEventListener("keydown", (e) => {
        //   if (e.keyCode === keyCode) {
        //     play();
        //   }
        // });

        return (
          <article key={id}>
            <div id="listener"></div>
            <button
              className="drum-pad"
              onClick={() => {
                var audio = new Audio(sound);
                audio.play();
                setText(id);
              }}
            >
              <img src={cat} alt="this is cat" className="catSvg" />
              {keyTrigger}
            </button>
            <div className="display" id="display">
              <h1>{text}</h1>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default DrumPads;
