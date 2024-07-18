import React, { useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Button from "../components/Button";
import FormTextItem from "../components/FormTextItem";
import { useAddDepartmentMutation } from "../pages/departments/api";

const CreateUpdateDepartmentModal = ({ cancel, updateDepartment }) => {
    const modalBgRef = useRef();
    const [departmentName, setDepartmentName] = useState("");
    const [addDepartment, { data, isSuccess }] = useAddDepartmentMutation();

    const updateModal = updateDepartment !== undefined;
    return (
        <div
            ref={modalBgRef}
            className="modal-background"
            onClick={(e) => {
                if (e.target === modalBgRef.current) {
                    cancel();
                }
                // console.log(e.target);
            }}
        >
            <div className="modal">
                <FaXmark className="modal-close" onClick={() => cancel()} />
                <h2>Create Department</h2>
                {/* <span>Do you really want to delete employee?</span> */}
                <FormTextItem
                    label="Department Name"
                    name="dept_name"
                    placeholder="Department Name"
                    value={departmentName}
                    changeState={(dept_name) => {
                        setDepartmentName(dept_name);
                    }}
                />
                <span className="modal-buttons">
                    <Button
                        isPrimary="true"
                        onClick={async () => {
                            const response = updateModal
                                ? await updateDepartment(departmentName)
                                : await addDepartment({
                                      name: departmentName,
                                  });
                            cancel();
                        }}
                    >
                        Create
                    </Button>
                    <Button onClick={() => cancel()}>Cancel</Button>
                </span>
            </div>
        </div>
    );
};

export default CreateUpdateDepartmentModal;
