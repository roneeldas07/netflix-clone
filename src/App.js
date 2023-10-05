import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./sections/Login";
import Main from "./sections/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },{
      path: "/browse",
      element: <Main />,
    },
  ]);
  return (
    <RouterProvider router={router}>
      <Outlet/>
    </RouterProvider>
  );
}

export default App;
