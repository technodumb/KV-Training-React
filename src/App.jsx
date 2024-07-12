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
                ],
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
