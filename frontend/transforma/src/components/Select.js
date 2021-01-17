import React from "react";

const Select = ({option}) => {
  return (
    <div className="input-field">
        <select id={option}>
          <option value="" disabled selected>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Materialize Select</label>
    </div>
  )
}

export default Select;
