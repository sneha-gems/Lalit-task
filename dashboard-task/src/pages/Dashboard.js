import { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import "../App.css";
import { TableHeader } from "../components/TableHeader";
import { Navbar } from "../components/Navbar";
import { deleteUser } from "../api/user";
import { ModalDialog } from "../components/Modal";
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { addRoles, deleteRoles, getRoles } from "../api/roles";
import { permissionArray, rolesHeader, userHeader } from "../constant";

export const Dashboard = () => {
  const [users, setUsers] = useState();
  const [roles, setRoles] = useState();
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      roleName: "",
      permissions: {
        user: {
          add: false,
          edit: false,
          view: false,
          delete: false,
        },
        role: {
          add: false,
          edit: false,
          view: false,
          delete: false,
        },
        category: {
          add: false,
          edit: false,
          view: false,
          delete: false,
        },
      },
    },
    onSubmit: (values) => {
      addRoles(values);
      setShow(false);
    },
  });

  useEffect(() => {
    getUsers(function (res) {
      setUsers(res?.data);
    });
  }, [users]);

  useEffect(() => {
    getRoles(function (res) {
      setRoles(res?.data);
    });
  }, [roles]);

  const handleDeleteUser = (id) => {
    deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleDeleteRoles = (id) => {
    deleteRoles(id);
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="container">
      <Navbar />
      <div>
        <button onClick={() => setShow(true)}>Add Roles</button>
      </div>
      <div className="table-responsive mt-3">
        <h1>Users List</h1>
        <table className="table table-bordered">
          <TableHeader data={userHeader} />
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index}</th>
                <td>{user?.firstName ?? ""}</td>
                <td>{user?.lastName ?? ""}</td>
                <td>{user?.email ?? ""}</td>
                <td>
                  <button className="btn btn-info btn-sm">Edit</button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>Roles List</h1>
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
        <ModalDialog
          show={show}
          title={"Add Roles"}
          setShow={setShow}
          buttonTitle={"Add Roles"}
        >
          <form onSubmit={formik.handleSubmit}>
            <Row>
              <Col className="mx-2 py-2">
                <label>Role Name</label>
                <input
                  id={"role-name"}
                  name="roleName"
                  onChange={formik.handleChange}
                  value={formik.values.roleName}
                />
              </Col>
            </Row>
            <Row>
              <Col className="mx-2 py-2">
                <label> User Permissions</label>
                {permissionArray.map((per) => (
                  <input
                    type="checkbox"
                    id={`user-${per}`}
                    name={`permissions.user.${per}`}
                    onChange={formik.handleChange}
                    value={formik.values.permissions.user.per}
                  />
                ))}
              </Col>
            </Row>
            <Row>
              <Col className="mx-2 py-2">
                <label> Role Permissions</label>
                {permissionArray.map((per) => (
                  <input
                    type="checkbox"
                    id={`role-${per}`}
                    name={`permissions.role.${per}`}
                    onChange={formik.handleChange}
                    value={formik.values.permissions.role.per}
                  />
                ))}
              </Col>
            </Row>
            <Row>
              <Col className="mx-2 py-2">
                <label> Category Permissions</label>
                {permissionArray.map((per) => (
                  <input
                    type="checkbox"
                    id={`category-${per}`}
                    name={`permissions.category.${per}`}
                    onChange={formik.handleChange}
                    value={formik.values.permissions.category.per}
                  />
                ))}
              </Col>
            </Row>
            <button type="submit">Add roles</button>
            <button onClick={() => setShow(false)}>Close</button>
          </form>
        </ModalDialog>
      </div>
    </div>
  );
};
