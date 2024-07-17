import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearError } from "../store/toastReducer";

const Toast = ({ status, message, id }) => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        setActive(true);
        const activeTimer = setTimeout(() => {
            setActive(false);
            const deleteTimer = setTimeout(() => {
                dispatch(clearError(id));
            }, 500);

            // return () => clearTimeout(deleteTimer);
        }, 2000);

        // return () => clearTimeout(activeTimer);
    }, [dispatch, id]);

    return (
        <div
            className={
                "snackbar " +
                (active
                    ? "snackbar-active " +
                      (status == "error"
                          ? "snackbar-error "
                          : "snackbar-success ")
                    : "")
                // (message ? "snackbar-active " : "")
            }
        >
            {message}
        </div>
    );
};

export default Toast;
