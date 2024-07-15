import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StatusPill from "./StatusPill";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import DeleteEmployeeModal from "../modals/deleteEmployeeModal";

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

    const [userDelete, setUserDelete] = useState(false);

    const navigate = useNavigate();
    return (
        <>
            <Link to={"../details/" + emp_id}>
                <div className="employeeList-row employeeList-tableData">
                    {employeePropertyOrder.map((emp_prop) => {
                        let value = employee[emp_prop];
                        if (emp_prop === "emp_exp") value += " Years";
                        return emp_prop == "emp_status" ? (
                            <StatusPill
                                key={emp_id + emp_prop}
                                status={value}
                                emp_id={emp_id}
                            />
                        ) : (
                            <span key={emp_id + emp_prop}>{value}</span>
                        );
                    })}
                    <span className="table-row-action">
                        <span
                            className="table-row-action-button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setUserDelete(true);
                            }}
                        >
                            <FaRegTrashCan color="red" className="icon" />
                        </span>
                        <span
                            className="table-row-action-button"
                            // to={"../edit/" + emp_id}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                navigate("../edit/" + emp_id);
                            }}
                        >
                            <FaPencil color="#03aeed" className="icon" />
                        </span>
                    </span>
                </div>
            </Link>
            {userDelete ? (
                <DeleteEmployeeModal
                    deleteEmployee={() =>
                        setEmployeeList({
                            ...employeeList,
                            [emp_id]: {
                                ...employee,
                                deleted: true,
                            },
                        })
                    }
                    cancel={() => setUserDelete(false)}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default EmployeeListRow;
