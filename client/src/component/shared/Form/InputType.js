import React from "react";

function InputType({ labelFor, labelText, inputType, value, onChange, name }) {
  return (
    <div className="mb-3">
      <label htmlFor={labelFor} className="form-label">
        {labelText}
      </label>
      <input
        type={inputType}
        className="form-control"
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default InputType;
