import logo from "../assets/kvLogo.png";
import { Outlet, useNavigate } from "react-router-dom";
import NavElement from "../components/NavElement";
import { useEffect } from "react";

const EmployeeLayout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token || token !== "true") {
            navigate("/");
        }
    }, [navigate, token]);

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
                <Outlet />
            </main>
        </div>
    );
};

export default EmployeeLayout;
