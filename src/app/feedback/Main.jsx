"use client";
import React, { useState } from "react";

export default function Main() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [feedback, setFeedback] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("wow");
    console.log(event);
  };

  return (
    <form id="myForm" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" size="20" id="name"></input>
      <br></br>
      <label>Email:</label>
      <input type="text" size="20" id="email"></input>
      <br></br>
      <label>Phone:</label>
      <input type="text" size="20" id="phone"></input>
      <br></br>
      <label>Date of Birth:</label>
      <input type="date" id="dob"></input>
      <br></br>
      <label>Profile Image:</label>
      <input type="file" id="profileImage"></input>
      <br></br>
      <label>Feedback:</label>
      <textarea cols="40" rows="5" id="feedback"></textarea>
      <button type="submit">Submit</button>
      <br></br>
    </form>
  );
}
