import type { CertificateTitle } from "../../hooks/certificate/useTitles";
import type { SimplePerson } from "../../hooks/certificate/extras/useSimplePerson";
import { useSimplePersonDelete } from "../../hooks/certificate/extras/useSimplePersonDelete";
import useSinglePersonsStore from "../../stores/useSinglePersonsStore";
interface PropsTwo {
  titleType?: CertificateTitle;
  person: SimplePerson;
}
const DeletePersonButton = ({ person, titleType }: PropsTwo) => {
  const deleteSimplePersons = useSimplePersonDelete<SimplePerson>(
    titleType?.id || 0,
    person.id || 0
  );

  const { removePersonList } = useSinglePersonsStore();

  return (
    <div
      className="col-sm-12 col-md-2 items__item"
      onClick={() =>
        deleteSimplePersons
          .mutateAsync(person)
          .then((res) => removePersonList(res))
      }
      style={{ cursor: "pointer" }}
    >
      Eliminar
    </div>
  );
};

export default DeletePersonButton;
