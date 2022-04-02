import { login } from "actions/userActions";
import { authReducer } from "reducers/userReducers";

const {
  createContext,
  useContext,
  useReducer,
  useState,
} = require("react");

const userContext = createContext();

const UserProvider = ({ children }) => {
    
  // use reducer hooks
  const [state, dispatch] = useReducer(authReducer, {
    loading: false,
    isAuthenticated: false,
    user: {},
  });

  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  

// functions
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    login(email, password, dispatch)
  }

  return (
    <userContext.Provider value={{ state, loginSubmitHandler, email, password, name, setEmail, setPassword, setName }}>{children}</userContext.Provider>
  );
};

const useUser = () => useContext(userContext);

export { UserProvider, useUser };
