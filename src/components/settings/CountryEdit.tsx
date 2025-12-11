import React, { useState } from "react";
import { type Country } from "../../hooks/certificate/useCountries";
import { useCountryAdd } from "../../hooks/certificate/adds/extras/useCountryAdd";
interface Props {
  country: Country;
}
const CountryEdit = ({ country }: Props) => {
  const [saved, setSaved] = useState(false);

  const [formData, setFormData] = useState<Country>({
    id: country.id,
    name: country.name,
    code: country.code,
  });

  const nextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value == "-1" ? undefined : e.target.value,
    });
  };

  const addCountry = useCountryAdd(country.id);
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
          <div className="col-sm-12 col-md-4">
            <label>Nome</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder={"Escreva o nome do país"}
              defaultValue={""}
              value={formData.name}
              onChange={nextInputChange}
              required
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <label>Indicativo</label>
            <input
              name="code"
              id="code"
              type="text"
              placeholder={"Escreva o indicativo do país"}
              defaultValue={""}
              value={formData.code}
              onChange={nextInputChange}
              required
            />
          </div>
          <div className="col-sm-12 col-md-4">
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

export default CountryEdit;
