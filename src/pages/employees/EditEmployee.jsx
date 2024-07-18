    import "./createEmployee.style.css";
import { useParams } from "react-router-dom";
import FormComponent from "../../components/FormComponent";
import { useGetEmployeeDetailsQuery, useUpdateEmployeeMutation } from "./api";
// import { useEffect } from "react";

const EditEmployee = () => {
    const { emp_id } = useParams();
    const [updateEmployee] = useUpdateEmployeeMutation();

    const { data: employee, isSuccess } = useGetEmployeeDetailsQuery(
        parseInt(emp_id)
    );

    return (
        <div className="main-body">
            <section
                className="employee-section heading"
                style={{ textAlign: "left" }}
            >
                <h1>Edit Employee</h1>
            </section>

            <FormComponent
                employee={isSuccess ? employee : null}
                submitAction={updateEmployee}
            />
        </div>
    );
};

export default EditEmployee;
