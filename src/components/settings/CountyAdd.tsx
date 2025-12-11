import { useState } from "react";
import useCounties from "../../hooks/certificate/useCounties";
import useCountries from "../../hooks/certificate/useCountries";
import {
  useCountyAdd,
  type CountyEntry,
} from "../../hooks/certificate/adds/extras/useCountyAdd";
import CountyEdit from "./CountyEdit";

const CountyAdd = () => {
  const { data: countries } = useCountries();
  const { data: counties } = useCounties();
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState<CountyEntry>({
    name: "",
    id: 0,
    slug: "",
    country: "",
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
  const addCounty = useCountyAdd();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addCounty.mutateAsync(formData).then((res) => {
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
            <label>Distrito</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder={"Escreva o nome do distrito"}
              defaultValue={""}
              onChange={nextInputChange}
              required
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <label>
              País
              <br />
            </label>
            <select
              name="country"
              id="country"
              className="form-control"
              onChange={nextInputChange}
            >
              <option value={-1}>Selecionar...</option>
              {countries?.map((item) => {
                if (item.id == formData.country) {
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
      <hr />
      {counties?.map((item, k) => (
        <CountyEdit county={item} key={k} />
      ))}
    </>
  );
};

export default CountyAdd;
