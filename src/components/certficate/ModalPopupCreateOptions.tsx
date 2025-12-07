import React from "react";
import { useNavigate } from "react-router-dom";
import type { CertificateTitle } from "../../hooks/certificate/useTitles";

interface Props {
  isTitlesPopup: boolean;
  handelTitlesPopup: () => void;
  setIsTitlesPopup: React.Dispatch<React.SetStateAction<boolean>>;
  titles: CertificateTitle[];
  id?: number;
}

const ModalPopupCreateOptions = ({
  isTitlesPopup,
  handelTitlesPopup,
  titles,
  setIsTitlesPopup,
  id,
}: Props) => {
  const router = useNavigate();
  const handleRouteCreate = (title: CertificateTitle) => {
    if (![26, 31].includes(title.id)) {
      router(`/documents/model-create/${title.id}/${id || "off"}`);
      setIsTitlesPopup(false);
    } else {
      alert(`${title.name} em desenvolvimento!`);
    }
  };

  return (
    <>
      <div
        className={`modal_popup one ${
          isTitlesPopup ? "contact-popup-visible" : ""
        }`}
      >
        <div className="modal-popup-inner">
          <div className="close-modal" onClick={handelTitlesPopup}>
            <i className="fa fa-times" />
          </div>
          <div
            className="title"
            style={{ textAlign: "center", padding: "10px" }}
          >
            <h1 style={{ fontSize: "1.6rem" }}>
              {id ? "Editar" : "Criar"} {titles[0]?.certificate_type.name} para
              que finalidade?
            </h1>
          </div>
          <div className="modal_box" style={{ padding: "10px" }}>
            <ol className="option-list">
              {titles?.map((title, index) => (
                <li
                  key={index}
                  onClick={() => handleRouteCreate(title)}
                  style={{
                    display: "inline-block",
                    width: "100%",
                    maxWidth: "300px",
                    verticalAlign: "top",
                    borderTop: "1px dashed #3263b1",
                    margin: "10px 20px",
                    cursor: "pointer",
                  }}
                >
                  {title.name}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPopupCreateOptions;
