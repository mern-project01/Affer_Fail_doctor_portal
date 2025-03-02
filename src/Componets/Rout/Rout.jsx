import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import Test from "../test/Test";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/test",
        element: <Test></Test>,
      },
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/appointment',
        element:<Appointment></Appointment>
      }, {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: 'login',
        element:<Login></Login>
      }
    ],
  },
]);
export default router;
