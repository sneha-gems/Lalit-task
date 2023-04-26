import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { PageNotFound } from "./pages/PageNotFound";
import { UserContext } from "./context";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const token = useMemo(() => localStorage.getItem("token"), []);
  console.log("token", token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Routes>
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
