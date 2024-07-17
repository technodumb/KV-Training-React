import React from "react";

const Snackbar = ({ active, status, message }) => {
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

export default Snackbar;
