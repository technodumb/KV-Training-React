import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import FormSelectItem from "./FormSelectItem";
import FormTextItem from "./FormTextItem";
import { useNavigate } from "react-router-dom";
import {
    useAddEmployeeMutation,
    useDeleteEmployeeMutation,
    useGetEmployeeDetailsQuery,
    useUpdateEmployeeMutation,
} from "../pages/employees/api";
import {
    employeeAttributeMap,
    employeeAttributeReverseMap,
} from "../utils/employeeAttributeMap";

const FormComponent = ({ emp_id }) => {
    const emp_id_int = parseInt(emp_id);
    const {
        data: getEmployeeData,
        error: getEmployeeError,
        isError: getEmployeeIsError,
        isSuccess: getEmployeeIsSuccess,
    } = useGetEmployeeDetailsQuery(emp_id);
    const [
        addEmployee,
        { error: addEmployeeError, isError: addEmployeeIsError },
    ] = useAddEmployeeMutation();
    const [
        updateEmployee,
        { error: updateEmployeeError, isError: updateEmployeeIsError },
    ] = useUpdateEmployeeMutation();

    const fieldProps = [
        {
            label: "Employee Name",
            name: "emp_name",
            placeholder: "Employee Name",
        },

        {
            label: "Employee Email",
            name: "emp_email",
            placeholder: "Employee Email",
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
            options: ["UI", "UX", "Developer", "HR"],
        },
        {
            name: "emp_status",
            label: "Status",
            placeholder: "Choose Status",
            options: ["Active", "Inactive", "Probation"],
        },
        {
            label: "Employee Age",
            name: "emp_age",
            placeholder: "Employee Age",
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
        emp_id: "",
        emp_join: "",
        emp_role: "",
        emp_status: "",
        emp_exp: "",
        emp_addr: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (getEmployeeIsSuccess) {
            setFormData(employeeAttributeMap(getEmployeeData));
        }
    }, [getEmployeeData, getEmployeeIsSuccess]);

    // useEffect(() => {
    //     if (!emp_id) {
    //     }
    // }, [addError, addIsError, emp_id]);

    // useEffect(() => {}, [updateError, updateIsError]);

    const changeFormState = (formField, formFieldValue) => {
        setFormData({ ...formData, [formField]: formFieldValue });
    };

    const empNameRef = useRef();

    const handleOnSubmit = async (e) => {
        if (emp_id) {
            // console.log(emp_id_int);
            // console.log(employeeAttributeReverseMap(formData));
            const payload = {
                emp_id,
                updated: employeeAttributeReverseMap(formData),
            };
            const response = await updateEmployee(payload);
            console.log(response);
            // dispatch(updateEmployee({ updatedEmployee: formData }));
        } else {
            const response = await addEmployee(
                employeeAttributeReverseMap(formData)
            );
            console.log(response);
        }
        navigate("..");
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
