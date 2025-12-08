import React, { useState } from "react";
import useModelStore from "../../stores/useModelStores";
import useInstituitions from "../../hooks/certificate/useInstituitions";
import useUniversities from "../../hooks/certificate/useUniversities";
import useCountries from "../../hooks/certificate/useCountries";
import useStreets from "../../hooks/certificate/useStreets";
import useBuildings from "../../hooks/certificate/useBuildings";
import useCemiterios from "../../hooks/certificate/useCemiterio";
import useCovals from "../../hooks/certificate/useCovals";
import useChanges from "../../hooks/certificate/useChanges";
import { useNavigate, useParams } from "react-router-dom";
import useTitle from "../../hooks/certificate/useTitle";
import type { CertificateSaving } from "../../hooks/certificate/useCertificatesInfinite";
import { useCertificateAdd } from "../../hooks/certificate/adds/useCertificateAdd";
import Preloader from "../../components/Preloader";
import Breadcrumb from "../../components/layout/header/Breadcrumb";
import MainNavCertificate from "../../components/certficate/MainNavCertificate";
import ChoosePersons from "../../components/certficate/ChoosePersons";
import { ModalPopupAtestado } from "../../components/certficate/ModalPopupAtestado";
import ModalPopupSimplePersons from "../../components/certficate/ModalPopupSimplePersons";
import ModalPopupSinglePerson from "../../components/certficate/ModalPopupSinglePerson";
import ModalPopupParents from "../../components/certficate/ModalPopupParents";
import ModalPopupDate from "../../components/certficate/ModalPopupDate";

const CertificateCreatePage = () => {
  const { mainPerson, secondaryPerson } = useModelStore((s) => s.modelForm);
  const { data: instituitions } = useInstituitions();
  const { data: universities } = useUniversities();
  const { data: countries } = useCountries();

  const { data: streets } = useStreets();
  const { data: buildings } = useBuildings();
  const { data: cemiterios } = useCemiterios();
  const { data: covals } = useCovals();
  const { data: changes } = useChanges();

  const { titleId, certificateId } = useParams<{
    titleId: string;
    certificateId: string;
  }>();
  const navigate = useNavigate();
  if (!titleId || isNaN(parseInt(titleId))) {
    navigate("/");
  }

  const { data: titleType, isLoading } = useTitle(parseInt(titleId || "0"));
  const [error, setError] = useState("");
  const [certificate, setCertificate] = useState<CertificateSaving>();
  const [formData, setFormData] = useState<CertificateSaving>({
    instituition: undefined,
    university: undefined,
    date: undefined,
    country: undefined,
    years: undefined,
    street: undefined,
    building_type: undefined,
    object: undefined,
    infra: undefined,
    metros: undefined,
    cemiterio: undefined,
    entero_date: undefined,
    died_date: undefined,
    coval: undefined,
    change: undefined,
    id:
      certificateId && !isNaN(parseInt(certificateId))
        ? parseInt(certificateId)
        : undefined,
  });

  const registerModelOne = (data: CertificateSaving) => {
    saveNow(data);
  };

  const registerModelTwo = (data: CertificateSaving) => {
    if (titleType?.id == 3 && !data.university) {
      setError("Escolha universidade");
      return;
    } else if (
      (titleType?.id == 3 || titleType?.id == 12 || titleType?.id == 13) &&
      !data.instituition
    ) {
      setError("Escolha instituição");
      return;
    }

    setFormData({ ...data });
    saveNow({
      ...data,
      // id: data.id,
      university: !data.university ? undefined : data.university,
      instituition: data.instituition,
    });
  };

  const registerModelThree = (data: CertificateSaving) => {
    saveNow({ ...data, date: data.date });

    // console.log(body);
    // return;
  };

  const registerModelSeventh = (data: CertificateSaving) => {
    if (!data.country) {
      setError("Escolha o país");
    }
    if (!data.years) {
      setError("Insira anos");
    }
    saveNow({ ...data, years: data.years, country: data.country });
  };

  const registerModelAutoCosntrucao = (data: CertificateSaving) => {
    if (!data.building_type) {
      setError("Escolha tipo de construção");
      return;
    }
    if (!data.street) {
      setError("Escolha a localidade");
      return;
    }
    saveNow({
      ...data,
      building_type: data.building_type,
      street: data.street,
    });
  };
  const registerModelLicBarraca = (data: CertificateSaving) => {
    saveNow({ ...data, object: data.object, street: data.street });
  };
  const registerModelLicencaBuffet = (data: CertificateSaving) => {
    saveNow({
      ...data,
      street: data.street,
      infra: data.infra,
      metros: data.metros,
    });
  };

  const registerModelEnterro = (data: CertificateSaving) => {
    saveNow({
      ...data,
      cemiterio: data.cemiterio,
      entero_date: data.entero_date,
      died_date: data.died_date,
      street: data.street,
    });
  };

  const registerModelCertCompraCoval = (data: CertificateSaving) => {
    saveNow({ ...data, coval: data.coval });
  };

  const registerModelAutoModCoval = (data: CertificateSaving) => {
    saveNow({ ...data, coval: data.coval, change: data.change });
  };

  const certificateAdd = useCertificateAdd<CertificateSaving>(
    parseInt(titleId || "0")
  );

  const saveNow = (body: CertificateSaving) => {
    certificateAdd
      .mutateAsync(body)
      .then((res) => {
        setError("");
        setCertificate(res);
      })
      .catch(() => {
        setError(`Complete o informação do/a ${mainPerson?.name}.`);
      });
  };

  const nextInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value == "-1" ? undefined : e.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let body = {
      main_person: mainPerson?.id,
      secondary_person: secondaryPerson?.id ? secondaryPerson.id : undefined,
      ...formData,
    };

    if (
      [1, 5, 6, 7, 9, 10, 11, 15, 16, 17, 19, 20, 21, 22, 30, 34].includes(
        titleType?.id || 0
      )
    ) {
      registerModelOne(body);
    } else if ([3, 12, 13].includes(titleType?.id || 0)) {
      registerModelTwo(body);
    } else if ([2, 4, 8].includes(titleType?.id || 0)) {
      registerModelThree(body);
    } else if ([18].includes(titleType?.id || 0)) {
      registerModelSeventh(body);
    } else if ([23, 28].includes(titleType?.id || 0)) {
      registerModelAutoCosntrucao(body);
    } else if ([24].includes(titleType?.id || 0)) {
      registerModelCertCompraCoval(body);
    } else if ([25].includes(titleType?.id || 0)) {
      registerModelAutoModCoval(body);
    } else if ([27].includes(titleType?.id || 0)) {
      registerModelLicBarraca(body);
    } else if ([29, 32].includes(titleType?.id || 0)) {
      registerModelLicencaBuffet(body);
    } else if ([33].includes(titleType?.id || 0)) {
      registerModelEnterro(body);
    }
    return;
  };

  const [isDocumentPopup, setIsDocumentPopup] = useState(false);
  const handelDocumentPopup = () => {
    setIsDocumentPopup(!isDocumentPopup);
  };
  const [isPersonsPopup, setIsPersonsPopup] = useState(false);
  const handelPersonsPopup = () => {
    setIsPersonsPopup(!isPersonsPopup);
  };
  const [isPersonPopup, setIsPersonPopup] = useState(false);
  const handelPersonPopup = () => {
    setIsPersonPopup(!isPersonPopup);
  };
  const [isParentsPopup, setIsParentsPopup] = useState(false);
  const handelParentsPopup = () => {
    setIsParentsPopup(!isParentsPopup);
  };
  const [isDatePopup, setIsDatePopup] = useState(false);
  const handelDatePopup = () => {
    setIsDatePopup(!isDatePopup);
  };

  if (isLoading) return <Preloader />;
  return (
    <>
      <Breadcrumb
        breadcrumbTitle={`${titleType?.certificate_type?.name} ${
          titleType?.goal || ""
        } ${titleType?.name}`}
        breadcrumbImage="/assets/images/contact.webp"
      />
      {titleType && (
        <MainNavCertificate
          type={titleType?.certificate_type?.id}
          page={"persons"}
        />
      )}

      <section className="contact-section">
        <div className="pd_top_40" />
        <div className="container">
          <div className="align-items-center">
            <div className="contact_form_box_all type_one">
              <div className="contact_form_shortcode">
                <form
                  id="contact-form"
                  // onSubmit={handleSubmit(submitHandler)}
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
                  <ChoosePersons setCertificate={setCertificate} />
                  {titleType?.certificate_type.id == 1 && (
                    <React.Fragment>
                      <div className="row">
                        {[3, 12, 13].includes(titleType?.id) && (
                          <React.Fragment>
                            <div className="col-sm-12 col-md-4">
                              <label>
                                Instituição
                                <br />
                              </label>
                              <select
                                name="instituition"
                                id="instituition"
                                className="form-control"
                                onChange={nextInputChange}
                              >
                                <option value={-1}>Selecionar...</option>
                                {instituitions?.map((item) => (
                                  <option value={item.id} key={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <label>
                                Universidade
                                <br />
                              </label>
                              <select
                                name="university"
                                id="university"
                                className="form-control"
                                onChange={nextInputChange}
                              >
                                <option value={-1}>Selecionar...</option>
                                {universities?.map((item) => (
                                  <option value={item.id} key={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </React.Fragment>
                        )}
                        {[2, 4, 8].includes(titleType?.id) && (
                          <div className="col-sm-12 col-md-4">
                            <label>
                              Data
                              <br />
                            </label>
                            <input
                              name="date"
                              id="date"
                              type={"date"}
                              className="form-control"
                              onChange={nextInputChange}
                            />
                          </div>
                        )}
                        {[18].includes(titleType?.id) && (
                          <React.Fragment>
                            <div className="col-sm-12 col-md-4">
                              <label>
                                Anos
                                <br />
                              </label>
                              <input
                                name="years"
                                id="years"
                                type="number"
                                placeholder={"Anos"}
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
                                required
                              >
                                <option value={-1}>Selecionar...</option>
                                {countries?.map((item) => (
                                  <option value={item.id} key={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </React.Fragment>
                        )}
                      </div>
                      <div className="row">
                        {titleType?.id == 12 && (
                          <div className="col-sm-12 col-md-6">
                            <div className="form-group mg_top apbtn">
                              <label></label>
                              <span
                                className="btn btn-success"
                                onClick={handelPersonsPopup}
                              >
                                Adicionar várias pessoas
                              </span>
                            </div>
                          </div>
                        )}
                        {titleType?.id == 12 && (
                          <div className="col-sm-12 col-md-6">
                            <div className="form-group mg_top apbtn">
                              <label></label>
                              <span
                                className="btn btn-info"
                                onClick={handelPersonPopup}
                              >
                                Adicionar uma pessoa
                              </span>
                            </div>
                          </div>
                        )}
                        {titleType?.id == 18 && (
                          <div className="col-sm-12 col-md-3">
                            <div className="form-group mg_top apbtn">
                              <label></label>
                              <span
                                className="btn btn-success"
                                onClick={handelParentsPopup}
                              >
                                Adicionar Parentes
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  )}

                  {titleType?.certificate_type.id != 1 && (
                    <React.Fragment>
                      {[24, 25].includes(titleType?.id || 0) && (
                        <React.Fragment>
                          <div className="row">
                            <div className="col-sm-12 col-md-6">
                              <label>
                                Covais
                                <br />
                              </label>
                              <select
                                name="coval"
                                id="coval"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              >
                                <option value={-1}>Selecionar...</option>
                                {covals?.map((item) => (
                                  <option value={item.id} key={item.id}>
                                    {item.number}
                                    {item.nick_number
                                      ? ` antigo ${item.nick_number}`
                                      : ""}
                                  </option>
                                ))}
                              </select>
                            </div>
                            {(titleType?.id || 0) == 25 && (
                              <div className="col-sm-12 col-md-6">
                                <label>
                                  Alteração
                                  <br />
                                </label>
                                <select
                                  name="change"
                                  id="change"
                                  className="form-control"
                                  onChange={nextInputChange}
                                  required
                                >
                                  <option value={-1}>Selecionar...</option>
                                  {changes?.map((item) => (
                                    <option value={item.id} key={item.id}>
                                      {item.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            )}
                          </div>
                        </React.Fragment>
                      )}
                      {[23, 28].includes(titleType?.id || 0) && (
                        <React.Fragment>
                          <div className="row">
                            <div className="col-sm-12 col-md-4">
                              <label>
                                Construções
                                <br />
                              </label>
                              <select
                                name="building_type"
                                id="building_type"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              >
                                <option value={-1}>Selecionar...</option>
                                {buildings?.map((item) => (
                                  <option value={item.id} key={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <label>
                                Localidade
                                <br />
                              </label>
                              <select
                                name="street"
                                id="street"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              >
                                <option value={-1}>Selecionar...</option>
                                {streets?.map((item) => (
                                  <option value={item.id} key={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                      {[27].includes(titleType?.id || 0) && (
                        <React.Fragment>
                          <div className="row">
                            <div className="col-sm-12 col-md-4">
                              <label>
                                Localidade
                                <br />
                              </label>
                              <select
                                name="street"
                                id="street"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              >
                                <option value={-1}>Selecionar...</option>
                                {streets?.map((item) => (
                                  <option value={item.id} key={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <label>
                                Volume
                                <br />
                              </label>
                              <select
                                name="range"
                                id="range"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              >
                                <option value={-1}>Selecionar...</option>
                                {[
                                  { name: "Básico", id: "B" },
                                  { name: "Médio", id: "M" },
                                  { name: "Largo", id: "C" },
                                ]?.map((item) => (
                                  <option value={item.id} key={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <label>
                                Objecto
                                <br />
                              </label>
                              <input
                                name="object"
                                id="object"
                                type="text"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              />
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                      {[29, 32].includes(titleType?.id || 0) && (
                        <React.Fragment>
                          <div className="row">
                            <div className="col-sm-12 col-md-4">
                              <label>
                                Localidade
                                <br />
                              </label>
                              <select
                                name="street"
                                id="street"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              >
                                <option value={-1}>Selecionar...</option>
                                {streets?.map((item) => (
                                  <option value={item.id} key={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <label>
                                Infra-estrutura
                                <br />
                              </label>
                              <input
                                name="infra"
                                id="infra"
                                type="text"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              />
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <label>
                                Metros
                                <br />
                              </label>
                              <input
                                name="metros"
                                id="metros"
                                type="number"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              />
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                      {[33].includes(titleType?.id || 0) && (
                        <React.Fragment>
                          <div className="row">
                            <div className="col-sm-12 col-md-3">
                              <label>
                                Cemitério
                                <br />
                              </label>
                              <select
                                name="cemiterio"
                                id="cemiterio"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              >
                                <option value={-1}>Selecionar...</option>
                                {cemiterios?.map((item) => (
                                  <option value={item.id} key={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-12 col-md-3">
                              <label>
                                Localidade
                                <br />
                              </label>
                              <select
                                name="street"
                                id="street"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              >
                                <option value={-1}>Selecionar...</option>
                                {streets?.map((item) => (
                                  <option value={item.id} key={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-12 col-md-3">
                              <label>
                                Data de Falecimento
                                <br />
                              </label>
                              <input
                                name="died_date"
                                id="died_date"
                                type="date"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              />
                            </div>
                            <div className="col-sm-12 col-md-3">
                              <label>
                                Data de Enterro
                                <br />
                              </label>
                              <input
                                name="entero_date"
                                id="entero_date"
                                type="date"
                                className="form-control"
                                onChange={nextInputChange}
                                required
                              />
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                      <div className="row mb-4">
                        {[29, 32].includes(titleType?.id || 0) && (
                          <div className="col-sm-12 col-md-3">
                            <div className="form-group mg_top apbtn">
                              <label></label>
                              <button
                                className="btn btn-success"
                                onClick={handelDatePopup}
                              >
                                Adicionar Datas
                              </button>
                            </div>
                          </div>
                        )}
                        {[33].includes(titleType?.id || 0) && (
                          <div className="col-sm-12 col-md-3">
                            <div className="form-group mg_top apbtn">
                              <label></label>
                              <button
                                className="btn btn-success"
                                onClick={handelPersonPopup}
                              >
                                Adicionar Pessoa Falecida
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  )}

                  <div className="row mt-4">
                    <div className="col-sm-12 col-md-3">
                      <div className="form-group mg_top apbtn">
                        <label></label>
                        <button
                          disabled={!!certificate || !!!mainPerson}
                          className="btn btn-success"
                        >
                          Salvar
                        </button>
                      </div>
                    </div>
                  </div>

                  {error && (
                    <div className="description_box">
                      <p
                        onClick={handelDocumentPopup}
                        style={{ cursor: "pointer" }}
                        className="text-danger"
                      >
                        {error}
                      </p>
                    </div>
                  )}
                  {certificate && (
                    <div className="description_box">
                      <p
                        onClick={handelDocumentPopup}
                        style={{ cursor: "pointer" }}
                      >
                        Atestado criado, clica aqui para vizualizar
                      </p>
                    </div>
                  )}
                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="pd_top_40" />
      </section>
      <ModalPopupAtestado
        isDocumentPopup={isDocumentPopup}
        handelDocumentPopup={handelDocumentPopup}
        certificate={certificate}
      />
      <ModalPopupSimplePersons
        isPersonsPopup={isPersonsPopup}
        handelPersonsPopup={handelPersonsPopup}
        titleType={titleType}
      />
      <ModalPopupSinglePerson
        isPersonPopup={isPersonPopup}
        handelPersonPopup={handelPersonPopup}
        titleType={titleType}
      />
      <ModalPopupParents
        isParentsPopup={isParentsPopup}
        handelParentsPopup={handelParentsPopup}
        titleType={titleType}
      />
      <ModalPopupDate
        isDatePopup={isDatePopup}
        handelDatePopup={handelDatePopup}
        titleType={titleType}
      />
    </>
  );
};

export default CertificateCreatePage;
