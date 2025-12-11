import { useState } from "react";
import { type Universitie } from "../../hooks/certificate/useUniversities";
import {
  useUniversitieAdd,
  type UniversitieEntry,
} from "../../hooks/certificate/adds/extras/useUniversitieAdd";
interface Props {
  university: Universitie;
}
const UniversitieEdit = ({ university }: Props) => {
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState<UniversitieEntry>({
    name: university.name,
    id: 0,
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
  const addCountry = useUniversitieAdd(university.id);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addCountry.mutateAsync(formData).then((res) => {
      console.log(res);
      setSaved(true);
    });
  };

  return (
    <>
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{
          width: "100%",
          maxWidth: "700",
          display: "block",
          boxSizing: "border-box",
          margin: "0 auto",
        }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <label>Universidade</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder={"Nome da universidade"}
              defaultValue={""}
              onChange={nextInputChange}
              required
              value={formData.name}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group mg_top apbtn">
              <label></label>
              <button
                disabled={saved || !formData.name}
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

export default UniversitieEdit;
