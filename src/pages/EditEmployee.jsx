import "./createEmployee.style.css";
import { useOutletContext, useParams } from "react-router-dom";
import FormComponent from "../components/FormComponent";

const EditEmployee = () => {
    const { emp_id } = useParams();
    const { state, dispatch } = useOutletContext();

    return (
        <div className="main-body">
            <section
                className="employee-section heading"
                style={{ textAlign: "left" }}
            >
                <h1>Edit Employee</h1>
            </section>

            <FormComponent state={state} dispatch={dispatch} emp_id={emp_id} />
        </div>
    );
};

export default EditEmployee;
