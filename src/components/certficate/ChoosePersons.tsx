import React, { useRef, useState } from "react";
import type { CertificateSaving } from "../../hooks/certificate/useCertificatesInfinite";
import useModelStore from "../../stores/useModelStores";
import usePersonStoreQuery from "../../stores/usePersonStoreQuery";
import type { Person } from "../../hooks/certificate/usePersons";
import usePersonsInfinite from "../../hooks/certificate/usePersonsInfinite";

interface Props {
  setCertificate: React.Dispatch<
    React.SetStateAction<CertificateSaving | undefined>
  >;
}
const ChoosePersons = ({ setCertificate }: Props) => {
  const person_lookRef = useRef(null);
  const person_look2Ref = useRef(null);

  const {
    setMainPerson,
    setSecondaryPerson,
    removeSecondaryPerson,
    removeMainPerson,
  } = useModelStore((s) => s);

  const [lastInput, setLastInput] = useState<string>();
  const [chosen, setChosen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const { setSearch, setPage } = usePersonStoreQuery();
  const { data: personsResult } = usePersonsInfinite();
  const persons = personsResult?.results;
  // console.log(persons);

  const [formData, setFormData] = useState({
    person_look: "",
    person_look2: "",
  });

  const searchPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCertificate(undefined);
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setSearch(e.target.value);
    setPage(1);
    setLastInput(e.target.id);

    if (e.target.value.length >= 3) {
      setLastInput(e.target.id);
      setListOpen(true);
    } else {
      setListOpen(false);
      if (lastInput === "person_look") {
      } else if (lastInput === "person_look2") {
        removeSecondaryPerson();
      }
    }

    if (e.target.id === "person_look" && e.target.value.length < 3) {
      removeMainPerson();
      removeSecondaryPerson();
      setChosen(false);
    }
    if (e.target.id === "person_look2" && e.target.value.length < 3) {
      removeSecondaryPerson();
    }
  };

  const choosePerson = (person: Person) => {
    setFormData({
      ...formData,
      [`${lastInput}`]: `${person.name} ${person.surname || ""}`,
    });

    if (lastInput === "person_look") {
      setMainPerson(person);

      setChosen(true);
    } else if (lastInput === "person_look2") {
      setSecondaryPerson(person);
    }

    setListOpen(false);
    // console.log(person);
  };
  // if (isLoading) return "Loading...";
  return (
    <>
      <input id="person" type="hidden" name="person" />
      <input id="person2" type="hidden" name="person2" />
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <label htmlFor="person_look">Pessoa Principal</label>
          <input
            id="person_look"
            onChange={searchPerson}
            value={formData.person_look}
            type="text"
            name="person_look"
            placeholder="Escreva o nome, número do ID, ou data de nascimento"
            ref={person_lookRef}
          />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
          <label htmlFor="person_look2">Pessoa Secundárial</label>

          <input
            id="person_look2"
            value={formData.person_look2}
            onChange={searchPerson}
            type="text"
            name="person_look2"
            placeholder="Escreva o nome, número do ID, ou data de nascimento"
            disabled={!chosen}
            ref={person_look2Ref}
          />
        </div>
      </div>
      <div
        className={`person-box bg-light py-2 px-3 ${
          !listOpen ? "d-none" : "d-block"
        }`}
        style={{ maxHeight: "300px", overflow: "scroll" }}
      >
        {persons?.map((person, key) => (
          <button
            className="user-select-auto my-1 w-100"
            key={key}
            onClick={() => choosePerson(person)}
          >
            {person.name} {person.surname}
          </button>
        ))}
      </div>
    </>
  );
};

export default ChoosePersons;
