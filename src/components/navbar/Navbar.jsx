import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <div className="social">
          <a href="https://github.com/samsonking14">
            <img src="/gitwhite.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
