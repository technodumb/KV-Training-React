import { useState } from "react";
import "./listEmployee.style.css";
import { Link, useOutletContext } from "react-router-dom";
import { FaRegTrashCan, FaPencil } from "react-icons/fa6";

const ListEmployee = () => {
    const [filter, setFilter] = useState("");
    const [listEmployee, setEmployeeList] = useOutletContext();

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

    const employeePropertyOrder = [
        "emp_name",
        "emp_id",
        "emp_join",
        "emp_role",
        "emp_status",
        "emp_exp",
    ];

    const statusPills = (status) => (
        <td className={"statusPill statusPill" + status}>{status}</td>
    );
    return (
        <div className="main-body">
            <section className="employee-section listEmployee-heading ">
                <h1>Employee list</h1>
                <div className="employee-filter">
                    Filter By
                    <select className="employee-filter-select">
                        <option hidden>Status</option>
                        <option>Probation</option>
                        <option>Active</option>
                        <option>Inactive</option>
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

            {/* <section className="employee-section"></section> */}
            <table className="employeeList-table">
                <thead>
                    <tr className="employeeList-row employeeList-tableHeading">
                        <th>Employee Name</th>
                        <th>Employee ID</th>
                        <th>Joining Date</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Experience</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listEmployee.map((employee) => {
                        return (
                            <tr
                                key={employee.emp_id}
                                className="employeeList-row employeeList-tableData"
                            >
                                {employeePropertyOrder.map((emp_prop, ind) => {
                                    return emp_prop == "emp_status" ? (
                                        statusPills(employee[emp_prop])
                                    ) : (
                                        <td key={employee.emp_id + ind}>
                                            {employee[emp_prop]}
                                        </td>
                                    );
                                })}
                                <td className="table-row-action">
                                    <FaRegTrashCan
                                        color="red"
                                        className="icon"
                                        onClick={() => {}}
                                    />
                                    <FaPencil
                                        color="#03aeed"
                                        className="icon"
                                        onClick={() => {}}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployee;
