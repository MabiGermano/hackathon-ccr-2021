import React from "react";

const Input = ({name, label, placeholder, ...rest}) => {
   
    return(
        <div className="input-field">
            <input placeholder={placeholder} id={name} type="text" className="validate" {...rest}/>
            <label htmlFor={name}>{label}</label>
        </div>
    );
}

export default Input;