import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="bg-light">
      <h5>PeTIK Belajar</h5>
      <ul>
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/courses"}>Courses</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/profile"}>Profile</NavLink>
        </li>
      </ul>
      <Button onClick={handleLogout} variant="danger">
        Logout
      </Button>
    </div>
  );
};

export default Sidebar;
