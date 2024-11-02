import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";

function App() {
  return (
    <Routes>
      <Route path="/api/userSign" element={<Signup />} />
      <Route path="/api/userLogin" element={<Login/>} />
    </Routes>
  );
}

export default App;
