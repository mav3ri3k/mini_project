import React, { useEffect, useState } from "react";
import "./TrafficLights.css";

export default function lights() {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const timer = setTimeout(() => {
      changeLight();
    }, 2000); // Change light every 2 seconds

    return () => clearTimeout(timer);
  }, [currentLight]);

  const changeLight = () => {
    switch (currentLight) {
      case "red":
        setCurrentLight("green");
        break;
      case "yellow":
        setCurrentLight("red");
        break;
      case "green":
        setCurrentLight("yellow");
        break;
      default:
        setCurrentLight("red");
        break;
    }
  };

  return (
    <div className="traffic-lights">
      <div className={`red light ${currentLight === "red" && "active"}`}></div>
      <div className={`yellow light ${currentLight === "yellow" && "active"}`}>
      </div>
      <div className={`green light ${currentLight === "green" && "active"}`}>
      </div>
    </div>
  );
}
