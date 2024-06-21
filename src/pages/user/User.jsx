import axios from "../../api";
import React, { useEffect, useState } from "react";
import "../../sass/__user.scss";

const User = () => {
  const [users, setUsers] = useState(null);
  const userData = JSON.parse(localStorage.getItem("user-data"));
  console.log(userData);
  const deleteUserById = (id) => {
    axios.delete(`users/${id}`);
  };

  useEffect(() => {
    axios.get("/users/search").then((res) => setUsers(res.data.data.users));
  }, []);
  console.log(users);
  return (
    <div className="user__wrapper">
      <div className="container">
        <h2>
          {userData?.FirstName} : {userData?.role}
        </h2>
        {users?.map((user) => (
          <div key={user.id} className="users__section">
            <h3>{user.FirstName}</h3>
            {user?.role === "owner" ? (
              <button onClick={() => deleteUserById(user.id)}>Delete</button>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
