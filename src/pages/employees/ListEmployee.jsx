import "./listEmployee.style.css";
import { Link } from "react-router-dom";
import EmployeeListRow from "../../components/EmployeeListRow";
import { useGetEmployeeListQuery } from "./api";
import { useEffect, useState } from "react";
import { employeeAttributeMap } from "../../utils/employeeAttributeMap";

const ListEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const [statusFilter, setStatusFilter] = useState("");
    const handleChangeStatusFilter = (e) => {
        const newStatusFilter =
            e.target.value == "Status" ? "" : e.target.value;

        setStatusFilter(newStatusFilter);
    };
    const { data = [], isSuccess } = useGetEmployeeListQuery();

    useEffect(() => {
        if (isSuccess) {
            console.log(data);
            const employees = data.map(employeeAttributeMap);
            setEmployees(employees);
        }
    }, [isSuccess, data]);


    console.log(data);
    return (
        <div className="main-body listEmployee-main-body">
            <section className="employee-section listEmployee-heading ">
                <h1>Employee list</h1>
                <div className="employee-filter">
                    Filter By
                    <select
                        className="employee-filter-select"
                        onChange={handleChangeStatusFilter}
                    >
                        <option>Status</option>
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
                        {employees.map((employee) => {
                            if (
                                statusFilter != "" &&
                                employee.emp_status != statusFilter
                            )
                                return;

                            return (
                                <EmployeeListRow
                                    key={employee.emp_id}
                                    emp_id={employee.emp_id}
                                    employee={employee}
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
