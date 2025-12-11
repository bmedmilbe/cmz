import { useState } from "react";
import useInstituitions from "../../hooks/certificate/useInstituitions";
import {
  useInstituitionAdd,
  type InstituitionEntry,
} from "../../hooks/certificate/adds/extras/useInstituitionAdd";
import IntituitionEdit from "./IntituitionEdit";

const IntituitionAdd = () => {
  const { data: intituitions } = useInstituitions();
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState<InstituitionEntry>({
    id: 0,
    name: "",
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

  const addCountry = useInstituitionAdd();
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
            <label>Intituições</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder={"Nome da intituições"}
              defaultValue={""}
              onChange={nextInputChange}
              required
              value={formData.name}
            />
          </div>
          <div className="col-12">
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
      <hr />
      {intituitions?.map((item, k) => (
        <IntituitionEdit instituition={item} key={k} />
      ))}
    </>
  );
};

export default IntituitionAdd;
