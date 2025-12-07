import { useState } from "react";
import usePersonStoreQuery from "../../stores/usePersonStoreQuery";
import InputArea from "../forms/InputArea";
import type { queryType } from "./CertificateFilter";
import SelectedArea from "../forms/SelectedArea";

const PersonFilter = () => {
  const { resetPage, setOrdering, setSearch } = usePersonStoreQuery((s) => s);
  const [formData, setFormData] = useState<queryType>({
    search: "",
    ordering: 0,
    status: "",
  });
  const orderOptions = [
    { id: 0, title: "Mais Recente" },
    { id: 1, title: "Nome crescente" },
    { id: -1, title: "Nome decrescente" },
    { id: 2, title: "Data de nascimento crescente" },
    { id: -2, title: "Data de nascimento decrescente" },

    { id: 4, title: "Data de emissão crescente" },
    { id: -4, title: "Data de emissão decrescente" },
    { id: 5, title: "Número de ID crescente" },
    { id: -5, title: "Número de ID decrescente" },
  ];

  const nextInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (e.target.id === "search") {
      setSearch(e.target.value);
    }
    if (e.target.id === "ordering") {
      setOrdering(parseInt(e.target.value));
    }
    resetPage();
  };

  return (
    <>
      <div className="align-items-center">
        <div className="contact_form_box_all type_one">
          <div className="contact_form_shortcode">
            <form
              id="contact-form"
              encType="multipart/form-data"
              acceptCharset="UTF-8"
            >
              <div className="controls">
                <div className="row">
                  <div className="col-sm-12 col-md-8">
                    <InputArea
                      name="search"
                      type="text"
                      label={"Buscar"}
                      placeholder={"Escreva o nome ou número do documento"}
                      value={formData.search}
                      nextInput={nextInputChange}
                    />
                  </div>

                  <div className="col-sm-12 col-md-4">
                    <SelectedArea
                      name="ordering"
                      label={"Buscar"}
                      value={formData.ordering}
                      nextInput={nextInputChange}
                      data={orderOptions}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonFilter;
