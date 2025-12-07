import { useState } from "react";
import type {
  Certificate,
  CertificateObs,
} from "../../hooks/certificate/useCertificatesInfinite";
import { useCertificateComment } from "../../hooks/certificate/edits/useCertificateComment";

interface Props {
  key: number;
  isCommentPopup: boolean;
  certificate: Certificate | undefined;
  setCertificate: React.Dispatch<React.SetStateAction<Certificate | undefined>>;
  setIsCommentPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ModalPopupComment({
  isCommentPopup,
  certificate,
  setIsCommentPopup,
}: Props) {
  const [formData, setFormData] = useState<CertificateObs>({
    id: 0,
    obs: "",
  });
  const comment = useCertificateComment(certificate?.id || 0);

  const nextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    comment.mutateAsync(formData).then(() => {
      setIsCommentPopup(false);
    });
  };

  return (
    <>
      <div
        id={`comment-doc-${new Date().getTime()}`}
        className={`modal_popup one ${
          isCommentPopup ? "contact-popup-visible" : ""
        }`}
      >
        <div className="modal-popup-inner">
          <div
            className="close-modal"
            onClick={() => {
              setIsCommentPopup(!isCommentPopup);
            }}
          >
            <i className="fa fa-times" />
          </div>
          <div className="modal_box" style={{ padding: "10px" }}>
            <form
              id={`contact-form-${new Date().getTime()}` || "contact-form"}
              method="post"
              acceptCharset="UTF-8"
              onSubmit={nextSubmit}
              encType="multipart/form-data"
            >
              <div className="row">
                <input id="id" type="hidden" name="id" />

                <input
                  type="text"
                  className="form-control bg-white font-small"
                  name="obs"
                  id={"obs"}
                  value={formData.obs}
                  placeholder={`Commente Aqui!`}
                  onChange={nextInputChange}
                />

                <div className="col-sm-12">
                  <div className="form-group mg_top apbtn">
                    <button className="btn btn-success">Salvar</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
