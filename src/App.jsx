
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import Main from './Componets/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>,
        },
      ]
  }
])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    
    </>
  );
}

export default App
