import type { CertificateTitle } from "../../hooks/certificate/useTitles";
import { useSimpleParents } from "../../hooks/certificate/extras/useSimpleParents";
import {
  useParents,
  type Parent,
} from "../../hooks/certificate/extras/useParents";
import useParentsStore, {
  type ParentEntry,
} from "../../stores/useParentsStore";
import { useSimpleParentsAdd } from "../../hooks/certificate/extras/useSimpleParentsAdd";
import DeleteParentsButton from "./DeleteParentsButton";
interface Props {
  isParentsPopup: boolean;
  handelParentsPopup: () => void;
  titleType: CertificateTitle | undefined;
}
const ModalPopupParents = ({
  isParentsPopup,
  handelParentsPopup,
  titleType,
}: Props) => {
  const { data: parents } = useParents<Parent>();
  const {
    parent,
    setParentName,
    setParentRelation,
    setParentDate,
    addParents,
  } = useParentsStore();

  const simpleParentsAdd = useSimpleParentsAdd<ParentEntry>(titleType?.id || 0);

  const nextSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let tempPerson = {
      name: parent.name,
      parent: parent.relation,
      relation: parent.relation,
      birth_date: parent.birth_date,
      id: 0,
      gender: "",
    };
    simpleParentsAdd.mutateAsync(tempPerson).then((res) => {
      addParents(res);
    });
  };
  const { data: simpleParents } = useSimpleParents<ParentEntry>(
    titleType?.id || 0
  );

  return (
    <>
      <div
        className={`modal_popup one ${
          isParentsPopup ? "contact-popup-visible" : ""
        }`}
      >
        <div className="modal-popup-inner">
          <div className="close-modal" onClick={handelParentsPopup}>
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
                    value={parent.name}
                    defaultValue={""}
                    required
                    onChange={(event) => setParentName(event.target.value)}
                  />
                </div>
                <div className="col-sm-12 col-lg-4">
                  <label>
                    Data de nascimento
                    <br />
                  </label>
                  <input
                    name="date"
                    id="date"
                    type="date"
                    value={parent.birth_date}
                    defaultValue={""}
                    required
                    onChange={(event) => setParentDate(event.target.value)}
                  />
                </div>

                <div className="col-sm-12 col-lg-4">
                  <label>
                    Relação familiar
                    <br />
                  </label>
                  <select
                    name="parent"
                    id="parent"
                    className="form-control"
                    value={parent.relation}
                    defaultValue={""}
                    required
                    onChange={(event) =>
                      setParentRelation(parseInt(event.target.value))
                    }
                  >
                    {parents?.map((p) => (
                      <option value={p.id} key={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
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
                <div className="col-sm-12 col-md-3 items__title">Relação</div>
                <div className="col-sm-12 col-md-2 items__title">
                  Nascimento
                </div>

                <div className="col-sm-12 col-md-2 items__title">Eliminar</div>
              </div>

              {simpleParents?.map((person, key) => (
                <div className="row items__items" key={key}>
                  <div className="col-sm-12 col-md-5 items__item">
                    {person.name}
                  </div>
                  <div className="col-sm-12 col-md-3 items__item">
                    {parents?.filter((p) => p.id === person.relation)[0]
                      ?.title ?? ""}
                  </div>

                  <div className="col-sm-12 col-md-2 items__item">
                    {person.birth_date}
                  </div>

                  <DeleteParentsButton titleType={titleType} parent={person} />
                </div>
              ))}
            </div>
            <div>
              <div className="close-modal" onClick={handelParentsPopup}>
                <i className="fa fa-times" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPopupParents;
