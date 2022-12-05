import React from "react";
import { StyledInput } from "./style.js";

export const Input = ({ text, register, placeholder, name }) => {
  return (
    <>
      <StyledInput>
        <label htmlFor={name}>{text}</label>
        <input id={name} placeholder={placeholder} type={name} {...register} />
      </StyledInput>
    </>
  );
};
