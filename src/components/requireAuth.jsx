import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const requireAuth = (ChildComponent) => {
  const ComposedComponent = () => {
    const history = useNavigate();
    const authUser = useSelector((state) => state.auth.authenticated);

    const shouldNavigateAway = () => {
      if (!authUser) {
        history("/");
      }
    };

    useEffect(() => {
      shouldNavigateAway();
    });

    return <ChildComponent />;
  };
  return ComposedComponent;
};

export default requireAuth;
