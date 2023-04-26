import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { register } from "../api/register";
import "../App.css";

export const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      //   firstName: "",
      //   lastName: "",
      //   phoneNumber: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      //   alert(values.firstName);
      register(values, function (res) {
        console.log("response?.status", res?.status);
        if (res?.status === 200) {
          navigate("/login");
        }
      });
    },
  });
  return (
    <div className="login">
      <div className="form">
        <h1> Register User</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* <label>First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <label>Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <label>Contact Number</label>
          <input
            type="phone"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          /> */}

          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type="submit">Register</button>
          <button onClick={() => navigate("/login")}>Login Page</button>
        </form>
      </div>
    </div>
  );
};
