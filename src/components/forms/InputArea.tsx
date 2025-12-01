import React from "react";
import Error from "./Error";

interface Props {
  value: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  nextInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputArea = ({
  value,
  name,
  label,
  type,
  placeholder,
  nextInput,
  error,
}: Props) => {
  const getMax = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = 0 + dd;
    }

    if (mm < 10) {
      mm = 0 + mm;
    }

    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <>
      <div className="form-group">
        <label>{label}</label>
        <input
          id={name}
          defaultValue={value}
          max={label === "Data de Emissão" ? getMax() : 100}
          type={type}
          placeholder={placeholder}
          name={name}
          className="form-control"
          onChange={nextInput}
          required
        />
        <div className="help-block with-errors" />
        <Error errorText={error} />
      </div>
    </>
  );
};

export default InputArea;
