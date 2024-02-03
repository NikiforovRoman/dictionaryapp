import { React, useState, useEffect } from "react";
import s from "./select.module.scss";

const Select = ({ options }) => {
  const [select, setSelect] = useState('');
  useEffect(() => {
    const input = document.querySelector('.search__input');
    const options = document.querySelectorAll('.select__option');

    options.forEach((option) => {
        option.style.fontFamily = `${select}, Arial, sans-serif`;
    });
    input.style.fontFamily = `${select}, Arial, sans-serif`;
    document.body.style.fontFamily = `${select}, Arial, sans-serif`;
  }, [select]);
  return (
    <select
      className={s.select__options}
      value={select}
      onChange={(evt) => {
        setSelect(evt.target.value);
      }}
    >
      {options.map((option) => (
        <option
          key={option.value}
          className={`${s.select__option} select__option`}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
