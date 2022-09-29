import React from "react";

const Clock = () => {
  function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText =
      hour + " : " + min + " : " + sec;
    setTimeout(function () {
      currentTime();
    }, 1000);
  }

  const updateTime = (k) => {
    if (k < 10) {
      return "0" + k;
    } else {
      return k;
    }
  };

  return (
    <>
      <div id="clock"></div>
      {currentTime()}
    </>
  );
};

export default Clock;
