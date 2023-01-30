import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Root from "../layout/root/Root";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            }
        ]
    }
])

export default routes;