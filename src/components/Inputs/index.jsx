import { StyledInput } from "./style.js";

export const Input = ({ text, register, placeholder, name, type }) => {
  return (
    <>
      <StyledInput>
        <label htmlFor={name}>{text}</label>
        <input id={name} placeholder={placeholder} type={type} {...register} />
      </StyledInput>
    </>
  );
};
