import React, { useEffect, useState } from "react";
import "./styles.css";
import ProgressBar from "./components/ProgressBar";

/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [val, setVal] = useState(0);

  const setValuer = (e) => {
    setVal(e.currentTarget.value);
  };

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={val} />
        <form>
          <label for="html">Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}
