import React, { useState } from "react";
import { useEffect } from "react";
import User from "./User.jsx";
// import User from "./components/User.jsx";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="">
      <h1 className="text-5xl py-2 title ">Kun.uz </h1>
      <nav className="nav container">
        <ul className="flex d-flex  justify-center item justify-items-center">
          <li>O`zbekiston</li>
          <li>Jahon</li>
          <li>Iqtisodiyot</li>
          <li>Jamiyat</li>
          <li>Fan-texnika</li>
          <li>Sport</li>
        </ul>
      </nav>

      <div className=" flex flex-wrap gap-10 justify-items-center text-align-center  ">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
