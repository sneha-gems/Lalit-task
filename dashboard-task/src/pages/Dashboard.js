//package import
import { useState, useMemo } from "react";
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";

//custom files import
import { addRoles, getRoles } from "../api/roles";
import { permissionArray, rolesInitialState } from "../constant";
import { UserTable } from "../components/UserTable";
import { RolesTable } from "../components/RolesTable";
import { CategoryTable } from "../components/CategoryTable";
import { Navbar } from "../components/Navbar";
import { ModalDialog } from "../components/Modal";

//CSS file import
import "../App.css";

export const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [roles, setRoles] = useState([]);

  const user = useMemo(() => JSON.parse(localStorage.getItem("User")), []);

  const formik = useFormik({
    initialValues: rolesInitialState,
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
      {user.rolePermission.permissions.role.add && (
        <div>
          <button onClick={() => setShow(true)}>Add Roles</button>
        </div>
      )}

      <div className="table-responsive mt-3">
        {user.rolePermission.permissions.user.view && (
          <>
            <h1>Users List</h1>
            <UserTable permissions={user.rolePermission.permissions.user} />
          </>
        )}
        {user.rolePermission.permissions.role.view && (
          <>
            <h1>Roles List</h1>
            <RolesTable
              roles={roles}
              setRoles={setRoles}
              permissions={user.rolePermission.permissions.role}
            />
          </>
        )}
        {user.rolePermission.permissions.category.view && (
          <>
            <h1>Category List</h1>
            <CategoryTable
              permissions={user.rolePermission.permissions.category}
            />
          </>
        )}

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
                {permissionArray.map((per, index) => (
                  <div className="px-2" key={`user-${index}`}>
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
                {permissionArray.map((per, index) => (
                  <div className="px-2" key={`role-${index}`}>
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
                {permissionArray.map((per, index) => (
                  <div className="px-2" key={`category-${index}`}>
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
