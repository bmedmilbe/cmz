import { useEffect } from "react";
import PdfView from "./PdfView";
import type {
  Certificate,
  CertificateSaving,
} from "../../hooks/certificate/useCertificatesInfinite";
interface Props {
  isDocumentPopup: boolean;
  handelDocumentPopup: () => void;
  certificate: Certificate | undefined | CertificateSaving;
}
export const ModalPopupAtestado = ({
  isDocumentPopup,
  handelDocumentPopup,
  certificate,
}: Props) => {
  useEffect(() => {}, [true]);
  return (
    <>
      <div
        className={`modal_popup one ${
          isDocumentPopup ? "contact-popup-visible" : ""
        }`}
        id={`view-doc-${certificate?.id}`}
      >
        <div className="modal-popup-inner">
          <div className="close-modal" onClick={handelDocumentPopup}>
            <i className="fa fa-times" />
          </div>
          {/* {console.log(certificate.file)} */}
          <div
            className="modal_box"
            style={{ padding: "10px", height: "80vh" }}
          >
            <PdfView pdf_path={certificate?.file || ""} />
          </div>
        </div>
      </div>
    </>
  );
};
