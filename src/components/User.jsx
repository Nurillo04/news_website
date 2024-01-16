import React from "react";

const User = ({ user }) => {
  return (
    <div className="p-3 raunded-med shadow-md w-[250px]">
      {/* <h3>{user.id}</h3> */}
      <h3>{user.name}</h3>
      <h5>{user.username}</h5>
      <p>{user.text}</p>
      <p>{user.address.city}</p>
      <p>{user.data}</p>
    </div>
  );
};

export default User;
