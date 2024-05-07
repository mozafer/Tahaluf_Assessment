import {  createBrowserRouter } from "react-router-dom";
import App from "../App";
import UnivList from "../components/UnivList";
import University from "../components/University";


export const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children:[
            {path:'', element: <UnivList />},
            {path:'universities', element: <UnivList />},
            {path:'university/:name', element: <University />},
        ]

    }
])