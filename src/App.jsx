import PlanBuilder from "./routes/PlanBuilder";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanBuilder />,
  },
  
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}