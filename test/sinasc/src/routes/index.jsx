import { createBrowserRouter } from "react-router-dom";
import {Home} from "../pages/Home";
import  Sim  from "../pages/Sim";
import  Sinasc  from "../pages/Sinasc";
import { App } from "../App"





export const routes = createBrowserRouter ([
{
    path:"/",
    component:<App/>,
    children:[
        {path:"/", element: <Home/>},
        {path:"/sim", element: <Sim/>},
        {path:"/sinasc", element: <Sinasc/>},
        
    ]
},
])