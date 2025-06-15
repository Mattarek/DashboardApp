import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CssBaseline/>
        <RouterProvider router={router}/>
    </StrictMode>,
)
