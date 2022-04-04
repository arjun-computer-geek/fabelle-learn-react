import { login, logout, register } from "actions/userActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authReducer } from "reducers/userReducers";

const {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} = require("react");

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
      : null,
  });

  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //using navigate hook
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isAuthenticated) {
      toast.success("Welcome to World of Learning");
      navigate("/");
    }
    if (state.error) toast.error(state.error);
    // setting local storage data
    localStorage.setItem(
      "isAuthenticated",
      JSON.stringify(state.isAuthenticated)
    );
    localStorage.setItem(
      "user",
      JSON.stringify(state.user ? state.user : null)
    );
  }, [state.isAuthenticated, state.user, state.error]);

  // functions
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    login(email, password, dispatch);
  };

  const logOut = () => {
    logout(dispatch);
  };
  const registerHandler = (e, email, password, name) => {
    e.preventDefault();
    register({ name, email, password }, dispatch);
  };
  return (
    <userContext.Provider
      value={{
        state,
        email,
        password,
        name,
        loginSubmitHandler,
        registerHandler,
        logOut,
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
