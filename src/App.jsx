import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import {
  Home,
  About,
  Contact,
  Donate,
  // News,
  GetInvolved,
  Volunteer,
  Works,
} from "./pages";
import { NavBar } from "./components";





const LayoutRoute = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoute />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "volunteer",
        element: <Volunteer />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "getInvolved",
        element: <GetInvolved />,
      }
      // {
      //   path: "news",
      //   element: <News />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
