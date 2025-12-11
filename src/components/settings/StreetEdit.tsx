import { useState } from "react";
import {
  useStreetAdd,
  type StreetEntry,
} from "../../hooks/certificate/adds/extras/useStreetAdd";
import { type Street } from "../../hooks/certificate/useStreets";
import useTowns from "../../hooks/certificate/useTowns";
interface Props {
  street: Street;
}
const StreetEdit = ({ street }: Props) => {
  const { data: towns } = useTowns();

  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState<StreetEntry>({
    name: street.name,
    id: street.id,
    town: street.town.id,
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
  const addStreet = useStreetAdd();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addStreet.mutateAsync(formData).then((res) => {
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
            <label>Localidade</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder={"Escreva o nome da localidade"}
              defaultValue={""}
              onChange={nextInputChange}
              required
              value={formData.name}
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <label>
              Cidade
              <br />
            </label>
            <select
              name="town"
              id="town"
              className="form-control"
              onChange={nextInputChange}
            >
              <option value={-1}>Selecionar...</option>
              {towns?.map((item) => {
                if (item.id == formData.town) {
                  return (
                    <option value={item.id} key={item.id} selected>
                      {item.name}
                    </option>
                  );
                }
                return (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
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
    </>
  );
};

export default StreetEdit;
