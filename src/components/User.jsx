import React from "react";
import "./Users.css";

const User = ({ user }) => {
  return (
    <div className="p-3 hero  raunded-med shadow-md w-[250px]">
      {/* <h3>{user.id}</h3> */}
      <h2 className="mb-3">{user.name}</h2>
      <h5 className="mb-2">{user.username}</h5>
      <p>{user.text}</p>
      <p>{user.address.city}</p>
      <div className="data">
        <p>{user.data}</p>
      </div>
    </div>
  );
};

export default User;
