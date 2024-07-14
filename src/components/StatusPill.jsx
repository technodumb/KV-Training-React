import React from "react";

const StatusPill = ({ status, emp_id }) => (
    <span
        className={"statusPill statusPill" + status}
        key={emp_id + "emp_status"}
    >
        {status}
    </span>
);

export default StatusPill;
