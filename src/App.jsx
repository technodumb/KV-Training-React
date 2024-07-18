import "./style.css";

import CreateEmployee from "./pages/employees/CreateEmployee";
import LoginEmployee from "./pages/login/LoginEmployee";
import "./components/components.css";
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import ListEmployee from "./pages/employees/ListEmployee";
import EditEmployee from "./pages/employees/EditEmployee";
import DetailsEmployee from "./pages/employees/DetailsEmployee";
import { Provider } from "react-redux";
import store from "./store/store";
import ListDepartment from "./pages/departments/ListDepartment";
import DetailsDepartment from "./pages/departments/DetailsDepartment";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <LoginEmployee />,
            },
            {
                path: "employee",
                element: <HomeLayout />,

                children: [
                    {
                        index: true,
                        loader: async () => redirect("list"),
                    },
                    {
                        path: "create",
                        element: <CreateEmployee />,
                    },
                    {
                        path: "list",
                        element: <ListEmployee />,
                    },
                    {
                        path: "edit/:emp_id",
                        element: <EditEmployee />,
                    },
                    {
                        path: "details/:emp_id",
                        element: <DetailsEmployee />,
                    },
                ],
            },
            {
                path: "department",
                element: <HomeLayout />,

                children: [
                    {
                        index: true,
                        loader: async () => redirect("list"),
                    },
                    // {
                    //     path: "create",
                    //     element: <CreateDepartment />,
                    // },
                    {
                        path: "list",
                        element: <ListDepartment />,
                    },
                    // {
                    //     path: "edit/:emp_id",
                    //     element: <EditDepartment />,
                    // },
                    {
                        path: "details/:dept_id",
                        element: <DetailsDepartment />,
                    },
                ],
            },
        ],
    },
]);
const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />;
        </Provider>
    );
};

export default App;
