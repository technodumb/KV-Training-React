import "./createEmployee.style.css";
import { useParams } from "react-router-dom";
import FormComponent from "../components/FormComponent";

const EditEmployee = () => {
    const { emp_id } = useParams();

    return (
        <div className="main-body">
            <section
                className="employee-section heading"
                style={{ textAlign: "left" }}
            >
                <h1>Edit Employee</h1>
            </section>

            <FormComponent emp_id={emp_id} />
        </div>
    );
};

export default EditEmployee;
