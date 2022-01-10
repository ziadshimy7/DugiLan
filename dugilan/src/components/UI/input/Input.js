import React from "react";
import styles from "./Input.module.css";
const Input = (props) => {
  return (
    <>
      <label className={styles["dugilan__signIn-label"]} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        autoComplete="on"
        className={styles["dugilan__signIn-form_input"]}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        ref={props.reference}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        required={true}
      />
    </>
  );
};

export default Input;
