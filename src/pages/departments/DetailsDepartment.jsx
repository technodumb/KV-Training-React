import "./detailsDepartment.style.scss";
import { Link, useParams } from "react-router-dom";
import { useGetDepartmentDetailsQuery } from "./api";
import { useEffect, useState } from "react";
import { departmentAttributeMap } from "../../utils/departmentAttributeMap";
// import EmployeeListRow from "../../components/EmployeeListRow";
import { employeeAttributeMap } from "../../utils/employeeAttributeMap";
import EmployeeListRow from "../../components/EmployeeListRow";
import { FaPencil } from "react-icons/fa6";

const DetailsDepartment = () => {
    const { dept_id } = useParams();
    const [department, setDepartment] = useState({});
    // console.log(dept_id);
    // const employee = employeeList[emp_id];
    // const employees = useSelector((state) => state.employees.employees);
    // const employee = employees.find((employee) => {
    //     console.log(emp_id);
    //     console.log(employee.emp_id);
    //     console.log(employee);
    //     return employee.emp_id === emp_id;
    // });
    // console.log(employee);
    const { data, isSuccess } = useGetDepartmentDetailsQuery(dept_id);

    useEffect(() => {
        if (isSuccess) {
            console.log(departmentAttributeMap(data));
            setDepartment(departmentAttributeMap(data));
        }
    }, [data, isSuccess]);

    const departmentDetailProps = [
        { name: "dept_id", title: "Employee ID" },
        { name: "dept_name", title: "Department Name" },
    ];

    return (
        <div className="main-body">
            <section className="employee-section detailsEmployee-heading ">
                <h1>{`${department.dept_name} Department`}</h1>

                <Link
                    className="employee-create"
                    to={`/employee/edit/${dept_id}`}
                >
                    <span className="employee-details-pencil">
                        <FaPencil />
                    </span>
                    <span className="employee-create-text">Edit</span>
                </Link>
            </section>
            <section className="employeeList department-employeeList">
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
                        {department.dept_employees &&
                            department.dept_employees.map(
                                (unmappedEmployee) => {
                                    const employee = employeeAttributeMap(
                                        unmappedEmployee,
                                        department.dept_name
                                    );

                                    console.log(unmappedEmployee);

                                    return (
                                        <EmployeeListRow
                                            key={employee.emp_id}
                                            emp_id={employee.emp_id}
                                            employee={employee}
                                        />
                                    );
                                }
                            )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailsDepartment;
