import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StatusPill from "./StatusPill";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import DeleteEmployeeModal from "../modals/deleteEmployeeModal";
import { useDispatch } from "react-redux";
import { useDeleteEmployeeMutation } from "../pages/employees/api";
import { v4 } from "uuid";
import { addError } from "../store/toastReducer";
// import { deleteEmployee } from "../store/employeeReducer";

const EmployeeListRow = ({ emp_id, employee, disableAction }) => {
    const employeePropertyOrder = [
        "emp_name",
        "emp_id",
        "emp_join",
        "emp_role",
        "emp_status",
        "emp_exp",
    ];

    const [userDelete, setUserDelete] = useState(false);
    // const dispatch = useDispatch();
    const [deleteEmployee, { data, error, isSuccess, isError }] =
        useDeleteEmployeeMutation();

    const dispatch = useDispatch();
    useEffect(() => {
        if (isError) {
            dispatch(
                addError({
                    id: v4(),
                    status: "error",
                    active: true,
                    message: error.data.error,
                })
            );
            setUserDelete(false);
        }
    }, [isError, error, dispatch]);
    const navigate = useNavigate();
    return (
        <>
            <Link to={"../../employee/details/" + emp_id}>
                <div
                    className={
                        "employeeList-row employeeList-tableData " +
                        (disableAction ? "employeeList-row-noAction" : "")
                    }
                >
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
                    {!disableAction && (
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
                                    navigate("../../employee/edit/" + emp_id);
                                }}
                            >
                                <FaPencil color="#03aeed" className="icon" />
                            </span>
                        </span>
                    )}
                </div>
            </Link>
            {userDelete ? (
                <DeleteEmployeeModal
                    deleteEmployee={() => {
                        console.log("hello");
                        console.log(emp_id);
                        deleteEmployee(emp_id);
                    }}
                    cancel={() => setUserDelete(false)}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default EmployeeListRow;
