import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import "./index.css";
import Providers from "./app/providers.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    </React.StrictMode>
);
