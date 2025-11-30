import { useState } from "react";
import { NavLink } from "react-router-dom";
import { listEmergencyContacts } from "../utils/data";
import BannerSwipper from "../components/elements/BannerSwipper";
import ModalPopupContact from "../components/layout/ModalPopupContact";

const HomePage = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [isContactPopup, setContactPopup] = useState(false);

  return (
    <>
      <div className="pd_top_90" />

      <div className="home-layout-box">
        <div className="home-layout position-relative">
          <div
            style={{ zIndex: 20, marginTop: "4rem" }}
            className="position-absolute top-1 start-0 mt-3 ms-1"
          >
            <span
              className="btn open-contact-button"
              onClick={() => setContactOpen(!contactOpen)}
            >
              {contactOpen ? "Ocultar" : "Ver"} Contactos
            </span>

            <ul
              className={`list-group list-group-flush contact-list contact-list-section ${
                contactOpen ? "block" : ""
              }`}
            >
              {listEmergencyContacts.map((item, key) => (
                <li
                  key={key}
                  className="list-group-item contact-item d-flex justify-content-between flex-wrap"
                >
                  <NavLink to={`tel:${item.contact}`}>{item.title}</NavLink>
                  <NavLink to={`tel:${item.contact}`}>
                    <span className="fw-bold">{item.contact}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="position-relative">
            <div
              className="z-3 position-absolute top-0 end-0"
              style={{ zIndex: "30" }}
            >
              <div className="d-flex justify-content-end flex-row">
                {[
                  {
                    img: "/mail.png",
                    Navlink: "click",
                  },
                  {
                    img: "/facebook.png",
                    Navlink:
                      "https://www.facebook.com/profile.php?id=100068107096803",
                  },
                  {
                    img: "/youtube.png",
                    Navlink:
                      "https://www.youtube.com/@CâmaraDistritaldeMé-Zóchi",
                  },
                ].map((item, key) => {
                  if (item.Navlink != "click") {
                    return (
                      <NavLink key={key} to={item.Navlink} target="_blank">
                        <img
                          src={item.img}
                          className="object-fit-cover social-media-icon"
                          alt="..."
                        />
                      </NavLink>
                    );
                  } else {
                    return (
                      <NavLink
                        key={key}
                        to={"#"}
                        onClick={() => setContactPopup(true)}
                      >
                        <img
                          src={item.img}
                          className="object-fit-cover social-media-icon"
                          alt="..."
                        />
                      </NavLink>
                    );
                  }
                })}
              </div>
            </div>

            <BannerSwipper />
          </div>
        </div>
      </div>
      <ModalPopupContact
        isContactPopup={isContactPopup}
        handelContactPopup={setContactPopup}
      />
    </>
  );
};

export default HomePage;
