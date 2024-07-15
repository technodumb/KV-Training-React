import { useState, useRef, useEffect } from "react";

import FormTextItem from "../components/FormTextItem";
import "./createEmployee.style.css";
import FormSelectItem from "../components/FormSelectItem";
import Button from "../components/Button";
import { useNavigate, useOutlet, useOutletContext } from "react-router-dom";
import FormComponent from "../components/FormComponent";

const CreateEmployee = () => {
    const { state, dispatch } = useOutletContext();
    return (
        <div className="main-body">
            <section
                className="employee-section heading"
                style={{ textAlign: "left" }}
            >
                <h1>Create Employee</h1>
            </section>

            <FormComponent state={state} dispatch={dispatch} />
        </div>
    );
};

export default CreateEmployee;
