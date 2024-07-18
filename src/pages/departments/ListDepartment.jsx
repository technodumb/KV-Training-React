import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetDepartmentListQuery } from "./api";
import { departmentAttributeMap } from "../../utils/departmentAttributeMap";
import "./ListDepartment.style.scss";
import EmployeeListRow from "../../components/EmployeeListRow";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";

const ListDepartment = () => {
    const [departments, setDepartments] = useState([]);
    // const [statusFilter, setStatusFilter] = useState("");
    // const handleChangeStatusFilter = (e) => {
    //     const newStatusFilter =
    //         e.target.value == "Status" ? "" : e.target.value;

    //     setStatusFilter(newStatusFilter);
    // };
    const { data = [], isSuccess } = useGetDepartmentListQuery();

    useEffect(() => {
        if (isSuccess) {
            console.log(data);
            const departments = data.map(departmentAttributeMap);
            console.log(departments);
            setDepartments(departments);
        }
    }, [isSuccess, data]);

    const departmentPropertyOrder = ["dept_id", "dept_name"];
    // console.log(data);
    return (
        <div className="main-body listEntity-main-body">
            <section className="employee-section listEmployee-heading ">
                <h1>Department list</h1>

                <Link className="employee-create" to="/employee/create">
                    <span className="employee-create-plus">+</span>
                    <span className="employee-create-text">
                        Create Department
                    </span>
                </Link>
            </section>

            <section className="employeeList">
                <div className="employeeList-table">
                    {/* <thead> */}
                    <div className="entityList-row employeeList-tableHeading">
                        <span>Department ID</span>
                        <span>Department Name</span>
                        {/* <span></span> */}
                        <span>Action</span>
                    </div>
                    {/* </thead> */}
                    <div className="employeeList-tableBody">
                        {departments.map((department) => {
                            console.log(department);
                            return (
                                <Link
                                    to={"../details/" + department.dept_id}
                                    key={department.name}
                                >
                                    {/* <> */}
                                    <div className="entityList-row employeeList-tableData">
                                        {departmentPropertyOrder.map(
                                            (dept_prop) => {
                                                let value =
                                                    department[dept_prop];
                                                return (
                                                    <span
                                                        key={
                                                            department.dept_name +
                                                            dept_prop
                                                        }
                                                    >
                                                        {value}
                                                    </span>
                                                );
                                            }
                                        )}
                                        <span className="table-row-action">
                                            <span
                                                className="table-row-action-button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    // setUserDelete(true);
                                                }}
                                            >
                                                <FaRegTrashCan
                                                    color="red"
                                                    className="icon"
                                                />
                                            </span>
                                            <span
                                                className="table-row-action-button"
                                                // to={"../edit/" + emp_id}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    // navigate(
                                                    //     "../edit/" + emp_id
                                                    // );
                                                }}
                                            >
                                                <FaPencil
                                                    color="#03aeed"
                                                    className="icon"
                                                />
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ListDepartment;

{
    /* {userDelete ? (
                                        <DeleteEmployeeModal
                                            deleteEmployee={() => {
                                                console.log("hello");
                                                console.log(emp_id);
                                                deleteEmployee(emp_id);
                                                // dispatch({
                                                //     type: actionTypes.DELETE_EMPLOYEE,
                                                //     payload: emp_id,
                                                // });
                                                // dispatch(deleteEmployee({ emp_id: emp_id }));
                                            }}
                                            cancel={() => setUserDelete(false)}
                                        />
                                    ) : (
                                        ""
                                    )} */
}
{
    /* </> */
}
{
    /* ); */
}
