import { useEffect } from "react";
import "./Assests/css/allstyles.css";
import Body from "./Components/Body";
import Logincontainer from "./Components/Logincontainer";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

function App() {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <Logincontainer />
    },
    {
      path:'/Browse',
      element: <Body />
    }
  ])

  return (
    <RouterProvider router={appRouter}>

    </RouterProvider>
  );
}

export default App;
