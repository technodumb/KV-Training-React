import logo from "../assets/kvLogo.png";
import { Outlet, useNavigate } from "react-router-dom";
import NavElement from "../components/NavElement";
import { useEffect, useState } from "react";

const EmployeeLayout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        if (!token || token !== "true") {
            navigate("/");
        }
    }, [navigate, token]);

    useEffect(() => {
        console.log(employeeList);
    }, [employeeList]);

    return (
        <div className="page">
            <header className="page-header">
                <span className="logo-holder">
                    <img src={logo} alt="KeyValue Systems" />
                </span>
            </header>
            <main className="createEmployee-main">
                <aside className="sidebar">
                    <nav className="sidebar-nav">
                        <NavElement navName="List Employees" navLink="list" />
                        <NavElement
                            navName="Create Employee"
                            navLink="create"
                        />
                        <NavElement
                            navName="Logout"
                            onClick={() => localStorage.removeItem("token")}
                        />
                    </nav>
                </aside>
                <Outlet context={[employeeList, setEmployeeList]} />
            </main>
        </div>
    );
};

export default EmployeeLayout;
