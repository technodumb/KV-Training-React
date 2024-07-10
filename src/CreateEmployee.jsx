import { useState, useRef, useEffect } from "react";

import FormTextItem from "./components/FormTextItem";
import "./createEmployeeStyle.css";
import logo from "./assets/kvLogo.png";
import employeeIcon from "./assets/employeeIcon.svg";
import FormSelectItem from "./components/FormSelectItem";
import Button from "./components/Button";

const CreateEmployee = () => {
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
            options: ["Active", "Inactive"],
        },
        {
            name: "emp_exp",
            placeholder: "Experience",
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
        emp_id: "",
        emp_join: "",
        emp_role: "",
        emp_status: "",
        emp_exp: "",
        emp_addr: "",
    });

    const changeFormState = (formField, formFieldValue) => {
        setFormData({ ...formData, [formField]: formFieldValue });
    };

    const empNameRef = useRef();

    useEffect(() => {
        empNameRef.current.focus();
    }, []);

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <div className="page">
            <header className="page-header">
                <span className="logo-holder">
                    <img src={logo} alt="KeyValue Systems" />
                </span>
            </header>
            <main className="createEmployee-main">
                <aside className="sidebar">
                    <nav>
                        <a href="#" className="nav-element">
                            <span className="circular-icon">
                                <img src={employeeIcon} alt="" />
                            </span>
                            <span> Employee List </span>
                        </a>
                    </nav>
                </aside>

                <div className="main-body">
                    <section
                        className="createEmployee-section heading"
                        style={{ textAlign: "left" }}
                    >
                        <h1>Create Employee</h1>
                    </section>

                    <section className="createEmployee-section">
                        <form action="" className="form-container">
                            <div className="form-item-container">
                                {fieldProps.map((fieldProp) => {
                                    return fieldProp.options ? (
                                        <FormSelectItem
                                            name={fieldProp.name}
                                            label={fieldProp.label}
                                            placeholder={fieldProp.placeholder}
                                            options={fieldProp.options}
                                            key={fieldProp.name}
                                            changeState={(fieldValue) => {
                                                changeFormState(
                                                    fieldProp.name,
                                                    fieldValue
                                                );
                                            }}
                                        />
                                    ) : (
                                        <FormTextItem
                                            ref={
                                                fieldProp.name === "emp_name"
                                                    ? empNameRef
                                                    : undefined
                                            }
                                            name={fieldProp.name}
                                            type="text"
                                            label={fieldProp.label}
                                            placeholder={fieldProp.placeholder}
                                            key={fieldProp.name}
                                            changeState={(fieldValue) => {
                                                changeFormState(
                                                    fieldProp.name,
                                                    fieldValue
                                                );
                                            }}
                                            value={formData[fieldProp.name]}
                                        />
                                    );
                                })}
                            </div>

                            <div className="form-button-container">
                                <Button isPrimary={true}>Create</Button>
                                <Button>Cancel</Button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default CreateEmployee;
