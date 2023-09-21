import React from "react";

export default function Timer({
  seconds,
  minutes,
  hours,
  days,
  changeDays,
  changeHours,
  changeMinutes,
  changeSeconds,
}) {
  return (
    <div className="wrapper">
      <div className="d-flex">
        <input value={days} onChange={changeDays} />
        <label>Days</label>
      </div>
      <div className="d-flex">
        <input value={hours} onChange={changeHours} />
        <label>Hrs</label>
      </div>
      <div className="d-flex">
        <input value={minutes} onChange={changeMinutes} />
        <label>Mins</label>
      </div>
      <div className="d-flex">
        <input value={seconds} onChange={changeSeconds} />
        <label>Secs</label>
      </div>
    </div>
  );
}
