import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const employeeBaseApi = createApi({
    reducerPath: "employeesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});

const apiWithTag = employeeBaseApi.enhanceEndpoints({
    addTagTypes: [],
});

export { apiWithTag as default, employeeBaseApi };
