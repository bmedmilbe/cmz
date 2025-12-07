import { useState } from "react";
import useCerificateStoreQuery from "../../stores/useCerificateStoreQuery";
import InputArea from "../forms/InputArea";
import SelectedArea from "../forms/SelectedArea";

export interface queryType {
  search: string;
  ordering: number;
  status: string;
}
const CertificateFilter = () => {
  const { setSearch, setOrdering, setStatus, resetPage } =
    useCerificateStoreQuery();

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
    { id: 3, title: "Número do documento crescente" },
    { id: -3, title: "Número do documento descrescente" },
    { id: 4, title: "Data de emissão crescente" },
    { id: -4, title: "Data de emissão decrescente" },
    { id: 5, title: "Número de ID crescente" },
    { id: -5, title: "Número de ID decrescente" },
  ];
  const statusOptions = [
    { id: "", title: "Todos" },
    { id: "P", title: "Pendente" },
    { id: "R", title: "Revisto" },
    { id: "C", title: "Completo" },
    { id: "F", title: "Incorrecto" },
  ];
  const nextInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.id === "search") {
      setSearch(e.target.value);
    }
    if (e.target.id === "ordering") {
      setOrdering(parseInt(e.target.value));
    }
    if (e.target.id === "status") {
      setStatus(e.target.value);
    }
    setFormData({ ...formData, [e.target.id]: e.target.value });
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
                  <div className="col-sm-12 col-md-6">
                    <InputArea
                      name="search"
                      type="text"
                      label={"Buscar"}
                      placeholder={"Escreva o nome ou número do documento"}
                      nextInput={nextInputChange}
                      value={formData.search}
                    />
                  </div>

                  <div className="col-sm-12 col-md-3">
                    <SelectedArea
                      value={formData.ordering}
                      name={"ordering"}
                      label="Ordernar"
                      nextInput={nextInputChange}
                      data={orderOptions}
                    />
                  </div>
                  <div className="col-sm-12 col-md-3">
                    <SelectedArea
                      value={formData.status}
                      name={"status"}
                      label="Estado"
                      nextInput={nextInputChange}
                      data={statusOptions}
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

export default CertificateFilter;
