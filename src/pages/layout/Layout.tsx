import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useMe, { type Customer } from "../../hooks/useMe";
import Header from "../../components/layout/header/Header";
import Breadcrumb from "../../components/layout/header/Breadcrumb";
import Footer from "../../components/layout/footer/Footer";
import MobileMenu from "../../components/layout/MobileMenu";
import SearchPopup from "../../components/layout/SearchPopup";
interface Props {
  breadcrumbTitle?: string;
  breadcrumbImage?: string;
}
const Layout = ({ breadcrumbTitle, breadcrumbImage }: Props) => {
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    window.scrollTo(window.scrollY, window.scrollY - 90);
  };

  const { data } = useMe<Customer>();

  const handleLogout = () => {
    localStorage.removeItem("access");
    location.href = "/";
  };
  // Scroll Header
  const [scroll, setScroll] = useState<number | boolean>(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <div
        id="page"
        className={`page_wapper hfeed site fixed-header floating-menu ${
          scroll ? "fixed-header floating-menu" : ""
        } ${isMobileMenu ? "crt_mobile_menu-visible" : ""}`}
      >
        <div id="wrapper_full" className="content_all_warpper">
          <Header
            handleMobileMenu={handleMobileMenu}
            customer={data}
            handleLogout={handleLogout}
          />

          <Breadcrumb
            breadcrumbImage={breadcrumbImage}
            breadcrumbTitle={breadcrumbTitle}
          />

          <div id="content" className="site-content pd_top_20">
            <Outlet />
          </div>
        </div>
        <Footer />

        <MobileMenu
          handleMobileMenu={handleMobileMenu}
          handleLogout={handleLogout}
          customer={data}
        />
        <SearchPopup />
      </div>
    </>
  );
};

export default Layout;
