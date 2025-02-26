import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import Test from "../test/Test";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment";
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
      },
    ],
  },
]);
export default router;
