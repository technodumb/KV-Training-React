import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const departmentBaseApi = createApi({
    reducerPath: "departmentsApi",
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

const departmentApiWithTag = departmentBaseApi.enhanceEndpoints({
    addTagTypes: ["DEPARTMENTS_LIST", "DEPARTMENTS_DETAILS"],
});

export { departmentApiWithTag as default, departmentBaseApi };
