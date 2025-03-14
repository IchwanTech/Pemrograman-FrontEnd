import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./pages/courses/Courses";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/courses" element={<Courses />} />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
