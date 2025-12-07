import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalPopupPerson from "./ModalPopupPerson";
import type { Person } from "../../hooks/certificate/usePersons";
import useTitles from "../../hooks/certificate/useTitles";
import ModalPopupCreateOptions from "./ModalPopupCreateOptions";

interface Props {
  page: string;
  type: number;
}

const MainNavCertificate = ({ page, type }: Props) => {
  const router = useNavigate();

  const [isTitlesPopup, setIsTitlesPopup] = useState(false);
  const { data: titles } = useTitles();
  const [isPersonPopup, setIsPersonPopup] = useState(false);
  const [person, setPerson] = useState<Person | undefined>();

  const handelTitlesPopup = () => {
    setIsTitlesPopup(!isTitlesPopup);
  };

  const handelPersonPopup = (person?: Person) => {
    if (person) {
      setPerson(person);
    } else {
      setPerson(undefined);
    }
    setIsPersonPopup(!isPersonPopup);
  };

  return (
    <>
      <div className="container mb-3 py-3 border-bottom">
        <div className="row">
          {page === "certificate" && (
            <div className="col-sm-12 col-md-4">
              <a
                className="btn btn-info w-100 text-uppercase fw-bold"
                type="submit"
                onClick={() => router(`/certificates/persons/${type}`)}
              >
                Ver Pessoas
              </a>
            </div>
          )}
          {page === "persons" && (
            <div className="col-sm-12 col-md-4">
              <a
                className="btn btn-info w-100 text-uppercase fw-bold"
                type="submit"
                onClick={() => router(`/certificates/list/${type}`)}
              >
                Ver {type == 1 ? "Atestados" : "Licenças e Autorizações"}
              </a>
            </div>
          )}

          <div className="col-sm-12 col-md-4">
            <a
              className="btn btn-info w-100 text-uppercase fw-bold"
              type="submit"
              onClick={handelTitlesPopup}
            >
              {type == 1 ? "Novo Atestado" : "Nova Autorização"}
            </a>
          </div>

          <div className="col-sm-12 col-md-4">
            <a
              className="btn btn-info w-100 text-uppercase fw-bold"
              type="submit"
              onClick={() => handelPersonPopup()}
            >
              Nova Pessoa
            </a>
          </div>
        </div>
      </div>

      <ModalPopupCreateOptions
        isTitlesPopup={isTitlesPopup}
        handelTitlesPopup={handelTitlesPopup}
        setIsTitlesPopup={setIsTitlesPopup}
        titles={
          titles?.filter((c) => {
            if (type == 1) {
              return c.certificate_type.id == 1;
            }
            return c.certificate_type.id != 1;
          }) || []
        }
      />
      <ModalPopupPerson
        isPersonPopup={isPersonPopup}
        handelPersonPopup={handelPersonPopup}
        person={person}
      />
    </>
  );
};

export default MainNavCertificate;
