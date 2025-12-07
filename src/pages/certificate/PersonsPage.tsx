import { useState } from "react";
import Breadcrumb from "../../components/layout/header/Breadcrumb";
import ModalPopupPerson from "../../components/certficate/ModalPopupPerson";
import MainNavCertificate from "../../components/certficate/MainNavCertificate";
import { useNavigate, useParams } from "react-router-dom";
import type { Person } from "../../hooks/certificate/usePersons";
import PersonFilter from "../../components/certficate/PersonFilter";
import PersonList from "../../components/certficate/PersonList";

const PersonsPage = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();

  if (!type) {
    navigate("/");
    return null;
  }
  const [isPersonPopup, setIsPersonPopup] = useState(false);
  const [person, setPerson] = useState<Person>();
  const handelPersonPopup = (p: Person) => {
    if (p && p.id) {
      setPerson(p);
      setIsPersonPopup(true);
    } else {
      setPerson(undefined);
      setIsPersonPopup(false);
    }
  };

  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Pessoas"
        breadcrumbImage="/assets/images/contact.webp"
      />
      {type && <MainNavCertificate type={parseInt(type)} page={"persons"} />}
      <section className="contact-section">
        <div className="container">
          <div className="align-items-center">
            <div className="contact_form_box_all type_one">
              <div className="contact_form_shortcode">
                <form id="contact-form" encType="multipart/form-data">
                  <div className="controls">
                    <div className="row">
                      <PersonFilter />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <PersonList handelPerson={handelPersonPopup} />
        </div>

        <div className="pd_top_40" />
      </section>

      <ModalPopupPerson
        isPersonPopup={isPersonPopup}
        person={person}
        setIsPersonPopup={setIsPersonPopup}
      />
    </>
  );
};

export default PersonsPage;
