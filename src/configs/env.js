const registerEnv = ({ key, val }) => (process.env[key] = val);

registerEnv({
  key: "REACT_APP_DREAMBINAR_API",
  val: "https://dreambinar-api.herokuapp.com/api",
});
