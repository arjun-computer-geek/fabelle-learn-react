import { login } from "actions/userActions";
import { authReducer } from "reducers/userReducers";

const { createContext, useContext, useReducer, useState, useEffect } = require("react");

const userContext = createContext();

const UserProvider = ({ children }) => {
  // use reducer hooks
  const [state, dispatch] = useReducer(authReducer, {
    loading: false,
    isAuthenticated: localStorage.getItem("isAuthenticated")
    ? JSON.parse(localStorage.getItem("isAuthenticated"))
    : false,
    user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null
  });

  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // functions
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    login(email, password, dispatch);
  };

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated))
    localStorage.setItem("user", JSON.stringify(state.user?state.user:null));
  },[state.isAuthenticated, state.user])
  return (
    <userContext.Provider
      value={{
        state,
        email,
        password,
        name,
        loginSubmitHandler,
        setEmail,
        setPassword,
        setName,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

const useUser = () => useContext(userContext);

export { UserProvider, useUser };
