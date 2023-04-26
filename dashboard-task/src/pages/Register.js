//Packages Import
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Custom Import
import { register } from "../api/register";

//CSS Import
import "../App.css";

export const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      register(values, function (res) {
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
