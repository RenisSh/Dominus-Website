import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Bailiff from "../pages/Bailiff";
import Collection from "../pages/Collection";
import LegalCounseling from "../pages/LegalCounseling"; 
import Legjislacioni from "../pages/Legjislacioni";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                path:'/',
                element:<App />
            },
            {
                path:'/bailiff',
                element:<Bailiff />
            },
            {
                path:'/collection',
                element:<Collection />
            },
            {
                path:'/counseling',
                element:<LegalCounseling />
            },
            {
                path:'legjislacioni',
                element:<Legjislacioni />
            }
            
        ]
    }
]);

export default router;