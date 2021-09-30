import React, {useState, useEffect} from "react";
import cat from "./svg/cat.svg";

const DrumPads = ({drumpads}) => {
  const [text, setText] = useState("");

  const playOnKey = (e) => {
    for (let index = 0; index < drumpads.length; index++) {
      if (e.keyCode === drumpads[index].keyCode) {
        var audio = new Audio(drumpads[index].sound);
        audio.play();
        setText(drumpads[index].id);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", playOnKey);
    return () => {
      document.removeEventListener("keydown", playOnKey);
    };
  });

  return (
    <>
      {drumpads.map((drumpad) => {
        const {keyTrigger, sound, id} = drumpad;

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
