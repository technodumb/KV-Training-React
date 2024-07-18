export const employeeAttributeMap = (employee, dept_name) => {
    console.log(employee);
    return {
        emp_id: employee.id,
        emp_name: employee.name,
        emp_join: new Date(employee.joiningDate).toISOString().substring(0, 10),
        emp_dept: dept_name ? dept_name : employee.department.name,
        emp_role: employee.role,
        emp_status: employee.status,
        emp_exp: employee.experience,
        emp_addr: employee.address?.line1,
        emp_age: employee.age,
        emp_email: employee.email,
    };
};

export const employeeAttributeReverseMap = (employee) => {
    const emp_join = new Date(employee.emp_join);
    console.log(emp_join);
    return {
        id: parseInt(employee.emp_id),
        name: employee.emp_name,
        email: employee.emp_email,
        age: parseInt(employee.emp_age),
        joiningDate: emp_join != "Invalid Date" ? emp_join.toISOString() : "",
        department: employee.emp_dept,
        role: employee.emp_role,
        status: employee.emp_status,
        experience: parseInt(employee.emp_exp),
        address: { line1: employee.emp_addr, pincode: "1" },
        password: "demoPassword",
    };
};
