import { useNavigate, useParams } from "react-router-dom";
import MainNavCertificate from "../../components/certficate/MainNavCertificate";
import Breadcrumb from "../../components/layout/header/Breadcrumb";
import { useState } from "react";
import CertificateFilter from "../../components/certficate/CertificateFilter";
import CertificateList from "../../components/certficate/CertificateList";
import type { Certificate } from "../../hooks/certificate/useCertificatesInfinite";
import { ModalPopupAtestado } from "../../components/certficate/ModalPopupAtestado";
import ModalPopupComment from "../../components/certficate/ModalPopupComment";
// import CertificateList from "../../components/certficate/CertificateList";

const CertificatesPage = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  if (type != "1" && type != "2") {
    navigate("/");
  }

  const [isDocumentPopup, setIsDocumentPopup] = useState(false);
  const handelDocumentPopup = () => {
    setIsDocumentPopup(!isDocumentPopup);
  };

  const [certificate, setCertificate] = useState<Certificate>();

  const handleCertificate = (certificate: Certificate) => {
    setCertificate(certificate);
    setIsDocumentPopup(true);
  };

  const [isCommentPopup, setIsCommentPopup] = useState<boolean>(false);

  return (
    <>
      <Breadcrumb
        breadcrumbTitle={
          type && parseInt(type) == 1 ? "Atestados" : "Licenças e Autorizações"
        }
        breadcrumbImage="/assets/images/contact.webp"
      />
      {type && (
        <MainNavCertificate type={parseInt(type)} page={"certificate"} />
      )}

      <section className="contact-section">
        <div className="container">
          <CertificateFilter />

          <CertificateList
            handleCertificate={handleCertificate}
            type={parseInt(type || "0")}
            setIsCommentPopup={setIsCommentPopup}
            setCertificate={setCertificate}
          />
        </div>

        <div className="pd_top_40" />
      </section>
      <ModalPopupAtestado
        isDocumentPopup={isDocumentPopup}
        handelDocumentPopup={handelDocumentPopup}
        certificate={certificate}
      />

      <ModalPopupComment
        key={new Date().getTime()}
        isCommentPopup={isCommentPopup}
        certificate={certificate}
        setCertificate={setCertificate}
        setIsCommentPopup={setIsCommentPopup}
      />
    </>
  );
};

export default CertificatesPage;
