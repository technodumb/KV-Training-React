import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import FormSelectItem from "./FormSelectItem";
import FormTextItem from "./FormTextItem";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../store/employeeReducer";
import { useSelector } from "react-redux";

const FormComponent = ({ emp_id }) => {
    const employees = useSelector((state) => state.employees.employees);
    const dispatch = useDispatch();
    // const emp = [];
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
        emp_id: uuidv4(),
        emp_join: "",
        emp_role: "",
        emp_status: "",
        emp_exp: "",
        emp_addr: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (emp_id) {
            // setFormData(state);
            const employee = employees.find(
                (employee) => employee.emp_id === emp_id
            );
            setFormData(employee);
        }
    }, [emp_id, employees]);

    const changeFormState = (formField, formFieldValue) => {
        setFormData({ ...formData, [formField]: formFieldValue });
    };

    const empNameRef = useRef();

    useEffect(() => {
        // empNameRef.current.focus();
        console.log(formData);
    }, [formData]);

    const handleOnSubmit = (e) => {
        if (emp_id) {
            dispatch(updateEmployee({ updatedEmployee: formData }));
        } else {
            dispatch(addEmployee({ newEmployee: formData }));
        }
        navigate(-1);
    };

    return (
        <section className="employee-section">
            <form className="form-container">
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
                        type="button"
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
