import React, { useState } from "react";
import styles from "./Input.module.css";
import { BiHide, BiShow } from "react-icons/bi";
const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const onShowPasswordHandler = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };
  const showHidePasswordToggle = showPassword ? (
    <BiShow
      onClick={onShowPasswordHandler}
      className={styles["dugilan__signIn-icon"]}
    />
  ) : (
    <BiHide
      onClick={onShowPasswordHandler}
      className={styles["dugilan__signIn-icon"]}
    />
  );

  return (
    <>
      <label className={styles["dugilan__signIn-label"]} htmlFor={props.id}>
        {props.label}
      </label>
      <div className={styles["dugilan__signIn-input_container"]}>
        <input
          autoComplete="on"
          className={styles["dugilan__signIn-form_input"]}
          id={props.id}
          type={showPassword ? "text" : props.type}
          placeholder={props.placeholder}
          ref={props.reference}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          required={true}
        />
        {props.showPassword && showHidePasswordToggle}
      </div>
    </>
  );
};

export default Input;
