// import "Your code here";
import useTimer from "./useTimer";
import { formatTime } from "./formatTime";
import ListRecords from "./components/ListRecords";
import React from "react";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitHandler,
    records,
    canSplit,
  } = useTimer(0);

  return (
    <div className="App container">
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" ref={canSplit} onClick={splitHandler}>
            Record
          </button>
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
      {records.length > 0 ? <ListRecords records={records} /> : ""}
    </div>
  );
}

export default App;
