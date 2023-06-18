import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import { store } from "./app/store.js";
import Feature from "./components/Feature.jsx";
import Welcome from "./components/Welcome.jsx";
import Signin from "./components/auth/Signin.jsx";
import Signout from "./components/auth/Signout.jsx";
import Signup from "./components/auth/Signup.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App>
        <Routes>
          <Route path="/" Component={Welcome} />
          <Route path="/signup" Component={Signup} />
          <Route path="/signin" Component={Signin} />
          <Route path="/feature" Component={Feature} />
          <Route path="/signout" Component={Signout} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>
);
