import { useEffect } from "react";
import { useState, useRef } from "react";
import React from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const [isStart, setIsStart] = useState(false);
  const active = useRef(false);

  const canSplit = useRef(false);
  const refInterval = useRef(0);

  const refCount = useRef(0);

  const [records, setRecords] = useState([]);

  useEffect(() => {
    canSplit.current.disabled = true;
  }, []);

  useEffect(() => {
    refCount.current++;
    if (records[0]) {
      refInterval.current = records[0].splitTime;
    }
  }, [records]);

  useEffect(() => {
    if (isStart) {
      var intervalID = setInterval(() => {
        setTime((time) => {
          return time + 0.1;
        });
      }, 100);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [isStart]);

  const splitHandler = () => {
    setRecords((prev) => {
      const newRecords = [
        {
          count:
            refCount.current < 10 ? `0${refCount.current}` : refCount.current,
          splitTime: time,
          interval: time - refInterval.current,
        },
        ...prev,
      ];
      return newRecords;
    });
  };

  const startTimer = () => {
    setIsStart(true);
    active.current.disabled = true;
    canSplit.current.disabled = false;
  };
  const stopTimer = () => {
    setIsStart(false);
    active.current.disabled = false;
    canSplit.current.disabled = true;
  };
  const resetTimer = () => {
    setTime(0);
    setIsStart(false);
    active.current.disabled = false;
    canSplit.current.disabled = true;
    refInterval.current = 0;
    setRecords([]);
    refCount.current = 0;
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitHandler,
    records,
    canSplit,
  };
};
export default useTimer;
