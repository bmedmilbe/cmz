import { useState } from "react";
import { type County } from "../../hooks/certificate/useCounties";
import useCountries from "../../hooks/certificate/useCountries";
import {
  useCountyAdd,
  type CountyEntry,
} from "../../hooks/certificate/adds/extras/useCountyAdd";
interface Props {
  county: County;
}
const CountyEdit = ({ county }: Props) => {

  const { data: countries } = useCountries();
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState<CountyEntry>({
    name: county.name,
    id: 0,
    slug: county.slug,
    country: county.country.id,
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
  const editExtras = useCountyAdd(county.id);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editExtras.mutateAsync(formData).then((res) => {
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
            <label>Distrito</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder={"Escreva o nome do distrito"}
              defaultValue={""}
              onChange={nextInputChange}
              required
              value={formData.name}
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
              <option value={""}>Selecionar...</option>
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

export default CountyEdit;
