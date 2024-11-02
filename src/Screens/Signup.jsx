import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    axios
      .post("https://backend-jawan.vercel.app/api/userSign", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/api/userLogin");
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
          <form onSubmit={handleSignup}>
            <input
              onChange={(e) => setfirstName(e.target.value)}
              value={firstName}
              type="name"
              name="name"
              id="name"
            />
            <input
              onChange={(e) => setlastName(e.target.value)}
              value={lastName}
              type="name"
              name="name"
              id="name"
            />
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
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
