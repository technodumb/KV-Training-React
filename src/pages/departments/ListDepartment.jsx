import { useEffect, useState } from "react";
import { useGetDepartmentListQuery } from "./api";
import { departmentAttributeMap } from "../../utils/departmentAttributeMap";
import "./ListDepartment.style.scss";
import CreateUpdateDepartmentModal from "../../modals/createDepartmentModel";
import DepartmentListRow from "../../components/DepartmentListRow";

const ListDepartment = () => {
    const [departments, setDepartments] = useState([]);
    const [showCreateDepartmentModal, setShowCreateDepartmentModal] =
        useState(false);

    const { data = [], isSuccess } = useGetDepartmentListQuery();

    useEffect(() => {
        if (isSuccess) {
            console.log(data);
            const departments = data.map(departmentAttributeMap);
            console.log(departments);
            setDepartments(departments);
        }
    }, [isSuccess, data]);

    // console.log(data);
    return (
        <>
            {showCreateDepartmentModal && (
                <CreateUpdateDepartmentModal
                    cancel={() => setShowCreateDepartmentModal(false)}
                />
            )}

            <div className="main-body listEntity-main-body">
                <section className="employee-section listEmployee-heading ">
                    <h1>Department list</h1>

                    <div
                        className="employee-create"
                        onClick={() => setShowCreateDepartmentModal(true)}
                    >
                        <span className="employee-create-plus">+</span>
                        <span className="employee-create-text">
                            Create Department
                        </span>
                    </div>
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
                                    <DepartmentListRow
                                        key={department.dept_name}
                                        department={department}
                                        dept_id={department.dept_id}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ListDepartment;
