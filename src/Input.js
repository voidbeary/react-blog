import ErrorMessage from "./ErrorMessage";
import { useState } from "react";

function InputForm({ value, onChange, label, id, required }) {
  const [isBlurred, setIsBlurred] = useState(false);

  function handleBlur() {
    setIsBlurred(true);
  }
  const newLabel = required ? label + "*" : label;

  const should_show_error = required && isBlurred && !value;
  const className = should_show_error
    ? "shadow-md focus:outline-none focus:ring-2 ring-1 ring-red-600 p-2 my-2 rounded-md"
    : "shadow-md focus:ring-2 focus:ring-blue-600 p-2 my-2  rounded-md";

  return (
    <>
      <label htmlFor={id}>{newLabel}</label>
      <input
        id={id}
        placeholder={id}
        value={value}
        onChange={onChange}
        className={className}
        onBlur={handleBlur}
      ></input>
      {should_show_error && <ErrorMessage />}
    </>
  );
}
export default InputForm;
