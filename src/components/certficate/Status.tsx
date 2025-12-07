import React, { useEffect, useState } from "react";
import {
  type Certificate,
  type CertificateStatus,
} from "../../hooks/certificate/useCertificatesInfinite";
import useMe, { type Customer } from "../../hooks/useMe";
import { useCertificateEdit } from "../../hooks/certificate/edits/useCertificateEdit";
import { setFriendlyError } from "../../utils/helper";

interface Props {
  certificate: Certificate;
}
const Status = ({ certificate }: Props) => {
  const { data: customer } = useMe<Customer>();
  const [currentStatus, setCurrentStatus] = useState<string>("");
  const [processing, setProcessing] = useState(false);
  useEffect(() => {
    setCurrentStatus(certificate.status);
  }, [certificate]);
  const setStatusClass = () => {
    if (currentStatus == "P") return "p-1 w-50 btn btn-warning";
    if (currentStatus == "F") return "p-1 w-50 btn btn-danger";
    if (currentStatus == "R") return "p-1 w-50 btn btn-primary";
    if (currentStatus == "C") return "p-1 w-50 btn btn-success";
  };

  const changeStatusRevised = () => {
    if (!confirm("Ter a certeza que está correto?")) {
      return;
    }
    if (customer?.level == 2 || customer?.level == 3) {
      if (currentStatus == "P") {
        setProcessing(true);
        updateStatus
          .mutateAsync({ ...formData, status: "R" })
          .then(() => {
            setCurrentStatus("R");
            setProcessing(false);
          })
          .catch((err) => {
            setProcessing(false);
            setFriendlyError(err);
          });
      }
    } else {
      alert("Sem Permissão!");
    }
  };
  const formData = {
    id: 0,
    status: certificate.status,
  };
  const changeStatusInComplete = () => {
    if (!confirm("Ter a certeza que está incorreto?")) {
      return;
    }
    if (customer?.level == 2 || customer?.level == 3) {
      if (currentStatus == "R" || currentStatus == "P") {
        setProcessing(true);
        updateStatus
          .mutateAsync({ ...formData, status: "F" })
          .then(() => {
            setCurrentStatus("F");
            setProcessing(false);
          })
          .catch((err) => {
            setProcessing(false);
            setFriendlyError(err);
          });
      }
    } else {
      alert("Sem Permissão!");
    }
  };
  const updateStatus = useCertificateEdit<CertificateStatus>(certificate.id);
  const changeStatusComplete = () => {
    if (!confirm("Ter a certeza que está competo?")) {
      return;
    }

    if (customer?.level == 3) {
      if (currentStatus == "R") {
        setProcessing(true);
        updateStatus
          .mutateAsync({ ...formData, status: "C" })
          .then(() => {
            setCurrentStatus("C");
            setProcessing(false);
          })
          .catch((err) => {
            setProcessing(false);
            setFriendlyError(err);
          });
      }
    } else {
      alert("Sem Permissão!");
    }
  };

  if (processing)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <span id={`status-${certificate.id} d-flex`}>
      {currentStatus == "P" && (
        <React.Fragment>
          <button
            className="p-1 w-50 btn btn-success"
            onClick={() => changeStatusRevised()}
          >
            Revisto
          </button>
          <button
            className="p-1 w-50 btn btn-danger"
            onClick={() => changeStatusInComplete()}
          >
            Incorrecto
          </button>
        </React.Fragment>
      )}

      {currentStatus == "F" && (
        <button
          disabled
          className={setStatusClass()}
          onClick={() => changeStatusInComplete()}
        >
          Incorrecto
        </button>
      )}
      {currentStatus == "R" && (
        <React.Fragment>
          <button
            className={setStatusClass()}
            onClick={() => changeStatusComplete()}
          >
            Certo
          </button>
          <button
            className="p-1 w-50 btn btn-danger"
            onClick={() => changeStatusInComplete()}
          >
            Incorrecto
          </button>
        </React.Fragment>
      )}
      {currentStatus == "C" && (
        <button disabled className={setStatusClass()}>
          Completo
        </button>
      )}
    </span>
  );
};

export default Status;
