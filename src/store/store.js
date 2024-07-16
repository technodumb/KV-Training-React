import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeReducer";

const store = configureStore({
    reducer: { employees: employeeReducer },
});

export default store;
