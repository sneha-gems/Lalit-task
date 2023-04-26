//Packege Import
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

//Custom file Import.
import { Profile } from "./pages/Profile";
import { PageNotFound } from "./pages/PageNotFound";
import { UserContext } from "./context";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";

//Css import
import "./App.css";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const token = useMemo(() => localStorage.getItem("token"), []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={token ? "/dashboard" : "/login"} />}
          />
          <Route index path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
