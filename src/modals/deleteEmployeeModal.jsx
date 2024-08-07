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
                <h2>Are you sure?</h2>
                <span>Do you really want to delete employee?</span>
                <span className="modal-buttons">
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
