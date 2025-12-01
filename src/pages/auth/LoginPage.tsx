import { useState, type FormEvent } from "react";
import Breadcrumb from "../../components/layout/header/Breadcrumb";
import useAuth from "../../hooks/useAuth";
import type { UserLogin } from "../../services/authServices";
import InputArea from "../../components/forms/InputArea";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState<UserLogin>({
    email: "",
    password: "",
    access: "",
  });

  const [error, setError] = useState<string>("");

  const nextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const userLogin = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    userLogin
      .mutateAsync(formData)
      .then(() => (location.href = "/"))
      .catch(() => {
        setError("Login ou senha incoreta!");
      });
  };
  return (
    <>
      <Breadcrumb
        breadcrumbTitle={`Iniciar Sessão`}
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
                          type="email"
                          label={"Email"}
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          nextInput={nextInput}
                        />
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <InputArea
                          type="password"
                          label={"Senha"}
                          name="password"
                          placeholder="Senha"
                          value={formData.password}
                          nextInput={nextInput}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                      <div className="form-group mg_top apbtn">
                        <button className="btn btn-success">
                          Iniciar Sessão
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="pd_top_40" />

                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <NavLink to={`/forgot-password`}>
                        Esqueci a senha!
                      </NavLink>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <NavLink to={`/create-account`}>Criar Conta</NavLink>
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

export default LoginPage;
