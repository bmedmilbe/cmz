import React, { useEffect, useState } from "react";
import type { Person, PersonSend } from "../../hooks/certificate/usePersons";

import { useHouseAdd } from "../../hooks/certificate/adds/useHouseAdd";
import type { HouseSaving } from "../../hooks/certificate/useHouses";
import {
  useBirthAdddressAdd,
  type BirthAdddressSaving,
} from "../../hooks/certificate/adds/useBirthAdddressAdd";
import { usePersonAdd } from "../../hooks/certificate/adds/usePersonAdd";
import { usePersonEdit } from "../../hooks/certificate/edits/usePersonEdit";
import InputArea from "../forms/InputArea";
import NoSelectedArea from "../forms/NoSelectedArea";
import SelectedArea from "../forms/SelectedArea";
import NoInputArea from "../forms/NoInputArea";
import useMetaData from "../../hooks/certificate/useMetaData";

interface Props {
  isPersonPopup: boolean;
  person: Person | undefined;
  setIsPersonPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalPopupPerson = ({
  isPersonPopup,
  person,
  setIsPersonPopup,
}: Props) => {
  

  const {data: metadata}=useMetaData();
  // if (isLoading) return;
  // if(!isLoading){
  //   console.log(metadata)
  // }
  

  useEffect(() => {
    if (person) {
      setFormBirthAddressData(
        person.birth_address
          ? {
              id: person.birth_address.id,
              birth_street: person.birth_address.birth_street
                ? person.birth_address.birth_street.id
                : undefined,
              birth_town: person.birth_address.birth_town
                ? person.birth_address.birth_town.id
                : undefined,
              birth_county: person.birth_address.birth_county
                ? person.birth_address.birth_county.id
                : undefined,
              birth_country: person.birth_address.birth_country
                ? person.birth_address.birth_country.id
                : undefined,
            }
          : {
              id: 0,
              birth_street: undefined,
              birth_town: undefined,
              birth_county: undefined,
              birth_country: undefined,
            }
      );

      setFormHouseData(
        person.address
          ? {
              id: person.address.id,
              house_number: person.address.house_number,
              street: person.address.street.id,
            }
          : {
              id: 0,
              house_number: "",
              street: 0,
            }
      );

      setFormData({
        ...person,
        birth_address: person.birth_address ? person.birth_address.id : 0,
        id_type: person.id_type ? person.id_type.id : 0,
        address: person.address ? person.address.id : 0,
        id_issue_local: person.id_issue_local ? person.id_issue_local.id : 0,
        id_issue_country: person.id_issue_country
          ? person.id_issue_country.id
          : 0,
        nationality: person.nationality ? person.nationality.id : 0,
      });
    } else {
      setFormBirthAddressData({
        id: 0,
        birth_street: undefined,
        birth_town: undefined,
        birth_county: undefined,
        birth_country: undefined,
      });
      setFormHouseData({
        id: 0,
        house_number: "",
        street: 0,
      });
      setFormData({
        id: 0,
        name: "",
        surname: "",
        birth_date: "",
        birth_address: 0,
        id_type: 0,
        id_number: "",
        id_issue_local: 0,
        id_issue_country: 0,
        nationality: 0,
        id_issue_date: "",
        id_expire_date: "",
        father_name: "",
        mother_name: "",
        address: 0,
        status: "",
        gender: "",
      });
    }
  }, [person]);

  const mariageStatus = [
    { id: "S", title: "Solteiro(a)" },
    { id: "M", title: "Casado(a)" },
    { id: "L", title: "Vivendo em comunhão de bem" },
    { id: "V", title: "Viuvo(a)" },
    { id: "D", title: "Divorciado(a)" },
  ];
  const gender = [
    { id: "M", title: "Masculino" },
    { id: "F", title: "Feminino" },
  ];

  const [formBirthAddressData, setFormBirthAddressData] =
    useState<BirthAdddressSaving>({
      id: 0,
      birth_street: 0,
      birth_town: 0,
      birth_county: 0,
      birth_country: 0,
    });

  const [formHouseData, setFormHouseData] = useState<HouseSaving>({
    id: 0,
    house_number: "",
    street: 0,
  });

  const [formData, setFormData] = useState<PersonSend>({
    id: 0,
    name: "",
    surname: "",
    birth_date: "",
    birth_address: 0,
    id_type: 0,
    id_number: "",
    id_issue_local: 0,
    id_issue_country: 0,
    nationality: 0,
    id_issue_date: "",
    id_expire_date: "",
    father_name: "",
    mother_name: "",
    address: 0,
    status: "",
    gender: "",
  });

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const nextInputPerson = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setError("");
    setSuccess("");
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const nextInputHouse = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setError("");
    setSuccess("");

    setFormHouseData({ ...formHouseData, [e.target.id]: e.target.value });
  };
  const nextInputBirth = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setError("");
    setSuccess("");

    setFormBirthAddressData({
      ...formBirthAddressData,
      [e.target.id]: e.target.value,
    });
  };
  const houseAdd = useHouseAdd<HouseSaving>();
  const personBirthAddress = useBirthAdddressAdd<BirthAdddressSaving>();
  const personAdd = usePersonAdd<PersonSend>();
  const personEdit = usePersonEdit<PersonSend>(formData.id);

  const savePerson = (
    house: HouseSaving,
    birthAdddress: BirthAdddressSaving
  ) => {
    if (formData.id) {
      personEdit
        .mutateAsync({
          ...formData,
          address: house.id,
          birth_address: birthAdddress.id,
          father_name: formData.father_name || null,
          mother_name: formData.mother_name || null,
        })
        .then(() => setSuccess("Atualizado com sucesso."))
        .catch((err) => setError(err));
    } else {
      personAdd
        .mutateAsync({
          ...formData,
          address: house.id,
          birth_address: birthAdddress.id,
          father_name: formData.father_name || null,
          mother_name: formData.mother_name || null,
        })
        .then(() => setSuccess("Inserido com sucesso."))
        .catch((err) => setError(err));
    }
  };
  const saveBirthAdddress = (house: HouseSaving) => {
    personBirthAddress
      .mutateAsync(formBirthAddressData)
      .then((birth) => savePerson(house, birth))
      .catch((err) => setError(err));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    houseAdd
      .mutateAsync(formHouseData)
      .then((house) => saveBirthAdddress(house))
      .catch((err) => setError(err));
  };

  return (
    <div
      className={`modal_popup one ${
        isPersonPopup ? "contact-popup-visible" : ""
      }`}
    >
      <div className="modal-popup-inner">
        <div className="close-modal" onClick={() => setIsPersonPopup(false)}>
          <i className="fa fa-times" />
        </div>
        <div className="modal_box" style={{ padding: "10px" }}>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="row">
              <div className="col-sm-4">
                <InputArea
                  name="name"
                  type="text"
                  label={"Nome"}
                  placeholder={"Nome"}
                  nextInput={nextInputPerson}
                  value={formData.name}
                />
              </div>
              <div className="col-sm-4">
                <InputArea
                  name="surname"
                  type="text"
                  label={"Sobrenome"}
                  placeholder={"Sobrenome"}
                  nextInput={nextInputPerson}
                  value={formData.surname}
                />
              </div>
              <div className="col-sm-4">
                <InputArea
                  name="birth_date"
                  type="date"
                  label={"Data de Nascimento"}
                  placeholder={"Data de Nascimento"}
                  nextInput={nextInputPerson}
                  value={formData.birth_date}
                />
              </div>
              <div className="col-sm-4">
                <NoSelectedArea
                  data={metadata?.streets || []}
                  name="birth_street"
                  label={"Local de Nascimento"}
                  value={formBirthAddressData.birth_street || ""}
                  nextInput={nextInputBirth}
                />
              </div>
              <div className="col-sm-4">
                <NoSelectedArea
                  data={metadata?.towns || []}
                  name="birth_town"
                  label={"Cidade de Nascimento"}
                  value={formBirthAddressData?.birth_town || ""}
                  nextInput={nextInputBirth}
                />
              </div>
              <div className="col-sm-4">
                <NoSelectedArea
                  data={metadata?.countys || []}
                  name="birth_county"
                  label={"Distrito de Nascimento"}
                  value={formBirthAddressData.birth_county || ""}
                  nextInput={nextInputBirth}
                />
              </div>
              <div className="col-sm-4">
                <SelectedArea
                  data={metadata?.countries || []}
                  name="birth_country"
                  label={"País de Nascimento"}
                  value={formBirthAddressData.birth_country || ""}
                  nextInput={nextInputBirth}
                />
              </div>
              <div className="col-sm-4">
                <InputArea
                  name="id_number"
                  type="text"
                  label={"Número do Doc. de Identificação"}
                  placeholder={"Número do Doc. de Identificação"}
                  value={formData.id_number}
                  nextInput={nextInputPerson}
                />
              </div>
              <div className="col-sm-4">
                <SelectedArea
                  data={metadata?.idtypes || []}
                  label={"Doc. de Identificação"}
                  name="id_type"
                  value={formData.id_type}
                  nextInput={nextInputPerson}
                />
              </div>
              <div className="col-sm-4">
                <SelectedArea
                  data={metadata?.intituitions || []}
                  label={"Local de Emissão"}
                  name="id_issue_local"
                  value={formData.id_issue_local}
                  nextInput={nextInputPerson}
                />
              </div>
              <div className="col-sm-4">
                <SelectedArea
                  data={metadata?.countries || []}
                  label={"País de Emissão"}
                  name="id_issue_country"
                  value={formData.id_issue_country}
                  nextInput={nextInputPerson}
                />
              </div>
              <div className="col-sm-4">
                <SelectedArea
                  data={metadata?.countries || []}
                  label={"Nacionalidade"}
                  name="nationality"
                  value={formData.nationality}
                  nextInput={nextInputPerson}
                />
              </div>
              <div className="col-sm-4">
                <InputArea
                  name="id_issue_date"
                  type="date"
                  label={"Data de Emissão"}
                  placeholder={"Data de Emissão"}
                  value={formData.id_issue_date}
                  nextInput={nextInputPerson}
                />
              </div>
              <div className="col-sm-4">
                <InputArea
                  name="id_expire_date"
                  type="date"
                  label={"Data de Válidade"}
                  placeholder={"Data de Válidade"}
                  value={formData.id_expire_date}
                  nextInput={nextInputPerson}
                />
              </div>
              <div className="col-sm-4">
                <NoInputArea
                  name="father_name"
                  type="text"
                  label={"Nome do Pai"}
                  placeholder={"Nome do Pai"}
                  value={formData.father_name || ""}
                  nextInput={nextInputPerson}
                />
              </div>
              <div className="col-sm-4">
                <NoInputArea
                  name="mother_name"
                  type="text"
                  label={"Nome da Mãe"}
                  placeholder={"Nome da Mãe"}
                  value={formData.mother_name || ""}
                  nextInput={nextInputPerson}
                />
              </div>
              <div className="col-sm-4">
                <SelectedArea
                  data={mariageStatus}
                  label={"Estado Civíl"}
                  name="status"
                  value={formData.status}
                  nextInput={nextInputPerson}
                />
              </div>
              <div className="col-sm-4">
                <SelectedArea
                  data={gender}
                  label={"Sexo"}
                  name="gender"
                  value={formData.gender}
                  nextInput={nextInputPerson}
                />
              </div>
              <div className="col-sm-4">
                <SelectedArea
                  data={metadata?.streets || []}
                  label={"Lacalidade"}
                  name="street"
                  value={formHouseData.street}
                  nextInput={nextInputHouse}
                />
              </div>
              <div className="col-sm-4">
                <NoInputArea
                  name="house_number"
                  type="text"
                  label={"Número da casa"}
                  placeholder={"Número da casa"}
                  value={formHouseData.house_number}
                  nextInput={nextInputHouse}
                />
              </div>

              <div className="col-sm-12">
                <div className="form-group mg_top apbtn">
                  <button className="btn btn-success">
                    {person ? "Atualizar" : "Inserir"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalPopupPerson;
