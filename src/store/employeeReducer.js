import { createAction, createReducer } from "@reduxjs/toolkit";
import employeeList from "./dummyData";

const addEmployee = createAction("ADD_EMPLOYEE");
const deleteEmployee = createAction("DELETE_EMPLOYEE");
const updateEmployee = createAction("UPDATE_EMPLOYEE");
const changeStatusFilter = createAction("CHANGE_FILTER");

const employeeReducer = createReducer(
    { employees: employeeList, statusFilter: "" },
    (builder) => {
        builder.addCase(addEmployee, (state, action) => {
            state.employees.push(action.payload.newEmployee);
        });

        builder.addCase(deleteEmployee, (state, action) => {
            state.employees = state.employees.filter(
                (employee) => employee.emp_id !== action.payload.emp_id
            );
        });

        builder.addCase(updateEmployee, (state, action) => {
            state.employees = state.employees.map((employee) =>
                employee.emp_id === action.payload.updatedEmployee.emp_id
                    ? action.payload.updatedEmployee
                    : employee
            );
            // state.employees = state.employees.
            // const employee = state.employees.find((employee)=>employee.emp_id===action.payload.updatedEmployee.emp_id)
        });

        builder.addCase(changeStatusFilter, (state, action) => {
            state.statusFilter = action.payload.statusFilter;
        });
    }
);

export {
    employeeReducer as default,
    addEmployee,
    deleteEmployee,
    updateEmployee,
    changeStatusFilter,
};
