import { useState } from "react";
import "./listEmployee.style.css";
import { Link, useOutletContext } from "react-router-dom";
import { FaRegTrashCan, FaPencil } from "react-icons/fa6";
import StatusPill from "../components/StatusPill";
import EmployeeDetailUnit from "../components/EmployeeDetailUnit";
import EmployeeListRow from "../components/EmployeeListRow";
import DeleteEmployeeModal from "../modals/deleteEmployeeModal";

const ListEmployee = () => {
    const [filter, setFilter] = useState("");
    const [employeeList, setEmployeeList] = useOutletContext();

    // const sampleEmployees = [
    //     {
    //         emp_name: "Alnas Kabeer",
    //         emp_id: "alnaskabeer",
    //         emp_join: "12.04.2021",
    //         emp_role: "Full Stack",
    //         emp_status: "Probation",
    //         emp_exp: "5 Years",
    //         emp_addr: "Alnaskabeer.address where he lives",
    //     },
    //     {
    //         emp_name: "One Day",
    //         emp_id: "oneday",
    //         emp_join: "13.04.2021",
    //         emp_role: "Full Stack",
    //         emp_status: "Active",
    //         emp_exp: "3 Years",
    //         emp_addr: "onday.address where he lives",
    //     },
    // ];

    return (
        <div className="main-body listEmployee-main-body">
            <section className="employee-section listEmployee-heading ">
                <h1>Employee list</h1>
                <div className="employee-filter">
                    Filter By
                    <select className="employee-filter-select">
                        <option hidden>Status</option>
                        <option>Probation</option>
                        <option>Active </option>
                        <option>Inactive </option>
                    </select>
                    {/* <span
                        className="employee-filter-clear"
                        onClick={() => setFilter("")}
                    >
                        x
                    </span> */}
                </div>

                <Link className="employee-create" to="/employee/create">
                    <span className="employee-create-plus">+</span>
                    <span className="employee-create-text">
                        Create Employee
                    </span>
                </Link>
            </section>

            <section className="employeeList">
                <div className="employeeList-table">
                    {/* <thead> */}
                    <div className="employeeList-row employeeList-tableHeading">
                        <span>Employee Name</span>
                        <span>Employee ID</span>
                        <span>Joining Date</span>
                        <span>Role</span>
                        <span>Status</span>
                        <span>Experience</span>
                        <span>Action</span>
                    </div>
                    {/* </thead> */}
                    <div className="employeeList-tableBody">
                        {Object.keys(employeeList).map((emp_id) => {
                            const employee = employeeList[emp_id];
                            if (employee.deleted) return;
                            return (
                                <EmployeeListRow
                                    key={emp_id}
                                    emp_id={emp_id}
                                    employee={employee}
                                    setEmployeeList={setEmployeeList}
                                    employeeList={employeeList}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ListEmployee;
