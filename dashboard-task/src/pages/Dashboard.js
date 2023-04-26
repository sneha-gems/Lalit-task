import { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import "../App.css";
import { TableHeader } from "../components/TableHeader";
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    getUsers(function (res) {
      setUsers(res?.data);
    });
  }, []);

  return (
    <div classname="container">
      <Navbar />
      <div class="table-responsive mt-3">
        <table class="table table-bordered">
          <TableHeader />

          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index}</th>
                <td>{user?.firstName ?? ""}</td>
                <td>{user?.lastName ?? ""}</td>
                <td>{user?.email ?? ""}</td>
                <td>
                  <button class="btn btn-info btn-sm">Edit</button>
                  <button class="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
