import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Maps from "./components/Maps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Maps />,
      },
    ],
  },
]);

export default router;
