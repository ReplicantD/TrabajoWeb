import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Arriendos,{loader as loaderArriendos} from "./views/Arriendos";
import NuevoArriendo from "./views/NuevoArriendo";
import DevolucionArriendo from "./views/DevolucionArriendo";
import ActivoArriendo from "./views/ActivoArriendo";
import TerminadoArriendo from "./views/TerminadoArriendo";
import EstadisticaArriendo from "./views/EstadisticaArriendo";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                index:true,
                element: <Home/>
            },
            {
                path:'arriendos/borrar',
                element: <Arriendos/>,
                loader: loaderArriendos,
            },
            {
                path:'arriendos/crear',
                element: <NuevoArriendo/>
            },
            {
                path:'arriendos/devolucion',
                element: <DevolucionArriendo/>
            },
            {
                path:'arriendos/activos',
                element: <ActivoArriendo/>
            },
            {
                path:'arriendos/terminados',
                element: <TerminadoArriendo/>
            },
            {
                path:'arriendos/estadisticas',
                element: <EstadisticaArriendo/>
            }
        ]
    }
])