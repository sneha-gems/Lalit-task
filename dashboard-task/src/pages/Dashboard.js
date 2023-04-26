import { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import "../App.css";
import { TableHeader } from "../components/TableHeader";
import { Navbar } from "../components/Navbar";
import { deleteUser } from "../api/user";
import { ModalDialog } from "../components/Modal";
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { addRoles, getRoles } from "../api/roles";
import { permissionArray } from "../constant";
import { UserTable } from "../components/UserTable";
import { RolesTable } from "../components/RolesTable";
import { CategoryTable } from "../components/CategoryTable";

export const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [roles, setRoles] = useState([]);

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
      getRoles(function (res) {
        setRoles(res?.data);
      });
    },
  });

  return (
    <div className="container">
      <Navbar />
      <div>
        <button onClick={() => setShow(true)}>Add Roles</button>
      </div>
      <div className="table-responsive mt-3">
        <h1>Users List</h1>
        <UserTable />
        <h1>Roles List</h1>
        <RolesTable roles={roles} setRoles={setRoles} />

        <h1>Category List</h1>
        <CategoryTable />
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
                  <div className="px-2">
                    <label className="px-1">{per}</label>
                    <input
                      type="checkbox"
                      id={`user-${per}`}
                      name={`permissions.user.${per}`}
                      onChange={formik.handleChange}
                      value={formik.values.permissions.user.per}
                    />
                  </div>
                ))}
              </Col>
            </Row>
            <Row>
              <Col className="mx-2 py-2">
                <label> Role Permissions</label>
                {permissionArray.map((per) => (
                  <div className="px-2">
                    <label className="px-1">{per}</label>
                    <input
                      type="checkbox"
                      id={`role-${per}`}
                      name={`permissions.role.${per}`}
                      onChange={formik.handleChange}
                      value={formik.values.permissions.role.per}
                    />
                  </div>
                ))}
              </Col>
            </Row>
            <Row>
              <Col className="mx-2 py-2">
                <label> Category Permissions</label>
                {permissionArray.map((per) => (
                  <div className="px-2">
                    <label className="px-1">{per}</label>
                    <input
                      type="checkbox"
                      id={`category-${per}`}
                      name={`permissions.category.${per}`}
                      onChange={formik.handleChange}
                      value={formik.values.permissions.category.per}
                    />
                  </div>
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
