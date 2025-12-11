import { useState } from "react";
import {
  useIfenEdit,
  type IfenEntry,
} from "../../hooks/certificate/adds/extras/useIfenEdit";
import { type Ifen } from "../../hooks/certificate/useIfens";
interface Props {
  ifen: Ifen;
}
const IfenEdit = ({ ifen }: Props) => {
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState<IfenEntry>({
    id: 0,
    size: ifen.size,
  });

  const nextInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSaved(false);
    setFormData({
      ...formData,
      [e.target.id]: e.target.value == "-1" ? undefined : e.target.value,
    });
  };

  const addExtras = useIfenEdit(ifen.id);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addExtras.mutateAsync(formData).then((res) => {
      console.log(res);
      setSaved(true);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row p-2 border-bottom">
          <div className="col-sm-4">{ifen.name}</div>
          <div className="col-sm-4">
            <input
              name={`size`}
              id={`size`}
              type="number"
              value={formData.size}
              defaultValue={""}
              onChange={nextInputChange}
              required
            />
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="form-group mg_top apbtn">
              <label></label>
              <button
                disabled={saved || !formData.size}
                className="btn btn-success"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default IfenEdit;
