import "./createEmployee.style.css";
import FormComponent from "../../components/FormComponent";
import { useAddEmployeeMutation } from "./api";

const CreateEmployee = () => {
    const [
        addEmployee,
        { error: addEmployeeError, isError: addEmployeeIsError },
    ] = useAddEmployeeMutation();
    return (
        <div className="main-body">
            <section
                className="employee-section heading"
                style={{ textAlign: "left" }}
            >
                <h1>Create Employee</h1>
            </section>

            <FormComponent submitAction={addEmployee} />
        </div>
    );
};

export default CreateEmployee;
