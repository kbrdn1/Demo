import React, { useContext } from "react";
import AllUsers from "../components/AllUsers";
import { UidContext } from "../components/AppContext";

const Home = () => {
    var uid = useContext(UidContext);
    
  return (
    <div>
      <h1>Home</h1>
      {uid ? (
        <a href="/profile">
          <button>Profile</button>
        </a>
      ) : (
        <>
          <a href="/signin">
            <button>Login</button>
          </a>
          <a href="/signup">
            <button>Register</button>
          </a>
        </>
      )}
      <AllUsers />
    </div>
  );
};

export default Home;
