import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import type { Customer } from "../../../hooks/useMe";
interface Props {
  customer?: Customer;
  handleLogout(): void;
}
const Header = ({ handleLogout, customer }: Props) => {
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    window.scrollTo(window.scrollY, window.scrollY - 90);
  };
  return (
    <div className="header_area" id="header_contents">
      <header className="header header_default style_nine header_eleven head_absolute pd_top_20 transparent-bg get_sticky_header">
        <div className="large-container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-9 col-sm-12 col-xs-9 logo_column">
              <div className="header_logo_box">
                <NavLink to="/" className="logo navbar-brand">
                  <img
                    src="/assets/images/logo-white-1.webp"
                    alt="Creote Elementor"
                    className="logo_default"
                  />
                  <img
                    src="/assets/images/logo-default.png"
                    alt="Creote Elementor"
                    className="logo__sticky"
                  />
                </NavLink>
              </div>
            </div>
            <div className="col-lg-9 col-md-3 col-sm-3 col-xs-3 menu_column">
              <div
                className="navbar_togglers hamburger_menu color_white"
                onClick={handleMobileMenu}
              >
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </div>
              <div className="header_content_collapse">
                <div className="header_menu_box">
                  <div className="navigation_menu text-center">
                    <Navbar customer={customer} handleLogout={handleLogout} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* end of the loop */}
    </div>
  );
};

export default Header;
