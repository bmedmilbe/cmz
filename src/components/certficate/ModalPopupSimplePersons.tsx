import React from "react";
import {
  useSimplePersons,
  type SimplePerson,
} from "../../hooks/certificate/extras/useSimplePerson";
import { useSimplePersonAdd } from "../../hooks/certificate/extras/useSimplePersonAdd";
import type { CertificateTitle } from "../../hooks/certificate/useTitles";
import useSinglePersonsStore from "../../stores/useSinglePersonsStore";
import { setFriendlyError } from "../../utils/helper";
import DeletePersonButton from "./DeletePersonButton";

interface Props {
  isPersonsPopup: boolean;
  handelPersonsPopup: () => void;
  titleType: CertificateTitle | undefined;
}

const ModalPopupSimplePersons = ({
  isPersonsPopup,
  handelPersonsPopup,
  titleType,
}: Props) => {
  const {
    person,
    setPersonName,
    setPersonGender,
    setPersonDate,
    addPersonList,
  } = useSinglePersonsStore();

  const { data: simplePersons } = useSimplePersons<SimplePerson>(
    titleType?.id || 0
  );

  const saveSimplePersons = useSimplePersonAdd<SimplePerson>(
    titleType?.id || 0
  );

  const nextSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let tempPerson: SimplePerson = {
      name: person.name || "",
      gender: person.gender || "",
      birth_date: person.date || "",
      type: titleType?.id || 0,
    };
    saveSimplePersons
      .mutateAsync(tempPerson)
      .then((res) => addPersonList(res))
      .catch(() => setFriendlyError("Error"));
  };

  return (
    <>
      <div
        className={`modal_popup one ${
          isPersonsPopup ? "contact-popup-visible" : ""
        }`}
      >
        <div className="modal-popup-inner">
          <div className="close-modal" onClick={handelPersonsPopup}>
            <i className="fa fa-times" />
          </div>
          <div className="modal_box" style={{ padding: "10px" }}>
            <form
              id="contact-form"
              onSubmit={nextSubmit}
              encType="multipart/form-data"
            >
              <div className="row">
                <input id="id" type="hidden" value={titleType?.id} name="id" />

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
                    Data de nascimento
                    <br />
                  </label>
                  <input
                    // register={register}
                    name="date"
                    id="date"
                    type="date"
                    value={person.date}
                    defaultValue={""}
                    required
                    onChange={(event) => setPersonDate(event.target.value)}
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
                <div className="col-sm-12 col-md-5 items__title">Nome</div>
                <div className="col-sm-12 col-md-3 items__title">
                  Nascimento
                </div>

                <div className="col-sm-12 col-md-2 items__title">Genero</div>
                <div className="col-sm-12 col-md-2 items__title">Eliminar</div>
              </div>

              {simplePersons?.map((person, key) => (
                <div className="row items__items" key={key}>
                  <div className="col-sm-12 col-md-5 items__item">
                    {person.name}
                  </div>

                  <div className="col-sm-12 col-md-3 items__item">
                    {person.birth_date}
                  </div>
                  <div className="col-sm-12 col-md-2 items__item">
                    {person.gender}
                  </div>
                  <DeletePersonButton person={person} titleType={titleType} />
                </div>
              ))}
            </div>
            <div>
              <div className="close-modal" onClick={handelPersonsPopup}>
                <i className="fa fa-times" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPopupSimplePersons;
