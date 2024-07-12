import { useState } from "react";
import "./detailsEmployee.style.css";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import StatusPill from "../components/StatusPill";
import EmployeeDetailUnit from "../components/EmployeeDetailUnit";

const DetailsEmployee = () => {
    const [employeeList, setEmployeeList] = useOutletContext();
    const { emp_id } = useParams();
    const employee = employeeList[emp_id];
    const employeeDetailProps = [
        { name: "emp_name", title: "Employee Name" },
        { name: "emp_join", title: "Joining Date" },
        { name: "emp_exp", title: "Experience" },
        { name: "emp_role", title: "Role" },
        { name: "emp_status", title: "Status" },
        { name: "emp_dept", title: "Department" },
        { name: "emp_addr", title: "Address" },
        { name: "emp_id", title: "Employee ID" },
    ];

    return (
        <div className="main-body">
            <section className="employee-section detailsEmployee-heading ">
                <h1>Employee Details</h1>

                <Link
                    className="employee-create"
                    to={`/employee/edit/${emp_id}`}
                >
                    <span className="employee-details-pencil">
                        <FaPencil />
                    </span>
                    <span className="employee-create-text">Edit</span>
                </Link>
            </section>
            <section className="employee-section detailsEmployee-details">
                {employeeDetailProps.map((employeeDetailProp) => (
                    <EmployeeDetailUnit
                        key={employeeDetailProp.name}
                        name={employeeDetailProp.name}
                        title={employeeDetailProp.title}
                        value={employee[employeeDetailProp.name]}
                    />
                ))}
            </section>
        </div>
    );
};

export default DetailsEmployee;
