const actionTypes = {
    ADD_EMPLOYEE: "ADD_EMPLOYEE",
    DELETE_EMPLOYEE: "DELETE_EMPLOYEE",
    UPDATE_EMPLOYEE: "UPDATE_EMPLOYEE",
    CHANGE_FILTER: "CHANGE_FILTER",
};

const reducer = (state, action) => {
    console.log(action);
    console.log("reaching here");
    switch (action.type) {
        case actionTypes.ADD_EMPLOYEE:
            console.log(action.type);
            console.log(action.payload);

            return {
                ...state,
                employees: [...state.employees, action.payload],
            };

        case actionTypes.DELETE_EMPLOYEE:
            console.log(action.type);
            return {
                ...state,
                employees: state.employees.filter((employee) => {
                    console.log(employee.emp_id, action.payload);
                    console.log(employee.emp_id !== action.payload);
                    return employee.emp_id !== action.payload;
                }),
            };

        case actionTypes.UPDATE_EMPLOYEE:
            console.log(action.type);
            return {
                ...state,
                employees: state.employees.map((employee) => {
                    if (employee.emp_id === action.payload.emp_id) {
                        return action.payload.formData;
                    } else return employee;
                }),
            };

        case actionTypes.CHANGE_FILTER:
            console.log(state);
            return {
                ...state,
                statusFilter: action.payload,
            };

        default:
            return state;
    }
};

export { reducer as default, actionTypes };
