"use client";
import { useRouter } from "next/navigation";

import Header from "../components/Header.jsx";
import React, { useState } from "react";

function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Simulate authentication (replace with your actual authentication logic)
    if (username === "admin" && password === "password123") {
      console.log("Login successful!");
      router.push("/home");
      // Redirect to a different page or perform other actions on successful login
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <section>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h1 class="text-2xl font-bold">Login</h1>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default Page;
