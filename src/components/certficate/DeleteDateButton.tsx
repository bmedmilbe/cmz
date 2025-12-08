import { useDateDelete } from "../../hooks/certificate/extras/useDateDelete";
import type { DateEntry } from "../../hooks/certificate/extras/useDates";
import type { CertificateTitle } from "../../hooks/certificate/useTitles";
interface PropsTwo {
  titleType?: CertificateTitle;
  date: DateEntry;
}
const DeleteDateButton = ({ date, titleType }: PropsTwo) => {
  const dateDelete = useDateDelete<DateEntry>(titleType?.id || 0, date.id || 0);

  return (
    <div
      className="col-sm-12 col-md-2 items__item"
      onClick={() => dateDelete.mutateAsync(date)}
      style={{ cursor: "pointer" }}
    >
      Eliminar
    </div>
  );
};

export default DeleteDateButton;
