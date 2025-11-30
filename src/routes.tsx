import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import PrivateLayout from "./pages/PrivateLayout";

import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login/", element: <LoginPage /> },
      { path: "posts/", element: <PostsPage /> },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default routes;
