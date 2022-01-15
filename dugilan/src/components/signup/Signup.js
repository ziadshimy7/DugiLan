import React, { useEffect, useRef } from "react";
import styles from "./Signup.module.css";
import { AiOutlineClose } from "react-icons/ai";
import useInput from "../../hooks/useInput";
import Input from "../UI/input/Input";
import { useAuth } from "../../contexts/AuthContext";

const SignupModal = ({ modalHandler, signupToggleHandler }) => {
  const { signup } = useAuth();
  const {
    value: usernameValue,
    onChangeInputHandler: onUsernameChangeHandler,
    onBlurInputHandler: onUsernameBlurHandler,
    isInputValid: isUsernameInputValid,
    reset: resetUsernameInput,
    inputHasErrors: usernameHasErrors,
  } = useInput(
    (value) => value.trim() !== "" && value.length > 6 && value.includes("@")
  );
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
  const {
    value: confirmPasswordValue,
    onChangeInputHandler: onConfirmPasswordChangeHandler,
    onBlurInputHandler: onConfirmPasswordBlurHandler,
    isInputValid: isConfirmPasswordInputValid,
    reset: resetConfirmPassword,
    inputHasErrors: confirmPasswordHasErrors,
  } = useInput((value) => value === passwordValue);
  const usernameInput = useRef();
  useEffect(() => {
    usernameInput.current.focus();
  }, []);
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      signup(usernameValue, passwordValue);
      resetUsernameInput();
      resetPassword();
      resetConfirmPassword();
      modalHandler(false);
    } catch (err) {
      console.error(err);
    }
  };
  let formIsValid =
    isUsernameInputValid && isPasswordInputValid && isConfirmPasswordInputValid;
  if (
    !isUsernameInputValid ||
    !isPasswordInputValid ||
    !isConfirmPasswordInputValid
  )
    formIsValid = false;
  return (
    <div className={`${styles["dugilan__signIn"]}`}>
      <h3>Register</h3>
      <AiOutlineClose
        size="25"
        className={styles["dugilan__signIn-close_icon"]}
        onClick={() => modalHandler(false)}
      />
      <form
        onSubmit={onSubmitHandler}
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
        <Input
          id="passwordConfirm"
          type="password"
          placeholder="**********"
          label="Confirm Password"
          onChange={onConfirmPasswordChangeHandler}
          onBlur={onConfirmPasswordBlurHandler}
          value={confirmPasswordValue}
          required={true}
          showPassword={true}
        />
        {confirmPasswordHasErrors && (
          <p className={styles["dugilan__signIn-error_text"]}>
            The passwords you've wrote are different
          </p>
        )}
        <div className={styles["dugilan__signIn-form_button"]}>
          <button disabled={!formIsValid}>Register</button>
        </div>
        <div className={styles["dugilan__modal-signup"]}>
          <p>
            Already registered ?
            <a
              onClick={() => signupToggleHandler(false)}
              className="gradient__text"
              href="#signup"
            >
              &nbsp;&nbsp;Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupModal;
