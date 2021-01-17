import React, { useEffect } from "react";
import M from 'materialize-css';

const Select = ({ options, label, name, ...rest }) => {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('select');
      M.FormSelect.init(elems, {});
    });
  }, []);

  return (
    <div className="input-field">
      <select value="" id={name} className="browser-default" { ...rest }>
        <option value="" disabled hidden>{label}</option>
         {
          options.map((option, index) => {
            return <option key={option.value} value={option.value}>{option.label}</option>
          })
        }
      </select>

    </div>
  );
}

export default Select;
