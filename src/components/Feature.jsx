import requireAuth from "./requireAuth";

// eslint-disable-next-line react-refresh/only-export-components
const Feature = () => {
  return <>This is the feature!</>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default requireAuth(Feature);
