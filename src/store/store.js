import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { employeeApi } from "../pages/employees/api";
import { loginApi } from "../pages/login/api";
import toastReducer from "./toastReducer";
import { departmentApi } from "../pages/departments/api";

const store = configureStore({
    reducer: {
        employees: employeeReducer,
        toasts: toastReducer,
        [employeeApi.reducerPath]: employeeApi.reducer,
        [departmentApi.reducerPath]: departmentApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(employeeApi.middleware)
            .concat(departmentApi.middleware),
});

setupListeners(store.dispatch);
export default store;
