import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

// eslint-disable-next-line react/display-name
const FormTextItem = React.forwardRef(
    (
        {
            label,
            name,
            type = "text",
            placeholder = "",
            changeState,
            isModernLabel = false,
            errorText,
            value,
        },
        ref
    ) => {
        // const [inputValue, setInputValue] = React.useState("");
        const [passwordShow, setPasswordShow] = React.useState(false);

        const handleChange = (e) => {
            // console.log(e.target.value);
            if (changeState) changeState(e.target.value);
        };

        return (
            <div
                className={
                    (isModernLabel ? "modernLabel " : "form-item ") +
                    (errorText ? "form-item-error" : "")
                }
            >
                <span className="error-text">{errorText}</span>
                <input
                    type={passwordShow ? "text" : type}
                    name={name}
                    placeholder={placeholder}
                    className={`${isModernLabel && "modernLabel-input"} ${
                        type == "password" && "password-input"
                    }`}
                    value={value}
                    onChange={handleChange}
                    ref={ref}
                />
                <label
                    htmlFor={name}
                    className={isModernLabel ? "modernLabel-label" : undefined}
                >
                    {label}
                </label>
                {type === "password" && (
                    <button
                        className="password-show-hide"
                        type="button"
                        onClick={() => setPasswordShow((prev) => !prev)}
                    >
                        {passwordShow ? (
                            <FaRegEyeSlash size={18} />
                        ) : (
                            <FaRegEye size={18} />
                        )}
                    </button>
                )}
            </div>
        );
    }
);

export default FormTextItem;
