// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== null) {
      navigate("/MainPage");
    }
  }, [user]);
  return (
    <div className="App">
      <div>
        <Routes>
          <Route
            path="/MainPage"
            element={<MainPage user={user} setUser={setUser} />}
          />
          <Route index element={<LoginPage setUser={setUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
