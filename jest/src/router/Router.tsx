import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Routes } from "./Routes";

const router = createBrowserRouter([...Routes
]);

const Router = (): JSX.Element => {
    
  return (
    <RouterProvider router={router} />
  );
};

export default Router;
