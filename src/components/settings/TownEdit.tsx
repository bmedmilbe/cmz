import { useState } from "react";
import useCounties from "../../hooks/certificate/useCounties";
import { type Town } from "../../hooks/certificate/useTowns";
import {
  useTownAdd,
  type TownEntry,
} from "../../hooks/certificate/adds/extras/useTownAdd";
interface Props {
  town: Town;
}
const TownEdit = ({ town }: Props) => {
  const { data: counties } = useCounties();

  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState<TownEntry>({
    name: town.name,
    id: 0,
    slug: town.slug,
    county: town.country,
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
  const addTown = useTownAdd(town.id);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTown.mutateAsync(formData).then((res) => {
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
            <label>Cidade</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder={"Escreva o nome da cidade"}
              defaultValue={""}
              onChange={nextInputChange}
              required
              value={formData.name}
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <label>
              Distrito
              <br />
            </label>
            <select
              name="county"
              id="county"
              className="form-control"
              onChange={nextInputChange}
            >
              <option value={""}>Selecionar...</option>
              {counties?.map((item) => {
                if (item.id == formData.county) {
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

export default TownEdit;
