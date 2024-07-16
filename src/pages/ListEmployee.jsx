import "./listEmployee.style.css";
import { Link } from "react-router-dom";
import EmployeeListRow from "../components/EmployeeListRow";
import { useDispatch } from "react-redux";
import { changeStatusFilter } from "../store/employeeReducer";
import { useSelector } from "react-redux";

const ListEmployee = () => {
    // const [filter, setFilter] = useState("");
    const dispatch = useDispatch();
    const handleChangeStatusFilter = (e) => {
        // dispatch({
        //     type: actionTypes.CHANGE_FILTER,
        //     payload: e.target.value == "Status" ? "" : e.target.value,
        // });
        dispatch(
            changeStatusFilter({
                statusFilter: e.target.value == "Status" ? "" : e.target.value,
            })
        );
    };
    const employees = useSelector((state) => state.employees.employees);
    const statusFilter = useSelector((state) => state.employees.statusFilter);
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
