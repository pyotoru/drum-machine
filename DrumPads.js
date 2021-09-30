import React, {useState, useEffect} from "react";
import cat from "./svg/cat.svg";

const DrumPads = ({drumpads}) => {
  const {keyTrigger, keyCode, sound, id} = drumpads;
  const [text, setText] = useState("");

  // const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", playOnKey);
    return () => {
      document.removeEventListener("keydown", playOnKey);
    };
  }, []);

  const playOnKey = (e) => {

    if (e.keyCode === drumpads[0].keyCode) {
      var audio = new Audio(drumpads[0].sound);
      audio.play();
      setText(id);
    }
     if (e.keyCode === drumpads[1].keyCode) {
      var audio = new Audio(drumpads[1].sound);
      audio.play();
      setText(id);
    }
     if (e.keyCode === drumpads[2].keyCode) {
      var audio = new Audio(drumpads[2].sound);
      audio.play();
      setText(id);
    }
     if (e.keyCode === drumpads[3].keyCode) {
      var audio = new Audio(drumpads[3].sound);
      audio.play();
      setText(id);
    }
     if (e.keyCode === drumpads[4].keyCode) {
      var audio = new Audio(drumpads[4].sound);
      audio.play();
      setText(id);
    }
     if (e.keyCode === drumpads[5].keyCode) {
      var audio = new Audio(drumpads[5].sound);
      audio.play();
      setText(id);
    }
     if (e.keyCode === drumpads[6].keyCode) {
      var audio = new Audio(drumpads[6].sound);
      audio.play();
      setText(id);
    }
     if (e.keyCode === drumpads[7].keyCode) {
      var audio = new Audio(drumpads[7].sound);
      audio.play();
      setText(id);
    }
     if (e.keyCode === drumpads[8].keyCode) {
      var audio = new Audio(drumpads[8].sound);
      audio.play();
      setText(id);
    }
  };

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

//   const playOnKey = (e) => {
//     if (e.keyCode === keyCode) {
//       var audio = new Audio(sound);
//       audio.play();
//       setText(id);
//     }
//   };

// document.addEventListener("keydown", playOnKey);

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
