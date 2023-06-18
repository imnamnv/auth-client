import { reduxForm, Field } from "redux-form";
import * as action from "../../app/actions";
import { compose } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const Signin = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const history = useNavigate();

  const onSubmit = (formProps) => {
    const signin = action.signin(formProps, () => {
      history("/feature");
    });
    dispatch(signin);
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

      <button>Sign in</button>
    </form>
  );
};
const signinForm = compose(reduxForm({ form: "signup" }))(Signin); // compose help us add multi HOC

export default signinForm;
