import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../app/actions";

const Signout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const signout = actions.signout();
    dispatch(signout);
  });
  return <div>Sorry to see you go</div>;
};
export default Signout;
