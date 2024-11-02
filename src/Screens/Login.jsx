import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    axios
      .post("https://backend-jawan.vercel.app/api/userLogin", { email, password })
      .then((result) => {
        console.log(result);
        alert("Login Success")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div style={{ margin: "4rem auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <form method="post">
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              type="email"
              name="email"
              id="email"
            />
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              id="password"
            />
            <button type="submit" onSubmit={handleSubmit}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
