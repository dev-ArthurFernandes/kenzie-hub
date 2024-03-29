import StyledSelect from "./style.js"

export const Select = ({ name, text, children, register }) => {
  return (
    <>
      <StyledSelect >
        <label htmlFor={name}>{text}</label>
        <select id={name} {...register}>
          {children}
        </select>
      </StyledSelect>
    </>
  )
}