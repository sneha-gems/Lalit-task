import { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import "../App.css";
import { TableHeader } from "../components/TableHeader";
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {
  const [users, setUsers] = useState;
  useEffect(() => {
    getUsers(function (res) {
      console.log("response --->", res?.data?.users);
    });
  }, []);
  // const data = getUsers();
  // console.log("data", data);
  return (
    <div classname="container">
      <Navbar />
      <div class="table-responsive mt-3">
        <table class="table table-bordered">
          <TableHeader />

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <button class="btn btn-info btn-sm">Edit</button>
                <button class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
