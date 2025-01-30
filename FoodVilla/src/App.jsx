
import { About } from "../src/components/About";
import Header from "../src/components/Header"
import Body from "../src/components/Body";
import { Contact } from "./components/Contact";
import {createBrowserRouter} from 'react-router-dom'

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
    element: <AppLayout/>
  },
  {
    path:"/about",
    element: <About/>
  }
])

export default appRouter