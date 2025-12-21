
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Produtos } from "./pages/Produtos";
import { Contato } from "./pages/Contato";
import { Layout } from "./components/Layout";
import { Galeria } from "./pages/Galeria";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:"/produtos",
                Component: Produtos
            },
            {
                path: "/galeria",
                Component: Galeria
            },
            {
                path: "/contato",
                Component: Contato
            }
        ]
    }
])