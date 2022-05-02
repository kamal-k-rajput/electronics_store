import { createContext, useState } from "react";
const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isloggedIn, setisloggedIn] = useState(false);
  const [address, setaddress] = useState("/");
  const handleAuth = (state) => {
    setisloggedIn(state);
  };
  const handleaddress = (state) => {
    setaddress(state);
    console.log(address)
  };
  return ( 
    <AuthContext.Provider
      value={{ isloggedIn, handleAuth, address, handleaddress }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContextProvider, AuthContext };
