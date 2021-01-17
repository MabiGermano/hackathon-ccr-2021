import React from "react";

const Input = () => {
    return(
        <div className="input-field">
            <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
            <label htmlFor="first_name">First Name</label>
        </div>
    );
}

export default Input;