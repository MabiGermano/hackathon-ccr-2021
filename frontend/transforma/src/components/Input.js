import React from "react";

const Input = ({name, label}) => {
    return(
        <div className="input-field">
            <input placeholder="Placeholder" id={name} type="text" className="validate"/>
            <label htmlFor={name}>{label}</label>
        </div>
    );
}

export default Input;