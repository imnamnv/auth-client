import { reduxForm, Field } from "redux-form";
import * as action from "../../app/actions";
import { compose } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const Signup = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const history = useNavigate();

  const onSubmit = (formProps) => {
    const signup = action.signup(formProps, () => {
      history("/feature");
    });
    dispatch(signup);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field
          name="email"
          type="text"
          component={"input"}
          autoComplete="none"
        />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component={"input"}
          autoComplete="none"
        />
      </fieldset>

      <div>{errorMessage}</div>

      <button>Sign up</button>
    </form>
  );
};
const signupForm = compose(reduxForm({ form: "signup" }))(Signup); // compose help us add multi HOC

export default signupForm;
