import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import FormSelectItem from "./FormSelectItem";
import FormTextItem from "./FormTextItem";
import { useNavigate } from "react-router-dom";

const FormComponent = ({ setEmployeeList, employeeList, emp_id }) => {
    const fieldProps = [
        {
            label: "Employee Name",
            name: "emp_name",
            placeholder: "Employee Name",
        },
        {
            label: "Employee ID",
            name: "emp_id",
            placeholder: "Employee ID",
        },
        {
            label: "Joining Date",
            name: "emp_join",
            placeholder: "Joining Date",
            type: "date",
        },
        {
            name: "emp_dept",
            label: "Department",
            placeholder: "Choose Department",
            options: ["HR", "Engineering", "Security"],
        },
        {
            name: "emp_role",
            label: "Role",
            placeholder: "Choose Role",
            options: ["Developer", "Designer", "Dev-Ops", "Tester"],
        },
        {
            name: "emp_status",
            label: "Status",
            placeholder: "Choose Status",
            options: ["Active", "Inactive", "Probation"],
        },
        {
            name: "emp_exp",
            placeholder: "Experience (in years)",
            type: "number",
            label: "Experience",
        },
        {
            name: "emp_addr",
            placeholder: "Address",
            label: "Address",
        },
    ];

    const [formData, setFormData] = useState({
        emp_name: "",
        emp_id: Object.keys(employeeList).length + 1,
        emp_join: "",
        emp_role: "",
        emp_status: "",
        emp_exp: "",
        emp_addr: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (emp_id) {
            setFormData(employeeList[emp_id]);
        }
    }, [emp_id, employeeList]);

    const changeFormState = (formField, formFieldValue) => {
        setFormData({ ...formData, [formField]: formFieldValue });
    };

    const empNameRef = useRef();

    useEffect(() => {
        // empNameRef.current.focus();
        console.log(formData);
    }, [formData]);

    const handleOnSubmit = (e) => {
        // e.preventDefault();
        setEmployeeList({ ...employeeList, [formData.emp_id]: formData });
        navigate(-1);
    };

    return (
        <section className="employee-section">
            <form
                action="#"
                method="post"
                className="form-container"
                onSubmit={() => {}}
            >
                <div className="form-item-container">
                    {fieldProps.map((fieldProp) => {
                        {
                            /* if () return; */
                        }
                        return fieldProp.options ? (
                            <FormSelectItem
                                name={fieldProp.name}
                                label={fieldProp.label}
                                placeholder={fieldProp.placeholder}
                                options={fieldProp.options}
                                key={fieldProp.name}
                                changeState={(fieldValue) => {
                                    changeFormState(fieldProp.name, fieldValue);
                                }}
                                value={formData[fieldProp.name]}
                            />
                        ) : (
                            <FormTextItem
                                ref={
                                    fieldProp.name === "emp_name"
                                        ? empNameRef
                                        : undefined
                                }
                                name={fieldProp.name}
                                type={fieldProp.type || "text"}
                                label={fieldProp.label}
                                placeholder={fieldProp.placeholder}
                                key={fieldProp.name}
                                changeState={(fieldValue) => {
                                    changeFormState(fieldProp.name, fieldValue);
                                }}
                                disabled={
                                    fieldProp.name == "emp_id"
                                        ? !emp_id
                                            ? "hidden"
                                            : "disabled"
                                        : ""
                                }
                                value={formData[fieldProp.name]}
                            />
                        );
                    })}
                </div>

                <div className="form-button-container">
                    <Button
                        isPrimary={true}
                        onClick={handleOnSubmit}
                        type="submit"
                    >
                        {emp_id ? "Update" : "Create"}
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("../list");
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </section>
    );
};

export default FormComponent;
