import React, { useEffect, useState } from "react";

interface Props {
  value: number | string;
  name: string;
  label: string;
  nextInput: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: any[];
}

const SelectedArea = ({ value, name, label, nextInput, data }: Props) => {
  const [currentValue, setCurrentValue] = useState<number | string>();

  useEffect(() => setCurrentValue(value), [value]);

  return (
    <>
      <div className="form-group">
        <label>{label}</label>
        <select
          id={name}
          value={currentValue}
          name={name}
          className="form-control"
          onChange={nextInput}
          required
        >
          <option value={""}>{label}...</option>
          {data.map((item) => {
            if (item.id == currentValue) {
              return (
                <option value={item.id} key={item.id} selected>
                  {item.name
                    ? `${item.name}${item.surname ? " " + item.surname : ""}`
                    : item.title}
                </option>
              );
            } else {
              return (
                <option value={item.id} key={item.id}>
                  {item.name
                    ? `${item.name}${item.surname ? " " + item.surname : ""}`
                    : item.title}
                </option>
              );
            }
          })}
        </select>
      </div>
    </>
  );
};

export default SelectedArea;
