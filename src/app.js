import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
//even if you dont put .js extension the following would work
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Body from "./components/Body";
import Error from "./components/Error";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"
//import Grocery from "./components/Grocery";
const Grocery =lazy(()=>import("./components/Grocery"))






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
        {
            path:"/restaurant/:resId",
            element:<RestaurantMenu />
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>LOADING</h1>}><Grocery/></Suspense>
        },
        
        
    ],
    errorElement:<Error />,
    },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<RouterProvider router={appRouter}/>)