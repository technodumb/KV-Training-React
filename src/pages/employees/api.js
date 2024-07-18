import apiWithTag from "../../api/employeesApi";

export const employeeApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getEmployeeList: builder.query({
            query: () => "/employees",
            providesTags: ["EMPLOYEE_LIST"],
        }),
        getEmployeeDetails: builder.query({
            query: (emp_id) => `/employees/${emp_id}`,
            providesTags: ["EMPLOYEE_DETAILS"],
        }),
        addEmployee: builder.mutation({
            query: (body) => ({
                url: "/employees",
                method: "POST",
                body,
            }),
            invalidatesTags: ["EMPLOYEE_LIST", "EMPLOYEE_DETAILS"],
        }),
        updateEmployee: builder.mutation({
            query: ({ id: emp_id, ...updated }) => ({
                url: `/employees/${emp_id}`,
                method: "PUT",
                body: updated,
            }),
            invalidatesTags: ["EMPLOYEE_LIST", "EMPLOYEE_DETAILS"],
        }),
        deleteEmployee: builder.mutation({
            query: (emp_id) => ({
                url: `/employees/${emp_id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["EMPLOYEE_LIST"],
        }),
    }),
});

export const {
    useGetEmployeeListQuery,
    useLazyGetEmployeeListQuery,
    useGetEmployeeDetailsQuery,
    useAddEmployeeMutation,
    useUpdateEmployeeMutation,
    useDeleteEmployeeMutation,
} = employeeApi;
