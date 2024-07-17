import { FaCross, FaXmark } from "react-icons/fa6";
import Button from "../components/Button";
import { useRef } from "react";
import "./modals.css";

const DeleteEmployeeModal = ({
    // employeeList,
    // setEmployeeList,
    deleteEmployee,
    cancel,
}) => {
    const modalBgRef = useRef();
    return (
        <div
            ref={modalBgRef}
            className="delete-employee-modal-background"
            onClick={(e) => {
                if (e.target === modalBgRef.current) {
                    cancel();
                }
                // console.log(e.target);
            }}
        >
            <div className="delete-employee-modal">
                <FaXmark
                    className="delete-employee-modal-close"
                    onClick={() => cancel()}
                />
                <h2>Are you sure?</h2>
                <span>Do you really want to delete employee?</span>
                <span className="delete-employee-modal-buttons">
                    <Button isPrimary="true" onClick={() => deleteEmployee()}>
                        Confirm
                    </Button>
                    <Button onClick={() => cancel()}>Cancel</Button>
                </span>
            </div>
        </div>
    );
};

export default DeleteEmployeeModal;
