import { FaCross, FaXmark } from "react-icons/fa6";
import Button from "../components/Button";
import { useRef } from "react";
import "./modals.css";

const DeleteDepartmentModal = ({
    // employeeList,
    // setEmployeeList,
    deleteDepartment,
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
                <span>Do you really want to delete department?</span>
                <span className="modal-buttons">
                    <Button isPrimary="true" onClick={() => deleteDepartment()}>
                        Confirm
                    </Button>
                    <Button onClick={() => cancel()}>Cancel</Button>
                </span>
            </div>
        </div>
    );
};

export default DeleteDepartmentModal;
