import React, { useEffect, useState } from "react";

interface Props {
  value: number;
  name: string;
  label: string;
  nextInput: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: any[];
}

const NoSelectedArea = ({ value, name, label, nextInput, data }: Props) => {
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
        >
          <option value={""} key={0}>
            {label}...
          </option>
          {data.map((item) => {
            if (item.id == value) {
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

export default NoSelectedArea;
