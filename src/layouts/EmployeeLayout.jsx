import logo from "../assets/kvLogo.png";
import { Outlet, useNavigate } from "react-router-dom";
import NavElement from "../components/NavElement";
import { useEffect, useReducer } from "react";
import reducer from "../store/useReducer";
import employeeList from "../store/dummyData";

const EmployeeLayout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [state, dispatch] = useReducer(reducer, {
        employees: employeeList,
        statusFilter: "",
    });

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
                <Outlet context={{ state, dispatch }} />
            </main>
        </div>
    );
};

export default EmployeeLayout;
