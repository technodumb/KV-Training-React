
import "./createEmployee.style.css";
import FormComponent from "../components/FormComponent";

const CreateEmployee = () => {
    return (
        <div className="main-body">
            <section
                className="employee-section heading"
                style={{ textAlign: "left" }}
            >
                <h1>Create Employee</h1>
            </section>

            <FormComponent />
        </div>
    );
};

export default CreateEmployee;
