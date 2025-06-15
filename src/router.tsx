import { createBrowserRouter } from "react-router-dom";
import {LoginPage} from "./pages/LoginPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
        children: [
            {
                path: ':id',
            },
            {
                path: '/create',
            }
        ]
    }
]);
