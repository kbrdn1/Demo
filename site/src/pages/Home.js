import axios from "axios";
import React from "react";
import AllUsers from "../components/AllUsers";

const Home = () => {

  return (
    <div>
      <h1>Home</h1>
      <a href="/signin">
        <button>Login</button>
      </a>
      <a href="/signup">
        <button>Register</button>
      </a>
      <AllUsers />
    </div>
  );
};

export default Home;
