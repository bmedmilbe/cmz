import type { CertificateTitle } from "../../hooks/certificate/useTitles";
import { useSimpleParentsDelete } from "../../hooks/certificate/extras/useSimpleParentsDelete";
import useParentsStore, {
  type ParentEntry,
} from "../../stores/useParentsStore";
interface PropsTwo {
  titleType?: CertificateTitle;
  parent: ParentEntry;
}
const DeleteParentsButton = ({ parent, titleType }: PropsTwo) => {
  const deleteSimpleParentsDelete = useSimpleParentsDelete<ParentEntry>(
    titleType?.id || 0,
    parent.id || 0
  );

  const { removeParents } = useParentsStore();

  return (
    <div
      className="col-sm-12 col-md-2 items__item"
      onClick={() =>
        deleteSimpleParentsDelete
          .mutateAsync(parent)
          .then((res) => removeParents(res))
      }
      style={{ cursor: "pointer" }}
    >
      Eliminar
    </div>
  );
};

export default DeleteParentsButton;
