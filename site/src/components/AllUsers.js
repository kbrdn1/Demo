import React, { useEffect, useState } from "react";
import axios from "axios";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/user`, {
        withCredentials: true,
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setUsers("Pas d'utilisateurs");
        console.log(err);
      });
  }, [users]);

    const deleteUser = (id) => {
        if (window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
            axios
                .delete(`${process.env.REACT_APP_API_URL}/api/user/${id}`, {
                    withCredentials: true,
                })
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
  };

  return (
    <div>
      {users ? (
        <>
          <h2>Utilisateurs: </h2>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <p>
                  <span>pseudo: </span> {user.pseudo}
                </p>
                <p>
                  <span>email: </span> {user.email}
                </p>
                <button className="red" onClick={() => deleteUser(user._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default AllUsers;
