import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailError = document.querySelector(".emailerror");
  const passwordError = document.querySelector(".passworderror");

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/user/login`, {
        withCredentials: true,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          
          axios
            .get(`${process.env.REACT_APP_API_URL}/api/user/${res.data.user}`, {
              withCredentials: true,
            })
            .then((res) => {
              setUser(res.data);
            })
            .catch((err) => console.log("No token" + err));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Login</h1>

      <form action="" onSubmit={handleLogin} id="sign-up-form">
        <label htmlFor="email">Email: </label>
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="emailerror"></div>
        <br />
        <label htmlFor="password">Password: </label>
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="passworderror"></div>
        <br />
        <button type="submit">Valider</button>
      </form>

      {user ? <p>Utilisateur conneté: {user.pseudo}</p> : null}
    </div>
  );
};

export default SignIn;
