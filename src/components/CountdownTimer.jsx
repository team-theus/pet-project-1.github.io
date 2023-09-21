import React, { useState, useEffect } from "react";
import Timer from "./Timer";

export default function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  // const [showEndScreen, setShowEndScreen] = useState({
  //   show: false,
  //   message: "Time ends in:",
  // });

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (days > 0) {
          setDays((days) => days - 1);
          setHours(23);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    }
    // if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    //   setShowEndScreen({...showEndScreen, show: false });
    //   resetTimer();
    // }
    return () => clearInterval(interval);
  }, [seconds, minutes, hours, days, isRunning]);

  // Start Timer
  function startTimer() {
    if (days !== 0 || hours !== 0 || minutes !== 0 || seconds !== 0) {
      setIsRunning(true);
      // setShowEndScreen({...showEndScreen, show: true });
    } else {
      window.alert("Add Time.");
    }
  }

  // Pause Timer
  function pauseTimer() {
    setIsRunning(false);
  }

  // Stop Timer
  function stopTimer() {
    resetTimer();
  }

  function resetTimer() {
    setIsRunning(false);
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  // Handlers

  const changeDays = (e) => {
    setDays(e.target.value);
  };
  const changeHours = (e) => {
    setHours(e.target.value);
  };
  const changeMinutes = (e) => {
    setMinutes(e.target.value);
  };
  const changeSeconds = (e) => {
    setSeconds(e.target.value);
  };

  return (
    <div className="timer_card">
      <h1 className="title">Countdown Timer</h1>
      {/* {showEndScreen.show && (
        <p className="sub_title">{showEndScreen.message}</p>
      )} */}
      <p className="sub_title">Time ends in:</p>
      <Timer
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        days={days}
        changeDays={changeDays}
        changeHours={changeHours}
        changeMinutes={changeMinutes}
        changeSeconds={changeSeconds}
      />
      <br />

      <div className="btn-wrapper">
        {!isRunning && (
          <button className="btn btn-accept btn-lg" onClick={startTimer}>
            Start
          </button>
        )}
        {isRunning && (
          <button className="btn btn-waring btn-lg" onClick={pauseTimer}>
            Pause
          </button>
        )}{" "}
        <button className="btn btn-danger btn-lg" onClick={stopTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}
