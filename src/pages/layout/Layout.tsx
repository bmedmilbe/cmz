import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { type Customer } from "../../hooks/useCustomers";
import useMe from "../../hooks/useMe";
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
  const router = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [customer, setCustomer] = useState<Customer | undefined>(undefined);

  const { data, isLoading } = useMe<Customer>();
  if (!isLoading && data) {
    setCustomer(data);
  }
  const handleLogout = () => {
    localStorage.removeItem("access");
    router("/");
    setCustomer(undefined);
    setIsLogged(false);
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
          <Header isLogged={isLogged} handleLogout={handleLogout} />

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
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          handleLogout={handleLogout}
          isLogged={isLogged}
          customer={customer}
        />
        <SearchPopup />
      </div>
    </>
  );
};

export default Layout;
