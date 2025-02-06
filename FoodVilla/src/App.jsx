
import { About } from "../src/components/About";
import Header from "../src/components/Header"
import Body from "../src/components/Body";
import { Contact } from "./components/Contact";
import {createBrowserRouter} from 'react-router-dom'
import Error from "./components/Error";

const AppLayout = ()=>{
    return(
       <div className="app">
        <Header/>
        <Body />
       </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/contact",
    element: <Contact/>
  }
])

export default appRouter