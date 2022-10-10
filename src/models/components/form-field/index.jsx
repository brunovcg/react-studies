import StyledFormField from "./styles";
import { useState } from "react";

function FormField({
  label,
  fieldType = "input",
  type = "text",
  options,
  optionsValue = "id",
  optionsTitle = "name",
  disabled,
  error,
  autoComplete = false,
  name,
  placeholder,
  onChange,
  value = "",
  register = () => {},
}) {
  const [inputValue, setInputValue] = useState(value);
  const handleChange = (e) => {
    onChange?.(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <StyledFormField>
      {label && <label>{label}</label>}
      {fieldType === "select" ? (
        <select
          disabled={disabled}
          onChange={(evt) => console.log(evt.target.value)}
          {...register(name)}
          defaultValue={value}
        >
          {options.map((item, index) => (
            <option key={index} value={item[optionsValue]}>
              {item[optionsTitle]}
            </option>
          ))}
        </select>
      ) : (
        <input
          autoComplete={autoComplete ? "on" : "off"}
          type={type}
          value={inputValue}
          disabled={disabled}
          placeholder={placeholder}
          {...register(name)}
          onChange={handleChange}
        />
      )}
      <div className="error"> {error}</div>
    </StyledFormField>
  );
}

export default FormField;
