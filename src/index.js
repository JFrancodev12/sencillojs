import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routers";

import './shared/css/global.css'

createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={router} />
    </>
)