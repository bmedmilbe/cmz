import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/owl.css";
import "../public/assets/css/flexslider.css";
import "../public/assets/css/font-awesome.min.css";
import "../public/assets/css/icomoon.css";
import "../public/assets/css/jquery.fancybox.min.css";
import "../public/assets/css/scss/elements/theme-css.css";
import "../public/assets/css/style.css";
import "../public/assets/css/woocommerce-layout.css";
import "../public/assets/css/woocommerce.css";
import "../public/assets/css/ImageGallery.css";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import routes from "./routes.tsx";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </StrictMode>
);
