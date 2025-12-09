import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../../utils/data";
import type { Customer } from "../../hooks/useMe";

interface isToggleActive {
  status: boolean;
  key?: number;
}
interface Props {
  handleMobileMenu(): void;
  customer?: Customer;
  handleLogout(): void;
}

const MobileMenu = ({ handleMobileMenu, customer, handleLogout }: Props) => {
  const [isActive, setIsActive] = useState<isToggleActive>({
    status: false,
  });

  const handleToggle = (key: number) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <div className="crt_mobile_menu">
      <div className="menu-backdrop" onClick={handleMobileMenu} />
      <nav className="menu-box">
        <div className="close-btn" onClick={handleMobileMenu}>
          <i className="icon-close" />
        </div>

        <div className="menu-outer">
          <ul id="myNavbar" className="navbar_nav">
            {menu.map((m, index) => {
              if (m.children) {
                return (
                  <li
                    key={index}
                    className="menu-item menu-item-has-children dropdown nav-item"
                  >
                    <NavLink to={m.to} className="dropdown-toggle nav-Navlink">
                      <span>{m.title}</span>
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      style={{
                        display: `${
                          isActive.key == index + 1 ? "block" : "none"
                        }`,
                      }}
                    >
                      {m.children.map((i, key) => (
                        <li
                          key={key}
                          className="menu-item  nav-item"
                          onClick={handleMobileMenu}
                        >
                          <NavLink
                            to={i.to}
                            className="dropdown-item nav-Navlink"
                          >
                            <span>{i.title}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div
                      className="dropdown-btn"
                      onClick={() => handleToggle(index + 1)}
                    >
                      <span className="fa fa-angle-down" />
                    </div>
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    className="menu-item nav-item"
                    onClick={handleMobileMenu}
                  >
                    <NavLink to={`${m.to}`} className="nav-Navlink">
                      <span>{m.title}</span>
                    </NavLink>
                  </li>
                );
              }
            })}

            {customer && (
              <li className="menu-item menu-item-has-children dropdown nav-item">
                <NavLink to="#" className="dropdown-toggle nav-Navlink">
                  <span>{customer.first_name}</span>
                </NavLink>
                <ul
                  className="dropdown-menu"
                  style={{
                    display: `${isActive.key == 0 ? "block" : "none"}`,
                  }}
                >
                  <li className="menu-item  nav-item">
                    <span onClick={() => handleLogout()}>Sair</span>
                  </li>
                </ul>
                <div className="dropdown-btn" onClick={() => handleToggle(0)}>
                  <span className="fa fa-angle-down" />
                </div>
              </li>
            )}

            {customer && (
              <li className="menu-item menu-item-has-children dropdown nav-item">
                <NavLink to="#" className="dropdown-toggle nav-Navlink">
                  <span>Documentos</span>
                </NavLink>
                <ul
                  className="dropdown-menu"
                  style={{
                    display: `${isActive.key == 100 ? "block" : "none"}`,
                  }}
                >
                  <li key={1} className="menu-item  nav-item">
                    <NavLink
                      to="certificates/list/1"
                      className="dropdown-item nav-Navlink"
                    >
                      <span>Atestados</span>
                    </NavLink>
                  </li>
                  <li key={2} className="menu-item  nav-item">
                    <NavLink
                      to="certificates/list/2"
                      className="dropdown-item nav-Navlink"
                    >
                      <span>Autorizações</span>
                    </NavLink>
                  </li>
                  {customer.back_staff && (
                    <li className="menu-item  nav-item">
                      <NavLink
                        to="/settings/"
                        className="dropdown-item nav-Navlink"
                      >
                        <span>Configurações</span>
                      </NavLink>
                    </li>
                  )}
                </ul>
                <div className="dropdown-btn" onClick={() => handleToggle(100)}>
                  <span className="fa fa-angle-down" />
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
