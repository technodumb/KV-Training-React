import React from "react";

const StatusPill = ({ status, emp_id }) => (
    <td
        className={"statusPill statusPill" + status}
        key={emp_id + "emp_status"}
    >
        {status}
    </td>
);

export default StatusPill;
