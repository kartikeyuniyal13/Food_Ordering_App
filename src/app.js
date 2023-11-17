import React from "react";
import ReactDOM from "react-dom/client";

//even if you dont put .js extension the following would work
import Header from "./components/Header";

import Body from "./components/Body";
import Error from "./components/Error";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"







const AppLayout = () => {
    return (
        <div className="app">

            <Header />

            {/*outlet is replaced by corresponding childern*/}
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout />,
        children:[
            {path:"/",
            element:<Body/>,
            
        },
        {
            path:"/about",
            element:<About />
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        
        
    ],
    errorElement:<Error />,
    },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<RouterProvider router={appRouter}/>)