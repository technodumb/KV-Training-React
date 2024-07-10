import React from "react";

const Button = ({ type = "button", children, onClick, isPrimary }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={"form-button " + (isPrimary && "primary-button")}
        >
            {children}
        </button>
    );
};

export default Button;
