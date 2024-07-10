import "./style.css";
// import TextField from "./components/TextField";
import { useState } from "react";
import CreateEmployee from "./CreateEmployee";
import LoginEmployee from "./LoginEmployee";
import "./components/components.css";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  return isLoggedIn ? (
    <CreateEmployee />
  ) : (
    <LoginEmployee handleSubmit={handleLogin} />
  );
};

export default App;
