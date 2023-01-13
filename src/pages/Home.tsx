import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    console.log("Resut : ", result);
    setUsers(result.data);
  };

  const deleteUser = async (id: any) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">User Name</th>
          <th scope="col">Emails</th>
          <th scope="col">Website</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: any, index: number) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-secondary btn-sm"  
                 onClick={() => navigate(`/users/${user.id}`)}
                >
                  view
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm"
                  onClick={() => navigate(`/users/edit/${user.id}`)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
