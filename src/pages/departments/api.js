import departmentApiWithTag from "../../api/departmentsApi";

export const departmentApi = departmentApiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getDepartmentList: builder.query({
            query: () => "/departments",
            providesTags: ["DEPARTMENT_LIST"],
        }),
        getDepartmentDetails: builder.query({
            query: (dept_id) => `/departments/${dept_id}`,
            providesTags: ["DEPARTMENT_DETAILS"],
        }),
        addDepartment: builder.mutation({
            query: (body) => ({
                url: "/departments",
                method: "POST",
                body,
            }),
        }),
        updateDepartment: builder.mutation({
            query: ({ id: dept_id, ...updated }) => ({
                url: `/departments/${dept_id}`,
                method: "PUT",
                body: updated,
            }),
            invalidatesTags: ["DEPARTMENT_LIST", "DEPARTMENT_DETAILS"],
        }),
        deleteDepartment: builder.mutation({
            query: (dept_id) => ({
                url: `/departments/${dept_id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["DEPARTMENT_LIST"],
        }),
    }),
});

export const {
    useGetDepartmentListQuery,
    useLazyGetDepartmentListQuery,
    useGetDepartmentDetailsQuery,
    useAddDepartmentMutation,
    useUpdateDepartmentMutation,
    useDeleteDepartmentMutation,
} = departmentApi;
