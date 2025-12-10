import useCerificateStoreQuery, {
  type CertificateStoreQuery,
} from "../../stores/useCerificateStoreQuery";
import useCertificatesInfinite, {
  type Certificate,
} from "../../hooks/certificate/useCertificatesInfinite";
import { useState } from "react";
import useTitlesByType from "../../hooks/certificate/useTitlesByType";
import Status from "./Status";
import ModalPopupCreateOptions from "./ModalPopupCreateOptions";
import NaviagatorList from "./NaviagatorList";

interface Props {
  handleCertificate: (certificate: any) => void;
  type: number;
  setIsCommentPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setCertificate: React.Dispatch<React.SetStateAction<Certificate | undefined>>;
}

const CertificateList = ({
  handleCertificate,
  type,
  setIsCommentPopup,
  setCertificate,
}: Props) => {
  const pageSize = 10;
  const { page, setPage } = useCerificateStoreQuery(
    (s: CertificateStoreQuery) => s
  );

  const { data: certificatesResult } = useCertificatesInfinite(type);

  const total = certificatesResult?.count;

  const data = certificatesResult?.results;
  const [isTitlesPopup, setIsTitlesPopup] = useState(false);
  const { data: titles } = useTitlesByType(type);
  const [id, setId] = useState<number>(0);

  const handelTitlesPopup = () => {
    setIsTitlesPopup(!isTitlesPopup);
  };

  return (
    <>
      <div className="items">
        <div className="row items__titles">
          <div className="col-sm-1 items__title">Número</div>
          <div className="col-sm-3 items__title">Nome</div>
          <div className="col-sm-3 items__title">Tipo</div>

          <div className="col-sm-2 items__title text-center">Estado</div>
          <div className="col-sm-1 items__title">Data</div>
          <div className="col-sm-2 items__title">Atualizar</div>
        </div>
        {data?.map((certificate, index) => (
          <div
            className="row items__item px-1s d-flex flex-row align-items-center"
            key={index}
          >
            <div className="col-sm-1 items__item px-1">
              <span
                className="items__item px-1__main-value"
                onClick={() => handleCertificate(certificate)}
              >
                {certificate.number}
              </span>
            </div>
            <div className="col-sm-3 items__item px-1">
              {certificate.main_person.name} {certificate.main_person.surname}
            </div>

            <div className="col-sm-3 items__item px-1">
              {certificate.type.name}
            </div>

            <div className="col-sm-2 items__item px-1">
              <Status certificate={certificate} />
            </div>
            <div className="col-sm-1 items__item px-1">
              {new Date(Date.parse(certificate.date_issue)).getDate()}/
              {new Date(Date.parse(certificate.date_issue)).getMonth() + 1}/
              {new Date(Date.parse(certificate.date_issue)).getFullYear()}
            </div>
            <div className="col-sm-2 items__item px-1">
              <span
                onClick={() => {
                  setId(certificate.id);
                  handelTitlesPopup();
                }}
                style={{ cursor: "pointer" }}
              >
                Editar
              </span>{" "}
              <span
                onClick={() => {
                  setCertificate({ ...certificate });
                  setIsCommentPopup(true);
                }}
                style={{ cursor: "pointer" }}
              >
                Comentar
              </span>
            </div>
          </div>
        ))}
      </div>
      <NaviagatorList
        page={page}
        pageSize={pageSize}
        totalItem={total || 0}
        setPage={setPage}
      />
      <ModalPopupCreateOptions
        isTitlesPopup={isTitlesPopup}
        handelTitlesPopup={handelTitlesPopup}
        setIsTitlesPopup={setIsTitlesPopup}
        titles={titles || []}
        id={id}
      />
    </>
  );
};

export default CertificateList;
