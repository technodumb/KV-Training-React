import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { employeeApi } from "../pages/employees/api";
import { loginApi } from "../pages/login/api";

const store = configureStore({
    reducer: {
        employees: employeeReducer,
        [employeeApi.reducerPath]: employeeApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(employeeApi.middleware),
});

setupListeners(store.dispatch);
export default store;
