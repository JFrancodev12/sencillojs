import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../features";
import EditorLayout from "../features/editor";
import Docs from "../features/docs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <EditorLayout/>
            }
        ]
    },
    {
        path: '/docs',
        element: <Docs/>
    }
])