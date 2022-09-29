import React from "react";

function Greeting() {
  const date = new Date();
  const currentHour = date.getHours();

  let greeting;

  const customStyle = {
    color: "",
    fontWeight: "bold",
  };

  if (currentHour < 12) {
    greeting = "Good Morning";
    customStyle.color = "gold";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "dodgerblue";
  }

  return <span style={customStyle}>{greeting}</span>;
}

export default Greeting;
