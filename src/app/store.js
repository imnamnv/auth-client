import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import { reducer as formReducer } from "redux-form";
import reduxThunk from "redux-thunk";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
  },
  middleware: [reduxThunk],
});
