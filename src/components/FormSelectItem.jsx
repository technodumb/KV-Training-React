import React from "react";

const FormSelectItem = ({ name, label, placeholder, options, changeState }) => {
    // console.log(options);
    return (
        <div className="form-item">
            <select
                name={name}
                onChange={(e) => changeState(e.currentTarget.value)}
            >
                <option value="" className="option-placeholder" hidden>
                    {placeholder}
                </option>
                {/* <option value="active">Active</option>
                <option value="inactive">Inactive</option> */}
                {options.map((optionVal, ind) => (
                    <option key={optionVal} value={optionVal}>
                        {optionVal}
                    </option>
                ))}
            </select>
            <label htmlFor={name}>{label}</label>
        </div>
    );
};

export default FormSelectItem;
