import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import LoginPage from "./pages/LoginPage";
import PrivateLayout from "./pages/layout/PrivateLayout";

import HomePage from "./pages/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import PostPage from "./pages/posts/PostPage";
import ServicesPage from "./pages/services/ServicesPage";
import ServicePage from "./pages/services/ServicePage";
import ToursPage from "./pages/tours/ToursPage";
import TourPage from "./pages/tours/TourPage";
import ExtraPage from "./pages/ExtraPage";

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
      { path: "tours/", element: <ToursPage /> },
      { path: "tours/:slug", element: <TourPage /> },
      { path: "extras/:slug", element: <ExtraPage /> },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default routes;
