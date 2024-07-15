import "./style.css";

import CreateEmployee from "./pages/CreateEmployee";
import LoginEmployee from "./pages/LoginEmployee";
import "./components/components.css";
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import EmployeeLayout from "./layouts/EmployeeLayout";
import ListEmployee from "./pages/ListEmployee";
import EditEmployee from "./pages/EditEmployee";
import DetailsEmployee from "./pages/DetailsEmployee";

const App = () => {
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
                    element: <EmployeeLayout />,

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
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
