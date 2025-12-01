import type { Customer } from "../../../hooks/useMe";
import { menu } from "../../../utils/data";
import { NavLink } from "react-router-dom";

interface Props {
  customer?: Customer;
  handleLogout(): void;
}
const Navbar = ({ customer, handleLogout }: Props) => {
  return (
    <>
      <ul id="myNavbar" className="navbar_nav">
        {menu.map((m, key) => {
          if (m.children) {
            return (
              <li
                key={key}
                className="menu-item menu-item-has-children dropdown nav-item"
              >
                <NavLink to={m.to} className="dropdown-toggle nav-link">
                  <span>{m.title}</span>
                </NavLink>
                <ul className="dropdown-menu">
                  {m.children.map((i, index) => (
                    <li key={index} className="menu-item  nav-item">
                      <NavLink to={i.to} className="dropdown-item nav-link">
                        <span>{i.title}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className="dropdown-btn">
                  <span className="fa fa-angle-down"></span>
                </div>
              </li>
            );
          } else {
            return (
              <li key={key} className="menu-item nav-item">
                <NavLink to={`${m.to}`} className="nav-link">
                  <span>{m.title}</span>
                </NavLink>
              </li>
            );
          }
        })}

        {customer && (
          <>
            <li className="menu-item menu-item-has-children dropdown nav-item">
              <NavLink to="#" className="dropdown-toggle nav-link">
                <span>{customer.first_name}</span>
              </NavLink>
              <ul className="dropdown-menu">
                <li className="menu-item  nav-item">
                  <span onClick={handleLogout}>Sair</span>
                </li>
              </ul>
              <div className="dropdown-btn">
                <span className="fa fa-angle-down"></span>
              </div>
            </li>
            <li className="menu-item menu-item-has-children dropdown nav-item">
              <NavLink to="#" className="dropdown-toggle nav-link">
                <span>Documentos</span>
              </NavLink>
              <ul className="dropdown-menu">
                <li className="menu-item  nav-item">
                  <NavLink
                    to="/documents/atestados/?type=1"
                    className="dropdown-item nav-link"
                  >
                    <span>Atestados</span>
                  </NavLink>
                </li>
                <li className="menu-item  nav-item">
                  <NavLink
                    to="/documents/atestados/?type=2"
                    className="dropdown-item nav-link"
                  >
                    <span>Autorizações</span>
                  </NavLink>
                </li>
                {customer.back_staff && (
                  <li className="menu-item  nav-item">
                    <NavLink to="/settings/" className="dropdown-item nav-link">
                      <span>Configurações</span>
                    </NavLink>
                  </li>
                )}
              </ul>
              <div className="dropdown-btn">
                <span className="fa fa-angle-down"></span>
              </div>
            </li>
          </>
        )}
      </ul>
    </>
  );
};
export default Navbar;
