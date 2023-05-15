import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.scss";

function LoginPage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://redi-backend.azurewebsites.net/api/Account/login",
        requestBody,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("token", JSON.stringify(res.data));
        setUser(res.data);
      })
      .catch((err) => console.log("err------>", err));
  };

  return (
    <div className="main-container">
      <h1>LoginPage</h1>
      
        <form onSubmit={handleSubmit} className="main-container-form">
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">submit</button>
        </form>
      
    </div>
  );
}

export default LoginPage;
