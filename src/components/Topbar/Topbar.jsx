import "./Topbar.scss";
import { Email, Person } from "@mui/icons-material";

const Topbar = ({ open, toggleMenuOpen }) => {
  return (
    <div className={`topbar ${open && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            anandureghu.in
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 62823 53242</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>anandukr145@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={toggleMenuOpen}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
