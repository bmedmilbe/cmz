import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import PrivateLayout from "./pages/layout/PrivateLayout";

import HomePage from "./pages/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import PostPage from "./pages/posts/PostPage";
import ServicesPage from "./pages/services/ServicesPage";
import ServicePage from "./pages/services/ServicePage";
import ToursPage from "./pages/tours/ToursPage";
import TourPage from "./pages/tours/TourPage";
import ExtraPage from "./pages/ExtraPage";
import StaffsPage from "./pages/StaffsPage";
import AssemblysPage from "./pages/AssemblysPage";
import OrgPage from "./pages/OrgPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import CertificatesPage from "./pages/certificate/CertificatesPage";
import PersonsPage from "./pages/certificate/PersonsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login/", element: <LoginPage /> },
      { path: "create-account/", element: <RegisterPage /> },
      { path: "posts/", element: <PostsPage /> },
      { path: "posts/:slug", element: <PostPage /> },
      { path: "services/", element: <ServicesPage /> },
      { path: "services/:slug", element: <ServicePage /> },
      { path: "tours/", element: <ToursPage /> },
      { path: "tours/:slug", element: <TourPage /> },
      { path: "extras/:slug", element: <ExtraPage /> },
      { path: "staffs/", element: <StaffsPage /> },
      { path: "assemblys/", element: <AssemblysPage /> },
      { path: "assemblys/", element: <AssemblysPage /> },
      { path: "orgs/:slug", element: <OrgPage /> },
      { path: "certificates/:type", element: <CertificatesPage /> },
    ],
  },
  {
    path: "/certificates/",
    element: <Layout />,
    children: [
      { path: "list/:type", element: <CertificatesPage /> },
      { path: "persons/:type", element: <PersonsPage /> },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default routes;
