import { Outlet } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <h2>This is the NavBar Component</h2>
      <Outlet />
    </div>
  );
};

export default NavBar;
