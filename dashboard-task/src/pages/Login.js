import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { login } from "../api/login";
import "../App.css";

export const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values, function (status) {
        if (status === 200) {
          navigate("/dashboard");
        }
      });
    },
  });
  return (
    <div className="fullpage">
      <div className="login">
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <h1> Login User</h1>
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
            <button type="submit">Login</button>
            <button onClick={() => navigate("/register")}>Register Page</button>
          </form>
        </div>
      </div>
    </div>
  );
};
