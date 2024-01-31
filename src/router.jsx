import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import Itens from "./pages/Itens";
import TableItens from "./components/local/TablesItens";
import NewItem from "./pages/NewItem";
import Item from "./pages/Item";
import loadItem from "./components/loaders/itemLoader";
import UpdateItem from "./pages/UpdateItem";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/itens",
                element: <Itens />,
                children: [
                    {
                        index: true,
                        element: <TableItens/>
                    },

                    {
                        path: "/itens/novoItem",
                        element: <NewItem/>
                    },

                    {
                        path:"/itens/:itemId",
                        element:<Item/>,
                        loader: loadItem
                    },

                    {
                        path:"/itens/update/:itemId",
                        element:<UpdateItem/>,
                        loader: loadItem
                    }
                ]
            }


        ]
    }

])

export default router