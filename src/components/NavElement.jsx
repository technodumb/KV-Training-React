import { Link } from "react-router-dom";
import employeeIcon from "../assets/employeeIcon.svg";

const NavElement = ({ navName, navIcon, navLink, onClick }) => {
    return (
        <Link to={navLink} className="nav-element" onClick={onClick}>
            <span className="circular-icon">
                <img src={employeeIcon} alt="" />
            </span>
            {navName}
        </Link>
    );
};

export default NavElement;
