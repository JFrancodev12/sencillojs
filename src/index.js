import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppProvider from "./app/providers";
import { router } from "./app/routers";

import './shared/css/global.css'

createRoot(document.getElementById('root')).render(
    <>
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
    </>
)