import React, { useEffect, useState } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DeleteDepartmentModal from "../modals/deleteDepartmentModal";
import {
    useDeleteDepartmentMutation,
    useUpdateDepartmentMutation,
} from "../pages/departments/api";
import { useDispatch } from "react-redux";
import { addError } from "../store/toastReducer";
import { v4 } from "uuid";
import CreateUpdateDepartmentModal from "../modals/createDepartmentModel";

const DepartmentListRow = ({ dept_id, department }) => {
    const departmentPropertyOrder = ["dept_id", "dept_name"];
    const [showDeleteDepartmentModal, setShowDeleteDepartmentModal] =
        useState(false);

    const [
        deleteDepartment,
        {
            data: deleteData,
            isSuccess: deleteIsSuccess,
            isError: deleteIsError,
            error: deleteError,
        },
    ] = useDeleteDepartmentMutation();

    const [
        updateDepartment,
        {
            data: updateData,
            isSuccess: updateIsSuccess,
            isError: updateIsError,
            error: updateError,
        },
    ] = useUpdateDepartmentMutation();
    const [showUpdateDepartmentModal, setShowUpdateDepartmentModal] =
        useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (deleteIsError) {
            // console.log(error);
            dispatch(
                addError({
                    id: v4(),
                    status: "error",
                    active: true,
                    message: deleteError.data.error,
                })
            );
            setShowDeleteDepartmentModal(false);
        }
        if (updateIsError) {
            dispatch(
                addError({
                    id: v4(),
                    status: "error",
                    active: true,
                    message: updateError.data.error,
                })
            );
        }
    }, [deleteError, deleteIsError, dispatch, updateError, updateIsError]);

    return (
        <>
            <Link to={"../details/" + department.dept_id}>
                {/* <> */}
                <div className="entityList-row employeeList-tableData">
                    {departmentPropertyOrder.map((dept_prop) => {
                        let value = department[dept_prop];
                        return (
                            <span key={department.dept_name + dept_prop}>
                                {value}
                            </span>
                        );
                    })}
                    <span className="table-row-action">
                        <span
                            className="table-row-action-button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                // setUserDelete(true);
                                setShowDeleteDepartmentModal(true);
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
                                setShowUpdateDepartmentModal(true);
                                // navigate(
                                //     "../edit/" + emp_id
                                // );
                            }}
                        >
                            <FaPencil color="#03aeed" className="icon" />
                        </span>
                    </span>
                </div>
            </Link>
            {showDeleteDepartmentModal && (
                <DeleteDepartmentModal
                    cancel={() => {
                        setShowDeleteDepartmentModal(false);
                    }}
                    deleteDepartment={() => deleteDepartment(dept_id)}
                />
            )}
            {showUpdateDepartmentModal && (
                <CreateUpdateDepartmentModal
                    cancel={() => setShowUpdateDepartmentModal(false)}
                    updateDepartment={(name) =>
                        updateDepartment({
                            id: parseInt(dept_id),
                            name,
                        })
                    }
                />
            )}
        </>
    );
};

export default DepartmentListRow;
