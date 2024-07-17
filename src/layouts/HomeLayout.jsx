import logo from "../assets/kvLogo.png";
import { Outlet, useNavigate } from "react-router-dom";
import NavElement from "../components/NavElement";
import { useEffect, useReducer } from "react";
import toastReducer from "../store/toastReducer";
import { useSelector } from "react-redux";
import Toast from "../modals/customToast";

const HomeLayout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const toastMessages = useSelector((state) => state.toasts.errors);

    console.log(toastMessages);

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [navigate, token]);

    return (
        <div className="page">
            <div className="toastContainer">
                {toastMessages && toastMessages.length
                    ? toastMessages.map((toastMessage, ind) => (
                          <Toast
                              key={toastMessage.id}
                              id={toastMessage.id}
                              // active={toastMessage.active}
                              message={toastMessage.message}
                              status={toastMessage.status}
                          />
                      ))
                    : ""}
            </div>
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

export default HomeLayout;
