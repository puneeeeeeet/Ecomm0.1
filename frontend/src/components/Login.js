import React, { useState } from "react";
import api from "../api";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", credentials);
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
