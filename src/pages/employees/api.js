import apiWithTag from "../../api/employeesApi";

export const employeeApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getEmployeeList: builder.query({
            query: () => "/employees",
            providesTags: ["EMPLOYEE_LIST"],
        }),
        getEmployeeDetails: builder.query({
            query: (emp_id) => `/employees/${emp_id}`,
        }),
        addEmployee: builder.mutation({
            query: (body) => ({
                url: "/employees",
                method: "POST",
                body,
            }),
        }),
        updateEmployee: builder.mutation({
            query: ({ emp_id, updated }) => ({
                url: `/employees/${emp_id}`,
                method: "PUT",
                body: updated,
            }),
            invalidatesTags: ["EMPLOYEE_LIST"],
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
