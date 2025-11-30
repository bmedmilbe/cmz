import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import LoginPage from "./pages/LoginPage";
import PrivateLayout from "./pages/layout/PrivateLayout";

import HomePage from "./pages/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import PostPage from "./pages/posts/PostPage";
import ServicesPage from "./pages/posts/ServicesPage";
import ServicePage from "./pages/posts/ServicePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login/", element: <LoginPage /> },
      { path: "posts/", element: <PostsPage /> },
      { path: "posts/:slug", element: <PostPage /> },
      { path: "services/", element: <ServicesPage /> },
      { path: "services/:slug", element: <ServicePage /> },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default routes;
