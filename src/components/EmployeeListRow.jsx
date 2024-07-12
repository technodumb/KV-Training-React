import React from "react";
import { Link } from "react-router-dom";
import StatusPill from "./StatusPill";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";

const EmployeeListRow = ({
    emp_id,
    employee,
    setEmployeeList,
    employeeList,
}) => {
    const employeePropertyOrder = [
        "emp_name",
        "emp_id",
        "emp_join",
        "emp_role",
        "emp_status",
        "emp_exp",
    ];

    return (
        <Link to={"../details/" + emp_id}>
            <tr className="employeeList-row employeeList-tableData">
                {employeePropertyOrder.map((emp_prop) => {
                    let value = employee[emp_prop];
                    if (emp_prop === "emp_exp") value += " Years";
                    return emp_prop == "emp_status" ? (
                        <StatusPill status={value} emp_id={employee.emp_id} />
                    ) : (
                        <td key={emp_id + emp_prop}>{value}</td>
                    );
                })}
                <td className="table-row-action">
                    <Link
                        onClick={() =>
                            setEmployeeList({
                                ...employeeList,
                                [emp_id]: {
                                    ...employee,
                                    deleted: true,
                                },
                            })
                        }
                    >
                        <FaRegTrashCan color="red" className="icon" />
                    </Link>
                    <Link to={"../edit/" + employee.emp_id}>
                        <FaPencil color="#03aeed" className="icon" />
                    </Link>
                </td>
            </tr>
        </Link>
    );
};

export default EmployeeListRow;
