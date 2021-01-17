import React from 'react';

const RadioButton = ({name, label, value, checked}) => {

    return (
        <p>
            <label>
                <input class="with-gap" name={name} value={value} checked={checked} type="radio"/>
                <span>{label}</span>
            </label>
        </p>
    );
}

export default RadioButton;