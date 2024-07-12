import logo from "../assets/kvLogo.png";
import { Outlet, useNavigate } from "react-router-dom";
import NavElement from "../components/NavElement";
import { useEffect, useState } from "react";

const EmployeeLayout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const [employeeList, setEmployeeList] = useState({
        1: {
            emp_name: "Alnas Kabeer",
            emp_id: "1",
            emp_join: "12.04.2021",
            emp_role: "Full Stack",
            emp_status: "Probation",
            emp_exp: "5",
            emp_addr: "Alnaskabeer.address where he lives",
        },
        2: {
            emp_name: "One Day",
            emp_id: "2",
            emp_join: "13.04.2021",
            emp_role: "Full Stack",
            emp_status: "Active",
            emp_exp: "3",
            emp_addr: "onday.address where he lives",
        },
        3: {
            emp_name: "Alnas Kabeer",
            emp_id: "3",
            emp_join: "12.04.2021",
            emp_role: "Full Stack",
            emp_status: "Probation",
            emp_exp: "5",
            emp_addr: "Alnaskabeer.address where he lives",
        },
        4: {
            emp_name: "One Day",
            emp_id: "4",
            emp_join: "13.04.2021",
            emp_role: "Full Stack",
            emp_status: "Active",
            emp_exp: "3",
            emp_addr: "onday.address where he lives",
        },
        5: {
            emp_name: "Alnas Kabeer",
            emp_id: "5",
            emp_join: "12.04.2021",
            emp_role: "Full Stack",
            emp_status: "Probation",
            emp_exp: "5",
            emp_addr: "Alnaskabeer.address where he lives",
        },
        6: {
            emp_name: "One Day",
            emp_id: "6",
            emp_join: "13.04.2021",
            emp_role: "Full Stack",
            emp_status: "Active",
            emp_exp: "3",
            emp_addr: "onday.address where he lives",
        },
        7: {
            emp_name: "Alnas Kabeer",
            emp_id: "7",
            emp_join: "12.04.2021",
            emp_role: "Full Stack",
            emp_status: "Probation",
            emp_exp: "5",
            emp_addr: "Alnaskabeer.address where he lives",
        },
        8: {
            emp_name: "One Day",
            emp_id: "8",
            emp_join: "13.04.2021",
            emp_role: "Full Stack",
            emp_status: "Active",
            emp_exp: "3",
            emp_addr: "onday.address where he lives",
        },
        9: {
            emp_name: "Alnas Kabeer",
            emp_id: "9",
            emp_join: "12.04.2021",
            emp_role: "Full Stack",
            emp_status: "Probation",
            emp_exp: "5",
            emp_addr: "Alnaskabeer.address where he lives",
        },
        10: {
            emp_name: "One Day",
            emp_id: "10",
            emp_join: "13.04.2021",
            emp_role: "Full Stack",
            emp_status: "Active",
            emp_exp: "3",
            emp_addr: "onday.address where he lives",
        },
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
                <Outlet context={[employeeList, setEmployeeList]} />
            </main>
        </div>
    );
};

export default EmployeeLayout;
