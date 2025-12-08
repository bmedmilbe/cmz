import type { SimplePerson } from "../../hooks/certificate/extras/useSimplePerson";
import { useSingePerson } from "../../hooks/certificate/extras/useSingePerson";
import { useSingePersonAdd } from "../../hooks/certificate/extras/useSingePersonAdd";
import type { CertificateTitle } from "../../hooks/certificate/useTitles";
import useSinglePersonsStore from "../../stores/useSinglePersonsStore";
import { setFriendlyError } from "../../utils/helper";

interface Props {
  isPersonPopup: boolean;
  handelPersonPopup: () => void;
  titleType: CertificateTitle | undefined;
}

const ModalPopupSinglePerson = ({
  isPersonPopup,
  handelPersonPopup,
  titleType,
}: Props) => {
  const { person, setPersonName, setPersonGender } = useSinglePersonsStore();
  const { data: simplePerson } = useSingePerson<SimplePerson>(
    titleType?.id || 0
  );
  const saveSinglePersons = useSingePersonAdd<SimplePerson>(titleType?.id || 0);

  const nextSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let tempPerson: SimplePerson = {
      name: person.name || "",
      gender: person.gender || "",
      type: titleType?.id || 0,
    };
    saveSinglePersons
      .mutateAsync(tempPerson)
      .then()
      .catch(() => setFriendlyError("Error"));
  };

  return (
    <>
      <div
        className={`modal_popup one ${
          isPersonPopup ? "contact-popup-visible" : ""
        }`}
      >
        <div className="modal-popup-inner">
          <div className="close-modal" onClick={handelPersonPopup}>
            <i className="fa fa-times" />
          </div>
          <div className="modal_box" style={{ padding: "10px" }}>
            <form
              id="contact-form"
              onSubmit={nextSubmit}
              encType="multipart/form-data"
            >
              <div className="row">
                <div className="col-sm-12 col-lg-4">
                  <label>
                    Nome completo
                    <br />
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder={"Nome"}
                    value={person.name}
                    defaultValue={""}
                    required
                    onChange={(event) => setPersonName(event.target.value)}
                  />
                </div>

                <div className="col-sm-12 col-lg-4">
                  <label>
                    Genero
                    <br />
                  </label>
                  <div className="form-check mt-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="genderM"
                      checked={person.gender == "M"}
                      onChange={(event) =>
                        event.target.checked ? setPersonGender("M") : ""
                      }
                      required
                    />
                    <label className="form-check-label" htmlFor="genderM">
                      Homem
                    </label>
                  </div>
                  <div className="form-check mt-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="genderF"
                      checked={person.gender == "F"}
                      onChange={(event) =>
                        event.target.checked ? setPersonGender("F") : ""
                      }
                      required
                    />
                    <label className="form-check-label" htmlFor="genderF">
                      Mulher
                    </label>
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="form-group mg_top apbtn">
                    <button className="btn btn-success">Salvar</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="items" style={{ padding: "10px" }}>
              <div className="row items__titles">
                <div className="col-sm-12 col-md-6 items__title">Nome</div>

                <div className="col-sm-12 col-md-6 items__title">Genero</div>
                {/* <div className="col-sm-12 col-md-2 items__title">Eliminar</div> */}
              </div>

              {simplePerson?.map((person, key) => (
                <div className="row items__items" key={key}>
                  <div className="col-sm-12 col-md-6 items__item">
                    {person.name}
                  </div>

                  <div className="col-sm-12 col-md-6 items__item">
                    {person.gender}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="close-modal" onClick={handelPersonPopup}>
                <i className="fa fa-times" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPopupSinglePerson;
