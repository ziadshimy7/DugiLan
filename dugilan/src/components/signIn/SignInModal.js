import React, { useEffect, useRef, useState } from "react";
import styles from "./SignInModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import useInput from "../../hooks/useInput";
import Input from "../UI//input/Input";
import { useAuth } from "../../contexts/AuthContext";
const SignInModal = ({ modalHandler, signupToggleHandler }) => {
  const [invalidUserOrPassword, setInvalidUserOrPassword] = useState(false);
  const { login } = useAuth();
  const {
    value: usernameValue,
    onChangeInputHandler: onUsernameChangeHandler,
    onBlurInputHandler: onUsernameBlurHandler,
    isInputValid: isUsernameInputValid,
    reset: resetUsernameInput,
    inputHasErrors: usernameHasErrors,
  } = useInput((value) => value.trim() !== "" && value.length > 6);
  const {
    value: passwordValue,
    onChangeInputHandler: onPasswordChangeHandler,
    onBlurInputHandler: onPasswordBlurHandler,
    isInputValid: isPasswordInputValid,
    reset: resetPassword,
    inputHasErrors: passwordHasErrors,
  } = useInput(
    (value) => value.trim() !== "" && value.length > 8 && /\d/.test(value)
  );
  const usernameInput = useRef();
  useEffect(() => {
    usernameInput.current.focus();
  }, []);
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const authentication = await login(usernameValue, passwordValue);
    if (!authentication) {
      setInvalidUserOrPassword(true);
      return;
    }
    resetUsernameInput();
    resetPassword();
    modalHandler(false);
  };
  let formIsValid = isUsernameInputValid && isPasswordInputValid;
  if (!isUsernameInputValid || !isPasswordInputValid) formIsValid = false;
  return (
    <div className={`${styles["dugilan__signIn"]}`}>
      <h3>Login</h3>
      <AiOutlineClose
        size="25"
        className={styles["dugilan__signIn-close_icon"]}
        onClick={() => modalHandler(false)}
      />

      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
        className={styles["dugilan__signIn-form"]}
        action=""
      >
        <Input
          id="username"
          type="text"
          label="Username"
          placeholder="Enter Username"
          reference={usernameInput}
          onChange={onUsernameChangeHandler}
          onBlur={onUsernameBlurHandler}
          value={usernameValue}
          required={true}
        />
        {usernameHasErrors && (
          <p className={styles["dugilan__signIn-error_text"]}>
            Please enter a valid username
          </p>
        )}
        <Input
          id="password"
          type="password"
          placeholder="**********"
          label="password"
          onChange={onPasswordChangeHandler}
          onBlur={onPasswordBlurHandler}
          value={passwordValue}
          required={true}
          showPassword={true}
        />
        {passwordHasErrors && (
          <p className={styles["dugilan__signIn-error_text"]}>
            Please enter a valid password
          </p>
        )}
        {invalidUserOrPassword && (
          <p className={styles["dugilan__signIn-error_text"]}>
            Invalid username/password,Please try again.
          </p>
        )}
        <div className={styles["dugilan__signIn-form_button"]}>
          <button disabled={!formIsValid}>Login</button>
          <input onClick={(e) => {}} id="checkbox1" type="checkbox" />
          <label htmlFor="checkbox1">Remember me</label>
        </div>
        <div className={styles["dugilan__modal-signup"]}>
          <p>
            Don't have an account ?
            <a
              onClick={() => signupToggleHandler(true)}
              className="gradient__text"
              href="#signup"
            >
              &nbsp;&nbsp;Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInModal;
