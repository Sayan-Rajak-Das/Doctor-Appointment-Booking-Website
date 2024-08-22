import Navbar from "./components/Navbar"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import Services from "./pages/Services";
import FindDoctor from "./pages/FindDoctor";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./auth/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><Footer/></>
    },
    {
      path: "/services",
      element: <><Navbar/><Services/><Footer/></>
    },
    {
      path: "/doctors",
      element: <><Navbar/><FindDoctor/><Footer/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact/><Footer/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
