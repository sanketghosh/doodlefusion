import { createBrowserRouter } from "react-router-dom";
import { Join, Room } from "../pages";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Join />,
  },
  {
    path: "/:id",
    element: <Room />,
  },
]);
