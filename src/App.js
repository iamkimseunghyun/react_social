import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
