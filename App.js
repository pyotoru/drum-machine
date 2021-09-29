import "./css/index.css";
import React, {useState} from "react";
import data from "./data";
import DrumPads from "./DrumPads";

function App() {
  const [drumpads] = useState(data);
  return (
    <main>
      <div className="container" id="drum-machine">
        <div className="drum-pads">
          <DrumPads drumpads={drumpads} />
        </div>
      </div>
      <div className="notation">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/vitaly-gorbachev"
          title="Vitaly Gorbachev"
        >
          Vitaly Gorbachev
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </main>
  );
}

export default App;
