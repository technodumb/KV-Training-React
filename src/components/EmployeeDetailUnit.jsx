import StatusPill from "./StatusPill";

const EmployeeDetailUnit = ({ name, title, value }) => {
    if (name === "emp_exp") value += " Years";
    return (
        <div className={"employee-detail-unit employee-detail-unit-" + name}>
            <span className="employee-detail-unit-title">{title}</span>

            <span className="employee-detail-unit-value">
                {name === "emp_status" ? <StatusPill status={value} /> : value}
            </span>
        </div>
    );
};

export default EmployeeDetailUnit;
