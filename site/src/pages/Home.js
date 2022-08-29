import React from "react";

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
      </div>
    );
};

export default Home;