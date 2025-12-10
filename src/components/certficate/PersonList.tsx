import { type Person } from "../../hooks/certificate/usePersons";
import usePersonsInfinite from "../../hooks/certificate/usePersonsInfinite";
import usePersonStoreQuery from "../../stores/usePersonStoreQuery";
import NaviagatorList from "./NaviagatorList";

interface Props {
  handelPerson: (p: Person) => void;
}
const PersonList = ({ handelPerson }: Props) => {
  const pageSize: number = 10;
  const { setPage, page } = usePersonStoreQuery((s) => s);

  const { data } = usePersonsInfinite();

  const total = data?.count;

  return (
    <>
      <div className="items">
        <div className="row items__titles">
          <div className="col-sm-4 items__title">Nome</div>
          <div className="col-sm-2 items__title">Nascimento</div>
          <div className="col-sm-2 items__title">Doc. Nº</div>
          <div className="col-sm-2 items__title">Doc. Tipo</div>
          <div className="col-sm-2 items__title">Validade</div>
        </div>

        {data?.results.map((person, key) => (
          <div key={key} className="row items__items">
            <div className="col-sm-4 items__item">
              <span
                className="items__item__main-value"
                onClick={() => handelPerson(person)}
              >
                {person.name} {person.surname}
              </span>
            </div>
            <div className="col-sm-2 items__item"> {person.birth_date}</div>
            <div className="col-sm-2 items__item">{person.id_number}</div>
            <div className="col-sm-2 items__item">{person.id_type.name}</div>
            <div className="col-sm-2 items__item">{person.id_expire_date}</div>
          </div>
        ))}
      </div>
      <NaviagatorList
        page={page}
        pageSize={pageSize}
        totalItem={total || 0}
        setPage={setPage}
      />
    </>
  );
};

export default PersonList;
