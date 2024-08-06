import React, { useState } from "react";
import Modal from "../../pages/Modal/Modal";

const Table = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Hart Hagerty",
      surname: "fedsfsdfsd",
      number: "9876678767",
      details: "more details",
      isActive: true,
    },
    {
      id: 2,
      name: "Brice Swyre",
      surname: "fedsfsdfsd",
      number: "5678767876787",
      details: "more details",
      isActive: true,
    },
    {
      id: 3,
      name: "Marjy Ferencz",
      surname: "fedsfsdfsd",
      number: "567876765676",
      details: "more details",
      isActive: true,
    },
    {
      id: 4,
      name: "Yancy Tear",
      surname: "fedsfsdfsd",
      number: "567656765",
      details: "more details",
      isActive: true,
    },
  ]);

  const toggleActive = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className=" ">
              <th></th>
              <th>name</th>
              <th>Surname</th>
              <th>Phone number</th>
              <th>Actives</th>
              <th>Problems</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.name}>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="">
                    <div>
                      <div>{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.surname}
                  <br />
                </td>
                <td>{user.number}</td>
                <td>
                  <button
                    className={`btn ${
                      user.isActive
                        ? "btn-success"
                        : user.isPending
                        ? "btn-primary"
                        : "btn-error"
                    }`}
                    style={{ width: "100px" }}
                    onClick={() => toggleActive(user.id)}
                  >
                    {user.isActive
                      ? "All is ready"
                      : user.isPending
                      ? "Being checked"
                      : "Refusal"}
                  </button>
                </td>
                <td>
                  <Modal />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
