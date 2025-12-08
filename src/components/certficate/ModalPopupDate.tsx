import { useState } from "react";
import { useDateAdd } from "../../hooks/certificate/extras/useDateAdd";
import {
  useDates,
  type DateEntry,
} from "../../hooks/certificate/extras/useDates";
import type { CertificateTitle } from "../../hooks/certificate/useTitles";
import InputArea from "../forms/InputArea";
import DeleteDateButton from "./DeleteDateButton";

interface ModalPopupDateProps {
  isDatePopup: boolean;
  handelDatePopup: () => void;
  titleType?: CertificateTitle;
}

const ModalPopupDate = ({
  isDatePopup,
  handelDatePopup,
  titleType,
}: ModalPopupDateProps) => {
  const { data: dates } = useDates<DateEntry>(titleType?.id || 0);
  const [formData, setFormData] = useState<DateEntry>({
    id: 0,
    date: "",
  });

  const dateAdd = useDateAdd<DateEntry>(titleType?.id || 0);

  const nextInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const nextSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!dates?.map((d) => d.date).includes(formData.date))
      dateAdd.mutateAsync(formData).then().catch();
  };
  return (
    <>
      <div
        className={`modal_popup one ${
          isDatePopup ? "contact-popup-visible" : ""
        }`}
      >
        <div className="modal-popup-inner">
          <div className="close-modal" onClick={handelDatePopup}>
            <i className="fa fa-times" />
          </div>
          <div className="modal_box" style={{ padding: "10px" }}>
            <form
              id="contact-form"
              onSubmit={nextSubmit}
              encType="multipart/form-data"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <InputArea
                    name="date"
                    type="date"
                    label={"Data"}
                    placeholder={"Data"}
                    nextInput={nextInput}
                    value={formData.date}
                  />
                </div>

                <div className="col-sm-12">
                  <div className="form-group mg_top apbtn">
                    <button className="btn btn-success">Salvar</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="items" style={{ padding: "10px" }}>
              <div className="row items__titles">
                <div className="col-sm-12 col-md-9 items__title">Data</div>
                <div className="col-sm-12 col-md-3 items__title">Eliminar</div>
              </div>

              {dates?.map((date, key) => (
                <div className="row items__items" key={key}>
                  <div className="col-sm-12 col-md-9 items__item">
                    {date.date}
                  </div>

                  <DeleteDateButton titleType={titleType} date={date} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPopupDate;
