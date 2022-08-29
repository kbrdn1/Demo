import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailError = document.querySelector(".emailerror");
  const passwordError = document.querySelector(".passworderror");
  const pseudoError = document.querySelector(".pseudoerror");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      passwordError.innerHTML = "Passwords do not match";
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/user/register`, {
          withCredentials: true,
          pseudo,
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            window.location = "/signin";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <h1>Register</h1>

      <form action="" onSubmit={handleRegister} id="sign-up-form">
        <label htmlFor="email">Pseudo: </label>
        <br />
        <input
          type="text"
          placeholder="Pseudo"
          onChange={(e) => setPseudo(e.target.value)}
          value={pseudo}
        />
        <div className="pseudoerror"></div>
        <br />
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
        <label htmlFor="password">Confirm password: </label>
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <br />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default SignUp;
