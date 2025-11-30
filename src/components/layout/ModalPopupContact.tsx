import { useState } from "react";
import useSendMessage, { type Message } from "../../hooks/cmz/useSendMessage";

interface Props {
  isContactPopup: boolean;
  handelContactPopup(value: boolean): void;
}

const ModalPopupContact = ({ isContactPopup, handelContactPopup }: Props) => {
  const [formData, setFormData] = useState<Message>({
    name: "",
    email: "",
    text: "",
    subject: "",
  });

  const messageServices = useSendMessage();

  const input = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setError("");
    setMessage("");
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    setError("");
    setMessage("");
    e.preventDefault();

    messageServices
      .mutateAsync({
        ...formData,
        email: formData.email,
        subject: "Messagem do Site",
        text: formData.text,
      })
      .then(() => setMessage("Mensagem enviada!"))
      .catch(() =>
        setError(
          "Infelizmente a sua mensagem não foi enviada. Por favor, tente mais tarde!"
        )
      );
  };
  return (
    <div
      className={`modal_popup one ${
        isContactPopup ? "contact-popup-visible" : ""
      }`}
    >
      <div className="modal-popup-inner">
        <div className="close-modal" onClick={() => handelContactPopup(false)}>
          <i className="fa fa-times" />
        </div>
        <div className="modal_box" style={{ padding: "10px" }}>
          <h2 className="text-center mt-2">Envia-nos uma mensagem</h2>
          <form
            id="contact-form"
            onSubmit={submit}
            encType="multipart/form-data"
          >
            <div className="row">
              <div className="col-md-6">
                <label>Nome</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={input}
                  required
                />
              </div>
              <div className="col-md-6">
                <label>Contacto</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={input}
                  required
                />
              </div>
              <div className="col-sm-12">
                <label>Mensagem</label>

                <textarea
                  className="form-control"
                  name="text"
                  id="text"
                  value={formData.text}
                  onChange={input}
                  required
                ></textarea>
              </div>

              {message && (
                <div className="alert alert-success mt-2" role="alert">
                  {message}
                </div>
              )}
              {error && (
                <div className="alert alert-danger mt-2" role="alert">
                  {error}
                </div>
              )}

              <div className="col-sm-12">
                <div className="form-group mg_top apbtn mt-2">
                  <button className="btn btn-success">Enviar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalPopupContact;
