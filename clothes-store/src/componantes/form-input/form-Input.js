import React from "react"; 

import './form-Input.styles.scss' 

export default function FormInput({ hChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={hChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label> 
      ) : null}
    </div>
  );
}
