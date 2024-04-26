"use client";
import Header from "../components/Header.jsx";
import React, { useState } from "react";
import Lights from "./Lights.jsx";

export default function Page() {
  return (
    <>
      <Header title="Traffic Lights: Example" quote="Stop, look, and listen" />
      <section>
        <aside>
          <Lights />
        </aside>
        <aside>
          <p>
            Twinkle twinkle traffic light<br></br>
            On the corner shining bright.<br></br>
            Red means, "Stop."<br></br>
            Green means, "Go."<br></br>
            Yellow means, "Drive very slow."<br></br>
            Twinkle twinkle traffic light<br></br>
            On the corner shining bright.<br></br>
          </p>
        </aside>
      </section>
    </>
  );
}
