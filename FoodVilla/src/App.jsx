
import { About } from "../src/components/About";
import Header from "../src/components/Header"
import Body from "../src/components/Body";
import { Contact } from "./components/Contact";
import {createBrowserRouter, Outlet} from 'react-router-dom'
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = ()=>{
    return(
       <div className="app"> 
        <Header/>
        <Outlet />
       </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      }
      

    ],
    errorElement:<Error/>
  },
  
])

export default appRouter