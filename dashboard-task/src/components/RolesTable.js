import { useEffect } from "react";
import { deleteRoles, getRoles } from "../api/roles";
import { rolesHeader } from "../constant";
import { TableHeader } from "./TableHeader";

export const RolesTable = ({ roles, setRoles }) => {
  const handleDeleteRoles = (id) => {
    deleteRoles(id);
    setRoles(roles.filter((role) => role._id !== id));
  };

  useEffect(() => {
    getRoles(function (res) {
      setRoles(res?.data);
    });
  }, [setRoles]);

  return (
    <table className="table table-bordered">
      <TableHeader data={rolesHeader} />
      <tbody>
        {roles?.map((role, index) => (
          <tr key={role._id}>
            <th scope="row">{index}</th>
            <td>{role?.roleName ?? ""}</td>

            <td>
              <button className="btn btn-info btn-sm">Edit</button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteRoles(role._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
