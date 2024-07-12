import { useState, useRef, useEffect } from "react";

import FormTextItem from "../components/FormTextItem";
import "./createEmployee.style.css";
import FormSelectItem from "../components/FormSelectItem";
import Button from "../components/Button";
import {
    useNavigate,
    useOutlet,
    useOutletContext,
    useParams,
} from "react-router-dom";
import FormComponent from "../components/FormComponent";

const EditEmployee = () => {
    const [employeeList, setEmployeeList] = useOutletContext();
    const { emp_id } = useParams();

    return (
        <div className="main-body">
            <section
                className="employee-section heading"
                style={{ textAlign: "left" }}
            >
                <h1>Edit Employee</h1>
            </section>

            <FormComponent
                employeeList={employeeList}
                setEmployeeList={setEmployeeList}
                emp_id={emp_id}
            />
        </div>
    );
};

export default EditEmployee;
