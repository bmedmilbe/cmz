import { useState, type FormEvent } from "react";
import { NavLink } from "react-router-dom";
import InputArea from "../../components/forms/InputArea";
import Breadcrumb from "../../components/layout/header/Breadcrumb";
import useAuthRegister from "../../hooks/useAuthRegister";
import type { UserRegister } from "../../services/authServices";

const RegisterPage = () => {
  const [formData, setFormData] = useState<UserRegister>({
    email: "",
    re_email: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
    username: "",
    pathner: 2,
  });

  const [error, setError] = useState<string>("");

  const nextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const userRegister = useAuthRegister();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    setError("");

    userRegister
      .mutateAsync({
        ...formData,
        username: formData.email,
      })
      .then()
      .catch((err) => {
        if (
          err.response.data.email[0] == "user with this email already exists."
        ) {
          setError("Já há uma conta usando este email.");
        } else {
          setError("Algo está mal. Tente mais tarde.");
        }
      });
  };
  return (
    <>
      <Breadcrumb
        breadcrumbTitle={`Criar conta`}
        breadcrumbImage="/assets/images/contact.webp"
      />
      <section className="contact-section">
        <div className="pd_top_40" />
        <div className="container">
          <div className="align-items-center">
            <div className="contact_form_box_all type_one">
              <div className="contact_form_box_inner">
                <div className="contact_form_shortcode">
                  {error && <div className="alert alert-danger">{error}</div>}
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
                        <InputArea
                          type="text"
                          label={"Nome"}
                          name="first_name"
                          value={formData.first_name}
                          placeholder={"Nome"}
                          nextInput={nextInput}
                        />
                      </div>

                      <div className="col-sm-12 col-md-6">
                        <InputArea
                          type="text"
                          label={"Sobrenome"}
                          name="last_name"
                          value={formData.last_name}
                          placeholder={"Sobrenome"}
                          nextInput={nextInput}
                        />
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-4">
                        <InputArea
                          type="email"
                          label={"Email"}
                          name="email"
                          value={formData.email}
                          placeholder={"Email"}
                          nextInput={nextInput}
                        />
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-4">
                        <InputArea
                          type="password"
                          label={"Senha"}
                          name="password"
                          value={formData.password}
                          placeholder={"Senha"}
                          nextInput={nextInput}
                        />
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-4">
                        <InputArea
                          type="password"
                          label={"Confirmar a Senha"}
                          name="confirm_password"
                          value={formData.confirm_password}
                          placeholder={"Senha"}
                          nextInput={nextInput}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                      <div className="form-group mg_top apbtn">
                        <button className="btn btn-success">Criar Conta</button>
                      </div>
                    </div>
                  </form>
                  <div className="row ">
                    <div className="pd_top_40" />

                    <div className="col-sm-12 mt-10">
                      <NavLink to={`/login`}>Efetuar Login</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pd_top_40" />
      </section>
    </>
  );
};

export default RegisterPage;
